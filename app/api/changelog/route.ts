import { NextResponse } from 'next/server';
import { ChangelogData } from '@/lib/changelog-types';
import { CHANGELOG_URL } from '@/lib/constants';
import fs from 'fs';
import path from 'path';

/**
 * API endpoint to serve changelog data
 * Can be consumed by both the marketing site and WordPress plugin
 *
 * Single source of truth: CHANGELOG.json in the plugin repository
 * The API fetches JSON directly - no parsing needed
 * Falls back to local file for development
 *
 * Caching Strategy:
 * - Uses Next.js data cache with 1-hour revalidation
 * - Automatically fetches from GitHub when cache is stale
 * - Serves cached data immediately while refreshing in background (stale-while-revalidate)
 * - No manual intervention needed - fully automated
 */
export async function GET() {
  try {
    let changelogData: ChangelogData;

    // Try to fetch from URL first (production)
    if (CHANGELOG_URL && !CHANGELOG_URL.includes('your-username')) {
      try {
        let fetchUrl = CHANGELOG_URL;
        const headers: HeadersInit = {
          Accept: 'application/json',
        };

        // For private repos with raw URLs, convert to GitHub API
        if (
          process.env.GITHUB_TOKEN &&
          CHANGELOG_URL.includes('raw.githubusercontent.com')
        ) {
          // Extract repo info from raw URL
          // Handles both formats: /main/ and /refs/heads/main/
          const rawUrlMatch = CHANGELOG_URL.match(
            /raw\.githubusercontent\.com\/([^\/]+)\/([^\/]+)\/(?:refs\/heads\/)?([^\/\?]+)\/(.+?)(?:\?|$)/
          );
          if (rawUrlMatch) {
            const [, user, repo, branch, file] = rawUrlMatch;
            // Convert to GitHub API URL
            fetchUrl = `https://api.github.com/repos/${user}/${repo}/contents/${file}?ref=${branch}`;
            headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
          }
        } else if (
          process.env.GITHUB_TOKEN &&
          CHANGELOG_URL.includes('api.github.com')
        ) {
          // GitHub API endpoint - use token in Authorization header
          headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
        }

        const response = await fetch(fetchUrl, {
          next: { revalidate: 3600 }, // Revalidate every hour
          headers,
          // Add timeout for production
          signal: AbortSignal.timeout(10000), // 10 second timeout
        });

        if (response.ok) {
          // Handle GitHub API response (JSON with base64 content) or raw JSON
          if (fetchUrl.includes('api.github.com')) {
            const data = await response.json();
            // GitHub API returns base64 encoded content
            const jsonContent = Buffer.from(data.content, 'base64').toString(
              'utf-8'
            );
            changelogData = JSON.parse(jsonContent);
          } else {
            // Raw JSON file URL
            changelogData = await response.json();
          }
        } else {
          throw new Error(
            `Failed to fetch: ${response.status} ${response.statusText}`
          );
        }
      } catch (fetchError) {
        console.warn(
          'Failed to fetch from URL, trying local file:',
          fetchError instanceof Error ? fetchError.message : String(fetchError)
        );
        // Fall through to local file
        const localPath = path.join(process.cwd(), 'CHANGELOG.json');
        if (fs.existsSync(localPath)) {
          try {
            const fileContent = fs.readFileSync(localPath, 'utf-8');
            changelogData = JSON.parse(fileContent);
          } catch (parseError) {
            return NextResponse.json(
              {
                error: 'Failed to parse local changelog file',
                details:
                  process.env.NODE_ENV === 'development'
                    ? parseError instanceof Error
                      ? parseError.message
                      : String(parseError)
                    : undefined,
              },
              { status: 500 }
            );
          }
        } else {
          return NextResponse.json(
            {
              error:
                'Changelog not available. Please configure CHANGELOG_URL environment variable or add CHANGELOG.json locally.',
              details:
                process.env.NODE_ENV === 'development'
                  ? `URL: ${
                      CHANGELOG_URL || 'NOT SET'
                    }, Local file exists: ${fs.existsSync(localPath)}, Fetch error: ${
                      fetchError instanceof Error
                        ? fetchError.message
                        : String(fetchError)
                    }`
                  : undefined,
            },
            { status: 404 }
          );
        }
      }
    } else {
      // Development: Try local file first
      const localPath = path.join(process.cwd(), 'CHANGELOG.json');
      if (fs.existsSync(localPath)) {
        try {
          const fileContent = fs.readFileSync(localPath, 'utf-8');
          changelogData = JSON.parse(fileContent);
        } catch (parseError) {
          return NextResponse.json(
            {
              error: 'Failed to parse local changelog file',
              details:
                process.env.NODE_ENV === 'development'
                  ? parseError instanceof Error
                    ? parseError.message
                    : String(parseError)
                  : undefined,
            },
            { status: 500 }
          );
        }
      } else {
        return NextResponse.json(
          {
            error:
              'Changelog not found. Please configure CHANGELOG_URL environment variable or add CHANGELOG.json to the repo root.',
            details:
              process.env.NODE_ENV === 'development'
                ? `CHANGELOG_URL: ${CHANGELOG_URL || 'NOT SET'}`
                : undefined,
          },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(changelogData, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Access-Control-Allow-Origin': '*', // Allow WordPress plugin to fetch
      },
    });
  } catch (error) {
    console.error('Error fetching or parsing changelog:', error);
    // Provide more detailed error in development
    const errorMessage =
      process.env.NODE_ENV === 'development'
        ? `Failed to fetch or parse changelog: ${error instanceof Error ? error.message : String(error)}`
        : 'Failed to fetch or parse changelog';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

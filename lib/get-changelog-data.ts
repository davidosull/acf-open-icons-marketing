import { ChangelogData } from '@/lib/changelog-types';
import { CHANGELOG_URL } from '@/lib/constants';
import fs from 'fs';
import path from 'path';

/**
 * Shared function to fetch changelog data
 * Used by both the API route and the page component
 */
export async function getChangelogData(): Promise<ChangelogData> {
  console.log('[getChangelogData] Starting fetch');
  console.log('[getChangelogData] CHANGELOG_URL:', CHANGELOG_URL ? 'SET' : 'NOT SET');
  console.log('[getChangelogData] NODE_ENV:', process.env.NODE_ENV);

  // Try to fetch from URL first (production)
  if (CHANGELOG_URL && !CHANGELOG_URL.includes('your-username')) {
    console.log('[getChangelogData] Using CHANGELOG_URL for fetch');
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

      // Create abort controller for timeout (more compatible than AbortSignal.timeout)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      console.log('[getChangelogData] Fetching from:', fetchUrl);

      const response = await fetch(fetchUrl, {
        next: { revalidate: 3600 }, // Revalidate every hour
        headers,
        signal: controller.signal,
      }).finally(() => {
        clearTimeout(timeoutId);
      });

      console.log('[getChangelogData] Response status:', response.status, response.statusText);

      if (response.ok) {
        // Handle GitHub API response (JSON with base64 content) or raw JSON
        if (fetchUrl.includes('api.github.com')) {
          const data = await response.json();
          // GitHub API returns base64 encoded content
          const jsonContent = Buffer.from(data.content, 'base64').toString(
            'utf-8'
          );
          const changelogData = JSON.parse(jsonContent);
          console.log('[getChangelogData] Successfully parsed GitHub API response');
          console.log('[getChangelogData] Changelog entries:', changelogData?.entries?.length || 0);
          return changelogData;
        } else {
          // Raw JSON file URL
          const changelogData = await response.json();
          console.log('[getChangelogData] Successfully fetched raw JSON');
          console.log('[getChangelogData] Changelog entries:', changelogData?.entries?.length || 0);
          return changelogData;
        }
      } else {
        const errorText = await response.text().catch(() => 'Unable to read error');
        console.error('[getChangelogData] Fetch failed:', response.status, errorText.substring(0, 200));
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`
        );
      }
    } catch (fetchError) {
      console.error('[getChangelogData] Fetch error:', fetchError instanceof Error ? fetchError.message : String(fetchError));
      // Fall through to local file
      const localPath = path.join(process.cwd(), 'CHANGELOG.json');
      console.log('[getChangelogData] Falling back to local file:', localPath);
      console.log('[getChangelogData] Local file exists:', fs.existsSync(localPath));

      if (fs.existsSync(localPath)) {
        try {
          const fileContent = fs.readFileSync(localPath, 'utf-8');
          const changelogData = JSON.parse(fileContent);
          console.log('[getChangelogData] Loaded from local file');
          return changelogData;
        } catch (parseError) {
          console.error('[getChangelogData] Failed to parse local file:', parseError instanceof Error ? parseError.message : String(parseError));
          throw new Error(
            `Failed to parse local changelog file: ${parseError instanceof Error ? parseError.message : String(parseError)}`
          );
        }
      } else {
        console.error('[getChangelogData] No local file found');
        throw new Error(
          'Changelog not available. Please configure CHANGELOG_URL environment variable or add CHANGELOG.json locally.'
        );
      }
    }
  } else {
    // Development: Try local file first
    console.log('[getChangelogData] CHANGELOG_URL not configured, using local file');
    const localPath = path.join(process.cwd(), 'CHANGELOG.json');
    console.log('[getChangelogData] Local file exists:', fs.existsSync(localPath));

    if (fs.existsSync(localPath)) {
      try {
        const fileContent = fs.readFileSync(localPath, 'utf-8');
        const changelogData = JSON.parse(fileContent);
        console.log('[getChangelogData] Loaded from local file');
        return changelogData;
      } catch (parseError) {
        console.error('[getChangelogData] Failed to parse local file:', parseError instanceof Error ? parseError.message : String(parseError));
        throw new Error(
          `Failed to parse local changelog file: ${parseError instanceof Error ? parseError.message : String(parseError)}`
        );
      }
    } else {
      console.error('[getChangelogData] No local file found');
      throw new Error(
        'Changelog not found. Please configure CHANGELOG_URL environment variable or add CHANGELOG.json to the repo root.'
      );
    }
  }
}


import { NextResponse } from 'next/server';
import { getChangelogData } from '@/lib/get-changelog-data';

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
  console.log('[Changelog API] Request received');

  try {
    const changelogData = await getChangelogData();
    console.log('[Changelog API] Returning success with', changelogData?.entries?.length || 0, 'entries');

    return NextResponse.json(changelogData, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Access-Control-Allow-Origin': '*', // Allow WordPress plugin to fetch
      },
    });
  } catch (error) {
    console.error('[Changelog API] Unexpected error:', error instanceof Error ? error.message : String(error));
    if (error instanceof Error && error.stack) {
      console.error('[Changelog API] Stack:', error.stack);
    }
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

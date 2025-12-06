import type { Metadata } from 'next';
import { Section } from '@/components/sections/Section';
import { SectionHeader } from '@/components/sections/SectionHeading';
import { ChangelogContent } from './ChangelogContent';
import { FeatureRequest } from '@/components/sections/FeatureRequest';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Version history and release notes for ACF Open Icons',
  alternates: {
    canonical: `${SITE_URL}/changelog`,
  },
};

// Force dynamic rendering to avoid build-time fetch errors
export const dynamic = 'force-dynamic';

export default async function ChangelogPage() {
  let changelogData = null;
  let error = null;

  try {
    // Fetch changelog from API
    // For dynamic routes, this will run at request time, not build time
    // Use relative URL for same-origin requests (works in both dev and production)
    const apiUrl = '/api/changelog';

    console.log('[Changelog Page] Fetching from:', apiUrl);
    console.log('[Changelog Page] NODE_ENV:', process.env.NODE_ENV);
    console.log('[Changelog Page] Request URL:', typeof window !== 'undefined' ? window.location.href : 'SSR');

    const response = await fetch(apiUrl, {
      cache: 'no-store', // Always fetch fresh data for dynamic route
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('[Changelog Page] Response status:', response.status, response.statusText);
    console.log('[Changelog Page] Response headers:', Object.fromEntries(response.headers.entries()));

    if (response.ok) {
      const data = await response.json();
      console.log('[Changelog Page] Response data keys:', Object.keys(data));
      console.log('[Changelog Page] Entries count:', data?.entries?.length || 0);

      // Check if the response contains an error
      if (data.error) {
        error = data.error;
        console.error('[Changelog Page] API returned error:', data);
      } else {
        changelogData = data;
        console.log('[Changelog Page] Successfully loaded changelog data');
      }
    } else {
      const errorText = await response.text().catch(() => 'Unable to read error response');
      console.error('[Changelog Page] Fetch failed:', {
        status: response.status,
        statusText: response.statusText,
        errorText: errorText.substring(0, 500),
      });

      try {
        const errorData = JSON.parse(errorText);
        error = errorData.error || `Failed to load changelog (${response.status})`;
        console.error('[Changelog Page] Parsed error data:', errorData);
      } catch {
        error = `Failed to load changelog (${response.status}): ${errorText.substring(0, 100)}`;
      }
    }
  } catch (err) {
    // Handle errors gracefully - don't fail the build
    console.error('[Changelog Page] Unexpected error:', {
      error: err instanceof Error ? err.message : String(err),
      stack: err instanceof Error ? err.stack : undefined,
      name: err instanceof Error ? err.name : undefined,
    });
    error = 'Failed to load changelog';
  }

  return (
    <>
      <Section background='blue-600/10'>
        <div className='mx-auto max-w-2xl text-center'>
          <SectionHeader
            className='!mb-0'
            subtitle='Changelog'
            subtitleBadgeVariant='white'
            title='Version History'
            description='Stay up to date with the latest features, improvements, and fixes in ACF Open Icons.'
          />
        </div>
      </Section>

      <Section maxWidth='6xl'>
        <div className='mx-auto max-w-2xl lg:max-w-3xl'>
          {error ? (
            <div className='rounded-lg border border-red-200 bg-red-50 p-4 text-red-800'>
              <p>{error}</p>
            </div>
          ) : changelogData ? (
            <ChangelogContent entries={changelogData.entries} />
          ) : (
            <div className='text-center text-zinc-500'>
              Loading changelog...
            </div>
          )}
        </div>

        <FeatureRequest />
      </Section>
    </>
  );
}

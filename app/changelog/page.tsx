import type { Metadata } from 'next';
import { Section } from '@/components/sections/Section';
import { SectionHeader } from '@/components/sections/SectionHeading';
import { ChangelogContent } from './ChangelogContent';
import { FeatureRequest } from '@/components/sections/FeatureRequest';
import { SITE_URL } from '@/lib/constants';
import { getChangelogData } from '@/lib/get-changelog-data';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Version history and release notes for ACF Open Icons',
  alternates: {
    canonical: `${SITE_URL}/changelog`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: `${SITE_URL}/changelog`,
    siteName: 'ACF Open Icons',
    title: 'Changelog | ACF Open Icons',
    description: 'Version history and release notes for ACF Open Icons',
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ACF Open Icons - Changelog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog | ACF Open Icons',
    description: 'Version history and release notes for ACF Open Icons',
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

// Force dynamic rendering to avoid build-time fetch errors
export const dynamic = 'force-dynamic';

export default async function ChangelogPage() {
  let changelogData = null;
  let error = null;

  try {
    // Call the shared function directly instead of making an HTTP request
    // This avoids network issues in serverless environments
    console.log('[Changelog Page] Fetching changelog data');
    changelogData = await getChangelogData();
    console.log(
      '[Changelog Page] Successfully loaded changelog with',
      changelogData?.entries?.length || 0,
      'entries'
    );
  } catch (err) {
    // Handle errors gracefully - don't fail the build
    console.error(
      '[Changelog Page] Unexpected error:',
      err instanceof Error ? err.message : String(err)
    );
    if (err instanceof Error && err.stack) {
      console.error('[Changelog Page] Stack:', err.stack);
    }
    error = err instanceof Error ? err.message : 'Failed to load changelog';
  }

  return (
    <>
      <Section background='indigo-600/10'>
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

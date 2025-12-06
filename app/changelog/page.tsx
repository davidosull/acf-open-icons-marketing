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

    const response = await fetch(apiUrl, {
      cache: 'no-store', // Always fetch fresh data for dynamic route
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      // Check if the response contains an error
      if (data.error) {
        error = data.error;
        if (process.env.NODE_ENV === 'development') {
          console.error('Changelog API error:', data);
        }
      } else {
        changelogData = data;
      }
    } else {
      const errorData = await response.json().catch(() => ({}));
      error = errorData.error || `Failed to load changelog (${response.status})`;
      if (process.env.NODE_ENV === 'development') {
        console.error('Changelog fetch failed:', response.status, errorData);
      }
    }
  } catch (err) {
    // Handle errors gracefully - don't fail the build
    error = 'Failed to load changelog';
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching changelog:', err);
    }
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

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Complete guide to installing, configuring, and using ACF Open Icons',
  alternates: {
    canonical: `${SITE_URL}/docs`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: `${SITE_URL}/docs`,
    siteName: 'ACF Open Icons',
    title: 'Documentation | ACF Open Icons',
    description:
      'Complete guide to installing, configuring, and using ACF Open Icons',
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ACF Open Icons - Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentation | ACF Open Icons',
    description:
      'Complete guide to installing, configuring, and using ACF Open Icons',
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return children;
}

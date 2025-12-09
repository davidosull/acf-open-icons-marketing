import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with the ACF Open Icons team. Have a question or need support? We'd love to hear from you.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: `${SITE_URL}/contact`,
    siteName: 'ACF Open Icons',
    title: 'Contact | ACF Open Icons',
    description:
      "Get in touch with the ACF Open Icons team. Have a question or need support? We'd love to hear from you.",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ACF Open Icons - Contact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | ACF Open Icons',
    description:
      "Get in touch with the ACF Open Icons team. Have a question or need support? We'd love to hear from you.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}

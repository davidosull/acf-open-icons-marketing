import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Complete guide to installing, configuring, and using ACF Open Icons',
  alternates: {
    canonical: `${SITE_URL}/docs`,
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import {
  Infinity,
  Library,
  Zap,
  Shield,
  FolderX,
  Database,
} from 'lucide-react';
import { IconCard } from '@/components/ui/icon-card';
import { GradientText } from '@/components/ui/gradient-text';
import { Section } from './Section';
import { SectionHeader } from './SectionHeading';
import { IconItem } from './types';

const ksp: IconItem[] = [
  {
    title: 'Zero Frontend Overhead',
    description:
      "Icons are stored directly in your ACF field data as SVG markup. No external dependencies, CDN calls, or frontend scripts. Zero impact on your site's performance or load times.",
    icon: Database,
  },
  {
    title: 'No Media Library Clutter',
    description:
      'No more managing icon files in your WordPress media library. Version-controlled, consistent, and easy to update—all without cluttering your uploads folder.',
    icon: FolderX,
  },
  {
    title: '8,500+ Professional Icons',
    description:
      'Access to over 8,500 icons from Lucide, Tabler Icons, and Heroicons. Switch between libraries anytime with built-in migration tools. More libraries coming soon.',
    icon: Library,
  },
  {
    title: 'Developer-Friendly',
    description: (
      <>
        Intuitive interface that developers love. Search, preview, and select
        icons in seconds. No coding required. Icons render server-side with a
        simple PHP function{' '}
        <code className='rounded bg-zinc-100 px-1 py-0.5 text-sm font-mono text-zinc-900'>
          acf_open_icon()
        </code>
        .
      </>
    ),
    icon: Zap,
  },
  {
    title: 'One License, Unlimited Sites',
    description:
      'One license, unlimited WordPress sites. Perfect for agencies and developers managing multiple client projects.',
    icon: Infinity,
  },
  {
    title: '30-Day Money-Back Guarantee',
    description:
      "Try risk-free. If you're not completely satisfied, we'll refund your purchase - no questions asked.",
    icon: Shield,
  },
];

export function KeySellingPoints() {
  return (
    <Section background='gradient-white-zinc' padding='sm'>
      <SectionHeader
        title={
          <>
            Why developers choose <GradientText>ACF Open Icons</GradientText>
          </>
        }
        description='Everything you need to build professional WordPress sites with beautiful, consistent icons that enhance your designs and streamline your development workflow.'
      />
      <dl className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
        {ksp.map((item) => (
          <IconCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </dl>
    </Section>
  );
}

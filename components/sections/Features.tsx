'use client';

import * as React from 'react';
import { Library, Search, Zap, Palette, RefreshCw, Key } from 'lucide-react';
import { FeatureCard } from '@/components/ui/feature-card';
import { ImageModal, ImageItem } from '@/components/ui/image-modal';
import { Section } from './Section';
import { SectionHeader } from './SectionHeading';
import { GradientText } from '@/components/ui/gradient-text';
import { useImageModal } from '@/components/hooks/use-image-modal';
import { FeatureItem } from './types';

const features: FeatureItem[] = [
  {
    name: 'Multiple Icon Libraries',
    title: 'Multiple Icon Libraries',
    description:
      'Choose from Lucide, Tabler Icons, and Heroicons—thousands of professional icons at your fingertips.',
    icon: Library,
    imagePath: '/images/features/icon-libraries.webp',
    imageAlt: 'Multiple icon libraries selection interface',
  },
  {
    name: 'Powerful Search',
    title: 'Powerful Search',
    description:
      'Find the perfect icon instantly with real-time search across all libraries. Filter by name, category, or style.',
    icon: Search,
    imagePath: '/images/features/search.webp',
    imageAlt: 'Icon search interface',
  },
  {
    name: 'Smart Caching',
    title: 'Smart Caching',
    description:
      'Automatic caching of icons for improved performance and faster load times.',
    icon: Zap,
    imagePath: '/images/features/caching.webp',
    imageAlt: 'Smart caching system',
  },
  {
    name: 'Color Token System',
    title: 'Color Token System',
    description:
      'Use palette tokens (A, B, C) for dynamic color management across your icons.',
    icon: Palette,
    imagePath: '/images/features/color-palette.webp',
    imageAlt: 'Color palette configuration interface',
  },
  {
    name: 'Migration Tool',
    title: 'Migration Tool',
    description:
      'Easily migrate icons between providers when switching icon sets—no manual work required.',
    icon: RefreshCw,
    imagePath: '/images/features/migration-tool.webp',
    imageAlt: 'Icon migration tool interface',
  },
  {
    name: 'Simple Licensing',
    title: 'Simple Licensing',
    description:
      'One license tier with unlimited activations. Choose annual or monthly billing—simple, straightforward licensing.',
    icon: Key,
    imagePath: '/images/features/updates.webp',
    imageAlt: 'License management interface',
  },
];

export function Features() {
  const { selectedImageIndex, openImage, closeImage, setSelectedImageIndex } =
    useImageModal();

  const imageItems: ImageItem[] = features.map((feature) => ({
    path: feature.imagePath,
    alt: feature.imageAlt,
    title: feature.name,
  }));

  return (
    <Section>
      <SectionHeader
        subtitle='Powerful Capabilities'
        subtitleBadgeVariant='white'
        title={
          <>
            Everything you need for{' '}
            <GradientText>professional icon management</GradientText>
          </>
        }
        description='Built specifically for WordPress developers who demand better tools and workflows.'
      />
      <dl className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.name}
            name={feature.name}
            description={feature.description}
            icon={feature.icon}
            imagePath={feature.imagePath}
            imageAlt={feature.imageAlt}
            onImageClick={() => openImage(index)}
          />
        ))}
      </dl>

      {/* Lightbox Modal */}
      <ImageModal
        images={imageItems}
        currentIndex={selectedImageIndex}
        onClose={closeImage}
        onNavigate={setSelectedImageIndex}
        showThumbnails={true}
        showTitle={true}
      />
    </Section>
  );
}

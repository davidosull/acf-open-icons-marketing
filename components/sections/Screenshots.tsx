'use client';

import * as React from 'react';
import { Section } from './Section';
import { SectionHeader } from './SectionHeading';
import { GradientText } from '@/components/ui/gradient-text';
import { ScreenshotCard } from '@/components/ui/screenshot-card';
import { ImageModal, ImageItem } from '@/components/ui/image-modal';
import { useImageModal } from '@/components/hooks/use-image-modal';

const screenshots: ImageItem[] = [
  {
    path: '/images/comparison/icon-picker.webp',
    alt: 'ACF default icon picker',
    title: 'Icon Picker',
  },
  {
    path: '/images/comparison/open-icons.webp',
    alt: 'ACF Open Icons field interface',
    title: 'Open Icons',
  },
];

export function Screenshots() {
  const { selectedImageIndex, openImage, closeImage, setSelectedImageIndex } =
    useImageModal();

  return (
    <Section background='gradient-white-zinc'>
      <SectionHeader
        title={
          <>
            <GradientText>Say goodbye</GradientText> to a cluttered media
            library and limited icon options
          </>
        }
        description='Tired of managing icons in your media library? ACF Open Icons gives you access to thousands of professional icons with zero frontend overhead.'
      />

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
        {/* Before */}
        <ScreenshotCard
          badge={{ label: 'Field Type', variant: 'error' }}
          title='Icon Picker'
          description="ACF's default icon picker limits you to basic dashicons or forces you to manually upload icons to your media library. Creating maintenance headaches, version control issues, and inconsistent designs."
          imagePath={screenshots[0].path}
          imageAlt={screenshots[0].alt}
          onImageClick={() => openImage(0)}
        />

        {/* After */}
        <ScreenshotCard
          badge={{ label: 'Field Type', variant: 'success' }}
          title='Open Icons'
          description='Thousands of professional icons at your fingertips. Search, preview, and select with ease. No media library clutter, no version control issues, no manual file management - just beautiful, consistent icons that are easy to maintain.'
          imagePath={screenshots[1].path}
          imageAlt={screenshots[1].alt}
          onImageClick={() => openImage(1)}
        />
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        images={screenshots}
        currentIndex={selectedImageIndex}
        onClose={closeImage}
        onNavigate={setSelectedImageIndex}
        showThumbnails={true}
        showTitle={true}
      />
    </Section>
  );
}

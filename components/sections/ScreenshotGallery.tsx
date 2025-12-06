'use client';

import * as React from 'react';
import Image from 'next/image';
import { Section } from './Section';
import { SectionHeader } from './SectionHeading';
import { ImageModal, ImageItem } from '@/components/ui/image-modal';
import { useImageModal } from '@/components/hooks/use-image-modal';
import { H4, Body } from '@/components/ui/typography';

interface ScreenshotItem {
  title: string;
  description: string;
  imagePath: string;
  alt: string;
}

interface ScreenshotGalleryProps {
  title: string;
  subtitle: string;
  description: string;
  screenshots: ScreenshotItem[];
  className?: string;
}

export function ScreenshotGallery({
  title,
  subtitle,
  description,
  screenshots,
  className,
}: ScreenshotGalleryProps) {
  const { selectedImageIndex, openImage, closeImage, setSelectedImageIndex } =
    useImageModal();

  const imageItems: ImageItem[] = screenshots.map((screenshot) => ({
    path: screenshot.imagePath,
    alt: screenshot.alt,
    title: screenshot.title,
  }));

  return (
    <Section className={className}>
      <SectionHeader
        subtitle={subtitle}
        title={title}
        description={description}
      />

      <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2'>
        {screenshots.map((screenshot, index) => (
          <div key={index} className='flex flex-col'>
            <H4>{screenshot.title}</H4>
            <Body className='mt-2'>{screenshot.description}</Body>
            <div
              className='mt-6 aspect-[3/2] w-full overflow-hidden rounded-lg bg-zinc-100 border-2 border-dashed border-zinc-300 flex items-center justify-center cursor-pointer hover:border-zinc-400 transition-colors relative'
              onClick={() => openImage(index)}
            >
              <div className='absolute inset-0'>
                <Image
                  src={screenshot.imagePath}
                  alt={screenshot.alt}
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 100vw, 50vw'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

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

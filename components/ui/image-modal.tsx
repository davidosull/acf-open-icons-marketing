'use client';

import * as React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './button';

export interface ImageItem {
  path: string;
  alt: string;
  title?: string;
}

interface ImageModalProps {
  images: ImageItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate?: (index: number) => void;
  showThumbnails?: boolean;
  showTitle?: boolean;
}

export function ImageModal({
  images,
  currentIndex,
  onClose,
  onNavigate,
  showThumbnails = false,
  showTitle = false,
}: ImageModalProps) {
  const currentImage = currentIndex !== null ? images[currentIndex] : null;

  React.useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onNavigate && currentIndex !== null) {
        e.preventDefault();
        const prevIndex =
          currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        onNavigate(prevIndex);
      } else if (
        e.key === 'ArrowRight' &&
        onNavigate &&
        currentIndex !== null
      ) {
        e.preventDefault();
        const nextIndex =
          currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        onNavigate(nextIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onNavigate, onClose, images.length]);

  const goToPrevious = () => {
    if (currentIndex !== null && onNavigate) {
      const prevIndex =
        currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      onNavigate(prevIndex);
    }
  };

  const goToNext = () => {
    if (currentIndex !== null && onNavigate) {
      const nextIndex =
        currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      onNavigate(nextIndex);
    }
  };

  if (!currentImage || currentIndex === null) return null;

  const hasNavigation = images.length > 1 && onNavigate;

  return (
    <div
      className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-label='Image gallery'
    >
      {/* Close Button */}
      <button
        type='button'
        className='absolute top-4 right-4 text-white hover:text-zinc-300 transition-colors z-10'
        onClick={onClose}
        aria-label='Close gallery'
      >
        <X className='h-6 w-6' />
      </button>

      {/* Navigation Buttons */}
      {hasNavigation && (
        <>
          <Button
            variant='secondary'
            size='icon'
            className='absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/10 hover:bg-white/20 text-white border-white/20'
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label='Previous image'
          >
            <ChevronLeft className='h-6 w-6' />
          </Button>
          <Button
            variant='secondary'
            size='icon'
            className='absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/10 hover:bg-white/20 text-white border-white/20'
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label='Next image'
          >
            <ChevronRight className='h-6 w-6' />
          </Button>
        </>
      )}

      {/* Main Image */}
      <div
        className='flex-1 flex items-center justify-center w-full max-w-7xl'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='relative w-full max-w-5xl max-h-[80vh] flex items-center justify-center'>
          <Image
            src={currentImage.path}
            alt={currentImage.alt}
            width={1920}
            height={1080}
            className='max-h-[80vh] max-w-full rounded-xl'
            priority
            sizes='(max-width: 768px) 100vw, 90vw'
          />
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {showThumbnails && hasNavigation && (
        <div
          className='mt-4 flex gap-2 justify-center'
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((image, index) => (
            <button
              key={index}
              type='button'
              onClick={() => onNavigate?.(index)}
              className={cn(
                'relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all',
                index === currentIndex
                  ? 'border-white scale-110'
                  : 'border-white/30 hover:border-white/60 opacity-70 hover:opacity-100'
              )}
              aria-label={`View ${image.title || image.alt}`}
            >
              <Image
                src={image.path}
                alt={image.alt}
                fill
                className='object-cover'
                sizes='80px'
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Title */}
      {showTitle && currentImage.title && (
        <div
          className='mt-4 text-white text-center'
          onClick={(e) => e.stopPropagation()}
        >
          <p className='text-lg font-medium'>{currentImage.title}</p>
        </div>
      )}
    </div>
  );
}

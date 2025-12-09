'use client';

import Image from 'next/image';
import { Badge } from './badge';
import { H4, Body } from './typography';
import { cn } from '@/lib/utils';

interface ScreenshotCardProps {
  badge?: {
    label: string;
    variant?:
      | 'default'
      | 'secondary'
      | 'success'
      | 'warning'
      | 'error'
      | 'blue';
  };
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  onImageClick: (imagePath: string) => void;
  className?: string;
}

export function ScreenshotCard({
  badge,
  title,
  description,
  imagePath,
  imageAlt,
  onImageClick,
  className,
}: ScreenshotCardProps) {
  return (
    <div
      className={cn(
        'p-6 rounded-xl border border-zinc-200 flex flex-col bg-white',
        className
      )}
    >
      {(badge || title) && (
        <div className='flex items-center gap-2 mb-2'>
          {badge && (
            <Badge variant={badge.variant || 'blue'} size='sm'>
              {badge.label}
            </Badge>
          )}
          {title && <H4 className='mb-0'>{title}</H4>}
        </div>
      )}
      <Body className='mt-2 flex-grow'>{description}</Body>
      <div
        className='mt-6 aspect-[3/2] w-full overflow-hidden rounded-lg cursor-pointer hover:border-zinc-400 transition-colors relative group'
        onClick={() => onImageClick(imagePath)}
        role='button'
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onImageClick(imagePath);
          }
        }}
        aria-label={`View ${imageAlt} screenshot`}
      >
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          className='object-cover group-hover:scale-105 transition-transform duration-300'
          sizes='(max-width: 768px) 100vw, 50vw'
          loading='lazy'
        />
      </div>
    </div>
  );
}

'use client';

import { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  imagePath: string;
  imageAlt: string;
  onImageClick: () => void;
  className?: string;
}

export function FeatureCard({
  name,
  description,
  icon: Icon,
  imagePath,
  imageAlt,
  onImageClick,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn('flex flex-col overflow-hidden', className)}>
      <div
        className='aspect-[3/2] w-full overflow-hidden bg-zinc-100 border-b border-zinc-200 cursor-pointer rounded-t-lg border-x border-t border-transparent hover:border-zinc-400 transition-colors relative group'
        onClick={onImageClick}
      >
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          className='object-cover group-hover:scale-105 transition-transform duration-300'
          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
          loading='lazy'
        />
      </div>
      <CardHeader className='space-y-0'>
        <div className='flex items-start justify-between'>
          <Icon className='h-6 w-6 text-blue-600' aria-hidden='true' />
        </div>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className='flex-1'>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

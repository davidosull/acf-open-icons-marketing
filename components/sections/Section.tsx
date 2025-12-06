import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'zinc-50' | 'gradient-white-zinc' | 'blue-600/10';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl';
  padding?: 'sm' | 'md' | 'lg';
}

const backgroundClasses = {
  white: 'bg-white',
  'zinc-50': 'bg-zinc-50',
  'gradient-white-zinc': 'bg-gradient-to-b from-white to-zinc-50',
  'blue-600/10': 'bg-blue-600/10',
};

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
};

const paddingClasses = {
  sm: 'py-16 md:py-20',
  md: 'py-20 md:py-26',
  lg: 'py-24 md:py-32',
};

export function Section({
  children,
  className,
  id,
  background = 'white',
  maxWidth = '7xl',
  padding = 'md',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div className={cn('mx-auto px-6 lg:px-8', maxWidthClasses[maxWidth])}>
        {children}
      </div>
    </section>
  );
}

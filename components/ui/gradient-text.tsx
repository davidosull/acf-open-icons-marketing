import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  );
}

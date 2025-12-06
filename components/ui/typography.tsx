import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Typography Scale System
 *
 * Hierarchy:
 * - H1 (Hero): text-4xl sm:text-6xl - Largest, for hero sections
 * - H2 (Section): text-3xl sm:text-4xl - Main section headings
 * - H3 (Subsection): text-xl sm:text-2xl - Subsection headings, card titles
 * - H4 (Minor): text-lg sm:text-xl - Minor headings
 * - Subtitle/Label: text-sm sm:text-base - Section subtitles, labels
 * - Body Large: text-base sm:text-lg - Main body text, descriptions
 * - Body: text-sm sm:text-base - Standard body text
 * - Body Small: text-xs sm:text-sm - Small text, captions
 */

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

// H1 - Hero headings (largest)
export function H1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        'text-4xl font-medium tracking-tight text-zinc-900 sm:text-6xl',
        className
      )}
    >
      {children}
    </h1>
  );
}

// H2 - Section headings
export function H2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        'text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl',
        className
      )}
    >
      {children}
    </h2>
  );
}

// H3 - Subsection headings, card titles
export function H3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn('text-xl font-medium text-zinc-900 sm:text-2xl', className)}
    >
      {children}
    </h3>
  );
}

// H4 - Minor headings
export function H4({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn('text-lg font-medium text-zinc-900 sm:text-xl', className)}
    >
      {children}
    </h4>
  );
}

// Subtitle - Section subtitles, labels
interface SubtitleProps extends TypographyProps {
  as?: 'h2' | 'h3' | 'h4' | 'p';
}

export function Subtitle({
  children,
  className,
  as: Component = 'p',
}: SubtitleProps) {
  return (
    <Component
      className={cn(
        'text-sm font-medium leading-7 text-zinc-400 sm:text-base',
        className
      )}
    >
      {children}
    </Component>
  );
}

// Body Large - Main body text, descriptions
export function BodyLarge({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        'text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8',
        className
      )}
    >
      {children}
    </p>
  );
}

// Body - Standard body text
export function Body({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        'text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7',
        className
      )}
    >
      {children}
    </p>
  );
}

// Body Small - Small text, captions
export function BodySmall({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        'text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6',
        className
      )}
    >
      {children}
    </p>
  );
}

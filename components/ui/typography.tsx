import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Typography Scale System
 *
 * Hierarchy:
 * - H1 (Hero): text-4xl sm:text-6xl - Largest, for hero sections
 * - H2 (Section): text-2xl sm:text-3xl - Main section headings
 * - H3 (Subsection): text-lg sm:text-xl - Subsection headings, card titles
 * - H4 (Minor): text-base sm:text-lg - Minor headings
 * - Subtitle/Label: text-xs sm:text-sm - Section subtitles, labels
 * - Body Large: text-sm sm:text-base - Main body text, descriptions
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
        'text-balance',
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
        'text-2xl font-medium tracking-tight text-zinc-900 sm:text-3xl',
        'text-balance',
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
      className={cn(
        'text-lg font-medium text-zinc-900 sm:text-xl',
        'text-balance',
        className
      )}
    >
      {children}
    </h3>
  );
}

// H4 - Minor headings
export function H4({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn(
        'text-base font-medium text-zinc-900 sm:text-lg',
        'text-balance',
        className
      )}
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
        'text-xs font-medium text-zinc-400 sm:text-sm',
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
        'text-sm text-zinc-600 sm:text-base',
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
        'text-sm text-zinc-600 sm:text-base',
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
        'text-xs text-zinc-500 sm:text-sm',
        className
      )}
    >
      {children}
    </p>
  );
}

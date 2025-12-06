import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { H2, Subtitle, BodyLarge } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'h1' | 'h2' | 'h3' | 'h4';
}

export function SectionHeading({
  children,
  className,
  as: Component = 'h2',
  size,
}: SectionHeadingProps) {
  // Use size prop if provided, otherwise infer from 'as' prop
  const headingSize =
    size ||
    (Component === 'h1'
      ? 'h1'
      : Component === 'h2'
      ? 'h2'
      : Component === 'h3'
      ? 'h3'
      : 'h4');

  if (headingSize === 'h1') {
    return (
      <Component
        className={cn(
          'text-4xl font-medium tracking-tight text-zinc-900 sm:text-6xl',
          className
        )}
      >
        {children}
      </Component>
    );
  }

  if (headingSize === 'h2') {
    return <H2 className={className}>{children}</H2>;
  }

  if (headingSize === 'h3') {
    return (
      <Component
        className={cn(
          'text-xl font-medium text-zinc-900 sm:text-2xl',
          className
        )}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={cn('text-lg font-medium text-zinc-900 sm:text-xl', className)}
    >
      {children}
    </Component>
  );
}

interface SectionSubtitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h2' | 'h3' | 'h4' | 'p';
}

export function SectionSubtitle({
  children,
  className,
  as: Component = 'p',
}: SectionSubtitleProps) {
  return (
    <Subtitle as={Component} className={className}>
      {children}
    </Subtitle>
  );
}

interface SectionHeaderProps {
  subtitle?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  center?: boolean;
  subtitleBadgeVariant?:
    | 'default'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'blue'
    | 'white';
}

export function SectionHeader({
  subtitle,
  title,
  description,
  className,
  center = true,
  subtitleBadgeVariant,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-2xl mb-12 lg:mb-16',
        center && 'md:text-center',
        className
      )}
    >
      {subtitle && (
        <div className='mb-2'>
          {subtitleBadgeVariant ? (
            <Badge variant={subtitleBadgeVariant} size='sm'>
              {subtitle}
            </Badge>
          ) : (
            <SectionSubtitle>{subtitle}</SectionSubtitle>
          )}
        </div>
      )}
      <SectionHeading className='mt-2'>{title}</SectionHeading>
      {description && (
        <BodyLarge className='mx-auto mt-6 '>{description}</BodyLarge>
      )}
    </div>
  );
}

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | 'default'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'blue'
    | 'white';
  size?: 'sm' | 'md' | 'lg';
  weight?: 'regular' | 'semibold' | 'bold';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      variant = 'default',
      size = 'sm',
      weight = 'regular',
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: 'bg-zinc-900 text-zinc-50 border-zinc-900',
      secondary: 'bg-zinc-100 text-zinc-900 border-zinc-200',
      success: 'bg-green-100 text-green-800 border-green-200',
      warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      error: 'bg-red-100 text-red-800 border-red-200',
      white: 'bg-white text-zinc-900 border-zinc-200',
      blue: 'bg-indigo-600 text-white border-indigo-600',
    };

    const sizeStyles = {
      sm: 'px-2.5 py-0.5 text-xs',
      md: 'px-4 py-1.5 text-xs',
      lg: 'px-4 py-2 text-sm',
    };

    const weightStyles = {
      regular: 'font-normal',
      semibold: 'font-medium',
      bold: 'font-medium',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-center',
          variantStyles[variant],
          sizeStyles[size],
          weightStyles[weight],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };

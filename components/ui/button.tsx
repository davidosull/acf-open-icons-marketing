import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'white' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'default',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const base =
      'inline-flex items-center justify-center gap-2 rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-colors';

    const sizeStyles = {
      default: 'h-10 px-2 py-2 text-sm min-w-[100px]',
      sm: 'h-9 rounded-md px-4 text-sm min-w-[100px]',
      lg: 'h-11 rounded-md px-6 text-base min-w-[100px]',
      icon: 'h-10 w-10 p-0',
    };

    const variantStyles =
      variant === 'accent'
        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
        : variant === 'secondary'
        ? 'bg-white text-zinc-900 border hover:bg-zinc-50'
        : variant === 'white'
        ? 'bg-white text-zinc-900 border border-zinc-200 hover:border-zinc-300'
        : variant === 'destructive'
        ? 'bg-zinc-950 text-white hover:bg-zinc-900'
        : 'bg-blue-600 text-white hover:bg-blue-700';

    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(base, sizeStyles[size], variantStyles, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };

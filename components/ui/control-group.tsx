import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ControlGroupProps {
  children: ReactNode;
  className?: string;
}

export function ControlGroup({ children, className }: ControlGroupProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 items-start px-3 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-zinc-200',
        className
      )}
    >
      {children}
    </div>
  );
}

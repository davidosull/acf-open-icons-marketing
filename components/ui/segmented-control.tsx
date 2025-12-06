import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SegmentedControlOption {
  value: string;
  label: ReactNode;
}

interface SegmentedControlProps {
  options: SegmentedControlOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SegmentedControl({
  options,
  value,
  onChange,
  className,
}: SegmentedControlProps) {
  return (
    <div
      className={cn(
        'flex w-full rounded-md border border-zinc-300 bg-white p-0.5',
        className
      )}
      role='group'
    >
      {options.map((option) => (
        <button
          key={option.value}
          type='button'
          onClick={() => onChange(option.value)}
          className={cn(
            'flex-1 px-3 py-1 text-xs font-medium rounded transition-colors',
            value === option.value
              ? 'bg-zinc-950 text-white'
              : 'text-zinc-700 hover:bg-zinc-50'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

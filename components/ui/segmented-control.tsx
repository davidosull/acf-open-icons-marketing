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
        'flex w-full rounded-lg bg-white shadow-sm ring-1 ring-inset ring-zinc-200 p-1',
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
            'relative flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all focus:z-10',
            value === option.value
              ? 'bg-zinc-900 text-white shadow-sm'
              : 'text-zinc-700 hover:bg-zinc-50'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

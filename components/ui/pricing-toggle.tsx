import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PricingToggleProps {
  period: 'monthly' | 'annual';
  onPeriodChange: (period: 'monthly' | 'annual') => void;
  savingsPercentage: number;
  className?: string;
}

export function PricingToggle({
  period,
  onPeriodChange,
  savingsPercentage,
  className,
}: PricingToggleProps) {
  return (
    <div
      className={cn(
        'mt-12 mb-4 sm:mb-0 flex flex-col items-center md:justify-center gap-3 relative',
        className
      )}
    >
      <div className='relative inline-flex items-center rounded-lg bg-white p-0.5 shadow-sm ring-1 ring-inset ring-zinc-200'>
        <button
          type='button'
          onClick={() => onPeriodChange('monthly')}
          className={cn(
            'relative rounded-md px-3 py-1.5 text-xs font-medium transition-all focus:z-10',
            period === 'monthly'
              ? 'bg-zinc-900 text-white shadow-sm'
              : 'text-zinc-700 hover:bg-zinc-50'
          )}
        >
          Monthly
        </button>
        <button
          type='button'
          onClick={() => onPeriodChange('annual')}
          className={cn(
            'relative rounded-md px-3 py-1.5 text-xs font-medium transition-all focus:z-10',
            period === 'annual'
              ? 'bg-zinc-900 text-white shadow-sm'
              : 'text-zinc-700 hover:bg-zinc-50'
          )}
        >
          Annual
        </button>
        <Badge
          variant='success'
          weight='bold'
          size='sm'
          className={cn(
            'whitespace-nowrap absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out',
            period === 'annual'
              ? 'opacity-100 scale-100 translate-x-0'
              : 'opacity-0 scale-95 translate-x-2 pointer-events-none'
          )}
          style={{ left: 'calc(100% + 0.5rem)' }}
        >
          Save {savingsPercentage}%
        </Badge>
      </div>
    </div>
  );
}

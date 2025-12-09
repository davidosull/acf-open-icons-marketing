import { ReactNode } from 'react';
import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PricingFeature {
  text: ReactNode;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  pricePeriod: string;
  priceSubtext?: string;
  priceLayout?: 'simple' | 'detailed'; // 'simple' for monthly, 'detailed' for annual
  features: PricingFeature[];
  badge?: {
    label: string;
    variant?:
      | 'default'
      | 'secondary'
      | 'success'
      | 'warning'
      | 'error'
      | 'blue';
  };
  isActive: boolean;
  buttonText?: string;
  onButtonClick: () => void;
  className?: string;
}

export function PricingCard({
  title,
  description,
  price,
  pricePeriod,
  priceSubtext,
  priceLayout = 'detailed',
  features,
  badge,
  isActive,
  buttonText = 'Buy Now',
  onButtonClick,
  className,
}: PricingCardProps) {
  const isSimpleLayout = priceLayout === 'simple';

  return (
    <Card
      className={cn(
        'flex flex-col transition-all h-full',
        isActive ? 'ring-2 ring-indigo-600 shadow-lg' : 'opacity-75',
        className
      )}
    >
      <CardHeader className='flex flex-col gap-4 items-start mb-4'>
        <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:justify-between gap-3 w-full'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2 flex-wrap'>
              <CardTitle>{title}</CardTitle>
              {badge && (
                <Badge
                  variant={badge.variant || 'success'}
                  weight='bold'
                  className='shrink-0'
                >
                  {badge.label}
                </Badge>
              )}
            </div>
            <CardDescription className='mt-1'>{description}</CardDescription>
          </div>
          {isSimpleLayout ? (
            <div className='flex items-baseline gap-x-1'>
              <span className='text-5xl font-medium tracking-tight text-zinc-900'>
                {price}
              </span>
              <span className='text-sm leading-6 text-zinc-500'>
                {pricePeriod}
              </span>
            </div>
          ) : (
            <div className='flex flex-col items-start gap-2'>
              <div className='flex items-baseline gap-x-1'>
                <span className='text-5xl font-medium tracking-tight text-zinc-900'>
                  {price}
                </span>
                <span className='text-sm leading-6 text-zinc-500'>
                  {pricePeriod}
                </span>
              </div>
              {priceSubtext && (
                <p className='text-xs text-zinc-500 sm:self-end md:self-start lg:self-end'>
                  {priceSubtext}
                </p>
              )}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className='flex-1'>
        <ul role='list' className='space-y-2'>
          {features.map((feature, index) => (
            <li key={index} className='flex gap-x-3'>
              <Check
                className='h-5 w-5 flex-none text-indigo-600 mt-0.5'
                aria-hidden='true'
              />
              <span className='text-sm leading-6 text-zinc-600'>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className='w-full'
          variant={isActive ? 'accent' : 'secondary'}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}

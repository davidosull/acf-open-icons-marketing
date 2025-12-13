'use client';

import * as React from 'react';
import { PricingCard } from '@/components/ui/pricing-card';
import { PricingToggle } from '@/components/ui/pricing-toggle';
import { Badge } from '@/components/ui/badge';
import { GradientText } from '@/components/ui/gradient-text';
import { openLemonSqueezyCheckout } from '@/lib/lemon-squeezy';
import {
  PRICING,
  ANNUAL_SAVINGS_PERCENTAGE,
  ANNUAL_SAVINGS_AMOUNT,
} from '@/lib/constants';
import { Section } from './Section';
import { SectionHeader } from './SectionHeading';

export function Pricing() {
  const [period, setPeriod] = React.useState<'monthly' | 'annual'>('annual');

  const handleBuyNow = () => {
    openLemonSqueezyCheckout();
  };

  return (
    <Section id='pricing' className='scroll-mt-24' background='indigo-600/10'>
      <div className='mx-auto max-w-4xl md:text-center'>
        <SectionHeader
          subtitle='Pricing'
          subtitleBadgeVariant='white'
          title={
            <>
              Simple, transparent pricing with{' '}
              <GradientText>one license for unlimited activations</GradientText>
            </>
          }
          description='Perfect for agencies and developers building multiple WordPress sites. No per-site fees, no hidden costs.'
        />
      </div>

      {/* Pricing Toggle */}
      <PricingToggle
        period={period}
        onPeriodChange={setPeriod}
        savingsPercentage={ANNUAL_SAVINGS_PERCENTAGE}
      />

      {/* Pricing Cards */}
      <div className='mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'>
        {/* Monthly */}
        <PricingCard
          title='Monthly'
          description='Perfect for trying out the plugin'
          price={`$${PRICING.monthly}`}
          pricePeriod='/month'
          priceLayout='simple'
          features={[
            { text: 'Unlimited activations' },
            { text: 'All icon libraries included' },
            { text: 'Automatic updates' },
            { text: 'Priority support' },
          ]}
          isActive={period === 'monthly'}
          onButtonClick={handleBuyNow}
        />

        {/* Annual */}
        <PricingCard
          title='Annual'
          description='Best value for ongoing projects'
          price={`$${PRICING.annual}`}
          pricePeriod='/year'
          priceSubtext={`Just $${(PRICING.annual / 12).toFixed(2)} per month`}
          badge={{
            label: `Save $${ANNUAL_SAVINGS_AMOUNT}`,
            variant: 'success',
          }}
          features={[
            { text: 'Unlimited activations' },
            { text: 'All icon libraries included' },
            { text: 'Automatic updates' },
            { text: 'Priority support' },
            {
              text: (
                <>
                  <strong>{ANNUAL_SAVINGS_PERCENTAGE}% savings</strong> vs
                  monthly
                </>
              ),
            },
          ]}
          isActive={period === 'annual'}
          onButtonClick={handleBuyNow}
          className={period === 'annual' ? 'md:shadow-xl' : ''}
        />
      </div>

      {/* 30-Day Money-Back Guarantee */}
      <div className='mt-8 flex items-center justify-center'>
        <Badge variant='success' size='md'>
          30-Day Money-Back Guarantee. Try risk-free, cancel anytime
        </Badge>
      </div>
    </Section>
  );
}

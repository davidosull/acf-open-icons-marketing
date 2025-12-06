'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { NAVIGATION } from '@/lib/constants';

const navigation = NAVIGATION.main;

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        mobileMenuOpen &&
        !target.closest('[data-mobile-menu]') &&
        !target.closest('[data-mobile-menu-trigger]')
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8 lg:py-4 h-[64px]'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='text-xl font-medium text-zinc-900'>
              ACF Open Icons
            </span>
          </Link>
        </div>
        <div className='flex items-center gap-3 lg:hidden'>
          <Button asChild variant='accent' size='sm'>
            <Link
              href={pathname === '/' ? '#pricing' : '/#pricing'}
              onClick={scrollToPricing}
            >
              Buy Now
            </Link>
          </Button>
          <button
            type='button'
            data-mobile-menu-trigger
            className='inline-flex items-center justify-center rounded-md p-1.5 text-zinc-700 hover:bg-zinc-50 transition-colors'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label='Toggle menu'
          >
            {mobileMenuOpen ? (
              <X className='h-5 w-5' aria-hidden='true' />
            ) : (
              <Menu className='h-5 w-5' aria-hidden='true' />
            )}
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium leading-6 transition-colors hover:text-blue-600',
                pathname === item.href ? 'text-blue-600' : 'text-zinc-900'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Button asChild variant='accent'>
            <Link
              href={pathname === '/' ? '#pricing' : '/#pricing'}
              onClick={scrollToPricing}
            >
              Buy Now
            </Link>
          </Button>
        </div>
      </nav>
      {/* Mobile dropdown menu */}
      <div
        data-mobile-menu
        className={cn(
          'lg:hidden absolute left-0 right-0 top-full bg-white border-b shadow-lg transition-all duration-300 ease-out',
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible pointer-events-none'
        )}
      >
        <div className='mx-auto max-w-7xl px-6 lg:px-8 py-6'>
          <div className='space-y-1'>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block rounded-lg px-3 py-2 text-base font-medium leading-7 transition-colors hover:bg-zinc-50',
                  pathname === item.href ? 'text-blue-600' : 'text-zinc-900'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='mt-6 pt-6 border-t border-zinc-200'>
            <Button
              asChild
              variant='accent'
              className='w-full'
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link
                href={pathname === '/' ? '#pricing' : '/#pricing'}
                onClick={scrollToPricing}
              >
                Buy Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

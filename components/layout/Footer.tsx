import Link from 'next/link';
import { NAVIGATION } from '@/lib/constants';

export function Footer() {
  return (
    <footer className='bg-white border-t'>
      <div className='mx-auto max-w-7xl px-6 py-12 lg:px-8'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
          <div className='space-y-8 lg:col-span-2'>
            <div>
              <h3 className='text-lg font-medium text-zinc-900'>
                ACF Open Icons
              </h3>
              <p className='mt-4 text-sm leading-6 text-zinc-600 max-w-sm'>
                A better icon picker for Advanced Custom Fields. Easy, intuitive
                icon selection for WordPress developers.
              </p>
            </div>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 lg:col-span-1 lg:mt-0'>
            <div>
              <h3 className='text-sm font-medium leading-6 text-zinc-900'>
                Navigation
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {NAVIGATION.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-sm leading-6 text-zinc-600 hover:text-zinc-900'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-medium leading-6 text-zinc-900'>
                Legal
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {NAVIGATION.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-sm leading-6 text-zinc-600 hover:text-zinc-900'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-zinc-900/10 pt-8 sm:mt-20 lg:mt-24'>
          <div className='space-y-4'>
            <p className='text-xs leading-5 text-zinc-500'>
              ACF Open Icons is not affiliated with, endorsed by, or sponsored
              by Advanced Custom Fields, WP Engine, Lucide, Tabler Icons, or
              Heroicons. Advanced Custom Fields and ACF are registered
              trademarks of WP Engine, Inc. Icon libraries (Lucide, Tabler
              Icons, Heroicons) are provided by their respective creators and
              are subject to their own licenses.
            </p>
            <p className='text-xs leading-5 text-zinc-500'>
              &copy; {new Date().getFullYear()} ACF Open Icons. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

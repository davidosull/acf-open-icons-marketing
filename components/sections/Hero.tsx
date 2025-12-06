import Link from 'next/link';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VideoPlayer } from '@/components/video/VideoPlayer';
import { H1, BodyLarge } from '@/components/ui/typography';
import { GradientText } from '@/components/ui/gradient-text';
import { cn } from '@/lib/utils';

interface HeroProps {
  bottomPadding?: 'default' | 'none';
}

export function Hero({ bottomPadding = 'none' }: HeroProps = {}) {
  const paddingBottom = bottomPadding === 'default' ? 'pb-12 sm:pb-16' : 'pb-0';

  return (
    <section
      className={cn(
        'relative isolate overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white px-6 pt-24 sm:pt-32 lg:px-8',
        paddingBottom
      )}
    >
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'
      >
        <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-blue-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]' />
      </div>
      {/* Background Pattern Texture */}
      <div className='absolute inset-0 -z-10 opacity-[0.03] pointer-events-none'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>
      <div className='text-center'>
        <H1 className='mx-auto max-w-2xl'>
          A Better Icon Picker for{' '}
          <GradientText>Advanced Custom Fields</GradientText>
        </H1>
        <BodyLarge className='mt-6 mx-auto max-w-3xl'>
          Replace ACF&apos;s limited icon picker with a powerful, intuitive
          solution. Access thousands of professional icons from Lucide, Tabler,
          and Heroicons—all seamlessly integrated into your WordPress workflow.
          Say goodbye to managing icons in your media library.
        </BodyLarge>
        <div className='mt-10 flex items-center justify-center gap-x-3'>
          <Button asChild variant='accent' size='lg'>
            <Link href='#pricing'>Buy Now</Link>
          </Button>
          <Button asChild variant='secondary' size='lg'>
            <Link href='#demo' className='flex items-center gap-2'>
              <Play
                className='h-5 w-5 rounded-full border border-zinc-300 bg-white p-1 shadow-sm'
                fill='currentColor'
              />
              Watch Demo
            </Link>
          </Button>
        </div>
        <div className='mt-16'>
          <div id='demo' className='scroll-mt-24'>
            <VideoPlayer
              src='/video/demo.mp4'
              poster='/images/video-poster.jpg'
              className='mx-auto max-w-4xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

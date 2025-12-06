import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';

// Lazy load all below-the-fold components for better initial load performance
const Screenshots = dynamic(
  () =>
    import('@/components/sections/Screenshots').then((mod) => ({
      default: mod.Screenshots,
    })),
  {
    loading: () => <div className='min-h-[400px]' />,
  }
);

const KeySellingPoints = dynamic(
  () =>
    import('@/components/sections/KeySellingPoints').then((mod) => ({
      default: mod.KeySellingPoints,
    })),
  {
    loading: () => <div className='min-h-[400px]' />,
  }
);

const Benefits = dynamic(
  () =>
    import('@/components/sections/Benefits').then((mod) => ({
      default: mod.Benefits,
    })),
  {
    loading: () => <div className='min-h-[400px]' />,
  }
);

// Lazy load below-the-fold components
const Features = dynamic(
  () =>
    import('@/components/sections/Features').then((mod) => ({
      default: mod.Features,
    })),
  {
    loading: () => <div className='min-h-[400px]' />,
  }
);

const InteractiveCodePlayground = dynamic(
  () =>
    import('@/components/sections/InteractiveCodePlayground').then((mod) => ({
      default: mod.InteractiveCodePlayground,
    })),
  {
    loading: () => <div className='min-h-[600px]' />,
  }
);

const Pricing = dynamic(
  () =>
    import('@/components/sections/Pricing').then((mod) => ({
      default: mod.Pricing,
    })),
  {
    loading: () => <div className='min-h-[400px]' />,
  }
);

const FAQ = dynamic(
  () =>
    import('@/components/sections/FAQ').then((mod) => ({ default: mod.FAQ })),
  {
    loading: () => <div className='min-h-[400px]' />,
  }
);

export default function Home() {
  return (
    <>
      <Hero />
      <Screenshots />
      <KeySellingPoints />
      <Features />
      <Benefits />
      <InteractiveCodePlayground />
      <Pricing />
      <FAQ />
    </>
  );
}

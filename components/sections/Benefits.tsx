import { Code, Wrench, Rocket, CheckCircle2 } from 'lucide-react';
import { IconCard } from '@/components/ui/icon-card';
import { GradientText } from '@/components/ui/gradient-text';
import { Section } from './Section';
import { SectionHeader } from './SectionHeading';
import { IconItem } from './types';

const benefits: IconItem[] = [
  {
    title: 'Developer-Friendly',
    description:
      'Built by developers, for developers. Clean API, comprehensive documentation, and intuitive workflows.',
    icon: Code,
  },
  {
    title: 'Maintainable',
    description:
      'No more managing icon files in your media library. Version-controlled, consistent, and easy to update.',
    icon: Wrench,
  },
  {
    title: 'Professional Workflow',
    description:
      "Replace ACF's basic dashicons with thousands of professional icons that match modern design standards.",
    icon: Rocket,
  },
  {
    title: 'Production Ready',
    description:
      'Battle-tested in real projects. Secure, performant, and reliable for your client work.',
    icon: CheckCircle2,
  },
];

export function Benefits() {
  return (
    <Section background='zinc-50'>
      <SectionHeader
        title={
          <>
            Why choose <GradientText>ACF Open Icons</GradientText>?
          </>
        }
        description="We're not selling you icons—we're selling you the ability to use them easily and professionally in WordPress. Here's what makes the difference:"
      />
      <dl className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
        {benefits.map((benefit) => (
          <IconCard
            key={benefit.title}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </dl>
    </Section>
  );
}

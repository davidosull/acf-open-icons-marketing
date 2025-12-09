import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { GradientText } from '@/components/ui/gradient-text';
import { Section } from './Section';
import { SectionHeader } from './SectionHeading';

const faqs = [
  {
    question: 'Do I need ACF Pro to use this plugin?',
    answer:
      'No, ACF Open Icons works with both ACF Pro and ACF Free (version 5.0 or higher). You just need to have Advanced Custom Fields installed and activated.',
  },
  {
    question: 'What icon libraries are included?',
    answer:
      'ACF Open Icons includes access to three popular icon libraries: Lucide, Tabler Icons, and Heroicons. You can switch between libraries at any time, and the plugin includes a migration tool to help update existing icons. We will be adding more libraries in the future.',
  },
  {
    question: 'How many sites can I activate the license on?',
    answer:
      "Unlimited! Your license includes unlimited activations, making it perfect for agencies and developers who work on multiple WordPress sites. There's no limit to how many sites you can use the plugin on but fair use policy applies. Don't give your license key to your friends or sell the license to someone else.",
  },
  {
    question: 'Can I use this with headless WordPress?',
    answer:
      'Yes! ACF Open Icons works great with headless WordPress setups. The plugin stores icon data in a standard format that can be easily consumed by your frontend framework via the WordPress REST API or GraphQL.',
  },
  {
    question: 'What happens if my license expires?',
    answer:
      "If your license expires, you'll enter a 7-day grace period where all features continue to work. After the grace period, you'll need to renew your license to continue receiving updates and support. Your existing icons will continue to work, but you won't be able to access the icon picker or receive updates.",
  },
  {
    question: 'How do updates work?',
    answer:
      "The plugin checks for updates daily via WordPress cron. When an update is available, you'll see a notification in your WordPress admin. Updates are delivered securely through a proxy endpoint with license validation. You can update directly from the Plugins page, just like any other WordPress plugin.",
  },
  {
    question: 'Is this plugin compatible with page builders?',
    answer:
      'Yes! ACF Open Icons works anywhere you can use ACF fields, including popular page builders like Elementor, Beaver Builder, and Gutenberg blocks. As long as you can add an ACF field, you can use the Open Icons field type.',
  },
  {
    question: 'Can I customize the icon colors?',
    answer: (
      <>
        Yes! The plugin includes a color token system that lets you define
        palette colors (A, B, C) that can be applied to icons. You can also
        override colors programmatically when displaying icons using the{' '}
        <code className='rounded bg-zinc-100 px-1 py-0.5 text-sm font-mono text-zinc-900'>
          acf_open_icon()
        </code>{' '}
        function with a color parameter. This is helpful when you need to
        override the default color of an icon on a per-layout basis.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <Section>
      <SectionHeader
        subtitle='FAQ'
        subtitleBadgeVariant='white'
        title={
          <>
            Got questions?{' '}
            <GradientText>Let&apos;s find the answers</GradientText>
          </>
        }
        description={
          <>
            Everything you need to know about ACF Open Icons. Can&apos;t find
            what you&apos;re looking for?{' '}
            <a
              href='/contact/'
              className='font-medium text-indigo-600 hover:text-indigo-700 underline'
            >
              Get in touch
            </a>{' '}
            and we&apos;ll be happy to help.
          </>
        }
      />
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-3xl'>
        <Accordion type='single' collapsible={true} className='w-full'>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className='text-left'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='text-zinc-600'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

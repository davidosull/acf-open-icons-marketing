import type { Metadata } from 'next';
import { Section } from '@/components/sections/Section';
import { SectionHeader } from '@/components/sections/SectionHeading';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cookie Policy | ACF Open Icons',
  description: 'Cookie Policy for ACF Open Icons website',
  alternates: {
    canonical: `${SITE_URL}/policies/cookies`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: `${SITE_URL}/policies/cookies`,
    siteName: 'ACF Open Icons',
    title: 'Cookie Policy | ACF Open Icons',
    description: 'Cookie Policy for ACF Open Icons website',
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ACF Open Icons - Cookie Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | ACF Open Icons',
    description: 'Cookie Policy for ACF Open Icons website',
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

export default function CookiesPage() {
  const updatedDate = '8 December 2025';

  return (
    <>
      <Section background='indigo-600/10'>
        <div className='mx-auto max-w-2xl text-center'>
          <SectionHeader
            className='!mb-0'
            subtitle={`Updated: ${updatedDate}`}
            subtitleBadgeVariant='white'
            title='Cookie Policy'
            description='How we use cookies and similar technologies on acfopenicons.com.'
          />
        </div>
      </Section>

      <Section maxWidth='4xl'>
        <div className='prose max-w-none'>
          <div className='space-y-8'>
            <section>
              <p>
                <a
                  href='https://acfopenicons.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-indigo-600 hover:underline'
                >
                  acfopenicons.com
                </a>{' '}
                (the "Site") uses cookies and similar technologies to provide
                and improve the Services. This policy explains what cookies are,
                which cookies we use, and how you can manage them.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                1. What are cookies?
              </h2>
              <p>
                Cookies are small text files stored on your device when you
                visit a website. They help the site remember your preferences,
                support site functionality, and provide information about how
                the site is used.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                2. How we use cookies
              </h2>
              <p>We use cookies for:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Essential cookies to operate the Site (e.g., session
                  management, security, enabling core features).
                </li>
                <li>
                  Preference cookies to remember language, region, and other
                  choices.
                </li>
                <li>
                  Analytics cookies to understand how you use the Site and to
                  improve it.
                </li>
                <li>
                  Marketing cookies (only if you opt in) to tailor
                  communications or advertising.
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                3. Cookies we use on this Site
              </h2>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Essential cookies for site operation and authentication.
                </li>
                <li>
                  Cookies used by Lemon Squeezy for payment processing (as
                  applicable via the integration).
                </li>
                <li>
                  CookieYes consent management cookies to store your consent
                  state.
                </li>
                <li>
                  Google Analytics to collect anonymised usage data for site
                  performance and usage insights.
                </li>
                <li>
                  Google Tag Manager to manage and deploy marketing and
                  analytics tags.
                </li>
                <li>
                  Microsoft Clarity to understand user interactions and improve
                  UX.
                </li>
                <li>
                  CookieYes (the consent management platform) cookies to
                  remember consent choices.
                </li>
                <li>
                  Analytics/performance cookies (if enabled) to help us improve
                  the Site.
                </li>
                <li>
                  Any other cookies set by third-party services (subject to
                  their policies).
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                4. Cookie management and consent
              </h2>
              <p>We use CookieYes to manage cookie consent. You may:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Accept or decline cookies via the consent banner.</li>
                <li>
                  Change your cookie preferences at any time through the
                  CookieYes settings.
                </li>
                <li>
                  Withdraw consent and delete cookies via browser settings or
                  the site's cookie settings if available.
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                5. Third-party cookies
              </h2>
              <p>
                Some cookies are set by third parties (e.g., Lemon Squeezy,
                analytics providers). Their use is governed by their own privacy
                policies. We do not control these cookies, but we select
                providers with appropriate privacy protections.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                6. Your choices
              </h2>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  You can adjust cookie preferences in the CookieYes banner or
                  settings.
                </li>
                <li>
                  You can disable cookies in your browser. Note that blocking
                  cookies may affect the Site's functionality and features.
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                7. Data security and retention
              </h2>
              <p>
                Cookies and related data are stored on user devices and
                server-side logs. Retention periods depend on the purpose and
                provider-specific policies. Server logs may retain IP addresses
                and access data for a period consistent with security and
                maintenance needs.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                8. Changes to this Cookie Policy
              </h2>
              <p>
                We may update this policy. The "Last updated" date will reflect
                changes. If material changes occur, we may provide notice on the
                Site.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                9. How to contact us
              </h2>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Email:{' '}
                  <a
                    href='mailto:support@acfopenicons.com'
                    className='text-indigo-600 hover:underline'
                  >
                    support@acfopenicons.com
                  </a>
                </li>
                <li>
                  Website:{' '}
                  <a
                    href='https://acfopenicons.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-indigo-600 hover:underline'
                  >
                    acfopenicons.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}

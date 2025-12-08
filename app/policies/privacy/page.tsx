import type { Metadata } from 'next';
import { Section } from '@/components/sections/Section';
import { SectionHeader } from '@/components/sections/SectionHeading';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | ACF Open Icons',
  description: 'Privacy Policy for ACF Open Icons WordPress plugin',
  alternates: {
    canonical: `${SITE_URL}/policies/privacy`,
  },
};

export default function PrivacyPage() {
  const updatedDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Section background='blue-600/10'>
        <div className='mx-auto max-w-2xl text-center'>
          <SectionHeader
            className='!mb-0'
            subtitle={`Updated: ${updatedDate}`}
            subtitleBadgeVariant='white'
            title='Privacy Policy'
            description='How we collect, use, and protect your personal information.'
          />
        </div>
      </Section>

      <Section maxWidth='4xl'>
        <div className='prose prose-zinc max-w-none'>
          <div className='space-y-8'>
            <section>
              <p>
                <a
                  href='https://acfopenicons.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:underline'
                >
                  acfopenicons.com
                </a>{' '}
                (the "Site") is operated by David O'Sullivan (the "Controller").
                If you have questions about this policy, please contact{' '}
                <a
                  href='mailto:support@acfopenicons.com'
                  className='text-blue-600 hover:underline'
                >
                  support@acfopenicons.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                1. Information We Collect
              </h2>
              <p>
                We collect personal data you voluntarily provide when using the
                Site, such as:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Name, email address, and other contact details submitted via
                  the contact form.
                </li>
                <li>
                  Payment information when you purchase via Lemon Squeezy
                  (processed by Lemon Squeezy; we do not store full card details
                  on our servers).
                </li>
                <li>
                  License and account data related to the ACF Open Icons plugin
                  as described in the plugin documentation (the plugin
                  functionality is integrated with the Site as part of the
                  website experience).
                </li>
              </ul>
              <p className='mt-4'>We also collect information automatically:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong>Technical data:</strong> IP address, browser
                  type/version, time zone, plugins, operating system, and device
                  type.
                </li>
                <li>
                  <strong>Usage data:</strong> pages you visit, actions you
                  take, error reports, and diagnostic data to improve the Site.
                </li>
                <li>
                  <strong>Cookies and similar technologies</strong> (see Cookie
                  Policy).
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                2. How We Use Your Information
              </h2>
              <p>We use your data to:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Provide, operate, and maintain the Site and its features (as
                  they relate to the plugin and site experience).
                </li>
                <li>
                  Process payments via Lemon Squeezy and confirm transactions.
                </li>
                <li>Respond to inquiries and manage orders or licenses.</li>
                <li>Send marketing communications only if you opt in.</li>
                <li>Improve the Site, diagnose issues, and analyse usage.</li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                3. Legal Basis for Processing (UK/EU)
              </h2>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong>Performance of a contract</strong> (to provide the
                  Services you request).
                </li>
                <li>
                  <strong>Legitimate interests</strong> (security, performance,
                  and improvement of the Site).
                </li>
                <li>
                  <strong>Consent</strong> (marketing communications and, where
                  applicable, cookies).
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                4. Data Sharing and Disclosure
              </h2>
              <p>We may share your information with:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Lemon Squeezy for payment processing (we do not handle full
                  card data).
                </li>
                <li>
                  Amazon SES for handling form submissions (email sending
                  infrastructure).
                </li>
                <li>
                  n8n workflows to route submissions to Discord and to the email
                  inbox.
                </li>
                <li>
                  Subcontractors or service providers as needed to operate the
                  Site, under written agreements that protect your data.
                </li>
                <li>
                  Legal authorities or other third parties when required by law
                  or to protect our rights.
                </li>
              </ul>
              <p className='mt-4'>
                We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                5. International Transfers
              </h2>
              <p>
                Some processing may occur outside the UK/EU. We rely on
                safeguards (e.g., standard contractual clauses) where
                applicable.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                6. Retention
              </h2>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Personal data from contact forms retained as long as needed to
                  respond and comply with obligations.
                </li>
                <li>
                  License and payment data retained per Lemon Squeezy terms.
                </li>
                <li>
                  Logs/analytics retained for security and improvement purposes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                7. Your Rights
              </h2>
              <p>You have rights regarding your personal data, including:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Access, correct, delete, or restrict your personal data.
                </li>
                <li>
                  Object to processing or withdraw consent where applicable.
                </li>
                <li>Data portability where applicable.</li>
                <li>
                  Lodge a complaint with a supervisory authority if you believe
                  your rights are violated.
                </li>
              </ul>
              <p className='mt-4'>
                To exercise your rights, contact{' '}
                <a
                  href='mailto:support@acfopenicons.com'
                  className='text-blue-600 hover:underline'
                >
                  support@acfopenicons.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                8. Cookies and Similar Technologies
              </h2>
              <p>
                For details, see our{' '}
                <a
                  href='/policies/cookies'
                  className='text-blue-600 hover:underline'
                >
                  Cookie Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                9. Security
              </h2>
              <p>
                We implement reasonable security measures. No method of
                transmission or storage is completely secure; we strive to
                protect your information.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy. We will post the new policy
                on acfopenicons.com and update the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                11. How to Contact Us
              </h2>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Email:{' '}
                  <a
                    href='mailto:support@acfopenicons.com'
                    className='text-blue-600 hover:underline'
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
                    className='text-blue-600 hover:underline'
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


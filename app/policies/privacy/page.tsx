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
            subtitleBadgeVariant='blue'
            title='Privacy Policy'
            description='How we collect, use, and protect your personal information.'
          />
        </div>
      </Section>

      <Section maxWidth='4xl'>
        <div className='prose prose-zinc max-w-none'>
          <div className='space-y-8 text-zinc-700'>
            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                1. Introduction
              </h2>
              <p>
                This Privacy Policy explains how David O'Sullivan ("I", "me", or
                "my") collects, uses, and protects your personal information
                when you use the ACF Open Icons WordPress plugin and visit
                acfopenicons.com (the "Service").
              </p>
              <p>
                I am committed to protecting your privacy and ensuring
                compliance with the UK General Data Protection Regulation (UK
                GDPR) and the Data Protection Act 2018.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                2. Information I Collect
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                2.1 Information You Provide
              </h3>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong>Purchase Information:</strong> When you purchase a
                  license through Lemon Squeezy, I receive your name, email
                  address, billing address, and payment information (processed
                  securely by Lemon Squeezy).
                </li>
                <li>
                  <strong>Contact Form:</strong> When you use the contact form
                  on this website, I collect your name, email address, and any
                  message you send.
                </li>
                <li>
                  <strong>License Activation:</strong> When you activate your
                  license, I collect your site URL, IP address, and user agent
                  information for license validation and abuse prevention.
                </li>
              </ul>

              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                2.2 Automatically Collected Information
              </h3>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong>Website Analytics:</strong> I use Google Analytics and
                  Google Tag Manager to collect information about how you use
                  this website, including pages visited, time spent, and device
                  information.
                </li>
                <li>
                  <strong>Session Recording:</strong> I use Microsoft Clarity to
                  record user sessions (with personal data redacted) to improve
                  the website experience.
                </li>
                <li>
                  <strong>Technical Data:</strong> I automatically collect IP
                  addresses, browser type, operating system, and referring URLs.
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                3. How I Use Your Information
              </h2>
              <p>I use your personal information for the following purposes:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>To process and manage your license purchase</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>To validate and activate your license</li>
                <li>
                  To monitor for license abuse and enforce fair use policies
                </li>
                <li>To improve the website and user experience</li>
                <li>
                  To send important updates about the plugin (if you opt in)
                </li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                4. Legal Basis for Processing
              </h2>
              <p>
                Under UK GDPR, I process your personal data based on the
                following legal bases:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong>Contract:</strong> To fulfil the license agreement and
                  provide the service you purchased
                </li>
                <li>
                  <strong>Legitimate Interest:</strong> To prevent fraud, ensure
                  license compliance, and improve the service
                </li>
                <li>
                  <strong>Consent:</strong> For analytics and marketing
                  communications (where applicable)
                </li>
                <li>
                  <strong>Legal Obligation:</strong> To comply with applicable
                  laws and regulations
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                5. Data Storage and Security
              </h2>
              <p>
                Your personal data is stored securely using the following
                services:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong>Supabase:</strong> License and activation data is
                  stored in Supabase databases, which are hosted in secure data
                  centres with encryption at rest and in transit.
                </li>
                <li>
                  <strong>Lemon Squeezy:</strong> Payment and purchase
                  information is processed and stored by Lemon Squeezy, a
                  PCI-DSS compliant payment processor.
                </li>
                <li>
                  <strong>Email Services:</strong> Contact form submissions may
                  be processed through email services with appropriate security
                  measures.
                </li>
              </ul>
              <p className='mt-4'>
                I implement appropriate technical and organisational measures to
                protect your personal data against unauthorised access, loss, or
                destruction. However, no method of transmission over the
                internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                6. Data Retention
              </h2>
              <p>I retain your personal data for the following periods:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong>License Data:</strong> Retained for the duration of
                  your license and for up to 7 years after cancellation for
                  accounting and legal compliance purposes
                </li>
                <li>
                  <strong>Contact Form Data:</strong> Retained for up to 2 years
                  or until you request deletion
                </li>
                <li>
                  <strong>Analytics Data:</strong> Retained according to Google
                  Analytics retention settings (typically 26 months)
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                7. Third-Party Services
              </h2>
              <p>
                I use the following third-party services that may process your
                data:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong>Lemon Squeezy:</strong> Payment processing and license
                  management. See their privacy policy:{' '}
                  <a
                    href='https://www.lemonsqueezy.com/privacy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'
                  >
                    https://www.lemonsqueezy.com/privacy
                  </a>
                </li>
                <li>
                  <strong>Google Analytics & Tag Manager:</strong> Website
                  analytics. See their privacy policy:{' '}
                  <a
                    href='https://policies.google.com/privacy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'
                  >
                    https://policies.google.com/privacy
                  </a>
                </li>
                <li>
                  <strong>Microsoft Clarity:</strong> Session recording and
                  analytics. See their privacy policy:{' '}
                  <a
                    href='https://clarity.microsoft.com/privacy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'
                  >
                    https://clarity.microsoft.com/privacy
                  </a>
                </li>
                <li>
                  <strong>Supabase:</strong> Database hosting. See their privacy
                  policy:{' '}
                  <a
                    href='https://supabase.com/privacy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'
                  >
                    https://supabase.com/privacy
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                8. Your Rights Under UK GDPR
              </h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong>Right of Access:</strong> Request a copy of the
                  personal data I hold about you
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Request correction of
                  inaccurate or incomplete data
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Request deletion of your
                  personal data (subject to legal obligations)
                </li>
                <li>
                  <strong>Right to Restrict Processing:</strong> Request
                  limitation of how I process your data
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Request your data
                  in a structured, machine-readable format
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to processing based
                  on legitimate interests
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Withdraw consent
                  where processing is based on consent
                </li>
              </ul>
              <p className='mt-4'>
                To exercise any of these rights, please contact me at{' '}
                <a
                  href='mailto:support@acfopenicons.com'
                  className='text-blue-600 hover:underline'
                >
                  support@acfopenicons.com
                </a>
                . I will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                9. International Data Transfers
              </h2>
              <p>
                Some of the third-party services I use may transfer your data
                outside the UK and European Economic Area (EEA). Where this
                occurs, I ensure appropriate safeguards are in place, such as:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Standard Contractual Clauses approved by the UK</li>
                <li>Adequacy decisions by the UK government</li>
                <li>Other legally recognised transfer mechanisms</li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                10. Children's Privacy
              </h2>
              <p>
                The Service is not intended for individuals under 18 years of
                age. I do not knowingly collect personal information from
                children. If you believe I have collected information from a
                child, please contact me immediately.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                11. Changes to This Privacy Policy
              </h2>
              <p>
                I may update this Privacy Policy from time to time. I will
                notify you of any material changes by posting the new policy on
                this page and updating the "Last updated" date. Your continued
                use of the Service after changes constitutes acceptance of the
                updated policy.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                12. Contact Information
              </h2>
              <p>
                If you have questions about this Privacy Policy or wish to
                exercise your rights, please contact:
              </p>
              <div className='bg-zinc-50 p-4 rounded-lg mt-4'>
                <p className='mb-2'>
                  <strong>David O'Sullivan</strong>
                </p>
                <p>
                  Email:{' '}
                  <a
                    href='mailto:support@acfopenicons.com'
                    className='text-blue-600 hover:underline'
                  >
                    support@acfopenicons.com
                  </a>
                </p>
              </div>
              <p className='mt-4'>
                You also have the right to lodge a complaint with the
                Information Commissioner's Office (ICO) if you believe your data
                protection rights have been violated. Visit{' '}
                <a
                  href='https://ico.org.uk'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:underline'
                >
                  ico.org.uk
                </a>{' '}
                for more information.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}

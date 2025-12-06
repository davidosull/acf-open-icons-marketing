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
};

export default function CookiesPage() {
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
            title='Cookie Policy'
            description='Information about how we use cookies on our website.'
          />
        </div>
      </Section>

      <Section maxWidth='4xl'>
        <div className='prose prose-zinc max-w-none'>
          <div className='space-y-8 text-zinc-700'>
            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files that are placed on your device when
                you visit a website. They are widely used to make websites work
                more efficiently and provide information to website owners.
              </p>
              <p>
                This Cookie Policy explains how David O'Sullivan ("I", "me", or
                "my") uses cookies on acfopenicons.com (the "Website") and what
                choices you have regarding them.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                2. How I Use Cookies
              </h2>
              <p>I use cookies for the following purposes:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong>Essential Cookies:</strong> Required for the website
                  to function properly
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> To understand how visitors
                  use the website and improve user experience
                </li>
                <li>
                  <strong>Functional Cookies:</strong> To remember your
                  preferences and settings
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                3. Types of Cookies I Use
              </h2>

              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                3.1 Essential Cookies
              </h3>
              <p>
                These cookies are necessary for the website to function and
                cannot be switched off. They are usually set in response to
                actions you take, such as setting privacy preferences or filling
                in forms.
              </p>
              <div className='bg-zinc-50 p-4 rounded-lg mt-4'>
                <p className='text-sm'>
                  <strong>Examples:</strong> Session cookies, security cookies,
                  load balancing cookies
                </p>
              </div>

              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                3.2 Analytics Cookies
              </h3>
              <p>
                These cookies help me understand how visitors interact with the
                website by collecting and reporting information anonymously.
              </p>

              <h4 className='text-base font-medium text-zinc-900 mt-4 mb-2'>
                Google Analytics & Google Tag Manager
              </h4>
              <p>
                I use Google Analytics and Google Tag Manager to collect
                information about how visitors use the website. This helps me
                improve the website's functionality and user experience.
              </p>
              <ul className='list-disc space-y-2 pl-6 mt-2'>
                <li>
                  <strong>_ga:</strong> Used to distinguish users (expires after
                  2 years)
                </li>
                <li>
                  <strong>_ga_*:</strong> Used to persist session state (expires
                  after 2 years)
                </li>
                <li>
                  <strong>_gid:</strong> Used to distinguish users (expires
                  after 24 hours)
                </li>
              </ul>
              <p className='mt-4'>
                You can opt out of Google Analytics by installing the{' '}
                <a
                  href='https://tools.google.com/dlpage/gaoptout'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:underline'
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>

              <h4 className='text-base font-medium text-zinc-900 mt-4 mb-2'>
                Microsoft Clarity
              </h4>
              <p>
                I use Microsoft Clarity to record user sessions and understand
                how visitors interact with the website. Clarity automatically
                redacts personal information from recordings.
              </p>
              <ul className='list-disc space-y-2 pl-6 mt-2'>
                <li>
                  <strong>_clck:</strong> Persists the Clarity User ID and
                  preferences (expires after 1 year)
                </li>
                <li>
                  <strong>_clsk:</strong> Connects multiple page views by a user
                  into a single Clarity session recording (expires after 1 day)
                </li>
                <li>
                  <strong>CLID:</strong> Identifies the first-time Clarity saw
                  this user on any site using Clarity (expires after 1 year)
                </li>
              </ul>
              <p className='mt-4'>
                You can learn more about Microsoft Clarity's privacy practices
                at{' '}
                <a
                  href='https://clarity.microsoft.com/privacy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:underline'
                >
                  https://clarity.microsoft.com/privacy
                </a>
                .
              </p>

              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                3.3 Functional Cookies
              </h3>
              <p>
                These cookies enable the website to provide enhanced
                functionality and personalisation, such as remembering your
                preferences.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                4. Third-Party Cookies
              </h2>
              <p>
                In addition to my own cookies, I may also use various
                third-party cookies to report usage statistics and deliver
                content. These include:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong>Lemon Squeezy:</strong> Payment processing cookies
                  when you make a purchase
                </li>
                <li>
                  <strong>Google Services:</strong> Analytics and tag management
                  cookies
                </li>
                <li>
                  <strong>Microsoft Clarity:</strong> Session recording and
                  analytics cookies
                </li>
              </ul>
              <p className='mt-4'>
                These third-party services have their own privacy policies and
                cookie practices. I encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                5. How Long Cookies Are Stored
              </h2>
              <p>Cookies are stored for different periods:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong>Session Cookies:</strong> Deleted when you close your
                  browser
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Remain on your device for
                  a set period (ranging from 24 hours to 2 years, depending on
                  the cookie)
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                6. Managing Cookies
              </h2>
              <p>
                You have the right to accept or reject cookies. Most web
                browsers automatically accept cookies, but you can modify your
                browser settings to decline cookies if you prefer.
              </p>

              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                6.1 Browser Settings
              </h3>
              <p>
                You can control cookies through your browser settings. Here are
                links to instructions for popular browsers:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <a
                    href='https://support.google.com/chrome/answer/95647'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href='https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href='https://support.apple.com/en-gb/guide/safari/sfri11471/mac'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href='https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                6.2 Opt-Out Tools
              </h3>
              <p>You can also opt out of specific analytics cookies:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <a
                    href='https://tools.google.com/dlpage/gaoptout'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'
                  >
                    Google Analytics Opt-out
                  </a>
                </li>
                <li>
                  <a
                    href='https://clarity.microsoft.com/opt-out'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'
                  >
                    Microsoft Clarity Opt-out
                  </a>
                </li>
              </ul>

              <p className='mt-4'>
                <strong>Note:</strong> Disabling cookies may affect the
                functionality of the website and your user experience.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                7. Do Not Track Signals
              </h2>
              <p>
                Some browsers include a "Do Not Track" (DNT) feature that
                signals to websites you visit that you do not want to have your
                online activity tracked. Currently, there is no standard for how
                DNT signals should be interpreted. As a result, this website
                does not currently respond to DNT signals.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                8. Changes to This Cookie Policy
              </h2>
              <p>
                I may update this Cookie Policy from time to time to reflect
                changes in technology, legislation, or my practices. I will
                notify you of any material changes by posting the updated policy
                on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                9. Contact Information
              </h2>
              <p>
                If you have questions about this Cookie Policy, please contact:
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
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}

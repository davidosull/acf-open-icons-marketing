import type { Metadata } from 'next';
import { Section } from '@/components/sections/Section';
import { SectionHeader } from '@/components/sections/SectionHeading';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Use | ACF Open Icons',
  description: 'Terms of Use for ACF Open Icons WordPress plugin',
  alternates: {
    canonical: `${SITE_URL}/policies/terms`,
  },
};

export default function TermsPage() {
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
            title='Terms of Use'
            description='Terms and conditions for using ACF Open Icons.'
          />
        </div>
      </Section>

      <Section maxWidth='4xl'>
        <div className='prose prose-zinc max-w-none'>
          <div className='space-y-8'>
            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                1. Agreement to Terms
              </h2>
              <p>
                By purchasing, downloading, installing, or using the ACF Open
                Icons WordPress plugin (the "Plugin"), you agree to be bound by
                these Terms of Use. If you do not agree to these terms, you must
                not use the Plugin.
              </p>
              <p>
                These Terms of Use are governed by the laws of England and
                Wales. Any disputes will be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                2. About the Service
              </h2>
              <p>
                The Plugin is provided by David O'Sullivan, a sole trader based
                in the United Kingdom. The Plugin is a WordPress plugin that
                integrates Open Icon libraries (including Lucide, Tabler Icons,
                and Heroicons) with Advanced Custom Fields (ACF).
              </p>
              <p>Contact information:</p>
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

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                3. License Grant
              </h2>
              <p>
                Upon purchase, you are granted a non-exclusive, non-transferable
                license to use the Plugin on WordPress websites. This license
                includes:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  The right to install and use the Plugin on unlimited WordPress
                  websites
                </li>
                <li>
                  The right to activate the Plugin on unlimited sites using your
                  license key
                </li>
                <li>
                  Access to updates and support for the duration of your active
                  license
                </li>
              </ul>
              <p className='mt-4'>
                <strong>License Restrictions:</strong>
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  You may not redistribute, resell, or sublicense the Plugin
                </li>
                <li>
                  You may not reverse engineer, decompile, or disassemble the
                  Plugin
                </li>
                <li>
                  You may not remove or alter any copyright notices or
                  proprietary markings
                </li>
                <li>
                  You may not use the Plugin in a way that violates applicable
                  laws or regulations
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                4. Fair Use Policy
              </h2>
              <p>
                While your license allows unlimited activations, I operate a
                fair use policy to prevent abuse and ensure the service remains
                available for all legitimate users.
              </p>

              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                4.1 What Constitutes Fair Use
              </h3>
              <p>Fair use includes:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Activating the Plugin on your own websites and client websites
                  where you have legitimate use
                </li>
                <li>
                  Testing the Plugin on staging or development environments
                </li>
                <li>
                  Reasonable reactivations due to site migrations, domain
                  changes, or server moves
                </li>
                <li>
                  Normal usage patterns: 1-3 sites per license with occasional
                  reactivations
                </li>
              </ul>

              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                4.2 What Constitutes Abuse
              </h3>
              <p>Abuse includes, but is not limited to:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Sharing your license key with others or publicly distributing
                  it
                </li>
                <li>
                  Excessive activations that suggest license key sharing (e.g.,
                  10+ unique sites, 5+ activations in 24 hours, 5+ different IP
                  addresses)
                </li>
                <li>
                  Using the license key on sites you do not own or have
                  legitimate authority to manage
                </li>
                <li>
                  Attempting to circumvent license validation or activation
                  limits
                </li>
                <li>
                  Using automated tools or scripts to activate the Plugin
                  repeatedly
                </li>
              </ul>

              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                4.3 Monitoring and Enforcement
              </h3>
              <p>
                I monitor license activations to detect potential abuse. This
                includes tracking:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Number of activations per license</li>
                <li>Activation frequency and patterns</li>
                <li>IP addresses and site URLs associated with activations</li>
                <li>Time between activations</li>
              </ul>
              <p className='mt-4'>
                If I detect suspicious activity that suggests license abuse, I
                may:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Contact you to verify the legitimacy of activations</li>
                <li>Request clarification about unusual activation patterns</li>
                <li>
                  Temporarily restrict new activations while investigating
                </li>
                <li>Revoke your license if abuse is confirmed</li>
              </ul>
              <p className='mt-4'>
                <strong>Review Thresholds:</strong> I may contact you if your
                license shows more than 3 unique sites or unusual activation
                patterns. This is not an automatic violation but helps ensure
                legitimate use.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                5. Payment and Pricing
              </h2>
              <p>
                The Plugin is sold through Lemon Squeezy, a third-party payment
                processor. All payments are processed securely by Lemon Squeezy.
              </p>
              <p>
                Prices are displayed on the website and may be subject to
                change. You will be charged the price displayed at the time of
                purchase.
              </p>
              <p>
                For subscription licenses, you will be automatically charged for
                renewals unless you cancel your subscription before the renewal
                date.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                6. Refund Policy
              </h2>
              <p>
                I offer a 30-day, no-questions-asked, full refund policy for
                initial purchases.
              </p>
              <p>
                <strong>Refund Eligibility:</strong>
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Refunds are available within 30 days of your initial purchase
                </li>
                <li>Refunds are processed to the original payment method</li>
                <li>
                  Refunds may take 5-10 business days to appear in your account
                </li>
              </ul>
              <p className='mt-4'>
                <strong>Refund Exclusions:</strong>
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Renewal payments are not eligible for refunds</li>
                <li>
                  Refunds are not available after 30 days from the initial
                  purchase
                </li>
                <li>
                  Refunds are not available if your license has been revoked due
                  to terms violation
                </li>
              </ul>
              <p className='mt-4'>
                To request a refund, please contact{' '}
                <a
                  href='mailto:support@acfopenicons.com'
                  className='text-blue-600 hover:underline'
                >
                  support@acfopenicons.com
                </a>{' '}
                with your purchase details.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                7. Updates and Support
              </h2>
              <p>While your license is active, you are entitled to:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Free updates to the Plugin (bug fixes, new features,
                  compatibility updates)
                </li>
                <li>Email support via support@acfopenicons.com</li>
                <li>Access to documentation and resources</li>
              </ul>
              <p className='mt-4'>
                Support is provided on a best-effort basis. I aim to respond to
                support requests within 48 hours during business days.
              </p>
              <p>
                <strong>Support Exclusions:</strong> I do not provide support
                for:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Custom development or modifications to the Plugin</li>
                <li>Issues caused by third-party plugins or themes</li>
                <li>
                  Issues resulting from misuse or modification of the Plugin
                </li>
                <li>WordPress core issues or server configuration problems</li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                8. Warranty Disclaimer
              </h2>
              <p>
                <strong>
                  THE PLUGIN IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND,
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, AND NON-INFRINGEMENT.
                </strong>
              </p>
              <p className='mt-4'>I do not warrant that:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>The Plugin will meet your specific requirements</li>
                <li>
                  The Plugin will be uninterrupted, timely, secure, or
                  error-free
                </li>
                <li>
                  The results obtained from using the Plugin will be accurate or
                  reliable
                </li>
                <li>Any errors in the Plugin will be corrected</li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                9. Limitation of Liability
              </h2>
              <p>
                <strong>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, I SHALL NOT
                  BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
                  REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS
                  OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING
                  FROM:
                </strong>
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Your use or inability to use the Plugin</li>
                <li>
                  Any unauthorised access to or use of my servers and/or any
                  personal information stored therein
                </li>
                <li>
                  Any interruption or cessation of transmission to or from the
                  Plugin
                </li>
                <li>
                  Any bugs, viruses, trojan horses, or the like that may be
                  transmitted to or through the Plugin
                </li>
                <li>
                  Any errors or omissions in any content or for any loss or
                  damage incurred as a result of the use of any content posted,
                  emailed, transmitted, or otherwise made available through the
                  Plugin
                </li>
              </ul>
              <p className='mt-4'>
                My total liability to you for all claims arising from or related
                to the Plugin shall not exceed the amount you paid for the
                Plugin in the 12 months preceding the claim.
              </p>
              <p className='mt-4'>
                Nothing in these Terms of Use excludes or limits my liability
                for:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Death or personal injury caused by my negligence</li>
                <li>Fraud or fraudulent misrepresentation</li>
                <li>
                  Any other liability that cannot be excluded or limited under
                  English law
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                10. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless David
                O'Sullivan from and against any and all claims, damages,
                obligations, losses, liabilities, costs, or debt, and expenses
                (including reasonable legal fees) arising from:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Your use of the Plugin</li>
                <li>Your violation of these Terms of Use</li>
                <li>Your violation of any third-party rights</li>
                <li>
                  Any content you submit, post, or transmit through the Plugin
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                11. Termination
              </h2>
              <p>
                I reserve the right to terminate or suspend your license and
                access to the Plugin immediately, without prior notice, for any
                reason, including if you breach these Terms of Use.
              </p>
              <p>Upon termination:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Your right to use the Plugin will cease immediately</li>
                <li>You must uninstall and delete all copies of the Plugin</li>
                <li>
                  You will not be entitled to a refund (except as provided in
                  the Refund Policy)
                </li>
              </ul>
              <p className='mt-4'>
                You may terminate your license at any time by cancelling your
                subscription (if applicable) or ceasing to use the Plugin.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                12. Intellectual Property
              </h2>
              <p>
                The Plugin, including all code, documentation, graphics, and
                other materials, is protected by copyright and other
                intellectual property laws. All rights, title, and interest in
                and to the Plugin remain with David O'Sullivan.
              </p>
              <p>
                The Plugin integrates with third-party icon libraries (Lucide,
                Tabler Icons, Heroicons), which have their own licenses. You are
                responsible for complying with those licenses.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                13. Changes to Terms
              </h2>
              <p>
                I reserve the right to modify these Terms of Use at any time. I
                will notify you of any material changes by posting the updated
                terms on this page and updating the "Last updated" date.
              </p>
              <p>
                Your continued use of the Plugin after changes constitutes
                acceptance of the updated terms. If you do not agree to the
                changes, you must stop using the Plugin.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                14. Severability
              </h2>
              <p>
                If any provision of these Terms of Use is found to be
                unenforceable or invalid, that provision shall be limited or
                eliminated to the minimum extent necessary, and the remaining
                provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                15. Entire Agreement
              </h2>
              <p>
                These Terms of Use, together with the Privacy Policy and Cookie
                Policy, constitute the entire agreement between you and David
                O'Sullivan regarding the Plugin and supersede all prior
                agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                16. Contact Information
              </h2>
              <p>
                If you have questions about these Terms of Use, please contact:
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

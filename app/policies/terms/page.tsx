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
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: `${SITE_URL}/policies/terms`,
    siteName: 'ACF Open Icons',
    title: 'Terms of Use | ACF Open Icons',
    description: 'Terms of Use for ACF Open Icons WordPress plugin',
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ACF Open Icons - Terms of Use',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | ACF Open Icons',
    description: 'Terms of Use for ACF Open Icons WordPress plugin',
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

export default function TermsPage() {
  const updatedDate = '8 December 2025';

  return (
    <>
      <Section background='indigo-600/10'>
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
        <div className='prose max-w-none'>
          <div className='space-y-8'>
            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                1. Introduction
              </h2>
              <p>
                Welcome to ACF Open Icons (the "Plugin") operated by David
                O'Sullivan (the "Licensor"). By purchasing, downloading,
                installing, or using the Plugin on your WordPress site (the
                "Site"), you agree to these Terms of Use (the "Terms"). If you
                do not agree, do not install or use the Plugin.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                2. Relationship with ACF, WordPress, and Other Brands
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                2.1
              </h3>
              <p>
                The Plugin is an extension of Advanced Custom Fields (ACF) and
                is designed to work with WordPress. The Plugin is not affiliated
                with, endorsed, sponsored, or approved by ACF, WordPress, WP
                Engine, or any parent company or trademark holder. Any
                references to ACF or WordPress are for compatibility purposes
                only.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                2.2
              </h3>
              <p>
                The Plugin uses icon sets (Lucide Icons, Tabler Icons,
                Heroicons) (the "Icon Sets"). We do not own or sell the Icon
                Sets and do not claim any rights beyond those granted by the
                respective Icon Set projects or their licenses. Access to icons
                is provided via their respective CDNs or distribution channels
                as applicable.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                3. License Grant
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                3.1
              </h3>
              <p>
                Subject to your compliance with these Terms, the Licensor grants
                you a non-exclusive, non-transferable, revocable license to use
                the Plugin on a single WordPress site or the number of sites
                permitted by the purchased license, in accordance with the
                license terms provided at the time of purchase.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                3.2
              </h3>
              <p>
                You may not sublicense, rent, lease, lend, or otherwise
                distribute the Plugin, except as part of a WordPress site you
                operate in accordance with these Terms.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                4. Licence Scope and Restrictions
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                4.1
              </h3>
              <p>
                You may use the Plugin to create and display icons via ACF
                fields on your Site.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                4.2
              </h3>
              <p>You must not:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  Remove, alter, or obscure any licensing, branding, or
                  attribution included in the Plugin.
                </li>
                <li>
                  Use the Plugin in a manner that breaches any applicable law or
                  infringes third-party rights.
                </li>
                <li>
                  Integrate the Plugin into a product intended for
                  redistribution or resale as a standalone plugin or service
                  separate from your Site.
                </li>
                <li>
                  Attempt to reverse engineer, decompile, or otherwise extract
                  source code from the Plugin, except as permitted by applicable
                  law.
                </li>
              </ul>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                4.3
              </h3>
              <p>
                License keys and activation data are provided for licensing
                control. You may not disclose or share license keys beyond
                permitted use as defined in the license terms.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                5. Licensing, Purchases, and Payments
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                5.1
              </h3>
              <p>
                All payments are processed by Lemon Squeezy. The Licensor does
                not store full card details; payment processing is subject to
                Lemon Squeezy's terms.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                5.2
              </h3>
              <p>
                Licences may have a term length, renewal terms, and any grace
                periods as stated at purchase. Access to updates and support is
                limited to the term of the license.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                5.3
              </h3>
              <p>
                Refunds and cancellations follow Lemon Squeezy's refund policy
                or any policy specified at the time of purchase. The Licensor
                does not guarantee refunds beyond those terms.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                6. Support and Updates
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                6.1
              </h3>
              <p>
                The Licensor may provide updates, enhancements, and bug fixes at
                their discretion. Updates may be delivered automatically or via
                a notification mechanism.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                6.2
              </h3>
              <p>
                Support levels, response times, and channels are at the
                Licensor's sole discretion and may change. Support is typically
                limited to licensed users and may be restricted based on license
                type.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                7. Ownership and Intellectual Property
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                7.1
              </h3>
              <p>
                The Plugin and all its intellectual property remain the sole and
                exclusive property of the Licensor or its licensors. You receive
                only the rights granted under these Terms.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                7.2
              </h3>
              <p>
                You must not remove or obscure any notices of ownership or
                authorship for the Plugin.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                8. Monitoring and Fair Usage
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                8.1
              </h3>
              <p>
                The Plugin implements automated monitoring for license
                activations and usage patterns to detect potential abuse or
                misuse. Data collected in connection with monitoring may include
                site URL, activation timestamps, and related technical data as
                described in the{' '}
                <a
                  href='/policies/privacy'
                  className='text-indigo-600 hover:underline'
                >
                  Privacy Policy
                </a>
                .
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                8.2
              </h3>
              <p>
                The monitoring is for the purposes of ensuring legitimate usage,
                preventing abuse, and supporting license integrity. It does not
                constitute a limitation on legitimate use unless a policy
                violation is identified for investigation.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                8.3
              </h3>
              <p>
                In the event of suspected misuse or breach of these Terms, the
                Licensor reserves the right to investigate and, if necessary,
                suspend or terminate access to the Plugin for the affected
                license, with any applicable remedies under these Terms.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                9. Data and Privacy
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                9.1
              </h3>
              <p>
                The Plugin's processing of personal data is carried out in
                accordance with the{' '}
                <a
                  href='/policies/privacy'
                  className='text-indigo-600 hover:underline'
                >
                  Privacy Policy
                </a>{' '}
                of the Site. By using the Plugin, you consent to such processing
                as described in the Privacy Policy.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                9.2
              </h3>
              <p>
                You acknowledge that data collected through license activations
                is stored and processed for monitoring and licensing purposes as
                described in the Privacy Policy and related documentation.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                10. Prohibited Conduct
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                10.1
              </h3>
              <p>You must not:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Use the Plugin in unlawful activities.</li>
                <li>
                  Attempt to bypass licensing controls or data monitoring.
                </li>
                <li>
                  Use the Plugin in a manner that damages, disables, or degrades
                  the Site, other users, or the Licensor's systems.
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                11. Fees, Payment, and Taxes
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                11.1
              </h3>
              <p>
                You are responsible for all applicable taxes and duties related
                to the purchase, including VAT where applicable.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                12. Term and Termination
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                12.1
              </h3>
              <p>
                These Terms apply for as long as you use the Plugin under a
                valid license. Either party may terminate the license for
                material breach, with notice and an opportunity to cure where
                applicable.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                12.2
              </h3>
              <p>
                Upon termination, you must cease all use of the Plugin and
                destroy all copies in your possession, except as required to
                meet legal record-keeping obligations.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                13. Warranties and Disclaimers
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                13.1
              </h3>
              <p>
                The Plugin is provided "as is" and "as available" without
                warranties of any kind, express or implied.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                13.2
              </h3>
              <p>
                The Licensor disclaims warranties of merchantability, fitness
                for a particular purpose, and non-infringement to the maximum
                extent permitted by law.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                13.3
              </h3>
              <p>
                The Licensor does not warrant that the Plugin will meet your
                requirements, operate without interruption, or be error-free.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                14. Limitation of Liability
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                14.1
              </h3>
              <p>
                To the fullest extent permitted by law, the Licensor shall not
                be liable for indirect, incidental, special, consequential, or
                punitive damages arising out of or in connection with the use or
                inability to use the Plugin.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                14.2
              </h3>
              <p>
                In any event, the Licensor's total liability to you for all
                claims arising out of or in connection with the Plugin shall not
                exceed the amount paid for the license in the 12 months
                preceding the event giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                15. Indemnity
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                15.1
              </h3>
              <p>
                You agree to indemnify, defend, and hold harmless the Licensor
                and its officers, employees, and agents from any claims,
                damages, losses, liabilities, costs, or expenses arising from
                your use of the Plugin, violation of these Terms, or violation
                of any rights of a third party.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                16. Privacy and Data Rights
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                16.1
              </h3>
              <p>
                Your use of the Plugin is subject to the Site's{' '}
                <a
                  href='/policies/privacy'
                  className='text-indigo-600 hover:underline'
                >
                  Privacy Policy
                </a>
                . If you have concerns about data processing, contact{' '}
                <a
                  href='mailto:support@acfopenicons.com'
                  className='text-indigo-600 hover:underline'
                >
                  support@acfopenicons.com
                </a>
                .
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                16.2
              </h3>
              <p>
                You acknowledge that data collected through license activations
                is stored and processed for monitoring and licensing purposes as
                described in the Privacy Policy and related documentation.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                17. Third-Party Software and Services
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                17.1
              </h3>
              <p>
                The Plugin may rely on or integrate with third-party software
                and services. Your use of such third-party components is subject
                to their respective terms and privacy policies.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                18. Updates and Modifications
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                18.1
              </h3>
              <p>
                The Licensor reserves the right to modify these Terms at any
                time. You will be notified of material changes in a manner
                consistent with the license terms or via the Site.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                19. Governing Law and Disputes
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                19.1
              </h3>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of England and Wales. Any disputes shall be
                resolved in the courts of England and Wales, unless otherwise
                required by applicable law.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                20. Miscellaneous
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                20.1
              </h3>
              <p>
                If any provision of these Terms is held to be unenforceable, the
                remaining provisions shall remain in full force and effect.
              </p>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                20.2
              </h3>
              <p>
                No waiver of any term shall be deemed a further or continuing
                waiver of such term or any other term.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                21. Contact Information
              </h2>
              <h3 className='text-lg font-medium text-zinc-900 mt-6 mb-3'>
                21.1
              </h3>
              <p>
                If you have questions about these Terms, contact{' '}
                <a
                  href='mailto:support@acfopenicons.com'
                  className='text-indigo-600 hover:underline'
                >
                  support@acfopenicons.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className='text-xl font-medium text-zinc-900 mt-8 mb-4'>
                Appendix A. Fair Usage Monitoring
              </h2>
              <p>
                The Plugin monitors license activations and usage to detect
                potential abuse or misuse. Data collected may include site URL,
                IP address, user agent, and activation timestamp, stored in a
                secure data repository as described in the{' '}
                <a
                  href='/policies/privacy'
                  className='text-indigo-600 hover:underline'
                >
                  Privacy Policy
                </a>
                . This monitoring is automatic and designed to help identify
                patterns that may indicate unauthorised use.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}

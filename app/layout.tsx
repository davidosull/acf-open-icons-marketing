import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE_URL } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ACF Open Icons - Better Icon Picker for Advanced Custom Fields',
    template: '%s | ACF Open Icons',
  },
  description:
    "Replace ACF's limited icon picker with a powerful, intuitive solution. Access thousands of professional icons from Lucide, Tabler, and Heroicons—all seamlessly integrated into your WordPress workflow.",
  keywords: [
    'ACF icon picker',
    'WordPress icon field',
    'ACF icon extension',
    'Advanced Custom Fields icons',
    'WordPress icon plugin',
    'Lucide icons WordPress',
    'Tabler icons ACF',
    'Heroicons WordPress',
  ],
  authors: [{ name: "David O'Sullivan" }],
  creator: "David O'Sullivan",
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: 'ACF Open Icons',
    title: 'ACF Open Icons - Better Icon Picker for Advanced Custom Fields',
    description:
      "Replace ACF's limited icon picker with a powerful, intuitive solution. Access thousands of professional icons seamlessly integrated into WordPress.",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ACF Open Icons - Better Icon Picker for Advanced Custom Fields',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACF Open Icons - Better Icon Picker for Advanced Custom Fields',
    description:
      "Replace ACF's limited icon picker with a powerful, intuitive solution. Access thousands of professional icons seamlessly integrated into WordPress.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const isProduction = process.env.NODE_ENV === 'production';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ACF Open Icons',
    applicationCategory: 'WordPress Plugin',
    operatingSystem: 'WordPress',
    description:
      "Replace ACF's limited icon picker with a powerful, intuitive solution. Access thousands of professional icons from Lucide, Tabler, and Heroicons—all seamlessly integrated into your WordPress workflow.",
    url: SITE_URL,
    author: {
      '@type': 'Person',
      name: "David O'Sullivan",
    },
    offers: {
      '@type': 'Offer',
      price: '5.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '5.00',
        priceCurrency: 'USD',
        billingDuration: 'P1M',
      },
    },
  };

  return (
    <html lang='en-GB' suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - Only load in production */}
        {isProduction && gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='dns-prefetch' href='https://assets.lemonsqueezy.com' />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) - Only load in production */}
        {isProduction && gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          id='structured-data'
          type='application/ld+json'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}

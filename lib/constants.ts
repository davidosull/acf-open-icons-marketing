// Lemon Squeezy Configuration
export const LEMON_SQUEEZY_STORE_DOMAIN = 'davido-builds.lemonsqueezy.com';
export const LEMON_SQUEEZY_CHECKOUT_UUID =
  'efcfad43-fbb0-41c9-bbb2-69efe8e7cf97';

// Pricing
export const PRICING = {
  monthly: 5,
  annual: 40,
} as const;

export const ANNUAL_SAVINGS_PERCENTAGE = 33; // $20 saved on $60 annual total
export const ANNUAL_SAVINGS_AMOUNT = 20;

// Domain
export const DOMAIN = 'acfopenicons.com';
export const SITE_URL = `https://${DOMAIN}`;

// Changelog Source (Single Source of Truth)
// This should point to the CHANGELOG.json in your plugin repository
// Format: GitHub raw URL or any publicly accessible URL
export const CHANGELOG_URL =
  process.env.CHANGELOG_URL ||
  'https://raw.githubusercontent.com/your-username/your-plugin-repo/main/CHANGELOG.json';

// Navigation
export const NAVIGATION = {
  main: [
    { name: 'Docs', href: '/docs' },
    { name: 'Changelog', href: '/changelog' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Terms of Use', href: '/policies/terms' },
    { name: 'Privacy Policy', href: '/policies/privacy' },
    { name: 'Cookie Policy', href: '/policies/cookies' },
  ],
} as const;

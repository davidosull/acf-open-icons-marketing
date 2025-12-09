# ACF Open Icons Marketing Website

Marketing website for the ACF Open Icons WordPress plugin, built with Next.js, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
acf-oi-marketing/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Homepage
│   ├── contact/           # Contact page
│   ├── changelog/         # Changelog page
│   ├── roadmap/           # Roadmap page
│   └── policies/          # Policy pages (Terms, Privacy, Cookies)
├── components/
│   ├── layout/            # Header and Footer components
│   ├── sections/          # Homepage section components
│   ├── ui/                # shadcn/ui components
│   └── video/             # Video player component
├── lib/                   # Utility functions and constants
├── public/                # Static assets
│   ├── images/           # Screenshots and images
│   └── video/            # Video files
└── netlify.toml          # Netlify configuration
```

## Configuration

### Lemon Squeezy Integration

Lemon Squeezy product IDs are configured in `lib/constants.ts`. To switch between test and live products:

- **Development**: Uses test products by default
- **Production**: Set `NEXT_PUBLIC_USE_TEST_PRODUCTS=false` in your environment variables

### Domain

The default domain is set to `acfopenicons.com` in `lib/constants.ts`. Update this when you have your actual domain.

## Adding Assets

### Screenshots

Add your screenshots to `public/images/`:

- `before.png` - Screenshot of ACF's default icon picker
- `after.png` - Screenshot of ACF Open Icons picker
- `video-poster.webp` - Poster image for the hero video

### Video

Add your demo video to `public/video/`:

- `demo.mp4` - Hero section demo video

## Deployment

The site is configured for deployment on Netlify. The `netlify.toml` file includes the necessary configuration for:

- Next.js build and deployment
- Form handling (contact form)
- Redirects

### Build Command

```bash
npm run build
```

### Environment Variables

For production, set:

- `NEXT_PUBLIC_USE_TEST_PRODUCTS=false` (to use live Lemon Squeezy products)

## Features

- ✅ Responsive design
- ✅ SEO optimised (meta tags, structured data, sitemap, robots.txt)
- ✅ Lemon Squeezy checkout integration
- ✅ Netlify form handling
- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## License

Proprietary - All rights reserved

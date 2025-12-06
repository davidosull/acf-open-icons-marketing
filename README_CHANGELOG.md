# Changelog Setup - Quick Reference

## Where to Add Environment Variables

### Local Development

Create `.env.local` in the **marketing repo root** (`acf-oi-marketing`):

```bash
CHANGELOG_URL=https://raw.githubusercontent.com/your-username/acf-open-icons/main/CHANGELOG.json
# If plugin repo is private, also add:
GITHUB_TOKEN=ghp_your_personal_access_token_here
```

### Production (Vercel)

1. Go to **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**
2. Add:
   - **Key**: `CHANGELOG_URL`
   - **Value**: `https://raw.githubusercontent.com/your-username/acf-open-icons/main/CHANGELOG.json`
   - **Environment**: Production, Preview, Development (or just Production)
3. If plugin repo is private, also add:
   - **Key**: `GITHUB_TOKEN`
   - **Value**: `ghp_your_token_here`
   - **Environment**: Production, Preview, Development

### Production (Netlify)

1. Go to **Netlify Dashboard** → Your Site → **Site configuration** → **Environment variables**
2. Click **Add variable**
3. Add the same variables as Vercel above

## Important Notes

- **CHANGELOG.json location**: Should be in your **plugin repository** (`acf-open-icons`), NOT in the marketing repo
- **Marketing repo**: Only contains the API that fetches from the plugin repo
- **Local fallback**: The API will fall back to a local `CHANGELOG.json` file if the URL fetch fails (useful for development)

See `CHANGELOG_WORKFLOW.md` for complete documentation.

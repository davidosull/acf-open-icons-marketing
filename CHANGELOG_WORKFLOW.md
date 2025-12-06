# Changelog Workflow

## Overview

The changelog system uses a **single source of truth** approach where the **CHANGELOG.json file in your plugin repository** (`acf-open-icons`) is the authoritative source. The marketing site API fetches from this file, and both the marketing site and WordPress plugin consume the changelog via the API endpoint.

**Important**: CHANGELOG.json should be in your **plugin repository** (`acf-open-icons`), NOT in the marketing repo. The marketing repo only fetches it via the API.

## Architecture

```
Plugin Repository (acf-open-icons)
  └── CHANGELOG.json (Single Source of Truth)
           │
           ├─── Marketing Site API (/api/changelog)
           │         └── Fetches from GitHub raw URL or API
           │         └── Serves JSON directly (no parsing)
           │
           └─── WordPress Plugin
                     └── Fetches from Marketing Site API
                     └── Displays in update modal
```

## Workflow: Releasing an Update

### Step 1: Update CHANGELOG.md in Plugin Repository

When you release a new version:

1. **Edit CHANGELOG.md** in your plugin repository (the single source of truth)
2. **Add a new version entry** at the top following the format:

   ```markdown
   ## [1.0.4] - 2025-01-15

   ### Added

   - New feature description

   ### Fixed

   - Bug fix description
   ```

3. **Commit and push** to your repository

### Step 2: Configure Environment Variables

The marketing site API needs to know where to fetch the CHANGELOG.json from. **Set these in your deployment platform**:

#### For Local Development

Create `.env.local` in the marketing repo root:

```bash
CHANGELOG_URL=https://raw.githubusercontent.com/your-username/acf-open-icons/main/CHANGELOG.json
# If plugin repo is private, also add:
GITHUB_TOKEN=ghp_your_personal_access_token_here
```

#### For Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add:
   - `CHANGELOG_URL` = `https://raw.githubusercontent.com/your-username/acf-open-icons/main/CHANGELOG.json`
   - `GITHUB_TOKEN` = `ghp_your_token_here` (only if plugin repo is private)

#### For Production (Netlify)

1. Go to your Netlify site dashboard
2. Navigate to **Site configuration** → **Environment variables**
3. Add the same variables as above

### Step 3: Automatic Updates

Once configured, everything is **fully automated**:

#### How It Works

1. **On-Demand Fetching**: When someone visits `/api/changelog` (marketing site or WordPress plugin), Next.js automatically:

   - Checks if there's a cached version less than 1 hour old
   - If cached and fresh: Returns cached data immediately (fast)
   - If cache is stale (>1 hour): Fetches fresh data from GitHub in the background
   - Uses stale-while-revalidate: Serves stale cache while fetching new data (no waiting)

2. **Caching Strategy**:

   - **Cache Duration**: 1 hour (`s-maxage=3600`)
   - **Stale-While-Revalidate**: Up to 24 hours (`stale-while-revalidate=86400`)
   - **Automatic**: No manual intervention needed

3. **What This Means**:
   - **First request**: Fetches from GitHub (may take ~500ms)
   - **Subsequent requests (within 1 hour)**: Served from cache (instant, ~10ms)
   - **After 1 hour**: Next request triggers background refresh, but still serves cached version immediately
   - **After 24 hours**: Cache expires, next request fetches fresh data

#### Benefits

- **Fast**: Most requests are served from cache (instant response)
- **Fresh**: Automatically updates within 1 hour of changes
- **Reliable**: Stale-while-revalidate ensures the API never goes down
- **Zero Maintenance**: Completely automatic, no manual steps required

## Configuration

### Public Repository

If your plugin repository is public, use the GitHub raw URL:

```bash
CHANGELOG_URL=https://raw.githubusercontent.com/your-username/acf-open-icons/main/CHANGELOG.json
```

### Private Repository

If your plugin repository is private, use the GitHub API with a personal access token:

1. **Create a GitHub Personal Access Token**:

   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Create a token with `repo` scope (for private repos)
   - Copy the token

2. **Set Environment Variables** (in Vercel/Netlify or `.env.local`):

   ```bash
   CHANGELOG_URL=https://api.github.com/repos/your-username/acf-open-icons/contents/CHANGELOG.json
   GITHUB_TOKEN=ghp_your_token_here
   ```

3. **The API will automatically**:
   - Authenticate with GitHub using the token
   - Fetch the file content from GitHub API
   - Decode the base64 content
   - Serve the JSON directly

### GitHub Raw URL Format (Public Repos)

```
https://raw.githubusercontent.com/{username}/{repository}/{branch}/CHANGELOG.json
```

### GitHub API URL Format (Private Repos)

```
https://api.github.com/repos/{username}/{repository}/contents/CHANGELOG.json
```

Example:

```
https://api.github.com/repos/davidosullivan/acf-open-icons/contents/CHANGELOG.json
```

## Benefits

1. **Single Source of Truth**: Only update CHANGELOG.json in one place (plugin repo)
2. **No Parsing Required**: JSON is consumed directly - simpler and more reliable
3. **Automatic Sync**: Both marketing site and WordPress plugin get updates automatically
4. **No Duplication**: No need to maintain multiple changelog files
5. **Version Control**: Changelog is versioned with your plugin code
6. **Type Safety**: JSON structure is validated and type-safe

## JSON Format

The CHANGELOG.json follows this structure:

```json
{
  "entries": [
    {
      "version": "1.0.4",
      "date": "2025-01-15",
      "sections": {
        "Added": ["Feature description with **bold** and `code` support"],
        "Fixed": ["Bug fix description"]
      }
    }
  ]
}
```

**Notes:**

- Sections can be: `Added`, `Changed`, `Fixed`, `Removed`, `Security`, `Technical Improvements`, `Documentation`, `Code Quality`, `Migration Notes`, `Features`, `UX Improvements`, `Performance Improvements`, or any custom section name
- Markdown formatting (bold, code) is preserved in strings and rendered on the frontend
- Nested list items use `\n  - ` format and are converted to HTML on display

## Testing

1. Update CHANGELOG.json in your plugin repository
2. Wait a few minutes for GitHub to update the raw URL
3. Visit `https://your-marketing-site.com/api/changelog` to verify it returns the updated data
4. Check `/changelog` page on marketing site
5. WordPress plugin will automatically fetch the latest on next update check

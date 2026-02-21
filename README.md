# remoet.dev Portfolio Starter

A minimal, static portfolio site powered by the [remoet.dev](https://remoet.dev) API. Built with Next.js, Tailwind CSS, and TypeScript.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fremoet-labs%2Fstarter-template&env=REMOET_API_KEY&envDescription=Your%20remoet.dev%20API%20key%20for%20fetching%20portfolio%20data&envLink=https%3A%2F%2Fremoet.dev%2Fprofile%2Fapi&project-name=portfolio&repository-name=portfolio)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/remoet-labs/starter-template#REMOET_API_KEY=)

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/remoet-labs/starter-template/tree/master&refcode=dd547637f1ea)

## Preview

![Preview](https://github.com/remoet-labs/starter-template/blob/master/previews/preview.jpg?raw=true)

## Features

- Server-side data fetching (API key never exposed to the client)
- Light and dark mode toggle
- Responsive single-page layout
- Sections: Hero, Experience, Projects, Education
- Clean, typography-driven design with Geist fonts
- SEO optimized (dynamic meta tags, Open Graph)
- AI agent ready (`/llms.txt` endpoint following the [llms.txt standard](https://llmstxt.org/))
- Optional Google Analytics integration

## Getting Started

### 1. Create a remoet.dev profile

Sign up at [remoet.dev](https://remoet.dev).

### 2. Generate an API key

Go to [remoet.dev/profile/api](https://remoet.dev/profile/api) and create an API key.

### 3. Set up the project

```bash
# Clone and install
git clone git@github.com:remoet-labs/starter-template.git
cd starter-template
yarn install

# Add your API key
cp .env.example .env.local
# Edit .env.local and replace your_api_key_here with your actual key
```

### 4. Run locally

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Deploy

Click the button above or deploy manually to [Vercel](https://vercel.com) and add `REMOET_API_KEY` as an environment variable. Optionally add `NEXT_PUBLIC_GA_ID` for Google Analytics.

## Google Analytics

To enable Google Analytics, add your measurement ID to `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

The analytics script only loads when this variable is set.

## Customization

- **Colors**: Edit the CSS variables in `app/globals.css`
- **Layout**: Modify section order in `app/page.tsx`
- **Components**: All components are in `app/components/`
- **Reusable primitives**: Shared UI pieces are in `app/components/ui/`

## API Documentation

See the full API docs at [docs.remoet.dev](https://docs.remoet.dev).

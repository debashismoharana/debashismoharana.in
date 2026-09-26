# Deployment Guide

This project is built with Astro, a fast, static-site generator.

## Building Locally

To test the production build locally before publishing, run:
```bash
npm run build
```
This will compile your Astro project into a `dist/` directory containing static files. You can preview the built site locally using:
```bash
npm run preview
```

## Publishing to Production

### Cloudflare Pages (Recommended)
This repository is configured to be deployed to Cloudflare Pages (via the included `wrangler.json` file).

**Manual deployment via CLI:**
You can deploy directly from your local machine by running:
```bash
npx wrangler pages deploy
```

**Automatic deployment via GitHub:**
1. Connect your repository to Cloudflare Pages in the Cloudflare Dashboard.
2. Ensure the **Framework preset** is set to **Astro**.
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Pushing to the `main` branch will automatically trigger a new deployment.

### Vercel
If you prefer to host on Vercel:
1. Connect your GitHub repository to a new project in the Vercel Dashboard.
2. Vercel will automatically detect **Astro** as the framework.
3. Simply push to your `main` branch to deploy.

Alternatively, to deploy directly from the CLI:
```bash
npx vercel --prod
```

### GitHub Pages
If you want to host it for free on GitHub Pages:
1. Update your `astro.config.mjs` with your site URL and `base` path (if applicable).
2. Follow Astro's [GitHub Pages deployment guide](https://docs.astro.build/en/guides/deploy/github/).

## 3rd Party Dependencies

### Web3Forms (Contact Form)
This portfolio uses [Web3Forms](https://web3forms.com) to process form submissions without needing a backend server. 
To enable the contact form on your live site:
1. Go to the Web3Forms website and create an Access Key using your email address.
2. Open `src/config/index.ts`.
3. Add your key to the `contactFormKey` property in the `SITE_CONFIG` object.
   ```typescript
   export const SITE_CONFIG: SiteConfig = {
     // ...
     contactFormKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
   };
   ```
If you do not provide a key, the contact form will operate in "mock" mode, simulating a successful form submission for local testing and UI demonstration purposes.

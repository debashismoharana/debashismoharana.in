# Deployment Guide

This project is now built with Astro (a fast, static-site generator).

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

Since your previous Next.js setup used Vercel and Cloudflare (wrangler), here are the specific steps for publishing to these platforms:

### Option 1: Vercel (Recommended)
Since you already have a Vercel project connected:
1. Push your changes to your `main` branch.
2. Vercel should automatically detect the changes and trigger a build. 
   - Note: Make sure Vercel's build settings for your project are set to use **Astro** as the framework preset (it should automatically detect this).
3. Alternatively, to deploy directly from the CLI without waiting for a git push, simply run:
   ```bash
   npx vercel --prod
   ```

### Option 2: Cloudflare Pages
If you use Cloudflare Pages, you can use the Wrangler CLI or automatic GitHub deployments.

**Important for existing Cloudflare projects:**
Since your project was previously built with Next.js, Cloudflare is still trying to build it using the Next.js builder (`@cloudflare/next-on-pages`). You need to update your build settings in the Cloudflare Dashboard:
1. Log into your **Cloudflare Dashboard**.
2. Go to **Workers & Pages** and select your project (`debashismoharana`).
3. Go to **Settings** -> **Builds & deployments**.
4. Scroll down to **Build configurations** and click **Edit configurations**.
5. Change the **Framework preset** from *Next.js* to **Astro**.
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save** and retry the deployment.

**Manual deployment via CLI:**
Since your `wrangler.json` is configured correctly for Astro, you can bypass the Cloudflare dashboard build by running:
```bash
npx wrangler pages deploy
```

### Option 3: GitHub Pages
If you want to host it for free on GitHub Pages:
1. Update your `astro.config.mjs` with your site URL and `base` path (if applicable).
2. Follow Astro's [GitHub Pages deployment guide](https://docs.astro.build/en/guides/deploy/github/).

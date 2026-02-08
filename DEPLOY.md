# Deployment Guide - Aquamax Mobile App

This guide outlines how to deploy the production build of the Aquamax application.

## Prerequisites
- Node.js installed (v16 or higher)
- A GitHub/GitLab/Bitbucket account (recommended for CI/CD)
- A Vercel or Netlify account (free tier is sufficient)

## 1. Create Production Build
Before deploying, ensure you have the latest production build:

```bash
npm run build
```

This creates a `dist` folder containing the optimized application.

## 2. Option A: Vercel (Recommended)
Vercel is optimized for React/Vite apps and offers the easiest deployment.

### Method 1: Git Integration (Best for updates)
1. Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2. Log in to [Vercel](https://vercel.com).
3. Click "Add New..." -> "Project".
4. Import your repository.
5. Vercel will auto-detect Vite. Settings should be:
   - **Framework Preset**: Vite
   - **Build Command**: `vite build` (or `npm run build`)
   - **Output Directory**: `dist`
6. Click "Deploy".

### Method 2: Drag & Drop (Manual)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel login` and follow instructions.
3. Run `vercel` in the project root.
   - Set up and deploy? [Y]
   - Link to existing project? [N]
   - Link to existing project? [N]
   - Project name? `aquamax-app`
   - In which directory is your code located? `./`
   - Want to modify these settings? [N]
4. Wait for deployment to complete.

## 3. Option B: Netlify
Reliable alternative with great global CDN.

### Method 1: Git Integration
1. Push code to Git.
2. Log in to [Netlify](https://netlify.com).
3. "Add new site" -> "Import an existing project".
4. Connect Git provider and pick repo.
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site".

### Method 2: Drag & Drop (Manual)
1. Run `npm run build` locally.
2. Log in to Netlify dashboard.
3. Drag the `dist` folder into the "drop zone" on the "Sites" tab.

## 4. Option C: Local Preview / Static Server
To run the production build locally (e.g., for testing):

```bash
npm run preview
```

This will start a local server at `http://localhost:4173`.

## 5. Handling Client-Side Routing (Important!)
Since this is a Single Page Application (SPA), you must configure the server to redirect all requests to `index.html` so React Router can handle them.

### Vercel
Create a `vercel.json` in the root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Netlify
Create a `_redirects` file in the `public` folder:
```
/*  /index.html  200
```
*(If you deploy via drag-and-drop, make sure this file is inside the `dist` folder)*.

## 6. Environment Variables
If you connect to a real backend later, add environment variables in your host's dashboard (Project Settings -> Environment Variables). In code, access them via `import.meta.env.VITE_API_URL`.

# Vanguard AI - Cloudflare Pages Deployment Guide

## 🚀 Complete Deployment Instructions

### Prerequisites
- ✅ Code pushed to GitHub: https://github.com/zohaibsumbal786/VANGAURD-AI.git
- ✅ Cloudflare account (free tier works fine)

---

## Option 1: Deploy via Cloudflare Dashboard (Recommended)

### Step 1: Access Cloudflare Pages
1. Go to https://dash.cloudflare.com/
2. Sign in or create a free account
3. Click **"Workers & Pages"** in the left sidebar
4. Click **"Create application"** button
5. Select **"Pages"** tab
6. Click **"Connect to Git"**

### Step 2: Connect GitHub Repository
1. Click **"Connect GitHub"**
2. Authorize Cloudflare to access your GitHub account
3. Select **"zohaibsumbal786/VANGAURD-AI"** repository
4. Click **"Begin setup"**

### Step 3: Configure Build Settings

**Use these EXACT settings:**

```
Project name: vanguard-ai
Production branch: main
Framework preset: None

Build settings:
├─ Build command: npm run build
├─ Build output directory: dist/client
└─ Root directory: (leave blank)

Node version: 18 or higher
```

**IMPORTANT:** The build output directory must be `dist/client` (not just `dist`)

### Step 4: Environment Variables (Optional)
For now, you can skip this section. Add variables later if needed:
- Click **"Add variable"** if you need any API keys or secrets
- Example: `NODE_VERSION` = `18`

### Step 5: Deploy
1. Click **"Save and Deploy"**
2. Wait 3-5 minutes for the build to complete
3. Your site will be live at: `https://vanguard-ai-xxx.pages.dev`

---

## Option 2: Deploy via Wrangler CLI (Advanced)

### Install Wrangler
```powershell
npm install -g wrangler
```

### Login to Cloudflare
```powershell
wrangler login
```

### Deploy
```powershell
npm run build
wrangler pages deploy dist --project-name=vanguard-ai
```

---

## Post-Deployment Steps

### 1. Custom Domain (Optional)
After deployment:
1. Go to your project in Cloudflare Pages
2. Click **"Custom domains"** tab
3. Click **"Set up a custom domain"**
4. Add your domain (e.g., `vanguardai.com`)
5. Update your domain's nameservers to Cloudflare's

### 2. Automatic Deployments
Once connected to GitHub:
- Every push to `main` branch = automatic production deployment
- Pull requests = automatic preview deployments

### 3. View Deployment
Your site will be available at:
- **Production URL**: `https://your-project-name.pages.dev`
- **Custom domain** (if configured): `https://yourdomain.com`

---

## Troubleshooting

### Build Fails
**Error: Module not found**
- Solution: Make sure all dependencies are in `package.json`
- Run locally: `npm install && npm run build`

**Error: Out of memory**
- Solution: Add environment variable `NODE_OPTIONS=--max-old-space-size=4096`

### Page Shows 404
- Check build output directory is `dist`
- Verify `npm run build` creates a `dist` folder locally

### Blank Page
- Check browser console for errors
- Ensure all environment variables are set in Cloudflare dashboard

---

## Build Configuration Reference

Your project uses:
- **Framework**: TanStack Start (React SSR)
- **Build Tool**: Vite
- **Package Manager**: npm
- **Node Version**: 18+
- **Build Output**: `dist/`

---

## Quick Commands Reference

```powershell
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check build output
ls dist

# Push to GitHub (triggers auto-deploy)
git add .
git commit -m "Your message"
git push origin main
```

---

## Support & Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [TanStack Start Docs](https://tanstack.com/start)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)

---

## Current Status

✅ Code pushed to GitHub  
⏳ Next: Deploy on Cloudflare Pages  
📍 Repository: https://github.com/zohaibsumbal786/VANGAURD-AI.git

---

**Last Updated**: September 9, 2026

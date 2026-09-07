# Vanguard AI — AI Solutions Engineered for Tomorrow

> Official website for **Vanguard AI**, an AI & Software Engineering Agency based in Pakistan.  
> Built with React, TanStack Router, TailwindCSS v4, and Vite.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 🌐 Live Site

Deployed at: **[vanguardai.com](https://vanguardai.com)** _(replace with your actual domain)_

---

## 🏗️ Tech Stack

| Layer         | Technology                              |
| ------------- | --------------------------------------- |
| Framework     | React 19 + TanStack Router (file-based) |
| Styling       | TailwindCSS v4 + tw-animate-css         |
| Build Tool    | Vite 8                                  |
| Language      | TypeScript 5                            |
| UI Components | Radix UI + shadcn/ui                    |
| Icons         | Lucide React                            |
| Forms         | React Hook Form + Zod                   |
| Charts        | Recharts                                |

---

## 📁 Project Structure

```
src/
├── assets/              # Logo and static images
├── components/          # Reusable UI components (shadcn/ui + custom)
│   ├── site-layout.tsx  # Nav, Footer, FloatingWhatsApp, PageHero
│   └── ...              # Radix UI components
└── routes/              # File-based pages (TanStack Router)
    ├── __root.tsx        # Root layout
    ├── index.tsx         # Home page (/)
    ├── services.tsx      # Services page (/services)
    ├── portfolio.tsx     # Portfolio page (/portfolio)
    ├── about.tsx         # About page (/about)
    ├── contact.tsx       # Contact page (/contact)
    └── sitemap[.]xml.ts  # Sitemap
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and **npm** (or **bun**)

### Install & Run

```bash
# Clone the repository
git clone https://github.com/zohaibsumbal786/Vanguard AI-ai-solutions.git
cd Vanguard AI-ai-solutions

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start development server (hot reload) |
| `npm run build`   | Build for production                  |
| `npm run preview` | Preview production build locally      |
| `npm run lint`    | Run ESLint                            |
| `npm run format`  | Format code with Prettier             |

---

## 📄 Pages

| Route        | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| `/`          | Home — Hero, Services, About, Team, Process, Portfolio, Contact |
| `/services`  | Detailed services page with 6 capability areas                  |
| `/portfolio` | Full portfolio — 22+ projects across 5 categories               |
| `/about`     | About — Mission, Team, Timeline, Tech stack                     |
| `/contact`   | Contact form, FAQ, direct contact details                       |

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select this repository
4. Vercel auto-detects Vite — click **Deploy**
5. Add your custom domain in Vercel dashboard

### Netlify

1. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

---

## 📞 Contact

- **Website:** [vanguardai.com](https://vanguardai.com)
- **Email:** vanguardai@gmail.com
- **WhatsApp:** +92 315 6977277
- **Instagram:** [@vanguardaillc](https://www.instagram.com/vanguardaillc/)
- **Facebook:** [Vanguard AI](https://www.facebook.com/profile.php?id=61590736214299)
- **TikTok:** [@vanguardaillc](https://www.tiktok.com/@vanguardaillc)

---

## 📝 License

All rights reserved © 2026 Vanguard AI. Built for production deployment.

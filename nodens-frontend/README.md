# NodensCare — Frontend Redesign

A modern, high-converting frontend for [NodensCare](https://www.nodenscare.com), Istanbul's premier medical tourism consultancy.

## Tech Stack

- **React 19** + **Vite 8** — fast development and builds
- **Tailwind CSS v3** — utility-first styling
- **AOS** — scroll animations
- **react-icons** — social media icons
- **Web3Forms** — contact form only external call (submissions go straight to email)
- **Static blog** — all guides bundled in `src/data/posts-data.js` (no API or database)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
```

Output goes to `dist/` — deploy to **Cloudflare Pages** (recommended), Netlify, or Vercel.

## Client handover (Cloudflare — blog + contact + full site, $0)

See **[HANDOVER.md](../HANDOVER.md)** for the full owner setup:

- **Cloudflare Pages** + DNS (global CDN, DDoS protection, free SSL)
- Web3Forms contact form (`VITE_WEB3FORMS_KEY`)
- Blog updates via `src/data/posts-data.js`
- Moving `nodenscare.com` off Wix
- **Switch back to Wix anytime** → [docs/WIX-SWITCH.md](../docs/WIX-SWITCH.md)

Copy `.env.example` to `.env` locally and set `VITE_WEB3FORMS_KEY` before testing the contact form.

## Setting Up the Contact Form

The contact form uses [Web3Forms](https://web3forms.com) — no backend needed.

1. Go to [web3forms.com](https://web3forms.com) and enter `info@nodenscare.com`
2. Copy your free API key
3. Set `VITE_WEB3FORMS_KEY` in **Cloudflare Pages** (Settings → Environment variables) or in a local `.env` file
4. Redeploy after adding the env var on Cloudflare

Form submissions will be delivered to the client's email instantly.

## Sections

| Section | Description |
|---|---|
| **Navbar** | Sticky, transparent-to-solid on scroll, dropdown menus, mobile responsive |
| **Hero** | Full-screen gradient with floating stats cards, animated badges |
| **Stats** | Animated count-up statistics bar |
| **Services** | 4-category service grid with hover effects |
| **Why NodensCare** | 6 trust-building standards in card grid |
| **Treatments** | Filterable treatment packages with pricing |
| **Gallery** | Drag-to-compare before/after slider with medical disclaimer gate |
| **Doctors** | Professor profiles + specialist network |
| **Testimonials** | Auto-scrolling review carousel |
| **FAQ** | Animated accordion with 10 questions |
| **Contact** | Web3Forms contact form + WhatsApp + address cards |
| **Footer** | Full sitemap, social links, legal |
| **WhatsApp Button** | Fixed floating button with pulse animation |

## Deployment (Recommended: Cloudflare Pages)

1. Push to GitHub (owner’s account)
2. [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create → Connect Git
3. Build command: `npm run build` · Output directory: `dist` · Node: `20`
4. Add env var `VITE_WEB3FORMS_KEY`
5. Add custom domain `nodenscare.com` — see **HANDOVER.md**

Also supported: `netlify.toml` for Netlify, or `wrangler.toml` for local preview (`npx wrangler pages dev dist` after `npm run build`).

Post-migration cleanup (EasyPanel, GitHub backend repo): **[NEXT-STEPS.md](../NEXT-STEPS.md)**.

# NodensCare Website — Client Handover Guide

Full site handover: all pages, blog guides, contact form, WhatsApp, 4 languages — on **Cloudflare (free)**, global CDN, DDoS protection, and SSL. This repo is **frontend-only** — no backend, database, or VPS required.

> **Post-migration cleanup** (EasyPanel, GitHub backend repo, Web3Forms key): see **[NEXT-STEPS.md](NEXT-STEPS.md)**.

---

## What you get

| Feature | How it works | Monthly cost |
|--------|----------------|--------------|
| Full website | Cloudflare Pages (300+ edge locations) | **$0** |
| CDN + DDoS protection | Cloudflare proxy (orange cloud) | **$0** |
| Blog / patient guides | Built into the site (no database) | **$0** |
| Contact form | Web3Forms → `info@nodenscare.com` | **$0** |
| SSL (https) | Automatic on Cloudflare | **$0** |
| Domain `nodenscare.com` | DNS on Cloudflare | Domain renewal ~$10–15/year |

No Wix website plan required for the **new** site. Legacy backend/VPS infrastructure has been removed from the repo.

> **Want to switch back to Wix anytime?** See **[docs/WIX-SWITCH.md](docs/WIX-SWITCH.md)** — keep Wix published, keep DNS on Cloudflare, swap two records (~2 minutes).

---

## One-time setup (~30–45 minutes)

### Step 1 — Cloudflare account + domain

1. Owner signs up at [dash.cloudflare.com](https://dash.cloudflare.com) (free plan).
2. **Add a site** → enter `nodenscare.com`.
3. Cloudflare imports existing DNS records from Wix/registrar.
4. Cloudflare shows **two nameservers** (e.g. `ada.ns.cloudflare.com`).
5. At **Wix** (or your registrar): Domains → **Change nameservers** to Cloudflare’s.
6. Wait until Cloudflare shows **Active** (usually 15 minutes–24 hours).

**Before changing nameservers:** In Wix, open Domains → DNS / pointing and **copy the A + CNAME values** into [docs/WIX-SWITCH.md](docs/WIX-SWITCH.md) so you can revert in minutes later.

**Keep the Wix site published** — do not delete it. You can point the domain back to Wix whenever you want.

Keep Wix email records if you use Wix mail — copy any MX records into Cloudflare DNS before switching nameservers.

### Step 2 — Deploy on Cloudflare Pages

1. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.
2. Connect the owner’s **GitHub** account and select the repo.
3. Build settings:

   | Setting | Value |
   |--------|--------|
   | Production branch | `main` |
   | Root directory | `nodens-frontend` (if repo is the full Nodens folder) or `/` (if repo is frontend only) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node.js version | `20` (Environment variable: `NODE_VERSION` = `20`) |

4. **Environment variables** (Settings → Environment variables → Production):

   | Name | Value |
   |------|--------|
   | `VITE_WEB3FORMS_KEY` | Access key from [web3forms.com](https://web3forms.com) |
   | `NODE_VERSION` | `20` |

5. **Save and deploy** — you get a URL like `https://nodenscare.pages.dev`.

SPA routing is handled by `public/_redirects` (copied into `dist/` on build).

### Step 3 — Contact form (Web3Forms)

1. Go to [web3forms.com](https://web3forms.com) → enter **info@nodenscare.com** → verify email.
2. Copy the **Access Key** → paste into Cloudflare Pages env var `VITE_WEB3FORMS_KEY`.
3. **Retry deployment** (Deployments → … → Retry) so the key is baked into the build.
4. Test the contact form on the live site.

### Step 4 — Custom domain on Pages

1. Cloudflare Pages → your project → **Custom domains**.
2. Add `nodenscare.com` and `www.nodenscare.com`.
3. Cloudflare creates DNS records automatically (because DNS is already on Cloudflare).
4. Enable **Always Use HTTPS** (SSL/TLS → Edge Certificates).
5. Optional: **Redirect `nodenscare.com` → `www.nodenscare.com`** (or the reverse) under Bulk Redirects or a single Page Rule.

### Step 5 — Cloudflare performance (recommended)

In **Caching → Configuration**:

- **Caching Level:** Standard  
- **Browser Cache TTL:** 4 hours (or respect existing headers)

In **Speed → Optimization** (free tier):

- **Auto Minify:** off (Vite already minifies)  
- **Brotli:** on if available  

Security (free tier defaults are fine):

- **SSL/TLS mode:** Full (strict) once Pages cert is active  
- **Bot Fight Mode:** optional under Security  

### Step 6 — Go live & shut down old hosting

1. Confirm `https://www.nodenscare.com` shows the **new** site.
2. Test: home, `/blog`, a blog post, contact form, language switcher, WhatsApp.
3. **Do not delete the Wix site** — leave it published for easy rollback ([WIX-SWITCH.md](docs/WIX-SWITCH.md)).
4. You may **pause or downgrade** the Wix website plan only after you’re sure you won’t need Wix live on the custom domain (keeping the plan is what makes rollback instant).
5. Retire old VPS/EasyPanel hosting using the delete order in **[NEXT-STEPS.md](NEXT-STEPS.md)** (backend → database → frontend app → VPS).

---

## Why Cloudflare is fast and stable (no server)

- Files are served from the **nearest edge** — not a single server in one country.
- Traffic spikes scale automatically — no server or database to crash.
- DDoS mitigation included on the free plan.
- Static assets (`/assets/*`) are cached for 1 year; HTML is always fresh (`_headers`).

---

## Updating content later

### Page text (services, FAQ, doctors)

Edit files in `nodens-frontend/src/i18n/` → push to GitHub → Cloudflare Pages rebuilds automatically.

### Blog — add or edit a guide

Edit **`nodens-frontend/src/data/posts-data.js`** → push → auto-deploy.

### Contact form email

Change recipient in the Web3Forms dashboard (key stays in Cloudflare env vars).

### Phone / WhatsApp / address

Search repo for `905546745516`, `info@nodenscare.com`, and the Istanbul address.

---

## Owner accounts checklist

- [ ] Cloudflare login (owner email)
- [ ] GitHub repo access (owner or org)
- [ ] Web3Forms login
- [ ] Domain registrar / Wix (for nameserver change only)

---

## Pre-handover test checklist

- [ ] `https://www.nodenscare.com` loads the new site
- [ ] `/blog` and `/blog/hair-transplant` (or any guide) work
- [ ] Contact form delivers to `info@nodenscare.com`
- [ ] All 4 languages work
- [ ] WhatsApp opens correct number
- [ ] `https://` works; no certificate warnings
- [ ] Wix site still exists in dashboard (not deleted) — rollback possible
- [ ] DNS record sheet filled in ([docs/WIX-SWITCH.md](docs/WIX-SWITCH.md))

---

## Alternative: Netlify instead of Cloudflare Pages

The repo also includes `netlify.toml`. You can host on Netlify and still use **Cloudflare DNS only** (orange cloud proxy in front). Cloudflare Pages + Cloudflare DNS in one dashboard is the recommended setup.

---

## Technical notes (developers)

- **Build:** `npm run build` → `dist/`
- **Blog:** static in `src/data/posts-data.js` — no backend required
- **Contact:** `VITE_WEB3FORMS_KEY` at build time
- **SPA:** `public/_redirects` → `/* /index.html 200`
- **Security headers:** `public/_headers`
- **Local Cloudflare preview:** `npx wrangler pages dev dist` (after build)

### Frontend-only architecture

The legacy `backendnodens/` folder (Node + Postgres on a VPS/EasyPanel) has been **removed**. The frontend makes no API or database calls — blog content lives in `src/data/posts-data.js`, and the contact form uses Web3Forms only. Production needs only `nodens-frontend` on Cloudflare Pages.

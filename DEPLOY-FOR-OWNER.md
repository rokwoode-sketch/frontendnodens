# Owner-only manual steps

Everything else (local `.env`, build, contact form wiring) is done in the repo. **You must complete these steps yourself** â€” they require your Cloudflare, Wix, EasyPanel, and GitHub accounts.

The Web3Forms access key is stored **only** in `nodens-frontend/.env` on your machine (gitignored). Do not commit it. Use the same value in Cloudflare (copy from your `.env` or Web3Forms dashboard).

---

## 1. Cloudflare Pages (production site)

1. Sign in at [dash.cloudflare.com](https://dash.cloudflare.com) (free plan).
2. **Workers & Pages â†’ Create â†’ Pages â†’ Connect to Git** â€” connect GitHub and select the frontend repo (create/push the repo first if it is not on GitHub yet).
3. Build settings (pick **one** layout — both work):

   **Option A — app subdirectory as root** (simplest)

   | Setting | Value |
   |--------|--------|
   | Production branch | main |
   | Root directory | 
odens-frontend |
   | Build command | 
pm run build |
   | Build output directory | dist |

   **Option B — repository root** (if Root directory is empty or /; root package.json installs and builds 
odens-frontend)

   | Setting | Value |
   |--------|--------|
   | Production branch | main |
   | Root directory | / (empty) |
   | Build command | 
pm run build |
   | Build output directory | 
odens-frontend/dist |

4. **Settings â†’ Environment variables â†’ Production** â€” add:

   | Variable name | Value |
   |---------------|--------|
   | `VITE_WEB3FORMS_KEY` | *(paste your access key â€” same as in local `nodens-frontend/.env`)* |
   | `NODE_VERSION` | `20` |

5. Deploy, then **Retry deployment** after saving env vars so Vite bakes the key into the build.
6. **Custom domains** â†’ add `nodenscare.com` and `www.nodenscare.com`.
7. Submit a test message on the live contact page.

Full detail: [HANDOVER.md](HANDOVER.md) Steps 1â€“2 and [NEXT-STEPS.md](NEXT-STEPS.md) section 1.

---

## 2. Wix DNS (nameservers)

**DNS restant chez Wix (sans changer les NS) :** suivez **[docs/WIX-DNS-EXACT-STEPS.md](docs/WIX-DNS-EXACT-STEPS.md)** — suppressions/modifications des A et du CNAME www avec tableaux « avant / après ».

1. In Cloudflare: add site `nodenscare.com` and note the **two Cloudflare nameservers**.
2. Before switching: copy current Wix A/CNAME values into [docs/WIX-SWITCH.md](docs/WIX-SWITCH.md) (rollback sheet).
3. At **Wix** â†’ Domains â†’ change nameservers to Cloudflareâ€™s.
4. Wait until Cloudflare shows **Active** (often 15 minutesâ€“24 hours).
5. Keep the Wix site **published** (do not delete) if you may switch back â€” see [docs/WIX-SWITCH.md](docs/WIX-SWITCH.md).

---

## 3. EasyPanel â€” delete old stack

Log in to your EasyPanel URL. Delete in order:

1. Backend app  
2. Database (Postgres)  
3. Frontend app on VPS  
4. VPS (only if nothing else uses it)

See [NEXT-STEPS.md](NEXT-STEPS.md) section 2.

---

## 4. GitHub (if not done yet)

- Initialize/push the frontend repo from your machine (this environment had **no git repo** and **no `gh` CLI**).
- Optionally archive or delete the old backend repo â€” see [NEXT-STEPS.md](NEXT-STEPS.md) section 3.

---

## Quick copy-paste (Cloudflare env var)

```
Name:  VITE_WEB3FORMS_KEY
Value: <your Web3Forms access key from nodens-frontend/.env or web3forms.com dashboard>
```

```
Name:  NODE_VERSION
Value: 20
```

After saving, trigger a **new deployment** on Cloudflare Pages.

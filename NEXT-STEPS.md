# NodensCare — Post-migration checklist

The repo is **frontend-only** (`nodens-frontend/`). Legacy backend code has been removed locally. Complete these steps in the owner’s accounts to finish the cutover and retire old hosting.

---

## 1. Cloudflare Pages (production site)

- [ ] Owner creates a [Cloudflare](https://dash.cloudflare.com) account (free plan)
- [ ] Add site `nodenscare.com` and point nameservers to Cloudflare (see [HANDOVER.md](HANDOVER.md) Step 1)
- [ ] **Workers & Pages → Create → Connect to Git** → select the frontend repo
- [ ] Build settings:

  | Setting | Value |
  |--------|--------|
  | Production branch | `main` |
  | Root directory | `nodens-frontend` (if monorepo) or `/` (if repo is frontend only) |
  | Build command | `npm run build` |
  | Build output | `dist` |
  | `NODE_VERSION` | `20` |

- [ ] Add env var **`VITE_WEB3FORMS_KEY`** (see section 4)
- [ ] Deploy → confirm preview URL (`*.pages.dev`) loads
- [ ] **Custom domains** → add `nodenscare.com` and `www.nodenscare.com`
- [ ] Fill in DNS record sheet in [docs/WIX-SWITCH.md](docs/WIX-SWITCH.md)
- [ ] Run pre-handover tests from [HANDOVER.md](HANDOVER.md#pre-handover-test-checklist)

**Local verify (already done if build passes):**

```bash
cd nodens-frontend
npm install
npm run build
```

---

## 2. EasyPanel — delete old stack (manual)

Log in at your EasyPanel URL. **Delete in this order** to avoid orphaned services and billing surprises:

| Order | Service | Why |
|-------|---------|-----|
| 1 | **Backend** app (`backendnodens` or similar) | Stops API traffic first |
| 2 | **Database** (Postgres) | Only after backend is removed |
| 3 | **Frontend** app on VPS (`frontendnodens` or similar) | Old Node/static host, replaced by Cloudflare Pages |
| 4 | **VPS / server** (if no other projects) | Last — only when nothing else uses the machine |

For each app: open the project → **Settings** or **Danger zone** → **Delete** / **Remove service**. Confirm volumes and domains are released.

> **This cannot be done from the repo.** No EasyPanel credentials or API keys are stored here.

---

## 3. GitHub — retire backend repo (manual)

`gh` CLI was **not available** in the local environment; use the GitHub website or install [GitHub CLI](https://cli.github.com/) on a machine with owner access.

**Option A — Archive (recommended, reversible)**

1. Go to `https://github.com/<owner>/backendnodens` (adjust org/user name)
2. **Settings → General → Danger Zone → Archive this repository**

**Option B — Delete permanently**

1. Same path → **Delete this repository**
2. Type the repo name to confirm

**Frontend repo:** keep and connect to Cloudflare Pages. Ensure the owner (not a contractor deploy token) owns the repo and Pages integration.

**If old deploy scripts used a personal access token (`ghp_…`):**

- Revoke it: GitHub → **Settings → Developer settings → Personal access tokens**
- Do **not** commit tokens; use Cloudflare’s native Git integration instead

---

## 4. Web3Forms (contact form)

- [x] Sign up at [web3forms.com](https://web3forms.com) with **info@nodenscare.com**
- [x] Verify email → **Access Key obtained** (stored in owner’s local `nodens-frontend/.env` only — do not commit)
- [ ] Cloudflare Pages → **Settings → Environment variables** → Production → `VITE_WEB3FORMS_KEY` = same key as local `.env` (see [DEPLOY-FOR-OWNER.md](DEPLOY-FOR-OWNER.md))
- [ ] **Retry deployment** so Vite bakes the key into the build
- [ ] Submit a test message on the live contact page

Local testing: `nodens-frontend/.env` is configured on the owner machine (gitignored). Use the key from owner / `.env` — never paste it into committed markdown.

---

## 5. Optional cleanup

- [ ] Cancel or downgrade VPS provider subscription after EasyPanel stack is deleted
- [ ] Revoke any unused deploy tokens (GitHub PAT, old EasyPanel API keys)
- [ ] Root-level `scrape_*.py` scripts were one-off Wix migration helpers — safe to delete or move out of the production repo if you want a cleaner handover package

---

## Quick reference

| Item | Where |
|------|--------|
| Full owner setup | [HANDOVER.md](HANDOVER.md) |
| Switch DNS Wix ↔ new site | [docs/WIX-SWITCH.md](docs/WIX-SWITCH.md) |
| Frontend dev notes | [nodens-frontend/README.md](nodens-frontend/README.md) |

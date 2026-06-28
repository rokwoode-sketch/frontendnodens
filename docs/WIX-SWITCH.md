# Switch between the new site and Wix (any time)

Use this when you want to **flip the live website** between:

- **New site** — Cloudflare Pages (React redesign)
- **Old site** — Wix (original editor)

You do **not** need to rebuild either site. You only change **DNS records** (about 2 minutes in Cloudflare).

---

## Golden rules (read first)

1. **Do not delete the Wix site** — keep it published in the Wix dashboard even while the new site is live.
2. **Do not cancel the Wix plan** if you want one-click rollback to Wix on the custom domain (you can downgrade later once you’re sure).
3. **Keep DNS on Cloudflare** — nameservers stay on Cloudflare forever; you only swap A/CNAME records.
4. **Write down both DNS setups once** (table below) so switching is copy-paste, not guesswork.
5. **Email (MX records)** — leave MX records **unchanged** when switching the website. Only change web records (`@` and `www`).

---

## Before you go live on the new site (one-time prep)

### A. Save your Wix “pointing” records

In **Wix**: Domains → `nodenscare.com` → **Connect a domain you already own** (or **DNS / Pointing**).

Wix will show something like:

| Type | Name | Value (example — yours may differ) |
|------|------|-------------------------------------|
| A | `@` | `23.227.38.65` |
| CNAME | `www` | `www123.wixdns.net` |

Copy the **exact** values Wix shows into the fill-in table at the bottom of this file.

### B. Save your Cloudflare Pages records

In **Cloudflare** → Workers & Pages → your project → **Custom domains**.

After adding `nodenscare.com` and `www.nodenscare.com`, note what Cloudflare created (often):

| Type | Name | Value (example) |
|------|------|-----------------|
| CNAME | `www` | `nodenscare.pages.dev` |
| CNAME | `@` | `nodenscare.pages.dev` (or A records Pages assigns) |

Copy the **exact** values from your dashboard into the table below.

### C. Optional: lower TTL for faster switches

In Cloudflare DNS, edit the `@` and `www` records → set **TTL** to **5 min** (300 seconds) while you’re testing. After you’re stable, you can raise it to Auto.

### D. Bookmark preview URLs (always work, regardless of DNS)

| Site | URL (fill in yours) |
|------|---------------------|
| New site (Cloudflare) | `https://____________.pages.dev` |
| Old site (Wix) | `https://____________.wixsite.com/____________` |

Use these to check both sites **before** changing DNS.

---

## Switch to the **new site** (Cloudflare Pages)

1. Open [Cloudflare DNS](https://dash.cloudflare.com) → `nodenscare.com` → **DNS** → **Records**.
2. Edit or add records for **web traffic only**:

   | Type | Name | Content | Proxy |
   |------|------|---------|-------|
   | (your saved Pages setup) | `@` | *(from table below)* | Proxied (orange cloud) |
   | (your saved Pages setup) | `www` | *(from table below)* | Proxied (orange cloud) |

3. **Do not** delete or change MX, TXT (email verification), or other non-web records.
4. Wait 5–15 minutes (or up to TTL).
5. Hard-refresh `https://www.nodenscare.com` (Ctrl+Shift+R) or test in a private window.

**Optional:** Cloudflare → **Caching** → **Purge Everything** if you still see the old site.

---

## Switch back to **Wix**

1. Cloudflare → **DNS** → **Records**.
2. Replace `@` and `www` with your **saved Wix pointing records**:

   | Type | Name | Content | Proxy |
   |------|------|---------|-------|
   | A | `@` | *(Wix IP from table below)* | **DNS only** (grey cloud) recommended for Wix |
   | CNAME | `www` | *(Wix CNAME from table below)* | **DNS only** (grey cloud) |

   > Wix often works more reliably with the **grey cloud** (DNS only). Orange cloud can sometimes cause SSL or routing issues with Wix.

3. Leave **MX** and email records untouched.
4. Wait 5–15 minutes.
5. In **Wix**: Domains → confirm domain shows **Connected**.
6. Test `https://www.nodenscare.com`.

**Optional:** Purge Cloudflare cache after switching to Wix.

---

## Quick decision guide

| I want… | Do this |
|---------|---------|
| New redesign live | DNS → Pages records (proxied orange cloud OK) |
| Old Wix site live again | DNS → Wix A + CNAME (grey cloud) |
| Edit Wix content | Switch DNS to Wix **or** edit in Wix and preview on `wixsite.com` URL |
| Edit new site content | Push to GitHub → Cloudflare auto-rebuilds (domain can stay on Pages) |
| Test new site without affecting Wix | Open `*.pages.dev` URL only — no DNS change |

---

## What **not** to do

| Action | Why |
|--------|-----|
| Delete Wix site | Can’t switch back without rebuilding |
| Move nameservers back to Wix | Loses easy flip-flop in one dashboard |
| Change MX when switching web | Breaks email |
| Cancel Wix immediately | Lose editor + hosting for old site |

---

## Fill-in record sheet (save this file after setup)

**Date prepared:** _______________

### Wix records (for rollback)

| Type | Name | Value |
|------|------|-------|
| A | `@` | |
| CNAME | `www` | |

### Cloudflare Pages records (for new site)

| Type | Name | Value | Proxied? |
|------|------|-------|----------|
| | `@` | | |
| | `www` | | |

### Preview URLs

- Cloudflare Pages: 
- Wix free URL: 

### Email — do not change when switching web

| Type | Name | Value |
|------|------|-------|
| MX | `@` | *(copy from Cloudflare DNS)* |

---

## Typical timeline

| Step | Time |
|------|------|
| Edit DNS in Cloudflare | ~2 min |
| Propagation (TTL 5 min) | ~5–15 min |
| Propagation (TTL Auto / high) | up to 24–48 h |

---

## Need help?

- New site not updating after DNS change → purge Cloudflare cache, test `pages.dev` URL.
- Wix not loading after switch back → confirm grey cloud on Wix records, check Wix Domains page for errors.
- Email stopped working → you changed MX by mistake; restore MX from backup above.

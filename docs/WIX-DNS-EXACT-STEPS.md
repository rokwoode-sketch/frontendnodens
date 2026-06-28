# Wix DNS — étapes exactes pour nodenscare.com

Guide pas à pas pour **Wix** (domaine géré chez Wix, **sans** changer les serveurs de noms / NS).  
Objectif : afficher le **nouveau site** (Cloudflare Pages) tout en gardant **e-mail Google Workspace** intact.

> **Langues du site :** le site utilise des chemins (`/en`, `/fr`, …), **pas** des sous-domaines `en.`, `fr.`, etc. Vous pouvez supprimer les CNAME `en`, `fr`, `es`, `ar` ou les laisser — ils ne sont pas nécessaires pour le nouveau site.

---

## Prérequis (obligatoire)

1. **Cloudflare Pages** : le projet est créé, le build réussit, et vous avez une URL `*.pages.dev` qui fonctionne.
2. Dans Cloudflare : **Workers & Pages → votre projet → Custom domains**, ajoutez :
   - `www.nodenscare.com`
   - `nodenscare.com` (domaine racine / apex)
3. Cloudflare affiche les **cibles DNS exactes** à utiliser. **Copiez-les** (souvent une forme du type `votre-projet.pages.dev` — la vôtre peut différer).

   | Où copier | Exemple (le vôtre sera différent) |
   |-----------|-----------------------------------|
   | Cible CNAME pour `www` | `nodens-frontend.pages.dev` |
   | Cible pour `@` (racine) | CNAME vers `….pages.dev` **ou** enregistrements A que Cloudflare indique |

4. Ne passez à Wix **qu’après** avoir noté ces valeurs dans le tableau « Après » ci-dessous.

Variables Cloudflare Pages (si pas encore fait) — voir aussi [DEPLOY-FOR-OWNER.md](../DEPLOY-FOR-OWNER.md) :

| Nom | Valeur |
|-----|--------|
| `VITE_WEB3FORMS_KEY` | Clé Web3Forms (même valeur que dans `nodens-frontend/.env` local — **ne jamais** la mettre dans Git) |
| `NODE_VERSION` | `20` |

Après avoir enregistré les variables : **Redéployer** le projet Pages.

---

## Ce qu’il ne faut **pas** toucher

| Type | Action |
|------|--------|
| **MX** (Google Workspace) | **Ne pas modifier ni supprimer** |
| **TXT** (google-site-verification, SPF `v=spf1 include:_spf.google…`) | **Ne pas supprimer** |
| **NS** (serveurs de noms Wix) | **Ne pas modifier** dans ce guide |

---

## Où cliquer dans Wix

1. Connectez-vous à [Wix](https://www.wix.com).
2. **Paramètres du site** (ou **Domaines**) → **Domaines** → `nodenscare.com`.
3. Ouvrez **Gérer les enregistrements DNS** / **DNS Records** (libellé selon la langue du compte).

Les colonnes Wix ressemblent à :

| Nom de l’hébergeur | Type | Valeur | TTL |
|--------------------|------|--------|-----|

(`Nom de l’hébergeur` = nom d’hôte : `@`, `www`, `en`, etc.)

---

## État actuel (d’après votre capture)

### Enregistrements A — `@` / nodenscare.com (à **supprimer** les 3)

| Nom de l’hébergeur | Type | Valeur (avant) | TTL | Action |
|--------------------|------|----------------|-----|--------|
| `@` | A | `185.230.63.107` | (ex. 1 h) | **Supprimer** |
| `@` | A | `185.230.63.186` | (ex. 1 h) | **Supprimer** |
| `@` | A | `185.230.63.171` | (ex. 1 h) | **Supprimer** |

Ces IP pointent vers **Wix**. Elles empêchent le domaine racine d’aller vers Cloudflare Pages tant qu’elles existent.

### CNAME — `www` (à **modifier**)

| Nom de l’hébergeur | Type | Valeur (avant) | TTL | Action |
|--------------------|------|----------------|-----|--------|
| `www` | CNAME | `cdn1.wixdns.net` | (ex. 1 h) | **Modifier** → voir « Après » |

### CNAME — langues (optionnel)

| Nom de l’hébergeur | Type | Valeur (avant) | Action suggérée |
|--------------------|------|----------------|-----------------|
| `ar` | CNAME | `cdn1.wixdns.net` | **Supprimer** (optionnel) ou laisser |
| `en` | CNAME | `cdn1.wixdns.net` | **Supprimer** (optionnel) ou laisser |
| `es` | CNAME | `cdn1.wixdns.net` | **Supprimer** (optionnel) ou laisser |
| `fr` | CNAME | `cdn1.wixdns.net` | **Supprimer** (optionnel) ou laisser |

Le nouveau site n’utilise **pas** ces sous-domaines pour la traduction.

---

## Configuration « Après » (Cloudflare Pages)

Remplacez `VOTRE-CIBLE.pages.dev` par la valeur **exacte** affichée dans Cloudflare (Custom domains).

### Racine `@`

Wix permet parfois un **CNAME** sur `@` (flattening). Si Wix propose :

| Nom de l’hébergeur | Type | Valeur (après) | TTL |
|--------------------|------|----------------|-----|
| `@` | CNAME | `VOTRE-CIBLE.pages.dev` | 1 h (ou défaut) |

Si Wix **refuse** un CNAME sur `@`, suivez **uniquement** les instructions affichées par Cloudflare pour « apex / root domain » (par ex. enregistrements A spécifiques). Copiez IP ou noms **depuis le tableau Cloudflare**, pas depuis ce document.

### `www`

| Nom de l’hébergeur | Type | Valeur (avant) | Valeur (après) | TTL |
|--------------------|------|----------------|----------------|-----|
| `www` | CNAME | `cdn1.wixdns.net` | `VOTRE-CIBLE.pages.dev` | 1 h (ou défaut) |

---

## Ordre des opérations (recommandé)

1. Noter / sauvegarder tous les enregistrements actuels (capture d’écran ou [WIX-SWITCH.md](WIX-SWITCH.md)).
2. **Supprimer** les 3 enregistrements **A** sur `@` (185.230.63.107, .186, .171).
3. **Modifier** le CNAME `www` : remplacer `cdn1.wixdns.net` par `VOTRE-CIBLE.pages.dev`.
4. **Ajouter** le CNAME (ou A) pour `@` selon Cloudflare (étape prérequis).
5. (Optionnel) Supprimer les CNAME `ar`, `en`, `es`, `fr`.
6. **Enregistrer** chaque changement dans Wix.
7. Attendre **15 minutes à 24 h** (selon TTL).
8. Tester :
   - `https://www.nodenscare.com`
   - `https://nodenscare.com`
   - Formulaire de contact sur le site en ligne.
9. Envoyer un e-mail test **vers** `@nodenscare.com` pour confirmer que **MX** n’a pas été touché.

---

## Retour arrière (site Wix à nouveau)

Remettez exactement :

| Nom | Type | Valeur |
|-----|------|--------|
| `@` | A | `185.230.63.107` |
| `@` | A | `185.230.63.186` |
| `@` | A | `185.230.63.171` |
| `www` | CNAME | `cdn1.wixdns.net` |

Détails et bascule DNS via Cloudflare (autre méthode) : [WIX-SWITCH.md](WIX-SWITCH.md).

---

## Dépannage rapide

| Problème | Piste |
|----------|--------|
| Ancien site Wix encore visible | Vider le cache du navigateur ; attendre le TTL ; vérifier qu’il ne reste **aucun** A Wix sur `@`. |
| `www` OK mais pas `@` | CNAME / A racine manquant ou incorrect — revoir Cloudflare Custom domains. |
| E-mail cassé | Vous avez modifié **MX** ou **SPF** par erreur — restaurer depuis votre capture. |
| Formulaire contact ne part pas | Vérifier `VITE_WEB3FORMS_KEY` sur Cloudflare Pages + **nouveau déploiement**. |

---

**Date du guide :** préparé pour la migration nodenscare.com → Cloudflare Pages (DNS restant chez Wix).

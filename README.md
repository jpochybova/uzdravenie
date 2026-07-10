# uzdravenie.sk

Static promotional website for **uzdravenie.sk** — holistické sprevádzanie
(Slovak holistic-therapy practice).

Plain **HTML + CSS + vanilla JavaScript**. No framework, no build step — the
files are served exactly as they are in this repository.

## Structure

```
index.html      Main one-page site
styles.css      Styles
script.js       Small interactions (navigation, mobile menu, form, cookie consent)
privacy.html    Ochrana osobných údajov (privacy policy)
404.html        Not-found page
images/         Site imagery + favicon
robots.txt      Search-engine directives
sitemap.xml     Sitemap
CNAME           Custom domain for GitHub Pages
```

## Local preview

No tooling required — just open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing content

Text, prices and contact details are edited directly on GitHub. Every editable
piece of text in `index.html` is marked with a comment such as
`<!-- ✏️ TEXT: ... -->`. See **[MAINTAINER.md](MAINTAINER.md)** for a
step-by-step, non-technical guide.

## Deployment (GitHub Pages)

The site is published with **GitHub Pages** from the `main` branch.

> **Current status: PREVIEW.** It is deployed to the subdomain
> **`nove.uzdravenie.sk`** for owner review, while the existing site stays live
> on `uzdravenie.sk`. The preview is intentionally **not indexed** by search
> engines (`noindex` + `robots.txt Disallow: /`).

1. Push this repository to GitHub (public).
2. **Settings → Pages** → *Source*: `Deploy from a branch` → Branch: `main`,
   Folder: `/ (root)` → **Save**.
3. Custom domain comes from the `CNAME` file (currently `nove.uzdravenie.sk`).
   At the DNS provider, add **one record** (the apex `uzdravenie.sk` is left
   untouched, so the old site keeps running):
   - `nove` → `CNAME` → `<username>.github.io`
4. In **Settings → Pages**, enable **Enforce HTTPS**.

Every commit to `main` redeploys automatically within a minute.

## Go-live switch (when the owner approves)

To move from the preview subdomain to production `uzdravenie.sk`:

1. **`CNAME`** → change to `uzdravenie.sk`.
2. **`index.html`** → set `<meta name="robots">` to `index, follow`; change the
   `canonical` and all `og:`/`twitter:` URLs from `https://nove.uzdravenie.sk/`
   to `https://uzdravenie.sk/`.
3. **`robots.txt`** → replace the `Disallow: /` block with:
   ```
   User-agent: *
   Allow: /
   Disallow: /privacy.html
   Sitemap: https://uzdravenie.sk/sitemap.xml
   ```
4. **`sitemap.xml`** → change `<loc>` to `https://uzdravenie.sk/`.
5. **DNS** → point the apex `uzdravenie.sk` at GitHub Pages
   (`A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153`) and `www` → `CNAME` → `<username>.github.io`. Remove the
   old host's records.

## Before go-live (set-up placeholders)

- Set the **Google Analytics 4** Measurement ID in `index.html`
  (replace `G-XXXXXXXXXX`, appears twice).
- Set the **contact-form endpoint** in the `<form>` in `index.html`
  (replace `YOUR_FORM_ID`).
- Fill the operator details in `privacy.html`.

Details for all of these are in **[MAINTAINER.md](MAINTAINER.md)**.

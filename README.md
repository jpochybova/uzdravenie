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

> **Current status: LIVE** on the production domain **`uzdravenie.sk`**.
> Search engines are allowed to index the site (`index, follow` +
> `robots.txt Allow: /`). `privacy.html` and `404.html` stay `noindex`
> on purpose.

1. Push this repository to GitHub (public).
2. **Settings → Pages** → *Source*: `Deploy from a branch` → Branch: `main`,
   Folder: `/ (root)` → **Save**.
3. Custom domain comes from the `CNAME` file (`uzdravenie.sk`). At the DNS
   provider:
   - apex `uzdravenie.sk` → `A` → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - `www` → `CNAME` → `<username>.github.io`

   > ⚠️ **Only replace the `A`/`CNAME` records that point at the old web host.**
   > The domain also carries `MX` records (`mailin1.uzdravenie.sk`,
   > `mailin2.uzdravenie.sk`) plus the `A` records those hostnames resolve to —
   > deleting them silently kills e-mail on the domain.
4. In **Settings → Pages**, enable **Enforce HTTPS** (available once GitHub has
   issued the certificate — usually within an hour of the DNS change).

Every commit to `main` redeploys automatically within a minute.

### After the switch to production

- Remove the now-unused `nove` DNS record — GitHub Pages serves only the one
  domain in `CNAME`, and a dangling CNAME to `github.io` is a takeover risk.
- **GA4** → *Admin → Data Streams* → set the stream URL to `uzdravenie.sk`.
- **Search Console** → add the `uzdravenie.sk` property and submit
  `https://uzdravenie.sk/sitemap.xml`.

## Contact form

Posts to Formspree (`https://formspree.io/f/mnjeekgq`) via the AJAX handler in
`script.js` — no third-party script on the page. The free plan allows **50
submissions/month** and delivers to **one** recipient; the second recipient gets
a copy through a Gmail filter that forwards mail with the subject
`Nový dopyt z uzdravenie.sk` (set by the `_subject` hidden field).

The `_gotcha` honeypot field catches bots — Formspree drops those submissions
without counting them against the monthly limit.

Google Analytics 4 (`G-VH6NF1DPX0`, consent-gated) and the operator details in
`privacy.html` are already configured. See **[MAINTAINER.md](MAINTAINER.md)**
for the non-technical guide.

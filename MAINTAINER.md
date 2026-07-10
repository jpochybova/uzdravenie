# Maintainer guide — uzdravenie.sk

A simple, non-technical guide to updating the website. You **do not need to
install anything** — everything is done in your web browser on GitHub.

---

## How the website works (in one minute)

- The website is made of a few text files stored here on GitHub.
- When you **edit a file and save (commit)** it, the live site at
  **https://uzdravenie.sk** updates **automatically within about a minute**.
- The main file with all the visible text is **`index.html`**.

---

## How to change text (the everyday task)

1. Open **`index.html`** in this repository (click the file name).
2. Click the **pencil ✏️ icon** (top-right of the file) — *"Edit this file"*.
3. Use **Ctrl+F** (Cmd+F on Mac) to search for the text you want to change,
   or look for the yellow comment markers:
   ```
   <!-- ✏️ TEXT: hero heading -->
   ```
   These mark exactly what is safe to edit. **Change only the words**, not the
   symbols around them (`<`, `>`, `"`).
4. Scroll down, click the green **"Commit changes"** button.
5. Add a short note (e.g. *"Update price"*) and confirm. Done — the site updates
   shortly.

> 💡 **Golden rule:** only edit the *words between the tags*. For example, in
> `<h3>Práca s emóciami</h3>` you may change `Práca s emóciami`, but leave
> `<h3>` and `</h3>` untouched.

### Common edits & where to find them
| What | Search `index.html` for |
|---|---|
| Prices | `30 €`, `60 €`, `250 €` |
| Session durations | `45 minút`, `75 minút` |
| Phone number | `+421 900 123 456` |
| E-mail | `info@uzdravenie.sk` |
| Address / opening hours | `Bratislava` / `Po – Pi` |
| Headlines & paragraphs | look for `✏️ TEXT:` markers |
| Social media links | `✏️ LINK: social profiles` |

---

## Changing an image

1. Prepare the new image (ideally **WebP or JPG**, under ~300 KB).
2. Open the **`images`** folder, click **"Add file" → "Upload files"**.
3. Give it the **same file name** as the one you're replacing (e.g.
   `about-portrait.webp`) so no code changes are needed. Commit.

---

## One-time set-up (do these once before launch)

### 1. Connect Google Analytics (GA4)
1. Create a GA4 property at <https://analytics.google.com> and copy your
   **Measurement ID** — it looks like `G-ABC123XYZ`.
2. In **`index.html`**, search for **`G-XXXXXXXXXX`** (it appears **twice**) and
   replace **both** with your real ID. Commit.
- Analytics only runs after a visitor clicks **"Prijať"** on the cookie bar
  (this is required by law).
- View traffic anytime at <https://analytics.google.com>.

### 2. Connect the contact form (Formspree)
1. Create a free account at <https://formspree.io>, add a new form, and copy its
   endpoint — it looks like `https://formspree.io/f/abcdwxyz`.
2. In **`index.html`**, search for **`YOUR_FORM_ID`** and replace the whole
   action URL with your endpoint. Commit.
- Form submissions will then arrive in your **e-mail** and in the Formspree
  dashboard. Until this is done, the form won't send.

### 3. Fill in the privacy policy
- Open **`privacy.html`** and replace the placeholders in brackets — e.g.
  `[Meno a priezvisko / názov]`, `[adresa]`, `[IČO]` — with the real details.

---

## Good to know

- **Made a mistake?** Every change is saved in history. Open the file → click
  **"History"** → open an older version to see or restore previous text.
- **Preview before publish:** for bigger changes, edit on a new *branch* and open
  a *Pull request* instead of committing straight to `main`. (Ask your developer
  if unsure — for small text edits, committing directly is fine.)
- **Don't rename or delete** `CNAME`, `.nojekyll`, `styles.css`, `script.js`, or
  the `images` folder — these keep the site running.
- **Need a new section or layout change?** That's a developer task, not a text
  edit — reach out rather than editing the structure.

# Maintainer guide — uzdravenie.sk

A simple, non-technical guide to updating the website. You **do not need to
install anything** — everything is done in your web browser on GitHub.

---

## How the website works (in one minute)

- The website is made of a few text files stored here on GitHub.
- When you **edit a file and save (commit)** it, the live site at
  **https://uzdravenie.sk** updates **automatically within about a minute**.
- The main file is **`index.html`** (the one-page front page). The other pages
  have their own files, named after what they contain — `o-mne.html`,
  `metody.html`, `metoda-*.html`, `cennik-*.html`, `blog*.html`.

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
| What | Which file | Search for |
|---|---|---|
| Phone number | every page (nav + footer) | `+421 903 737 720` |
| E-mail | every page (nav + footer) | `jela.sinkova@gmail.com` |
| Town | every page (footer) | `Nedožery-Brezany` |
| Prices | `cennik-*.html` | the `€` sign |
| Headlines & paragraphs | `index.html` | the `✏️ TEXT:` markers |
| Social media links | `index.html` | `✏️ LINK: social profiles` |

> ⚠️ The phone number, e-mail and town are repeated in the footer of **every**
> page. If you change one, change it everywhere — otherwise visitors will find
> two different numbers. The e-mail also appears in `script.js` (in the message
> shown when the contact form fails) and in `privacy.html`.

---

## Changing an image

1. Prepare the new image (ideally **WebP or JPG**, under ~300 KB).
2. Open the **`images`** folder, click **"Add file" → "Upload files"**.
3. Give it the **same file name** as the one you're replacing (e.g.
   `about-portrait.webp`) so no code changes are needed. Commit.

---

## Set-up

### The contact form

Messages go through **Formspree** (free plan) to `jela.sinkova@gmail.com`, and a
copy is forwarded to the second address by a **Gmail filter** on the subject
`Nový dopyt z uzdravenie.sk`. Formspree's free plan only delivers to one
address, which is why the forwarding rule exists — if the subject line in
`index.html` is ever changed, that filter stops matching and the second person
stops receiving copies.

**Limit: 50 messages per month.** Formspree warns you by e-mail at 50 %, 75 %,
90 % and when the limit is reached. Spam does not count — the form has a hidden
trap field that Formspree filters out.

> 💡 If messages seem to have stopped arriving, check the **spam folder** first
> and mark the Formspree notification as "not spam". That is by far the most
> common reason people think the form is broken.

### Already done — no action needed
- **Google Analytics 4** is connected (`G-VH6NF1DPX0`). It only runs after a
  visitor clicks **"Prijať"** on the cookie bar, as the law requires. View
  traffic at <https://analytics.google.com>.
- **The privacy policy** in `privacy.html` has the real operator details.

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

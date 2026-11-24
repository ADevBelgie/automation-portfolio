# Automation Portfolio (NL / FR / EN)

A grounded, zero-build trilingual overview of Arthur Devresse's freelance automation services, production work at My Mobility Budget Butler (MMBB), and public web briefings — built to be shared as a fast web link or printed cleanly as a 2-page A4 PDF handout.

## 1. Profile, portrait & contact links
Configured at the top of `app.js` (`CONFIG`) and in `index.html`:
- `linkedinUrl`: `https://www.linkedin.com/in/arthur-devresse/`
- `portraitUrl`: currently set to `./portrait.jpg` — replace `portrait.jpg` in this folder anytime to update the photo with no code changes, or set `portraitUrl: ''` to hide it. *(LinkedIn `media.licdn.com` URLs expire and block hotlinking, so a local copy is the only reliable way to keep it loading.)*
- `email`: optional — add your address in `CONFIG.email` if you want an email button alongside LinkedIn.

## 2. Preview locally
Open `index.html` directly in any browser (fonts and relative links work over `file://`), or run a local static server:

```bash
python -m http.server 8080
```

You can also link straight to a specific language with `?lang=nl`, `?lang=fr`, or `?lang=en`.

## 3. Export NL, FR & EN A4 PDFs
1. Open `index.html` in Chrome or Edge.
2. Select **NL**, **FR**, or **EN** in the top bar.
3. Click **PDF** (or press `Ctrl+P`) -> **Save as PDF**, A4, margins **Default** (or **Minimum**).
4. **Uncheck** *Headers and footers* so Chrome's `file:///` path doesn't overlap the custom bottom page numbers, and check **Background graphics** if you want the subtle paper tint on cards.

## 4. Live deployment
Live at https://arthur-devresse.vercel.app/ (auto-deployed from `main` via Vercel with Framework Preset = **Other** and Output Directory = `.`). Absolute `og:image`, `og:url`, `twitter:image`, and `canonical` URLs in `index.html` are configured for `https://arthur-devresse.vercel.app/`.

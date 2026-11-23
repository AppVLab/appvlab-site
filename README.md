# AppVLab public site

Corporate site for **AppVLab** (publisher of PrivaCoach).

- Live: https://appvlab.com (GitHub Pages, custom domain via `CNAME`)
- Privacy / Terms stay on: https://privacy.appvlab.com (repo `privacoach-site`)

## Pages

| URL | File |
| --- | --- |
| `/` | `index.html` (publisher home) |
| `/privacoach/` | `privacoach/index.html` (PrivaCoach presentation, FR/EN) |
| `/mentions-legales/` | `mentions-legales/index.html` (legal notice, FR/EN) |

Shared files: `assets/site.css`, `assets/site.js`.

## Languages (FR / EN)

Every page contains both languages: text is wrapped in `data-l="fr"` / `data-l="en"`
elements, and the CSS shows the one that matches `<html lang>`. French is the default
(works without JavaScript). `assets/site.js` picks the language from `?lang=fr|en`,
then from the browser storage (`appvlab_lang`, written only after a click on FR/EN or an explicit `?lang=`),
then from the browser language. It also updates the title, the meta description and the
`lang` parameter of the links to `privacy.appvlab.com`.

French text uses non-breaking spaces: U+00A0 before `:` and between a number and its unit,
U+202F before `? ! ;` and inside « ». Keep them when editing.

## Assets

- `assets/fonts/`: Manrope and M PLUS Rounded 1c (Latin subset, WOFF2), same fonts as the app,
  with their SIL OFL licenses. No external font service.
- Only third-party request: GoatCounter (page counts, no cookie, no IP stored).

## Preview locally

```bash
python -m http.server 8000
# open http://127.0.0.1:8000/
```

Paths are root-relative (`/assets/...`), so serve the repository root.

## Deploy (GitHub Pages)

1. Push this repo to `AppVLab/appvlab-site` (public).
2. GitHub → Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)`.
3. Custom domain: `appvlab.com` (and optionally `www.appvlab.com`).
4. DNS at your registrar / Google Workspace:

```
# Apex (example — GitHub Pages IPs)
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153

# Optional www
CNAME www   AppVLab.github.io
```

Enable **Enforce HTTPS** once the certificate is ready.
# AppVLab public site

Corporate site for **AppVLab** (publisher of PrivaCoach).

- Live (after DNS + Pages): https://appvlab.com
- Privacy / Terms stay on: https://privacy.appvlab.com (repo `privacoach-site`)

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

## Edit locally

```bash
open index.html
# then commit + push
```

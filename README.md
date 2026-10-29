# Prince Sant — Portfolio

A one-page portfolio built with Next.js, exported as a plain static website.

## Editing

- **All text** lives in `content.js`. Change it there; you never need to touch the page code.
- **Photo:** put a portrait image at `public/photo.jpg` (roughly 4:5, e.g. 800×1000). Until then the site shows "PS" initials.
- **CV:** replace `public/Prince_Sant_CV.pdf` with your latest CV (keep the same file name).

## Running it on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Option 1: GitHub Pages (free)

1. Create a GitHub account and a new **public** repo.
   - Name it `<your-username>.github.io` to get the address `https://<your-username>.github.io`.
   - Any other name (e.g. `portfolio`) gives `https://<your-username>.github.io/portfolio`. Both work; the setup handles the path automatically.
2. In this folder, run:
   ```bash
   git init -b main
   git add .
   git commit -m "Portfolio"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: repo **Settings → Pages → Source → GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes the site. Every later `git push` updates it automatically.

**Custom domain on GitHub Pages:** buy a domain (e.g. princesant.com), then in **Settings → Pages → Custom domain** enter it and follow GitHub's DNS instructions. No server needed.

## Option 2: Your own server

```bash
npm run build
```

This creates an `out/` folder that is a complete static website (HTML, CSS, JS, PDF). Upload the contents of `out/` to your server's web root (e.g. `/var/www/html` for Nginx/Apache, or `public_html` on shared hosting). No Node.js is needed on the server.

# Pyramid Enterprises website

Frontend-only React site (Vite + React 18 + react-router-dom + Tailwind CSS), built on the same
structure as the star-computer-react reference project. There is no backend: the contact form opens
WhatsApp or the visitor's email app with the enquiry pre-filled.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build in /dist
npm run preview
```

## Pages

| Route       | File                    |
| ----------- | ----------------------- |
| `/`         | `src/pages/Home.jsx`     |
| `/services` | `src/pages/Services.jsx` |
| `/products` | `src/pages/Products.jsx` (filter via `?cat=cctv`) |
| `/about`    | `src/pages/About.jsx`    |
| `/contact`  | `src/pages/Contact.jsx`  |

## Editing content

Everything editable lives in `src/data/pyramidData.js`: phone, WhatsApp number, email, address,
services, products and the four-step process. Change it once and every page updates.

## Brand

- Orange `#FF8F0F` and black, taken from the logo
- Fonts: Archivo (headings) and IBM Plex Sans (body), loaded from Google Fonts in `index.html`
- Logo is an SVG redraw in `src/components/ui/Logo.jsx`; the original PNG is in `public/assets/logo-full.png`

## Deploying

`public/_redirects` (Netlify) and `vercel.json` (Vercel) send every route to `index.html`, so
refreshing `/services` or `/contact` works. On a plain Apache/Nginx host, add the same rewrite rule.

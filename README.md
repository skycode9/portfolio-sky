# skyCode Portfolio

Personal portfolio of Akash, a full stack web developer.

Built with React 19, Vite, Tailwind CSS v4, GSAP and React Router.

## Run locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Editing content

- `src/data/site.js`: name, brand, email and GitHub link
- `src/data/projects.js`: project list (name, stack, description, image, link)
- `public/projects/`: project images (3:2 ratio works best, for example 1200x800)
- `src/components/Logo.jsx`: the text logo

## Deploy

`vercel.json` rewrites every path to `index.html`, so routes like `/projects` keep working on refresh.

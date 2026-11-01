# Radin Abdullah Madkhli: portfolio

Next.js (App Router) + TypeScript (strict) + Tailwind CSS. Static export, ready for Vercel.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run format
npm run build    # static site in ./out
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your real domain
(used for Open Graph, `sitemap.xml` and `robots.txt`).

## Edit content (`src/data/`)

| File            | What it controls                                            |
| --------------- | ----------------------------------------------------------- |
| `profile.ts`    | Name, bio, email, GitHub, LinkedIn, CV link, photo          |
| `experience.ts` | Work timeline (add as many items as you like)               |
| `tools.ts`      | Tool logo tiles, in display order                           |
| `projects.ts`   | Projects, tech chips, screenshots, GitHub / Live demo links |
| `navigation.ts` | Navbar links and the section ids used by the scroll-spy     |

Anything set to `null` is unknown. Buttons and icons that need a URL (CV, GitHub, LinkedIn,
project GitHub / Live demo) are **hidden until the URL is set**.

**Still to fill in:** `github`, `photo` in `profile.ts`; `image`, `github`,
`demo` for each project in `projects.ts`.

## Replace assets

- **Photo:** put the file in `public/images/`, then set
  `photo: { src: '/images/photo.jpg', alt: '...' }` in `profile.ts`. The frame is 5:6 (400x480).
- **Project screenshots:** put files in `public/images/`, then set
  `image: { src: '/images/docupilot.png', alt: '...' }`. Frames are 16:10.
- **CV:** `cv` in `profile.ts` is an external, always-up-to-date link (currently FlowCV), so there
  is no PDF in `public/cv/`. To use a PDF instead, put it in `public/cv/` and set `cv: '/cv/your-file.pdf'`.
- **Tool logos:** SVGs live in `public/logos/`. Add a file and an entry in `tools.ts`. For a logo
  that is dark by default, add a light variant and set `srcDark` (see Next.js and GitHub).
- **Favicon:** `src/app/icon.svg`. **Social preview image:** `public/og-image.png` (1200x630,
  currently a placeholder).

## Design tokens

All colors, light and dark, are CSS variables in `src/styles/tokens.css`, mapped in
`tailwind.config.ts`. Components use only the mapped names (`bg-surface`, `text-muted`, ...).
`design/` holds reference screenshots only and is never imported.

## Deploy to Vercel

1. Push the repo to GitHub and import it in Vercel (framework: Next.js, no settings needed).
2. Add the env var `NEXT_PUBLIC_SITE_URL` with your production URL.
3. Deploy. Because `output: 'export'` is set, the build also works on any static host
   (upload `out/`).

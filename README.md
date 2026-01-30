# Career Portfolio

A personal portfolio site built with Angular for job applications. Single-page layout with sections: Hero, About, Experience, Projects, Skills, and Contact.

## Setup

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Test the production build locally

After `npm run build:github`, serve the built folder as the site root so assets load correctly:

```bash
npx serve dist/career-portfolio/browser -p 4200
```

Then open **http://localhost:4200** (not `/career-portfolio/`). The build uses a relative base href so it works when the built folder is the document root.

## Customize

1. **Hero** – Edit `src/app/components/hero/hero.html`: name, tagline, bio.
2. **About** – Edit `src/app/components/about/about.html`.
3. **Experience** – Edit the `jobs` array in `src/app/components/experience/experience.ts`.
4. **Projects** – Edit the `projects` array in `src/app/components/projects/projects.ts`.
5. **Skills** – Edit the `skillGroups` array in `src/app/components/skills/skills.ts`.
6. **Contact** – Edit `src/app/components/contact/contact.html`: email, LinkedIn, GitHub links.

## Deploy to GitHub Pages

1. Push this repo to GitHub (e.g. as `career-portfolio`).
2. Build for GitHub Pages:

   ```bash
   npm run build:github
   ```

3. In GitHub: **Settings → Pages** → **Build and deployment** → Source: **GitHub Actions**.
4. Push to `main` (or `master`). The included workflow (`.github/workflows/deploy.yml`) will build and deploy automatically.

Your site will be at: **`https://<username>.github.io/career-portfolio/`**

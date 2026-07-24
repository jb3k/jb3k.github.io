# JB Kam Portfolio

A modern single-page personal portfolio for JB Kam, focused on applied AI systems, product strategy, leadership research, selected projects, and professional experience.

The site is built as a static React/Vite application for GitHub Pages at `https://jb3k.github.io/`.

## Technology Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide React
- GitHub Actions for Pages deployment

## Local Setup

```bash
npm install
npm run dev
```

The development server will print a local URL, usually `http://localhost:5173/`.

## Production Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This repository includes `.github/workflows/pages.yml`, which builds the Vite app and deploys the `dist/` folder using GitHub Pages Actions.

Manual repository setting required:

1. Open the GitHub repository settings.
2. Go to **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push changes to `main`.

Because this is a user-level GitHub Pages repository named `jb3k.github.io`, Vite is configured with `base: '/'` in `vite.config.js`.

## File Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SectionHeading.jsx
│   ├── CurrentFocus.jsx
│   ├── FocusCard.jsx
│   ├── AISystems.jsx
│   ├── AISystemCard.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Experience.jsx
│   ├── ExperienceItem.jsx
│   ├── About.jsx
│   ├── Footer.jsx
│   ├── Tag.jsx
│   └── StatusBadge.jsx
├── data/
│   ├── currentFocus.js
│   ├── aiSystems.js
│   ├── projects.js
│   ├── experience.js
│   └── site.js
├── App.jsx
├── main.jsx
└── index.css
```

## Updating Content

### Add an AI System

Edit `src/data/aiSystems.js`.

Copy an existing object in the `aiSystems` array and update:

```js
{
  id: 'new-system-id',
  title: 'New System',
  status: 'Active',
  description: 'Short description of the system.',
  input: 'What the system starts with',
  process: ['Step one', 'Step two', 'Step three'],
  output: 'What the system produces',
  tags: ['AI Workflow', 'Research'],
}
```

### Add a Project

Edit `src/data/projects.js`.

Copy an existing object in the `projects` array and update:

```js
{
  id: 'new-project-id',
  title: 'New Project',
  summary: 'One sentence summary.',
  description: 'Longer project description.',
  role: 'Your role',
  status: 'Active',
  tags: ['Product', 'Research'],
  image: null,
  githubUrl: null,
  liveUrl: null,
  featured: false,
}
```

Use an image path like `/images/pic1.png` if the image lives in the `images/` folder.

### Add an Experience Entry

Edit `src/data/experience.js`.

Copy an existing object in the `experience` array and update:

```js
{
  id: 'new-experience-id',
  organization: 'Organization Name',
  role: 'Role Title',
  description: 'Concise professional description.',
}
```

### Update Links and Biography

Edit `src/data/site.js` to update:

- GitHub link
- LinkedIn link
- email link
- resume path
- hero headline
- hero summary
- about section paragraphs
- footer note

## Assets

Images and the resume PDF live in `images/`. The current project intentionally handles missing images and links gracefully, so content entries can use `null` until final assets are available.

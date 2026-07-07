# Abril Ríos Portfolio

Portfolio website for Abril Ríos, a product designer focused on digital products, usability, and visual design.

## Tech Stack

- React
- Vite
- Tailwind CSS
- GitHub Pages

## Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

## Deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

To deploy:

1. Push the project to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Set **Source** to **GitHub Actions**.
5. Push to `main` or `master`, or run the workflow manually from the **Actions** tab.

The workflow builds the Vite app and publishes the generated `dist` folder.

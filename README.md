<h1 align="center">
  resume.mariomh.com
</h1>

<p align="center">
    Printable Curriculum Vitae
</p>

![mariomh-resume--portfolio](docs/resume.mriomh.com.webp)

## Features

- 📱 Responsive Design
- 🎨 Light and Dark theme
- 🖨️ Printable (Cmd + p | Ctrl + p)

## Tech Stack

- **Runtime** - [Bun](https://bun.sh)
- **Frontend** - [Astro](https://astro.build/)
- **Styling** - [TailwindCSS](https://tailwindcss.com)
- **Deployment** - [Cloudflare Pages](https://pages.cloudflare.com/)
- **Languages** - [TypeScript](https://www.typescriptlang.org/)

## Lighthouse Score

![lighthouse-result.svg](docs/lighthouse-result.svg)

## Running Locally

Clone the project

```bash
git clone https://github.com/MarioMH8/resume.mariomh.com.git
```

Go to the project directory

```bash
cd resume.mariomh.com
```

Install dependencies

```bash
bun install
```

Build the package and the site

```bash
bun run build
```

Start the development server

```bash
bun run dev
```

## Package

The repository publishes `@mariomh8/resume` to GitHub Packages. The package contains the CV data, the JSON Schema and the generated types.

```bash
bun run build:packages
bun run check:packages
```

Local installs need a classic GitHub personal access token with `read:packages` in your user-level npm configuration. CI uses the `PACKAGES_TOKEN` Actions secret. See [CONTRIBUTING.md](CONTRIBUTING.md) for the complete setup.

## Deploying the project

The site deploys automatically after the `Continuous integration` workflow succeeds on `main`. You can also run the [Deploy](https://github.com/MarioMH8/resume.mariomh.com/actions/workflows/deploy.yml) workflow manually with `workflow_dispatch`.

## Project Structure

The project is organized into several main directories and files:

- `src/`: This directory contains all the source code for the project.
  - `assets/`: Contains the images, fonts, and other assets used in the project.
  - `components/`: Contains the common components.
  - `features/`: Contains the specific components of the application.
  - `icons/`: Contains the SVG icons used in the project.
  - `layouts/`: Contains the base layout of the page.
  - `pages/`: Contains the Astro components that represent the pages of the application.
- `public/`: This directory contains all the static files.

## Inspiration and Credits

Here are some inspiration for this kind of resume website. Only some features and functionalities are inspired by
these following websites. All codes are written on my own.

- [Résumé minimalista by midudev](https://github.com/midudev/minimalist-portfolio-json)
- [Print-friendly portfolio CV by Ariel Cerda](https://github.com/Smilesharks/dev-portfolio)

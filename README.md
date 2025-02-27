<h1 align="center">
  resume.mariomh.com
</h1>

<p align="center">
    Printable curriculum vitae 
</p>

![mariomh-resume--portfolio](docs/resume.mriomh.com.webp)

## Features

- 📱 Responsive Design
- 🎨 Light and Dark theme
- 🖨️ Printable (Cmd + p | Ctrl + p)

## Tech Stack

- **Runtime** - [Bun](https://bun.sh)
- **Frontend** - [Astro](https://astro.build/), [Preact](https://preactjs.com/)
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

Build resume

```bash
bun run build:resume
```

Start the server

```bash
bun dev
```

## Deploying the project

Access the GitHub Action [Deploy](https://github.com/MarioMH8/resume.mariomh.com/actions/workflows/deploy.yml) and run the workflow.

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

Here are some inspiration for this kind of terminal website. Only some features and functionalities are inspired by these following websites. All codes are written on my own.

- [Résumé minimalista by midudev](https://github.com/midudev/minimalist-portfolio-json)
- [Print-friendly portfolio CV by Ariel Cerda](https://github.com/Smilesharks/dev-portfolio)

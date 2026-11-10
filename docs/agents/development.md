# Development

## Requirements

- Bun 1.4.4
- Git
- A classic GitHub personal access token with `read:packages` for local installs

## Setup

```bash
git clone https://github.com/MarioMH8/resume.mariomh.com.git
cd resume.mariomh.com
bun install
```

`bun install` installs the workspace, runs `astro sync` and activates the Husky hooks.

## GitHub Packages authentication

The repository `.npmrc` only declares the `@mariomh8` scope:

```
@mariomh8:registry=https://npm.pkg.github.com/
```

It does not contain a token, and it must stay that way. Keep the token in a user-level npm configuration:

```
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
@mariomh8:registry=https://npm.pkg.github.com/
```

Export `NPM_TOKEN` in your shell. A classic token is required; fine-grained tokens are not used for this registry.

CI uses the `PACKAGES_TOKEN` Actions secret because the design system packages are published from `brand.mariomh.com`. Renovate uses `RENOVATE_PACKAGES_TOKEN`, declared in `renovate.json`; that secret is not an Actions secret.

## Commands

| Task | Command |
| --- | --- |
| Install dependencies | `bun install` |
| Build the package and the site | `bun run build` |
| Generate the PDF into `dist/` | `bun run build:pdf` |
| Generate the PDF into `public/` for `bun run dev` | `bun run build:pdf:dev` |
| Build the package only | `bun run build:packages` |
| Run all tests | `bun run test` |
| Run one test file | `bun test resume/test/index.test.ts` |
| Type-check | `bun run typecheck` |
| Astro type-check | `bun run typecheck:astro` |
| Lint without writing | `bun run lint:ci` |
| Lint and fix | `bun run lint:fix` |
| Validate the package manifest and exports | `bun run lint:packages` |
| Build and validate the package | `bun run check:packages` |
| Add a changeset | `bun changeset add` |

## Package build

`resume/` uses `tsdown` and a generated-assets script:

```bash
bun run build:packages
```

The build writes `dist/index.mjs`, `dist/index.mjs.map`, `dist/index.d.mts`, `dist/resume.json` and `dist/schema.json`. The declaration and JSON files come from `resume/scripts/build-assets.ts`, which uses Zod and `zod-to-ts`.

The package exports:

- `@mariomh8/resume`
- `@mariomh8/resume/resume.json`
- `@mariomh8/resume/schema.json`
- `@mariomh8/resume/package.json`

## Site

```bash
bun run dev
bun run build
bun run start
```

The site consumes the local package through the `@resume` TypeScript path and the design system through `@mariomh8/*`.

## Printable PDF

The download button needs `playwright-core` and a Chromium build. Both scripts print the already built site, so run `bun run build` first:

```bash
# Chromium, once per machine
bunx playwright-core install chromium

bun run build
bun run build:pdf        # dist/<file>.pdf, what the deploy publishes
bun run build:pdf:dev    # public/<file>.pdf, served by bun run dev
```

`public/*.pdf` is ignored by Git. Run `bun run build:pdf:dev` again after changing the print styles or the CV data.

The generated PDF follows the `@page` rule in `src/pages/index.astro`, so a layout change shows up in the download and in <kbd>Ctrl</kbd>+<kbd>P</kbd> at the same time.

## Tests

Tests use Bun's built-in runner. The package test parses the CV data with the Zod schema:

```bash
bun run test
```

## Continuous integration

`.github/workflows/ci.yml` calls the shared `hexadrop/github-workflows` `check.yml` workflow at `v1.13.0` on pushes and pull requests to `main` and `develop`. It passes `registry: github`, `registry-scope: '@mariomh8'` and the `PACKAGES_TOKEN` secret, then runs `lint:ci`, `typecheck`, `typecheck:astro`, `test` and `check:packages`.

The deploy workflow calls the same check workflow with `ref` pinned to the commit that passed CI, then builds and deploys to Cloudflare Pages.

The `Protected branches` ruleset makes these checks required on `develop` and `main`, together with the `Pull Request: Validate` workflow. It allows zero approving reviews; administrators and the Hexadrop app can bypass it.

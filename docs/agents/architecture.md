# Architecture

## Surfaces

- `src/` is the private Astro site deployed to `https://resume.mariomh.com`.
- `resume/` is the published `@mariomh8/resume` package.
- `.github/` contains the shared CI, release, deploy, label and sync workflows.
- `docs/` contains the agent guides and the repository documentation.

The root package is private and is not published. The Bun workspace only includes `resume`.

## Package output

`resume/` uses `tsdown`:

- `dist/index.mjs`: ESM runtime.
- `dist/index.mjs.map`: source map.
- `dist/index.d.mts`: generated JSON Resume types.
- `dist/resume.json`: the CV data as JSON.
- `dist/schema.json`: the JSON Schema generated from Zod.

`resume/scripts/build-assets.ts` generates the JSON files and the declaration file after `tsdown` finishes, because they come from Zod and `zod-to-ts` rather than from TypeScript declarations. The package exports `.`, `./package.json`, `./resume.json` and `./schema.json`.

`files` publishes `CHANGELOG.md` and `dist`. `publishConfig.registry` points to GitHub Packages.

## Registry

New package versions are published to GitHub Packages under the `@mariomh8` scope. The repository `.npmrc` only declares the scope and never contains a token.

The design system packages used by the site are published from `brand.mariomh.com`, so the `GITHUB_TOKEN` of this repository cannot read them. CI uses the `PACKAGES_TOKEN` Actions secret, a classic token with `read:packages`. Renovate uses `RENOVATE_PACKAGES_TOKEN`.

## Deploy

The site builds to `dist/` and deploys to Cloudflare Pages with the project `resume-mariomh`.

`deploy.yml` runs:

- Automatically after the `Continuous integration` workflow succeeds on `main`.
- Manually with `workflow_dispatch`.

The deploy checks out `github.event.workflow_run.head_sha` when it runs automatically, so the deployed site matches the commit that passed CI.

## Workflows

| Workflow | Purpose |
| --- | --- |
| `ci.yml` | Shared check workflow on pushes and pull requests to `main` and `develop`. |
| `release-prepare.yml` | Runs on `develop` and maintains the draft release PR targeting `main`. |
| `release.yml` | Publishes beta snapshots from `develop` and stable releases from `main`. |
| `deploy.yml` | Deploys the site to Cloudflare Pages. |
| `pr-validate.yml` | Checks issue linkage, labels and changesets. |
| `pr-labeler.yml` | Applies scope labels from changed paths. |
| `merge-audit.yml` | Audits the merge method after a pull request closes. |
| `sync-to-develop.yml` | Opens `main` → `develop` sync pull requests. |

`merge-command.yml` and `renovate-changesets.yml` are reserved for when the `hexabot` GitHub App secret is configured.

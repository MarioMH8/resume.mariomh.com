# Release process

## Daily development

1. Create a work branch from `develop`.
2. Add a changeset with `bun changeset add` when the published package changes.
3. Open a pull request into `develop`.
4. Merge it with a **squash merge** once checks are green.

A push to `develop` that changes a changeset triggers `release.yml` and publishes a beta snapshot of `@mariomh8/resume` with the `beta` dist-tag. Packages are versioned with Changesets and published to GitHub Packages.

## Release preparation

`release-prepare.yml` runs after every push to `develop`. It first runs the shared check workflow, then creates or updates the draft pull request `changeset-release/main` targeting `main` through the shared `release-prepare.yml` workflow at `v1.12.0`.

The workflow uses `GITHUB_TOKEN` because this repository has no ruleset that requires an approval for bot commits. When the `hexabot` GitHub App is configured, switch to `use-app-token: true` and pass `HEXABOT_PRIVATE_KEY`.

## Stable release

1. Mark the `changeset-release/main` pull request as ready.
2. Wait for green checks.
3. Merge it with a **merge commit**.
4. The merge triggers `release.yml` on `main`, which runs `bun run build:packages` and publishes the stable package to GitHub Packages.
5. Changesets creates the `@mariomh8/resume@X.Y.Z` tag and the GitHub Release.

Do not publish a stable release after every change. Batch package changes in the release pull request.

## Deploy

`deploy.yml` deploys the site automatically after the `Continuous integration` workflow succeeds on `main`. It also supports `workflow_dispatch` for manual redeploys.

The deploy checks out the commit that passed CI, installs dependencies with `PACKAGES_TOKEN`, builds the package and the site, and publishes `dist` to Cloudflare Pages project `resume-mariomh`.

## Sync back to develop

After a pull request merges into `main`, `sync-to-develop.yml` opens or updates the pull request `internal/sync-from-main-to-develop` targeting `develop`. Merge it with a **merge commit** so the release commit and the generated changelog stay in `develop` ancestry. The pull request uses the `internal:sync` label.

The sync workflow uses `GITHUB_TOKEN` until the `hexabot` GitHub App secret is configured.

## Hotfixes

Create `hotfix/*` from `main`, add a changeset if the package changes, open a pull request into `main` and merge it with a **squash merge**. Then merge the sync pull request back into `develop`.

## Registry

New versions are published only to GitHub Packages. The site installs the design system packages from GitHub Packages with `PACKAGES_TOKEN`; local installs use a classic token with `read:packages`.

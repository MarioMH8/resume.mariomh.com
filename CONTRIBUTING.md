# Contributing to resume.mariomh.com

This repository contains the Astro site at [resume.mariomh.com](https://resume.mariomh.com) and the published `@mariomh8/resume` package. The source is public and the package stays private in GitHub Packages. `develop` is the default branch and `main` holds stable releases.

For a quick orientation, read [AGENTS.md](AGENTS.md); for the detailed guides, see [docs/agents/](docs/agents/).

## Table of contents

- [Ways to help](#ways-to-help)
- [Issue-first workflow](#issue-first-workflow)
- [Development setup](#development-setup)
- [GitHub Packages authentication](#github-packages-authentication)
- [Commands](#commands)
- [Package and site](#package-and-site)
- [Branches and commits](#branches-and-commits)
- [Pull request rules](#pull-request-rules)
- [Changesets and releases](#changesets-and-releases)
- [Further reading](#further-reading)
- [Code of conduct](#code-of-conduct)

## Ways to help

- **Report a bug** with the [bug report template](.github/ISSUE_TEMPLATE/bug_report.yml).
- **Suggest a feature** with the [feature request template](.github/ISSUE_TEMPLATE/feature-request.yml).
- **Send a pull request** for a fix, a test or a documentation improvement.

Open an issue before building a large feature.

## Issue-first workflow

Every pull request needs an approved issue:

1. Open an issue with one of the templates above.
2. Wait for a maintainer to add `status:approved`. The issue must stay open.
3. Comment on the issue to claim it.
4. Open a pull request with `Closes #<number>`, `Fixes #<number>` or `Resolves #<number>`.

Repository tooling without a product issue can use the `internal:no-issue` label instead.

## Development setup

Requirements: Bun 1.4.4 and Git.

```bash
git clone https://github.com/MarioMH8/resume.mariomh.com.git
cd resume.mariomh.com
bun install
```

`bun install` installs the workspace, builds nothing, runs `astro sync` and activates the Husky hooks through the `prepare` script. The lockfile is `bun.lock`.

## GitHub Packages authentication

The repository `.npmrc` only declares the `@mariomh8` scope:

```
@mariomh8:registry=https://npm.pkg.github.com/
```

It never contains a token. To install published `@mariomh8` packages locally, create a classic personal access token with `read:packages` and keep it in a user-level npm configuration:

```
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
@mariomh8:registry=https://npm.pkg.github.com/
```

Export `NPM_TOKEN` in your shell. A classic token is required, and authentication is needed even for public packages. CI uses the `PACKAGES_TOKEN` Actions secret because the design system packages are published from another repository; Renovate uses `RENOVATE_PACKAGES_TOKEN` from `renovate.json`.

## Commands

Run these from the repository root:

| Task | Command |
| --- | --- |
| Install dependencies | `bun install` |
| Build the package and the site | `bun run build` |
| Build the package only | `bun run build:packages` |
| Run all tests | `bun run test` |
| Type-check | `bun run typecheck` |
| Astro type-check | `bun run typecheck:astro` |
| Lint without writing | `bun run lint:ci` |
| Lint and fix | `bun run lint:fix` |
| Validate the package manifest and exports | `bun run lint:packages` |
| Build and validate the package | `bun run check:packages` |
| Add a changeset | `bun changeset add` |

## Package and site

The package lives in `resume/` and is built with `tsdown`. It generates `dist/index.mjs`, `dist/index.d.mts`, `dist/resume.json` and `dist/schema.json`; the JSON and declaration files are produced by `resume/scripts/build-assets.ts`.

The site lives in `src/` and consumes the package through the `@resume` TypeScript path and `@mariomh8/*` from GitHub Packages. Keep both surfaces in mind when changing the CV data or the schema.

## Branches and commits

Create work branches from `develop`. The branch name must match:

```
^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert|release|hotfix)\/[a-z0-9._-]+$
```

Examples: `feat/resume-package`, `fix/print-layout`, `docs/agents-and-contributing`.

Commit messages follow Conventional Commits through `commitlint.config.ts`. Add `!` and a `BREAKING CHANGE:` footer for breaking changes.

Husky installs three hooks:

| Hook | Command |
| --- | --- |
| `pre-commit` | `bun lint-staged` |
| `commit-msg` | `bun run commitlint ${1}` |
| `pre-push` | `bun run typecheck`, `bun run test`, `bun run lint:fix` |

See [Branches and commits](docs/agents/branches-and-commits.md) for the full branch table and commit types.

## Pull request rules

- Link an approved, open issue and use a Conventional Commits title.
- Add exactly one `type:*` label. Scope labels are applied automatically.
- `type:bug`, `type:feature` and `type:refactor` require a changeset when the package changes.
- `type:chore` and `type:docs` do not require a changeset.
- `release` and `internal:*` are exempt; contributor pull requests with those labels must not include changesets.
- Run `bun run lint:ci`, `bun run typecheck`, `bun run typecheck:astro`, `bun run test` and `bun run check:packages` before opening the pull request.

`.github/workflows/pr-validate.yml` uses `hexadrop/validate-pr-action@v1.0.1` to check the issue, labels and changeset. `.github/workflows/ci.yml` runs the shared check workflow with `lint:ci`, `typecheck`, `typecheck:astro`, `test` and `check:packages`.

The `Protected branches` ruleset on `develop` and `main` requires a pull request, blocks force pushes and deletions, and requires the `Pull Request: Validate` and `Check` workflows to pass. It allows zero approving reviews; administrators and the Hexadrop app can bypass it.

Use a **squash merge** for work branches into `develop`. Use a **merge commit** for `changeset-release/main` into `main` and for `internal/sync-from-main-to-develop` into `develop`. See [Pull requests](docs/agents/pull-requests.md) for the label and merge matrices.

## Changesets and releases

Add a changeset with `bun changeset add` when the published package changes. A push to `develop` that changes a changeset publishes a beta snapshot with the `beta` dist-tag. When `develop` is ready, `release-prepare.yml` maintains the draft `changeset-release/main` pull request; mark it ready and merge it into `main` with a merge commit to publish the stable package and create the `@mariomh8/resume@X.Y.Z` tag. Then merge the `internal/sync-from-main-to-develop` pull request into `develop`.

New versions are published only to GitHub Packages. The site deploys automatically after the `Continuous integration` workflow succeeds on `main`.

## Further reading

- [Agent guide](AGENTS.md) and [docs/agents/](docs/agents/).
- [Architecture](docs/agents/architecture.md): site, package, output, registry and deploy.
- [Conventions](docs/agents/conventions.md): Bun, TypeScript, lint, tsdown and registry rules.
- [Development](docs/agents/development.md): commands, tests, package build and authentication.
- [Release process](docs/agents/release-process.md): beta, stable, deploy and sync.
- [Pull requests](docs/agents/pull-requests.md) and [branches and commits](docs/agents/branches-and-commits.md).

## Code of conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). Be respectful: critique code, not people, be constructive in reviews and welcome newcomers. Report unacceptable behavior privately to the maintainer through GitHub.

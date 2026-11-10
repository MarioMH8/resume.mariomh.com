# Branches and commits

## Branches

This project uses GitFlow with Changesets.

| Branch | Purpose | Publication |
| --- | --- | --- |
| `develop` | Default branch and integration branch for the next release. | Beta snapshot tagged `beta` when a changeset changes. |
| `main` | Stable releases. | Stable package tagged per package. |
| `feat/*`, `fix/*`, `docs/*`, `chore/*`, `refactor/*` | Short-lived work branches created from `develop`. | None. |
| `release/*` | Optional release stabilization branch created from `develop`. | None until merged into `main`. |
| `hotfix/*` | Urgent fix created from `main`. | Stable after merging into `main`. |
| `changeset-release/main` | Generated release pull request targeting `main`. | Stable release. |
| `internal/sync-from-main-to-develop` | Generated sync pull request targeting `develop`. | None. |

Work branches target `develop`. Hotfixes target `main`. The generated release and sync branches are managed by the workflows; do not edit them by hand.

## Branch naming

Use this pattern for work branches:

```
^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert|release|hotfix)\/[a-z0-9._-]+$
```

Rules:

- All lowercase.
- Use hyphens, dots or underscores as separators; no spaces and no uppercase.
- Keep the description short and descriptive.

Examples: `feat/resume-package`, `fix/print-layout`, `docs/agents-and-contributing`, `release/0.1.0`, `hotfix/publish-token`.

The `Protected branches` ruleset enforces the pull request flow on `develop` and `main`, so this naming is a convention rather than an enforced rule.

## Commit convention

Commit messages follow Conventional Commits through `commitlint.config.ts`, which extends `@commitlint/config-conventional`:

```
<type>(<optional-scope>)!: <description>

[optional body]

[optional footer]
```

Allowed types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style` and `test`.

Examples:

```
feat(resume): migrate the package to GitHub Packages
fix(site): keep the print layout on one page
docs: add repository guides and contributing
chore(deps): update astro
```

Add `!` after the type or scope and a `BREAKING CHANGE:` footer for a breaking change.

## Git hooks

Husky installs the hooks through the `prepare` script. Run `bun install` to activate them in a checkout.

| Hook | Command | Purpose |
| --- | --- | --- |
| `pre-commit` | `bun lint-staged` | Runs tests for staged test files and ESLint with `--fix` on staged source files. |
| `commit-msg` | `bun run commitlint ${1}` | Validates the commit message. |
| `pre-push` | `bun run typecheck`, `bun run test`, `bun run lint:fix` | Checks types and tests, then applies lint fixes. |

`lint-staged.config.js` runs `bun test` for `**/*.test.{ts,tsx}` and `eslint --cache --fix` for Astro, CSS, JavaScript, JSON, Markdown, TypeScript and TSX files.

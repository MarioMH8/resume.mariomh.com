# Agent guide for resume.mariomh.com

Private Astro site and the published `@mariomh8/resume` package. `develop` is the default branch; `main` holds stable releases.

- **Package manager:** Bun 1.4.4 (`bun`)
- **Build:** `bun run build`
- **Build package:** `bun run build:packages`
- **Test:** `bun run test`
- **Type-check:** `bun run typecheck`
- **Astro type-check:** `bun run typecheck:astro`
- **Lint:** `bun run lint:fix`
- **Package validation:** `bun run check:packages`

Site code lives in `src/`; the package lives in `resume/`. The package is built with `tsdown` and published to GitHub Packages. The site consumes the local workspace package during development and the rest of the design system from `@mariomh8/*`.

## Task guides

- [Architecture](docs/agents/architecture.md) — site, package, build output, registry and deploy.
- [Conventions](docs/agents/conventions.md) — Bun, TypeScript, lint, tsdown and registry rules.
- [Development](docs/agents/development.md) — commands, tests, package build and authentication.
- [Release process](docs/agents/release-process.md) — beta snapshots, stable releases, deploy and sync.
- [Pull requests](docs/agents/pull-requests.md) — issue-first policy, labels, changesets and merge methods.
- [Branches and commits](docs/agents/branches-and-commits.md) — GitFlow branches, naming, Conventional Commits and hooks.

<h1 align="center">
  @mariomh8/resume
</h1>

<p align="center">
  JSON Resume, schema and types for MarioMH.
</p>

## Install

The package is private and is published to GitHub Packages. Add the scope and your token to your user-level npm configuration:

```ini
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
@mariomh8:registry=https://npm.pkg.github.com/
```

`NPM_TOKEN` needs a classic GitHub personal access token with the `read:packages` permission.

```bash
bun add @mariomh8/resume
```

## Usage

<!-- eslint-skip -->
```ts
import resume from '@mariomh8/resume';
import type { JSONResume } from '@mariomh8/resume';
import schema from '@mariomh8/resume/schema.json';
```

- `@mariomh8/resume` default-exports the resume object and the `JSONResume` type.
- `@mariomh8/resume/resume.json` is the same data serialized as JSON Resume.
- `@mariomh8/resume/schema.json` is the JSON Schema generated from the Zod schemas.
- `@mariomh8/resume/package.json` exposes the package manifest.

## Development

The package lives in the `resume/` workspace of [resume.mariomh.com](https://github.com/MarioMH8/resume.mariomh.com). The JSON assets and the declaration file are generated after `tsdown` by `scripts/build-assets.ts`.

```bash
bun run build:packages
bun run check:packages
```

## License

The code is licensed under the [PolyForm Noncommercial License 1.0.0](https://github.com/MarioMH8/resume.mariomh.com/blob/main/LICENSE). The CV data is **all rights reserved**; see [CONTENT-LICENSE.md](https://github.com/MarioMH8/resume.mariomh.com/blob/main/CONTENT-LICENSE.md).

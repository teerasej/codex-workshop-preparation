# Codex Workshop Preparation

English preparation website for the Codex mobile app workshop.

- Website: https://teerasej.github.io/codex-workshop-preparation/
- Canonical content: `docs/`.
- Six sections; iOS Simulator preparation is optional.
- Instructor-provided Azure access is described without publishing credentials.
- Download test: `docs/public/files/preparation-download-test.zip` (three harmless synthetic sample files).

## Development

Use Node.js 24. Run `npm ci`, `npm run docs:build`, then `npm run docs:preview`. The deployment base is `/codex-workshop-preparation/`.

## Publication

GitHub Actions builds and deploys `docs/.vitepress/dist` from `main`. The live release must be verified separately from the local build.

## Artwork and credits

Seven generated minimal flat 2D illustrations are published as responsive WebP assets. Untouched originals and private provenance remain outside this public repository.

© 2026 Teerasej Jiraphatchandej. All rights reserved.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Action |
|---------|--------|
| `deno task serve` | Dev server at `http://0.0.0.0:8000`, serves `./src` live |
| `deno task build` | Produces `dist/index.html` (single inlined, minified file) |

No tests, no linter configured.

## Architecture

Single-page static site built with plain HTML/CSS/JS, deployed to GitHub Pages as a single self-contained file.

**Source (`src/`) → Build (`dist/`)**: `build.ts` reads the three source files, inlines `style.css` into a `<style>` tag and `script.js` into a `<script>` tag (replacing the `<link>` and `<script src>` references), then minifies the merged HTML via `html-minifier-terser`. The output is `dist/index.html` — `dist/` is gitignored and only produced by CI.

**`src/script.js`** has two self-contained IIFEs:
- Countdown timer targeting `2026-07-21T18:30:00` — updates four DOM elements (`cd-days`, `cd-hours`, `cd-min`, `cd-sec`) every second with a CSS `tick` animation on change.
- Video overlay toggle — hides/shows `#video-overlay` based on play/pause/ended events on `#main-video`.

**CI/CD**: Push to `main` triggers `.github/workflows/deploy.yml`, which runs `deno task build` and deploys `dist/` to GitHub Pages via the standard Pages artifact workflow.

## Pending items in source

- `<video><source src="">` in `src/index.html` is a placeholder — fill in the video path before production use.
- The RSVP button (`<a class="cta-btn">`) is commented out in the closing section.

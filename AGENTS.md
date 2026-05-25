# watch-party

Single-page event invitation for an Indiana Jones watch party.

## Commands

| Command | Action |
|---------|--------|
| `deno task serve` | Dev server at `http://0.0.0.0:8000`, serves `./src` |
| `deno task build` | Produces `dist/index.html` (inlined, minified) |

## Source layout

- `src/index.html` — page markup with `<link rel="stylesheet" href="style.css">` and `<script src="script.js"></script>`
- `src/style.css` — all styles
- `src/script.js` — countdown timer (target date hardcoded: `2026-07-21T18:30:00`) + video overlay toggle

## Build

`build.ts` reads `src/` files, inlines CSS into `<style>` and JS into `<script>`, then minifies via `npm:html-minifier-terser@7`. Output is a single `dist/index.html`. `dist/` is gitignored.

## CI/CD

`.github/workflows/deploy.yml` — on push to `main`, runs `deno task build` and deploys `dist/` to GitHub Pages.

## Notes

- The video `<source src="">` is a placeholder in `src/index.html` — fill it before production use.
- No test/lint/typecheck setup.

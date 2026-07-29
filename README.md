# watch-party

A single-page, themeable watch party landing page. Includes a countdown timer, event details (date, location, programme), RSVP section, and a full-screen video overlay toggle. Built with vanilla HTML/CSS/JS and bundled into a single minified HTML file for easy hosting.

## Features

- **Countdown timer** — live countdown to the event date/time
- **Video overlay** — toggle a full-screen trailer/background video
- **RSVP section** — ready for your link or form
- **Self-contained build** — outputs a single `dist/index.html` with inlined CSS and JS

## Quick start

```bash
# Start the dev server (serves ./src)
deno task serve

# Build for production
deno task build
```

Open `http://0.0.0.0:8000` in your browser. Edit files in `src/` and reload to see changes.

## Customization

1. Edit `src/index.html` — event title, date, location, programme, RSVP link
2. Edit `src/style.css` — colors, fonts, layout
3. Set the video `<source src="">` in `src/index.html` to your trailer/background video
4. Update the target date in `src/script.js` for the countdown

## Project structure

```
├── src/
│   ├── index.html      # page markup
│   ├── style.css       # all styles
│   └── script.js       # countdown timer + video overlay toggle
├── build.ts            # build script (inlines + minifies)
├── deno.json           # Deno config / tasks
└── dist/               # build output (gitignored)
```

## Requirements

- [Deno](https://deno.com) — the build script uses Deno's npm compatibility layer; no Node.js required.

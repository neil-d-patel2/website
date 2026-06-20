# Project Memory

## Overview

Neil Patel's personal portfolio — a static site styled as an editorial "research-lab
article" (think Anthropic/OpenAI engineering posts). No build step, no framework.

## Architecture

- `index.html` — main page. Masthead (centered serif title + gray subtitle + byline +
  category chip) followed by a two-column `.layout` grid: sticky "Jump to:" TOC sidebar
  + narrow serif reading column. Content is split into `<section id="...">` blocks that
  the TOC anchors to.
- `notes.html` — same shell, single content column (WIP page).
- `styles.css` — all styling + design tokens (CSS custom properties), light/dark themes.
- `script.js` — theme toggle (localStorage + `prefers-color-scheme`), active-TOC
  highlighting via IntersectionObserver, and Web Share / clipboard fallback.

## Development Commands

- Preview: open `index.html` directly in a browser (it's static; `file://` works).
- Headless screenshot (verification):
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
   --user-data-dir="$(mktemp -d)" --window-size=1280,1500 --screenshot=/tmp/x.png "file://$PWD/index.html"`

## Coding Standards / Design System

- Font: **Inter** only (single family), Google Fonts via `<link>` in each HTML head, used
  throughout — title/section headings at weight 600 with tight tracking (~-0.035em title),
  body at 400. Variable: `--font-sans`. (Originally Newsreader serif to match the reference;
  switched to all-Inter per the owner's request.)
- Color: off-white canvas `--bg: #fafaf8` (per design brief). Monochrome/editorial — links
  are text-colored with a subtle underline (`--link-line`), NOT blue. Dark theme is a warm
  charcoal `#1a1916`. All colors are tokens in `:root` / `body.dark`.
- Layout width tokens: `--wrap: 932px` = sidebar 200px + gap 72px + main 660px. Main column
  capped at 660px for a ~70-char measure.
- Single column below 880px (TOC becomes a horizontal wrapped list); tighter padding < 560px.
- `prefers-reduced-motion` disables the load fade + smooth scroll.

## Known Issues

- **Chrome headless + an already-open Chrome instance**: running `--headless --screenshot`
  while the user has Chrome open can produce stale/duplicate PNGs (multiple invocations
  return byte-identical files) and the process often hangs *after* writing the file. Work
  around it: give every run its own `--user-data-dir="$(mktemp -d)"`, run ONE invocation at
  a time, poll for the output file, then `pkill -f "Google Chrome.*headless"`. Read the PNG
  directly off disk rather than waiting for a clean exit. `--headless=new` tends to hang on
  `file://` + network fonts.

## Notes

- `package.json`/`script.ts` are leftover scaffolding (TypeScript devDep); the live site
  uses plain `script.js`. No bundler is wired up.

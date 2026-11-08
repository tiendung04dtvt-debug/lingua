# Lingua · Writing, Speaking & Vocabulary

Lingua is a private-study focused static web app for VSTEP Bậc 3–5, organized around Writing, Speaking, and B1–C1 vocabulary.

## Key Study Features

- **Writing & Speaking Practice:** Prompts labeled by estimated practice level with word counters, draft auto-saving, planning steps, self-review checklists, and optional AI evaluation.
- **70 Source-Linked Guides:** 10 referencing UFL 2025 and QNU published sample papers; 60 summarizing topics from third-party Writing/Speaking banks.
- **393 Oxford CEFR Headword Flashcards:** 129 B1, 122 B2, 142 C1 with spaced repetition (SRS), full deck navigation (Next/Prev), study streak tracking, and keyboard shortcuts (`Space`, `←`, `→`, `1`, `2`).
- **Dark Mode:** System preference detection and manual toggle (🌙 / ☀️).
- **Progress Import & Export:** Full offline backup and restore of all drafts, briefs, SRS intervals, and streaks via JSON.
- **PWA Ready:** Manifest and vector icons supporting Add to Home Screen.
- **AI Feedback with Gemini:** Using Cloudflare Worker proxy (`workers/gemini-proxy.js`) with Gemini 2.0 Flash for structured scoring, grammar/vocab corrections, and improved models.

## Modular Architecture (`src/`)

- `src/constants.js`: Data URLs, CEFR dictionaries, and external reference links.
- `src/state.js`: Single source of truth for app state, persistence, daily goal tracking, and streaks.
- `src/utils.js`: XSS escaping, toast notifications, word counting.
- `src/router.js`: Hash-based SPA routing and view management.
- `src/wire.js`: DOM event listeners, import/export handlers.
- `src/pages/`:
  - `home.js`: Dashboard overview and stats.
  - `tasks.js`: Writing/Speaking task libraries, filter logic, and AI evaluation.
  - `vocab.js`: Flashcard engine with keyboard controls and spaced repetition.
  - `resources.js`: VSTEP exam format guides and AI Worker configuration.
- `src/main.js`: Boot sequence, theme setup, global shortcuts, and async data hydration.

## Run Locally

Serve this folder with a static HTTP server:
```bash
python -m http.server 8080
```
Open `http://localhost:8080` in your browser.

## AI Grader Setup

Follow [AI_SETUP.md](AI_SETUP.md) to deploy `workers/gemini-proxy.js` to Cloudflare Workers with your Google Gemini API key.

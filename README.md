# Lingua · Writing, Speaking & Vocabulary

Lingua is a private-study focused static site for VSTEP Bậc 3–5, organized around Writing, Speaking, and B1–C1 vocabulary. Reading and Listening question banks have been removed from the current site and public content pack.

## Study features

- Writing and Speaking prompts labeled by estimated practice level. All currently published prompts are original Lingua simulations, not recovered live exam questions.
- 70 source-linked guides: 10 point to prompts matched against the published UFL 2025 and QNU sample PDFs; 60 summarize topics from third-party Writing/Speaking practice banks (30 per skill). Full text and model answers open at the source; third-party collections are not verified live questions.
- 393 source-checked headword flashcards in `packs/vocabulary.tsv` (129 B1, 122 B2, 142 C1), each linked to the Oxford CEFR list supporting its level. The app adds original Vietnamese glosses and example sentences for study. Cards can be filtered and reviewed with a spaced schedule.
- Local draft saving, word counter, checklists, progress export, and optional AI feedback.
- AI feedback uses a separately deployed Cloudflare Worker. Follow [AI_SETUP.md](AI_SETUP.md); never put an API key in browser code or GitHub Pages. Text-only Speaking feedback cannot assess pronunciation.
- Public source links are provided for independent review. Lingua does not mirror complete provider papers.

## Format reference

The UFL–University of Danang specification describes a common Bậc 3–5 exam format, not separate B1/B2/C1 papers: Speaking has three parts in about 12 minutes; Writing has two tasks in 60 minutes (an approximately 120-word letter/email and an approximately 250-word essay). Levels in this app indicate the practice difficulty and vocabulary range, not official per-question tags. See the UFL format and sample links under “Cấu trúc & nguồn”; follow current local candidate instructions for the actual sitting.

## Run locally

Serve this folder with a static HTTP server (for example, `python -m http.server 8080`) and open `http://localhost:8080`. The vocabulary and prompt bank are fetched as local static files.

## Privacy and publication

Drafts and vocabulary review schedule are saved in this browser's local storage. AI feedback sends the task prompt and learner response to the configured Worker and Gemini API. Review the deployment controls and provider privacy settings before use. Private source files under `packs/private/` are ignored by Git.

The GitHub Pages workflow publishes the repository root on `main`. `content-pack-template.json` shows the original Writing/Speaking task format.

## Vocabulary source update · 9 November 2026

The flashcard bank now has **393 source-checked headwords**: 129 B1, 122 B2 and 142 C1. Oxford's CEFR-organised word lists support each headword's level; the site links to the source from each flipped card. Vietnamese glosses, topic labels and example sentences were written for this learner deck and are marked as Lingua-created support content, not dictionary quotations. This is a curated selection, not an exhaustive copy of Oxford's word lists.

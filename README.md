# Lingua — B1–B2–C1 English practice

A static English practice app designed for GitHub Pages. The current target is the University of Danang English exit-standard assessment on 29 November 2026, with C1 as the learner's goal. The app includes B1, B2, and C1 sample practice, answer review, explanations, a filterable mistake bank, a score estimator, and a local JSON pack importer.

## Run locally

Open `index.html` in a browser or serve this folder with any static web server. There is no build step or dependency installation.

## Current content scope

- The in-app B1/B2/C1 diagnostic questions are original Lingua practice, not official past-paper questions. Their level labels are study estimates because the official shared Bậc 3–5 sample does not tag each question by level.
- We downloaded and visually reviewed the official 2025 UFL sample PDF and its three audio parts. The PDF is retained locally under `packs/private/reference-materials/` and ignored by Git; the public app links to UFL-hosted originals rather than mirroring them.
- The resource page links to the UED sitting notice, the UFL Bậc 3–5 format and sample, and official Cambridge preparation pages for B1/B2/C1. Different providers' tasks and scores are labeled separately.
- The collected source inventory, local-only files, and remaining gaps are documented in [CONTENT_REGISTER.md](CONTENT_REGISTER.md). The official sample is a common Bậc 3–5 paper; it is not split into separately published B1, B2, and C1 papers.


## Privacy and progress

Progress and imported personal packs are stored in this browser's `localStorage` on the learner's device. There is no account, analytics, server, or cross-device sync. The export button downloads progress. The import control accepts a local JSON pack; imported content is not sent to the website. Clearing browser storage resets progress and imported packs.

The public GitHub Pages repository should contain the app, original demo content, source citations, and links. Keep private or restricted papers and audio in the learner's personal materials and import them locally only when reuse is permitted. `.gitignore` excludes `packs/private/`; two original practice packs are prepared there for local import and will not be published by Git.

The diagnostic pack contains 18 original questions (6 each at estimated B1/B2/C1 study levels), reading passages, short listening scripts read with browser text-to-speech, reference, vocabulary-in-context, sentence-insertion and dialogue items, and per-answer explanations. It is a short placement aid, not a full mock test. The Writing/Speaking pack contains 11 original prompts, including a structured C1 Speaking Part 3 topic map and follow-up questions, plus planning steps, time suggestions, and self-review checklists. These are practice resources, not actual exam papers or official scoring feedback.

## Publish with GitHub Pages

The included workflow publishes the repository root on pushes to `main`. In the repository settings, choose **Pages → Build and deployment → GitHub Actions**. No secrets are required. After deployment, verify the live home page and refresh a nested hash route.

## Remaining research

The remaining priority is to check the current UED candidate instructions and look for additional publicly released official samples. No public UED-specific past-paper bank was found in this review.
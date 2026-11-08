# B1–B2–C1 English Exam Prep — Project Handoff

## Goal

Create a web app for preparing for B1, B2, and C1 English exams. The app should help learners practise, review answers with clear explanations, revisit mistakes, and understand the exam formats and strategies.

This document carries over the **app presentation and learning flow** from the existing study app only. Do not reuse or include its Information Technology questions, six IT modules, or ten IT exam papers.

## Exam system: confirm before building the question bank

“B1, B2, C1” can refer to different exams and providers. Before collecting questions, identify which exam systems the app should cover (for example, a Vietnamese VSTEP-style exam, Cambridge English qualifications, or another provider). Do not combine their formats or scoring rules as if they were interchangeable. If the owner has not specified this yet, keep the app structure provider-neutral and label each resource with its provider and level.

## Reusable app presentation and flow

Carry over the following general interaction patterns, adapting the labels and visual identity for English learning:

- A clean, responsive home page with clear navigation and cards for levels, skills, practice sets, and study resources.
- Separate **Practise** and **Review before practising** flows. Review mode can show the question, every option, the keyed answer, and its explanation without recording an attempt.
- Timed or untimed practice, as appropriate to the selected exam. Show the timer and progress clearly when timing is enabled.
- An optional **Shuffle questions** action. Keep the original order by default; do not shuffle automatically.
- Save progress and resume at the same place after refresh or returning to the app.
- A results screen with the level/set name, score, correct/incorrect/unanswered counts, time used when relevant, and clear next actions: retry the set, retry mistakes, return to the set list, or open the mistake bank.
- A mistake bank separated by exam/provider, level, and practice set. Make it usable even when it contains many questions; provide filters and avoid forcing the learner to scroll through one enormous list.
- Explanations should be revealed on demand during review/results, rather than displayed everywhere by default. They must explain why the answer fits and, where useful, why common alternatives do not.
- Retain the existing project's general visual polish and responsive layout, but create English-learning labels and identity. Do not copy legacy question text, answer keys, scores, logos, or IT-specific UI wording blindly.

## Content areas to support

Keep the content model flexible enough for the confirmed exam provider(s). Possible areas include:

- Exam overview: sections, task types, duration, scoring, and level expectations.
- Listening, Reading, Writing, and Speaking, when included in the selected exam.
- Task-format guides with examples and step-by-step response methods.
- Practice questions and full mock exams.
- Strategy notes, common mistakes, useful language, and concise tips.
- A source/reference record for each imported or authored item.

These are app categories, not a claim that every provider uses the same four-skill structure. Match them to the selected exam specification.

## Accuracy and source requirements

- Build a source register before importing materials: provider, exam name, level, year/session if known, URL or supplied file, access date, and notes about reuse rights.
- Prefer official sample papers, official specifications, and materials the owner supplies or is permitted to use. YouTube can support strategy notes, but record the channel/video title, link, and the specific claim supported.
- Do not claim to have collected “all past papers” unless the source set and coverage have been checked and documented. Show gaps and uncertain years openly.
- Preserve source wording and answer choices carefully when reproducing a permitted paper. Do not silently repair ambiguous questions: flag them for review and document any correction.
- Explanations must be specific to the question and verified against an authoritative source or sound language reasoning. Do not use generic filler explanations.
- Keep answer keys and explanations linked to stable question IDs so that shuffled order does not change the correct answer.

## Suggested content structure

Keep content separate from the user interface. Each resource should record at least:

```text
provider, level, skill, set_id, question_id, question_type,
prompt, options (if applicable), answer, explanation,
source, year/session, review_status
```

Writing and speaking prompts may need different fields (task instructions, rubric, sample response, and rubric-based notes). Avoid forcing every task into a multiple-choice schema.

## Progress and privacy

- Keep per-learner progress separate by provider, level, and set.
- If cross-device sync is used, explain plainly what the personal code identifies and what data is synced. Never expose database secret keys in the browser or commit them to the repository.
- Do not collect email, IP address, or device details unless they are necessary, disclosed, and explicitly approved for the app.
- Provide a clear way to export or reset a learner's progress.

## Out of scope for this handoff

- All legacy IT question banks, IT modules, and IT exam sets.
- Automatically importing or inventing exam questions without verifiable sources.
- Choosing a specific B1/B2/C1 exam provider before the owner confirms it.
- Publishing or changing the existing IT study site.

## First implementation sequence

1. Confirm the exam provider(s), country/context, and whether the target is a specific certificate or general CEFR practice.
2. Make a source inventory by provider, level, skill/task, and year; identify missing papers and reuse constraints.
3. Create the provider-neutral app shell and navigation using the reusable study/exam presentation patterns above.
4. Add one small, verified sample set and validate the full flow: practise, submit, review, explanation, mistake bank, refresh/resume.
5. Expand the content only after answer keys and explanations pass review.


## GitHub deployment plan

### Recommended setup

- Keep the B1–B2–C1 app in a **new, separate GitHub repository** named `b1-b2-c1`. Do not replace or mix it with the existing Information Technology study website.
- Publish it with GitHub Pages. The expected project-site address is `https://tiendung04dtvt-debug.github.io/b1-b2-c1/`.
- GitHub Pages serves the public website files. If the app later needs cross-device progress sync, use Supabase as its separate data service; do not put database secrets in the website or repository.
- Treat the source repository and published site as public. Do not commit private learner data, secret keys, or exam PDFs that are not permitted to redistribute.

### Publishing steps after the app exists

1. Create the new public repository `b1-b2-c1` under the owner's GitHub account.
2. Add the app source, verified question data, images, and a README. Keep content and interface code organized separately.
3. Configure the app's build-and-deploy workflow for GitHub Pages. For a plain HTML/CSS/JavaScript app, publish the repository root or `/docs`; for a framework that needs a build step, use a GitHub Actions Pages workflow.
4. In the repository, open **Settings → Pages**, select the configured publishing source, and save.
5. Wait for the Pages deployment to complete, open the published address, and check the home page, direct page refresh, question navigation, review/explanations, and saved progress.
6. For future changes, update the repository and let the Pages workflow publish the new version. Verify the deployment result before sharing the link.

GitHub Pages is static hosting: it can publish the client-side app, but it is not a private database or a server for secret credentials. Pages sites are publicly reachable. See the official guides: [creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [choosing a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), and [what GitHub Pages is](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

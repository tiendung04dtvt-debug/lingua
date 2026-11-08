# Lingua · content and sources register

**Updated:** 8 November 2026
**Public app:** https://tiendung04dtvt-debug.github.io/lingua/

## Current public learning material

| File | Content | Provenance |
|---|---|---|
| `packs/writing-speaking-practice.json` | 44 open tasks: 23 Writing and 21 Speaking, across estimated B1/B2/C1 practice levels | Original Lingua simulated prompts; not live exam questions and not represented as official past papers |
| `packs/source-task-index.json` | 70 source-linked guides: 10 task references matched to UFL and QNU published sample PDFs; 60 short guides linking to third-party Writing/Speaking topic banks | UFL/QNU are institutional sample papers; third-party topic collections are provider-created practice, not verified live exam questions. Full prompt text and model answers remain on the linked pages. |
| `packs/vocabulary.tsv` | 393 sourced headword flashcards: 129 B1, 122 B2, 142 C1 | Oxford CEFR wordlists support each level; Vietnamese glosses/examples are Lingua-authored study aids |
| `content-pack-template.json` | Example schema for original Writing/Speaking tasks | Template only |

Reading and Listening question-pack JSONs were removed from the current public site because the learner requested Writing/Speaking-only study. The old files may remain retrievable from prior Git history; they are absent from the current branch tree. Private reference PDFs/audio remain ignored under `packs/private/` and are not loaded by the app.

## Verified format references

| Source | What it supports | Link |
|---|---|---|
| University of Danang, University of Foreign Language Studies (UFL) | Bậc 3–5 structure: Speaking three parts/about 12 minutes; Writing two tasks/60 minutes; scoring bands | [Official format specification](https://vstep.ufl.udn.vn/CDR/Dinhdang/2024/Dinh-dang-de-thi-danh-gia-nang-luc-su-dung-tieng-Anh-tu-bac-3-den-bac-5-theo-Khung-nang-luc-ngoai-ngu-6-bac-dung-cho-Viet-Nam--2024.12.33910) |
| UFL sample paper, 2025 | Published sample showing the common Bậc 3–5 task style; it is not a live UED paper | [Official sample PDF](https://vstep.ufl.udn.vn/files/2025/2025_9_3_41_23_569_de_thi_mau_vstep_3.5.pdf) |
| Can Tho University CFLA | Institutional public resources; consult the source page for its sample materials | [CFLA resources](https://cfla.ctu.edu.vn/tai-lieu) |
| QNU, ZIM, PREP, VSTEP.edu.vn, Luyenthivstep.vn | Additional sample/practice leads for learner review; not independently treated as UED live papers | [QNU](https://qnu.edu.vn/Resources/Docs/SubDomain/ttnn/%C4%90%E1%BB%81%20thi%20minh%20h%E1%BB%8Da%20b%E1%BA%ADc%203%20%C4%91%E1%BA%BFn%205.pdf), [ZIM](https://zim.vn/de-thi-vstep), [PREP](https://prepedu.com/vi/blog/de-thi-mau-vstep), [VSTEP.edu.vn](https://vstep.edu.vn/de-thi-mau-chung-chi-b1-b2-c1-tieng-anh-theo-dinh-dang-vstep), [Luyenthivstep](https://luyenthivstep.vn/de-thi-vstep) |

## Additional Writing/Speaking banks reviewed on 9 November 2026

Luyenthivstep.vn publishes topic collections for Speaking Parts 1–3, formal Writing Task 1, Writing Task 2, and informal Task 1. Lingua stores concise topic guides linked to the source pages; it does not claim they are administered exam prompts. See the [Speaking collection](https://luyenthivstep.vn/de-thi-vstep), [formal letters](https://luyenthivstep.vn/cam-nang-vstep/top-10-de-kinh-dien-vstep-writing-part-1), [essay topics](https://luyenthivstep.vn/cam-nang-vstep/top-10-de-kinh-dien-vstep-writing-part-2), and [informal letter topics](https://luyenthivstep.vn/cam-nang-vstep/20-de-vstep-writing-part-1-moi-nhat-nam-2026-p1). ZIM describes its four-skill sample as designed to simulate the official format and difficulty; it is modeled practice, not a live paper.

## Format summary used by Lingua

- **Speaking:** 3 parts: social interaction (questions across two topics), solution discussion (choose and justify one of three options), and topic development (develop a position and respond to follow-up questions), around 12 minutes total.
- **Writing:** 2 tasks in 60 minutes. Task 1 is a letter/email of about 120 words; Task 2 is an essay of about 250 words and carries the larger share of the Writing score.
- **Levels:** B1, B2 and C1 describe achieved bands under the shared exam, not separate task forms. The app's per-task difficulty labels and vocabulary bands are learning estimates.

Follow the current UED candidate instructions if they differ from the published general specification.

## AI grading architecture

The static Pages app never contains the Gemini API key. `workers/gemini-proxy.js` is a sample Cloudflare Worker configured with an allowed origin, server-side API secret, and `store:false`. Follow [AI_SETUP.md](AI_SETUP.md). Until deployed and configured, the AI grader is not live. It reviews written text/transcripts and cannot evaluate Speaking pronunciation.

## Vocabulary flashcards sourced from CEFR lists (9 November 2026)

`packs/vocabulary.tsv` now contains **393 headwords**: 129 B1, 122 B2 and 142 C1. Each row names the Oxford CEFR list used for the level assignment. B1 and B2 entries are checked against the Oxford 3000 by CEFR level; selected additional B2 and C1 entries are checked against the Oxford 5000 by CEFR level. The lists give headwords, parts of speech and CEFR level; Lingua's Vietnamese glosses, topic tags and example sentences are learner-facing additions, not quotations from Oxford. The app links every card to the list that supports its CEFR label. This is a curated subset, not a claim to reproduce the complete Oxford lists.

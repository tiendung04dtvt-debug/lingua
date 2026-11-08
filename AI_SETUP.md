# Set up private AI feedback (Gemini)

The public GitHub Pages site cannot safely store a Gemini API key. Deploy `workers/gemini-proxy.js` as a Cloudflare Worker, then configure:

1. Add Worker secret `GEMINI_API_KEY` with the key from Google AI Studio. Never put this key in `app.js`, GitHub Pages, or a browser field.
2. Add Worker variable `ALLOWED_ORIGIN` with the exact site origin, for example `https://tiendung04dtvt-debug.github.io`. Do not include a trailing slash. For local development, add `http://localhost:8080` as a comma-separated allowed origin.
3. Deploy the Worker. Its route must accept `/grade`, for example `https://lingua-feedback.<account>.workers.dev/grade`.
4. In Lingua, open “Cấu trúc & nguồn”, paste the Worker `/grade` URL into the address field, and save it. This URL is stored in that browser only.

The Worker sends the learner's task prompt and answer to Gemini for feedback. The request sets `store:false`; do not submit personally identifying or sensitive information. Feedback is a study estimate, not an official VSTEP score. Speaking review currently evaluates the typed transcript only and cannot judge pronunciation or audio fluency. Add rate limits/usage limits in Cloudflare and your Google AI account before broader use.

The Worker uses Google's Gemini `generateContent` REST API with `gemini-2.0-flash` (or your chosen `GEMINI_MODEL`). If Google changes model availability, set `GEMINI_MODEL` to a supported model in Worker variables.

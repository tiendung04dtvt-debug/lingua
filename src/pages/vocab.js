// src/pages/vocab.js — Flashcard review page with CEFR-level vocabulary, spaced repetition, and keyboard navigation

import { appState, saveState, recordDailyActivity } from '../state.js';
import { esc } from '../utils.js';

export function vocabPage() {
  const { cards, vocabLevel, vocabTopic, flipped } = appState;

  const topics = ['All', ...new Set(cards.filter(c => c.level === vocabLevel).map(c => c.topic))];
  const list = cards.filter(c => c.level === vocabLevel && (vocabTopic === 'All' || c.topic === vocabTopic));
  const due = list.filter(c => (appState.cardProgress[c.id]?.due || 0) <= Date.now());

  // Find or normalize active card index
  let currentIndex = list.findIndex(c => c.id === appState.activeCard);
  if (currentIndex === -1 && list.length > 0) {
    const firstDue = list.find(c => (appState.cardProgress[c.id]?.due || 0) <= Date.now());
    if (firstDue) {
      currentIndex = list.indexOf(firstDue);
    } else {
      currentIndex = 0;
    }
    appState.activeCard = list[currentIndex]?.id || null;
  }

  const card = list[currentIndex] || null;
  const isCardDue = card ? ((appState.cardProgress[card.id]?.due || 0) <= Date.now()) : false;

  const b1Count = cards.filter(c => c.level === 'B1').length;
  const b2Count = cards.filter(c => c.level === 'B2').length;
  const c1Count = cards.filter(c => c.level === 'C1').length;

  return `
<section class="page-intro">
  <span class="eyebrow">VOCABULARY · ${cards.length} THẺ</span>
  <h1>Từ vựng để dùng được,<br><em>không chỉ để nhớ.</em></h1>
  <p>Chọn mức và chủ đề. Thử nhớ nghĩa trước khi lật thẻ, rồi đánh giá độ chắc để lên lịch ôn. Bậc CEFR được đối chiếu với danh sách Oxford 3000/5000.</p>
</section>

<div class="filters">
  <label>Mức
    <select id="vocab-level">
      ${['B1', 'B2', 'C1'].map(l => `<option value="${l}" ${l === vocabLevel ? 'selected' : ''}>${l}</option>`).join('')}
    </select>
  </label>
  <label>Chủ đề
    <select id="vocab-topic">
      ${topics.map(x => `<option value="${esc(x)}" ${x === vocabTopic ? 'selected' : ''}>${esc(x)}</option>`).join('')}
    </select>
  </label>
  <span>
    <b>${due.length}</b> thẻ đến hạn · Thẻ ${card ? currentIndex + 1 : 0} / ${list.length} trong bộ lọc (B1: ${b1Count} · B2: ${b2Count} · C1: ${c1Count})
  </span>
</div>

${card ? `
<div class="flashcard-container">
  <div class="flashcard-status-bar">
    <span class="card-counter">Thẻ <b>${currentIndex + 1}</b> / <b>${list.length}</b></span>
    ${isCardDue ? '<span class="due-badge">Đến hạn ôn</span>' : '<span class="scheduled-badge">Đã xếp lịch</span>'}
  </div>

  <article class="flashcard ${flipped ? 'is-flipped' : ''}" id="flashcard" role="button" tabindex="0" aria-label="Lật thẻ từ vựng">
    <div class="flash-front">
      <span>${card.level} · ${esc(card.topic)} <i class="flash-pos">${esc(card.pos)}</i></span>
      <h2>${esc(card.term)}</h2>
      <small>Nhấn hoặc bấm [Space] để xem nghĩa</small>
    </div>
    <div class="flash-back">
      <span>${card.level} · ${esc(card.topic)} <i class="flash-pos">${esc(card.pos)}</i></span>
      <h2>${esc(card.meaning)}</h2>
      <p>${esc(card.example)}</p>
      <a class="flash-source" href="${esc(card.sourceUrl)}" target="_blank" rel="noopener">CEFR: ${esc(card.sourceLabel)} · Mở danh sách gốc ↗</a>
    </div>
  </article>

  <div class="flash-actions">
    <button class="secondary nav-btn" data-vocab-nav="prev" title="Thẻ trước [←]">← Trước</button>
    <button class="secondary flip-btn" data-flip>${flipped ? 'Ẩn nghĩa' : 'Lật thẻ'}</button>
    <button class="secondary nav-btn" data-vocab-nav="next" title="Thẻ tiếp [→]">Tiếp theo →</button>
  </div>

  ${flipped ? `
  <div class="rate-actions">
    <button class="rate again" data-rate="again">
      <span>Chưa nhớ</span>
      <kbd>1</kbd>
    </button>
    <button class="rate known" data-rate="known">
      <span>Đã nhớ</span>
      <kbd>2</kbd>
    </button>
  </div>` : ''}

  <div class="keyboard-hints">
    <small>Phím tắt: <kbd>Space</kbd> lật · <kbd>←</kbd> <kbd>→</kbd> chuyển thẻ · <kbd>1</kbd> chưa nhớ · <kbd>2</kbd> đã nhớ</small>
  </div>
</div>
` : '<div class="panel">Không có thẻ ở lựa chọn này.</div>'}

<p class="privacy-hint">
  Nguồn xác nhận mục từ và mức CEFR: Oxford. Nghĩa tiếng Việt và câu ví dụ được Lingua biên soạn để học, không phải trích nguyên văn từ từ điển. B1/B2/C1 là mức từ trong danh sách Oxford, không phải nhãn chính thức của từng câu hỏi VSTEP.
</p>
`;
}

/**
 * Handle spaced repetition rating
 */
export function rateCard(which) {
  if (!appState.activeCard) return;

  const cardId = appState.activeCard;
  const p = appState.cardProgress[cardId] || { interval: 0 };

  if (which === 'known') {
    p.interval = Math.min(30, Math.max(1, (p.interval * 2) || 1));
    p.due = Date.now() + (p.interval * 86400000);
  } else {
    p.interval = 0;
    p.due = Date.now();
  }

  appState.cardProgress[cardId] = p;
  recordDailyActivity();

  // Move to next card after rating
  nextCard();
}

/**
 * Move to next card in filtered list
 */
export function nextCard() {
  const { cards, vocabLevel, vocabTopic } = appState;
  const list = cards.filter(c => c.level === vocabLevel && (vocabTopic === 'All' || c.topic === vocabTopic));
  if (list.length === 0) return;

  let idx = list.findIndex(c => c.id === appState.activeCard);
  idx = (idx + 1) % list.length;
  appState.activeCard = list[idx].id;
  appState.flipped = false;
}

/**
 * Move to previous card in filtered list
 */
export function prevCard() {
  const { cards, vocabLevel, vocabTopic } = appState;
  const list = cards.filter(c => c.level === vocabLevel && (vocabTopic === 'All' || c.topic === vocabTopic));
  if (list.length === 0) return;

  let idx = list.findIndex(c => c.id === appState.activeCard);
  idx = (idx - 1 + list.length) % list.length;
  appState.activeCard = list[idx].id;
  appState.flipped = false;
}

/**
 * Flip card
 */
export function toggleFlip() {
  appState.flipped = !appState.flipped;
}


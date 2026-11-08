// src/utils.js — Shared utility functions

/**
 * HTML-escape a string to prevent XSS in innerHTML contexts.
 */
export function esc(s = '') {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c]));
}

/**
 * Show a brief toast notification.
 */
export function toast(s) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = s;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2600);
}

/**
 * Count words in a string.
 */
export function wordCount(s = '') {
  return (String(s).trim().match(/\S+/g) || []).length;
}

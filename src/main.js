// src/main.js — Application entry point, dark mode initialization, keyboard shortcuts, and data loading

import { PACK_URL, VOCAB_URL, VOCAB_SOURCES } from './constants.js';
import { appState, loadState, saveState, updateSidebarProgress } from './state.js';
import { go, render } from './router.js';
import { exportProgress, importProgress } from './wire.js';
import { rateCard, nextCard, prevCard, toggleFlip } from './pages/vocab.js';

/**
 * Initialize theme (dark / light mode)
 */
function initTheme() {
  const savedTheme = localStorage.getItem('lingua-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

  applyTheme(isDark);

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    toggleBtn.onclick = () => {
      const willBeDark = !document.documentElement.classList.contains('dark');
      applyTheme(willBeDark);
      localStorage.setItem('lingua-theme', willBeDark ? 'dark' : 'light');
      toggleBtn.textContent = willBeDark ? '☀️' : '🌙';
    };
  }

  // Listen to OS theme changes if user hasn't set explicit preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('lingua-theme')) {
        applyTheme(e.matches);
        if (toggleBtn) toggleBtn.textContent = e.matches ? '☀️' : '🌙';
      }
    });
  }
}

function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

/**
 * Global keyboard shortcuts handler
 */
function initKeyboardShortcuts() {
  window.addEventListener('keydown', e => {
    // Only handle keyboard navigation on vocabulary page
    if (appState.page !== 'vocabulary') return;

    // Do not trigger if typing in an input, textarea, or contenteditable
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'textarea' || tag === 'input' || e.target.isContentEditable) return;

    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleFlip();
      render();
    } else if (e.key === 'ArrowRight' || e.key === 'l' || e.key === 'L') {
      e.preventDefault();
      nextCard();
      render();
    } else if (e.key === 'ArrowLeft' || e.key === 'h' || e.key === 'H') {
      e.preventDefault();
      prevCard();
      render();
    } else if (e.key === '1' && appState.flipped) {
      e.preventDefault();
      rateCard('again');
      render();
    } else if (e.key === '2' && appState.flipped) {
      e.preventDefault();
      rateCard('known');
      render();
    }
  });
}

/**
 * Initialize Import & Export buttons
 */
function initImportExport() {
  const exportBtn = document.getElementById('export-btn');
  if (exportBtn) {
    exportBtn.onclick = exportProgress;
  }

  const importBtn = document.getElementById('import-btn');
  const importFileInput = document.getElementById('import-file-input');

  if (importBtn && importFileInput) {
    importBtn.onclick = () => {
      importFileInput.value = '';
      importFileInput.click();
    };

    importFileInput.onchange = e => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        importProgress(file);
      }
    };
  }
}

/**
 * Fetch learning materials and populate appState
 */
async function loadMaterials() {
  const viewEl = document.getElementById('view');
  if (viewEl) {
    viewEl.innerHTML = `
      <section class="panel loading-panel">
        <h2>Đang tải học liệu…</h2>
        <p>Vui lòng đợi trong giây lát.</p>
      </section>
    `;
  }

  try {
    const version = '20261109-v11';
    const [p, v, s] = await Promise.all([
      fetch(`${PACK_URL}?v=${version}`),
      fetch(`${VOCAB_URL}?v=${version}`),
      fetch(`packs/source-task-index.json?v=${version}`)
    ]);

    if (!p.ok || !v.ok || !s.ok) {
      throw new Error('Không thể tải các tệp học liệu từ máy chủ');
    }

    const pack = await p.json();
    const sourcePack = await s.json();

    appState.tasks = [
      ...(pack.open_tasks || []),
      ...(sourcePack.tasks || [])
    ];

    const vocabText = await v.text();
    appState.cards = vocabText
      .trim()
      .split(/\r?\n/)
      .filter(Boolean)
      .map(line => {
        const [level, topic, term, pos, meaning, example, sourceLabel] = line.split('|');
        return {
          id: `${level}:${(term || '').toLowerCase()}`,
          level,
          topic,
          term,
          pos,
          meaning,
          example,
          sourceLabel,
          sourceUrl: VOCAB_SOURCES[sourceLabel] || ''
        };
      });

    // Set initial page from hash or default to home
    appState.page = location.hash.slice(1) || 'home';
    render();
  } catch (err) {
    console.error('Error loading materials:', err);
    if (viewEl) {
      viewEl.innerHTML = `
        <section class="panel error-panel">
          <h2>Không tải được học liệu</h2>
          <p>Kiểm tra kết nối mạng rồi tải lại trang (${err.message}).</p>
        </section>
      `;
    }
  }
}

/**
 * Application boot sequence
 */
function initApp() {
  // 1. Hydrate state from localStorage
  Object.assign(appState, loadState());

  // 2. Setup theme
  initTheme();

  // 3. Setup global listeners
  initKeyboardShortcuts();
  initImportExport();

  // 4. Hash change router listener
  window.addEventListener('hashchange', () => {
    appState.page = location.hash.slice(1) || 'home';
    render();
  });

  // 5. Initial sidebar progress update
  updateSidebarProgress();

  // 6. Fetch materials & render first view
  loadMaterials();
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}


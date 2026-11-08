// src/wire.js — DOM event binding and user interaction handlers

import { appState, saveState } from './state.js';
import { go, render } from './router.js';
import { grade } from './pages/tasks.js';
import { rateCard, nextCard, prevCard, toggleFlip } from './pages/vocab.js';
import { wordCount, toast } from './utils.js';

export function wire() {
  // Navigation buttons (e.g. data-go="writing")
  document.querySelectorAll('[data-go]').forEach(b => {
    b.onclick = () => go(b.dataset.go);
  });

  // Sidebar navigation links
  document.querySelectorAll('.nav-link').forEach(a => {
    a.onclick = e => {
      e.preventDefault();
      go(a.dataset.page);
    };
  });

  // Task filters: Level, Kind, Origin
  const levelSelect = document.getElementById('task-level');
  if (levelSelect) {
    levelSelect.onchange = () => {
      appState.taskLevel = levelSelect.value;
      render();
    };
  }

  const kindSelect = document.getElementById('task-kind');
  if (kindSelect) {
    kindSelect.onchange = () => {
      appState.taskKind = kindSelect.value;
      render();
    };
  }

  const originSelect = document.getElementById('task-origin');
  if (originSelect) {
    originSelect.onchange = () => {
      appState.taskOrigin = originSelect.value;
      render();
    };
  }

  // Task brief textarea inputs
  document.querySelectorAll('[data-brief]').forEach(t => {
    t.oninput = () => {
      appState.taskBriefs[t.dataset.brief] = t.value;
      saveState();
    };
  });

  // Task response textarea inputs & word counts
  document.querySelectorAll('[data-response]').forEach(t => {
    t.oninput = () => {
      const taskId = t.dataset.response;
      appState.taskResponses[taskId] = t.value;
      saveState();

      const c = document.getElementById('count-' + taskId);
      if (c) {
        c.textContent = `${wordCount(t.value)} từ · đã lưu`;
      }
    };
  });

  // AI Grading buttons
  document.querySelectorAll('[data-grade]').forEach(b => {
    b.onclick = () => grade(b.dataset.grade);
  });

  // Vocabulary filters
  const vl = document.getElementById('vocab-level');
  if (vl) {
    vl.onchange = () => {
      appState.vocabLevel = vl.value;
      appState.vocabTopic = 'All';
      appState.activeCard = null;
      appState.flipped = false;
      render();
    };
  }

  const vt = document.getElementById('vocab-topic');
  if (vt) {
    vt.onchange = () => {
      appState.vocabTopic = vt.value;
      appState.activeCard = null;
      appState.flipped = false;
      render();
    };
  }

  // Flashcard card click to flip
  const fc = document.getElementById('flashcard');
  if (fc) {
    fc.onclick = e => {
      if (e.target.closest('.flash-source')) return;
      toggleFlip();
      render();
    };
    fc.onkeydown = e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggleFlip();
        render();
      }
    };
  }

  // Flashcard flip button
  const flipBtn = document.querySelector('[data-flip]');
  if (flipBtn) {
    flipBtn.onclick = () => {
      toggleFlip();
      render();
    };
  }

  // Flashcard prev/next buttons
  document.querySelectorAll('[data-vocab-nav]').forEach(btn => {
    btn.onclick = () => {
      const dir = btn.dataset.vocabNav;
      if (dir === 'next') nextCard();
      else prevCard();
      render();
    };
  });

  // Flashcard rating buttons
  document.querySelectorAll('[data-rate]').forEach(b => {
    b.onclick = e => {
      e.stopPropagation();
      rateCard(b.dataset.rate);
      render();
    };
  });

  // AI Endpoint configuration
  const saveEndpointBtn = document.querySelector('[data-save-endpoint]');
  if (saveEndpointBtn) {
    saveEndpointBtn.onclick = () => {
      const input = document.getElementById('ai-endpoint');
      if (input) {
        appState.aiEndpoint = input.value.trim().replace(/\/$/, '');
        saveState();
        toast('Đã lưu địa chỉ bộ chấm trên thiết bị này');
      }
    };
  }
}

/**
 * Export learner progress to a JSON download
 */
export function exportProgress() {
  const data = {
    app: 'Lingua Writing & Speaking',
    version: '20261109-v11',
    exported_at: new Date().toISOString(),
    taskResponses: appState.taskResponses,
    taskBriefs: appState.taskBriefs,
    cardProgress: appState.cardProgress,
    dailyCards: appState.dailyCards,
    studyStreak: appState.studyStreak,
    lastStudyDate: appState.lastStudyDate,
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `lingua-progress-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  toast('Đã xuất file tiến độ học tập');
}

/**
 * Import learner progress from an uploaded JSON file
 */
export function importProgress(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || typeof data !== 'object') {
        throw new Error('Định dạng file không hợp lệ');
      }

      let taskCount = 0;
      let cardCount = 0;

      // Merge task responses
      if (data.taskResponses && typeof data.taskResponses === 'object') {
        Object.entries(data.taskResponses).forEach(([k, v]) => {
          if (v && typeof v === 'string') {
            appState.taskResponses[k] = v;
            taskCount++;
          }
        });
      }

      // Merge task briefs
      if (data.taskBriefs && typeof data.taskBriefs === 'object') {
        Object.assign(appState.taskBriefs, data.taskBriefs);
      }

      // Merge card progress
      if (data.cardProgress && typeof data.cardProgress === 'object') {
        Object.entries(data.cardProgress).forEach(([k, v]) => {
          if (v && typeof v === 'object') {
            appState.cardProgress[k] = v;
            cardCount++;
          }
        });
      }

      // Merge streak if higher
      if (typeof data.studyStreak === 'number' && data.studyStreak > (appState.studyStreak || 0)) {
        appState.studyStreak = data.studyStreak;
      }
      if (data.lastStudyDate) {
        appState.lastStudyDate = data.lastStudyDate;
      }

      saveState();
      render();
      toast(`Đã nhập thành công ${taskCount} bài làm và ${cardCount} thẻ ôn!`);
    } catch (err) {
      toast(`Lỗi khi nhập file: ${err.message}`);
    }
  };

  reader.onerror = () => {
    toast('Không đọc được file tải lên');
  };

  reader.readAsText(file);
}


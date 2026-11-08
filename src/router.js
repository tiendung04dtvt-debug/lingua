// src/router.js — Hash routing, rendering views, and breadcrumb updates

import { appState, updateSidebarProgress } from './state.js';
import { homePage } from './pages/home.js';
import { taskLibrary } from './pages/tasks.js';
import { vocabPage } from './pages/vocab.js';
import { resourcesPage } from './pages/resources.js';
import { wire } from './wire.js';

export function go(p) {
  appState.page = p;
  location.hash = p;
  render();
}

export function render() {
  // Update sidebar active link
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.dataset.page === appState.page);
  });

  const labels = {
    home: 'Tổng quan',
    writing: 'Writing',
    speaking: 'Speaking',
    vocabulary: 'Flashcards',
    resources: 'Cấu trúc & nguồn',
  };

  const crumb = document.getElementById('crumb');
  if (crumb) {
    crumb.textContent = labels[appState.page] || labels.home;
  }

  const root = document.getElementById('view');
  if (!root) return;

  if (appState.page === 'writing' || appState.page === 'speaking') {
    root.innerHTML = taskLibrary(appState.page === 'writing' ? 'Writing' : 'Speaking');
  } else if (appState.page === 'vocabulary') {
    root.innerHTML = vocabPage();
  } else if (appState.page === 'resources') {
    root.innerHTML = resourcesPage();
  } else {
    root.innerHTML = homePage();
  }

  // Update sidebar daily progress bar
  updateSidebarProgress();

  // Attach event handlers
  wire();
}


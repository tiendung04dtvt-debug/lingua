// src/state.js — Single source of truth for all mutable app state

export const STORE_KEY = 'lingua-write-speak-v1';
export const DAILY_GOAL = 10;

export const appState = {
  // --- persistent (saved to localStorage) ---
  taskResponses: {},
  taskBriefs: {},
  cardProgress: {},
  dailyCards: { date: '', count: 0 },
  studyStreak: 0,
  lastStudyDate: '',
  aiEndpoint: '',

  // --- in-memory (session only) ---
  tasks: [],
  cards: [],
  page: 'home',
  taskLevel: 'All',
  taskSkill: 'All',
  taskKind: 'All',
  taskOrigin: 'All',
  vocabLevel: 'B1',
  vocabTopic: 'All',
  vocabIndex: 0,
  flipped: false,
  activeCard: null,
};

/**
 * Format today's date as YYYY-MM-DD
 */
export function getTodayString() {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Calculate streak update when activity occurs today
 */
export function recordDailyActivity() {
  const today = getTodayString();
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  if (appState.dailyCards.date !== today) {
    // New day
    if (appState.lastStudyDate === yesterday) {
      appState.studyStreak = (appState.studyStreak || 0) + 1;
    } else if (appState.lastStudyDate !== today) {
      appState.studyStreak = 1;
    }
    appState.dailyCards = { date: today, count: 1 };
    appState.lastStudyDate = today;
  } else {
    // Same day
    appState.dailyCards.count = (appState.dailyCards.count || 0) + 1;
    if (!appState.studyStreak || appState.studyStreak < 1) {
      appState.studyStreak = 1;
    }
    appState.lastStudyDate = today;
  }

  saveState();
  updateSidebarProgress();
}

/**
 * Update the sidebar daily progress bar and label
 */
export function updateSidebarProgress() {
  const bar = document.getElementById('daily-progress');
  const label = document.getElementById('daily-label');
  if (!bar || !label) return;

  const today = getTodayString();
  const count = (appState.dailyCards && appState.dailyCards.date === today) ? appState.dailyCards.count : 0;
  const pct = Math.min(100, Math.round((count / DAILY_GOAL) * 100));

  bar.style.width = `${pct}%`;

  const streakText = appState.studyStreak > 1 ? ` · Chuỗi ${appState.studyStreak} ngày 🔥` : '';
  label.textContent = `${count}/${DAILY_GOAL} thẻ hôm nay${streakText}`;
}

/**
 * Load persisted state from localStorage, merging defaults.
 */
export function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
    const today = getTodayString();
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

    const merged = Object.assign(
      {
        taskResponses: {},
        taskBriefs: {},
        cardProgress: {},
        dailyCards: { date: today, count: 0 },
        studyStreak: 0,
        lastStudyDate: '',
        aiEndpoint: '',
      },
      saved
    );

    // If last study date is older than yesterday, reset streak
    if (merged.lastStudyDate && merged.lastStudyDate !== today && merged.lastStudyDate !== yesterday) {
      merged.studyStreak = 0;
    }

    return merged;
  } catch {
    return {
      taskResponses: {},
      taskBriefs: {},
      cardProgress: {},
      dailyCards: { date: getTodayString(), count: 0 },
      studyStreak: 0,
      lastStudyDate: '',
      aiEndpoint: '',
    };
  }
}

/**
 * Persist the relevant parts of appState to localStorage.
 */
export function saveState() {
  try {
    localStorage.setItem(
      STORE_KEY,
      JSON.stringify({
        taskResponses: appState.taskResponses,
        taskBriefs: appState.taskBriefs,
        cardProgress: appState.cardProgress,
        dailyCards: appState.dailyCards,
        studyStreak: appState.studyStreak,
        lastStudyDate: appState.lastStudyDate,
        aiEndpoint: appState.aiEndpoint,
      })
    );
  } catch (err) {
    console.error('Failed to save state to localStorage:', err);
  }
}

// src/pages/tasks.js — Writing & Speaking practice libraries, card rendering, and AI evaluation

import { appState, saveState } from '../state.js';
import { esc, toast, wordCount } from '../utils.js';

export function taskLibrary(skill) {
  const { tasks, taskLevel, taskOrigin, taskKind } = appState;

  // Filter tasks based on skill, level, origin, and kind
  const subset = tasks.filter(t => {
    if (t.skill !== skill) return false;
    if (taskLevel !== 'All' && t.level !== taskLevel) return false;
    if (taskOrigin === 'source' && !t.source_url) return false;
    if (taskOrigin === 'lingua' && !!t.source_url) return false;
    if (taskKind !== 'All') {
      const kindStr = t.part || t.task_type || '';
      if (!kindStr.includes(taskKind)) return false;
    }
    return true;
  });

  const availableKinds = [...new Set(
    tasks
      .filter(t => t.skill === skill)
      .map(t => t.part || t.task_type)
      .filter(Boolean)
  )];

  const levelOptions = ['All', 'B1', 'B2', 'C1', 'Bậc 3–5', 'Nguồn ngoài'];

  return `
<section class="page-intro">
  <span class="eyebrow">LUYỆN ${skill.toUpperCase()}</span>
  <h1>${skill === 'Writing' ? 'Viết rõ ý, đúng yêu cầu.' : 'Nói mạch lạc, có lập luận.'}</h1>
  <p>Có bài mô phỏng và thẻ dẫn tới đề mẫu/ngân hàng đề bên ngoài. Với thẻ nguồn, mở đề đầy đủ trước khi viết rồi đối chiếu bài mẫu ngay tại nơi phát hành.</p>
</section>

<div class="filters">
  <label>Mức
    <select id="task-level">
      ${levelOptions.map(l => `<option value="${l}" ${l === taskLevel ? 'selected' : ''}>${l === 'All' ? 'Tất cả' : l}</option>`).join('')}
    </select>
  </label>
  <label>Dạng
    <select id="task-kind">
      <option value="All" ${taskKind === 'All' ? 'selected' : ''}>Tất cả dạng</option>
      ${availableKinds.map(x => `<option value="${esc(x)}" ${x === taskKind ? 'selected' : ''}>${esc(x)}</option>`).join('')}
    </select>
  </label>
  <label>Nguồn
    <select id="task-origin">
      <option value="All" ${taskOrigin === 'All' ? 'selected' : ''}>Tất cả bài</option>
      <option value="source" ${taskOrigin === 'source' ? 'selected' : ''}>Đề mẫu / nguồn ngoài</option>
      <option value="lingua" ${taskOrigin === 'lingua' ? 'selected' : ''}>Mô phỏng Lingua</option>
    </select>
  </label>
  <span>${subset.length} mục · ${subset.filter(t => t.source_url).length} có nguồn</span>
</div>

<div class="task-list">
  ${subset.length > 0 ? subset.map(taskCard).join('') : '<div class="panel">Chưa có bài phù hợp với bộ lọc này.</div>'}
</div>
`;
}

export function taskCard(t) {
  const saved = appState.taskResponses[t.task_id] || '';
  const brief = appState.taskBriefs[t.task_id] || '';
  const fromSource = !!t.source_url;
  const mins = t.time_minutes || (t.part === 'Task 2' ? 40 : 20);
  const levelClass = fromSource
    ? (t.level === 'Bậc 3–5' ? 'official' : 'external')
    : (t.level || '').toLowerCase();

  return `
<article class="task-card ${fromSource ? 'linked-task' : ''}" id="card-${esc(t.task_id)}">
  <div class="task-meta">
    <span class="level ${levelClass}">${esc(t.level)}</span>
    <span>${esc(t.part || t.task_type || '')}</span>
    <span>${mins} phút</span>
    ${t.minimum_words ? `<span>tối thiểu ${t.minimum_words} từ</span>` : ''}
    <span class="${fromSource ? 'source-badge' : 'sim-tag'}">${fromSource ? 'ĐỀ MẪU / NGUỒN NGOÀI' : 'MÔ PHỎNG LINGUA'}</span>
  </div>

  <h3>${esc(t.task_type || t.part || 'Nhiệm vụ')}</h3>
  <p class="prompt">${esc(t.prompt)}</p>

  ${fromSource ? `
  <div class="source-actions">
    <a href="${esc(t.source_file_url || t.source_url)}" target="_blank" rel="noopener">Mở đề và bài mẫu gốc ↗</a>
    <small>${esc(t.source_name || 'Nguồn công khai')} · ${esc(t.source_note || 'Mô tả trong Lingua đã được rút gọn; nội dung đầy đủ ở trang nguồn.')}</small>
  </div>
  <label class="brief-label">Ý bắt buộc trong đề <small>(ghi ngắn gọn để AI chấm đúng yêu cầu)</small>
    <textarea class="brief-input" data-brief="${esc(t.task_id)}" placeholder="Ví dụ: nêu lý do, kể một khó khăn, đề xuất chuyến đi tiếp theo…">${esc(brief)}</textarea>
  </label>` : ''}

  ${t.planning_steps?.length ? `
  <details>
    <summary>Gợi ý lập dàn ý</summary>
    <ul>${t.planning_steps.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
  </details>` : ''}

  <textarea data-response="${esc(t.task_id)}" placeholder="${fromSource ? 'Viết bài của bạn tại đây…' : 'Viết bài của bạn ở đây…'}">${esc(saved)}</textarea>

  <div class="response-tools">
    <span id="count-${esc(t.task_id)}">${wordCount(saved)} từ${saved ? ' · đã lưu' : ''}</span>
    <span>${saved ? 'Đã lưu tự động' : 'Bài làm lưu trên thiết bị này'}</span>
    <button class="secondary small" data-grade="${esc(t.task_id)}">Nhận xét chi tiết bằng AI</button>
  </div>

  ${t.self_review?.length ? `
  <details>
    <summary>Checklist tự đối chiếu</summary>
    <ul>${t.self_review.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
  </details>` : ''}

  <div id="feedback-${esc(t.task_id)}"></div>
</article>
`;
}

export async function grade(id) {
  const t = appState.tasks.find(x => x.task_id === id);
  const text = appState.taskResponses[id] || '';
  const box = document.getElementById('feedback-' + id);
  if (!box) return;

  if (!text.trim()) {
    toast('Viết hoặc dán câu trả lời trước nhé');
    return;
  }

  if (!appState.aiEndpoint) {
    box.innerHTML = `
<div class="feedback">
  Chưa cấu hình bộ chấm AI. Vào trang “Cấu trúc &amp; nguồn” để lưu địa chỉ Worker an toàn. Bạn vẫn có thể tự đối chiếu checklist của đề.
</div>`;
    return;
  }

  box.innerHTML = '<div class="feedback">Đang đọc bài và chuẩn bị nhận xét…</div>';

  try {
    const prompt = appState.taskBriefs[id]
      ? `${t.prompt}\n\nCác ý chính từ đề gốc do người học ghi lại:\n${appState.taskBriefs[id]}`
      : t.prompt;

    const res = await fetch(appState.aiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        skill: t.skill,
        level: t.level,
        part: t.part || t.task_type,
        prompt,
        response: text,
        word_count: wordCount(text)
      })
    });

    const data = await res.json();
    if (!res.ok || data.error) {
      throw Error(data.error || (`Máy chấm trả về mã lỗi ${res.status}`));
    }

    box.innerHTML = renderFeedback(data);
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } catch (e) {
    box.innerHTML = `<div class="feedback error">Không gọi được bộ chấm: ${esc(e.message)}. Kiểm tra URL Worker và cấu hình máy chủ.</div>`;
  }
}

export function renderFeedback(d) {
  let x = d.result ?? d;
  if (typeof x === 'string') {
    try {
      x = JSON.parse(x);
    } catch {
      return `<div class="feedback"><pre>${esc(x)}</pre></div>`;
    }
  }

  const scores = x.scores || {};

  return `
<div class="feedback">
  <div class="feedback-top">
    <b>Nhận xét học tập · ${esc(x.estimated_level || '')}</b>
    <span>Ước lượng ${esc(x.overall ?? '—')}/10</span>
  </div>

  <div class="score-grid">
    ${Object.entries(scores).map(([k, v]) => `
      <div>
        <small>${esc(k)}</small>
        <b>${esc(typeof v === 'object' ? v.score : v)}</b>
        <p>${esc(typeof v === 'object' ? v.comment : '')}</p>
      </div>
    `).join('')}
  </div>

  ${x.strengths?.length ? `
  <h4>Điểm đang làm tốt</h4>
  <ul>${x.strengths.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : ''}

  ${x.priority_fixes?.length ? `
  <h4>Ưu tiên sửa</h4>
  <ul>${x.priority_fixes.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : ''}

  ${x.corrections?.length ? `
  <h4>Sửa lỗi cụ thể</h4>
  <div class="corrections">
    ${x.corrections.map(i => `
      <p>
        <del>${esc(i.original || '')}</del> → <b>${esc(i.corrected || '')}</b>
        <small>${esc(i.reason || '')}</small>
      </p>
    `).join('')}
  </div>` : ''}

  ${x.improved_version ? `
  <details>
    <summary>Bản tham khảo đã chỉnh sửa</summary>
    <p>${esc(x.improved_version)}</p>
  </details>` : ''}

  ${x.next_steps?.length ? `
  <h4>Bài tập tiếp theo</h4>
  <ul>${x.next_steps.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : ''}

  <small>${esc(x.pronunciation_note || 'Điểm số do AI ước lượng, không thay thế giám khảo.')}</small>
</div>`;
}


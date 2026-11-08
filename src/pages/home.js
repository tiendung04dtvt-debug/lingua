// src/pages/home.js — Home / overview page

import { appState } from '../state.js';
import { esc } from '../utils.js';

export function homePage() {
  const { tasks, cards } = appState;
  const w = tasks.filter(t => t.skill === 'Writing').length;
  const s = tasks.filter(t => t.skill === 'Speaking').length;
  const linked = tasks.filter(t => t.source_url).length;
  const done = Object.keys(appState.taskResponses).length;

  return `
<section class="hero">
  <div>
    <span class="eyebrow">LỘ TRÌNH VSTEP · BẬC 3–5</span>
    <h1>Luyện đúng kỹ năng,<br><em>tiến gần mục tiêu C1.</em></h1>
    <p>Writing, Speaking và từ vựng với bài mô phỏng của Lingua cùng các đường dẫn tới đề mẫu và ngân hàng luyện có nguồn để tự viết, tự đối chiếu.</p>
    <div class="actions">
      <button class="primary" data-go="writing">Bắt đầu viết</button>
      <button class="secondary" data-go="speaking">Luyện nói</button>
    </div>
  </div>
  <div class="hero-mark">L<span>.</span></div>
</section>

<section class="stats">
  <article><b>${w}</b><span>bài Viết &amp; nguồn luyện</span></article>
  <article><b>${s}</b><span>bài Nói &amp; nguồn luyện</span></article>
  <article><b>${cards.length}</b><span>flashcard B1–C1</span></article>
  <article><b>${done}</b><span>bài đã lưu</span></article>
</section>

<div class="notice">
  <b>${linked} đường dẫn học liệu có nguồn</b>
  <span>10 nhiệm vụ tham chiếu từ hai đề mẫu PDF của trường đã kiểm tra, cộng 60 mục dẫn đến bộ đề/bài mẫu bên thứ ba. Thẻ ghi rõ loại nguồn; mục ngoài mở đề đầy đủ và bài mẫu tại trang phát hành. Không gắn nhãn đề thi thật.</span>
</div>

<section class="section-head">
  <div>
    <span class="eyebrow">HỌC LIỆU CỦA BẠN</span>
    <h2>Chọn một buổi luyện</h2>
  </div>
</section>

<section class="quick-grid">
  <button class="quick-card" data-go="writing">
    <span>01 / WRITING</span>
    <b>Viết có mục tiêu</b>
    <small>Thư/email Task 1, luận Task 2 và link đề nguồn</small>
    <i>↗</i>
  </button>
  <button class="quick-card" data-go="speaking">
    <span>02 / SPEAKING</span>
    <b>Nói theo ba phần</b>
    <small>30 chủ đề có mẫu tham khảo và 3 bộ đề mẫu trường</small>
    <i>↗</i>
  </button>
  <button class="quick-card" data-go="vocabulary">
    <span>03 / VOCABULARY</span>
    <b>Ôn flashcard</b>
    <small>Từ và cụm từ theo chủ đề, mức độ</small>
    <i>↗</i>
  </button>
</section>

<div class="notice">
  <b>Phân biệt mức độ</b>
  <span>B1/B2/C1 là bậc kết quả của cùng bài thi. Các ngân hàng luyện bên thứ ba có thể gắn mức tham khảo riêng; Lingua không xem các nhãn ấy là phân loại chính thức theo từng câu.</span>
</div>
`;
}

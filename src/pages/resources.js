// src/pages/resources.js — Format guide, verified sources, and AI grader configuration

import { SOURCE_URLS } from '../constants.js';
import { appState } from '../state.js';
import { esc } from '../utils.js';

export function resourcesPage() {
  return `
<section class="page-intro">
  <span class="eyebrow">FORMAT &amp; VERIFIED SOURCES</span>
  <h1>Một cấu trúc chung,<br><em>độ khó tăng dần.</em></h1>
  <p>Theo định dạng VSTEP Bậc 3–5 công bố bởi Trường ĐH Ngoại ngữ – ĐHĐN. Hãy ưu tiên hướng dẫn dự thi mới nhất từ nơi tổ chức.</p>
</section>

<div class="format-grid">
  <article class="format-card">
    <span>SPEAKING · 12 PHÚT</span>
    <h2>3 phần</h2>
    <ol>
      <li><b>Social Interaction</b><br>Trả lời 3–6 câu hỏi thuộc 2 chủ đề quen thuộc.</li>
      <li><b>Solution Discussion</b><br>Chọn giải pháp phù hợp nhất trong tình huống, giải thích và cân nhắc phương án còn lại.</li>
      <li><b>Topic Development</b><br>Phát triển chủ đề từ gợi ý, nêu lý do/ví dụ và trả lời câu hỏi tiếp nối.</li>
    </ol>
  </article>

  <article class="format-card">
    <span>WRITING · 60 PHÚT</span>
    <h2>2 nhiệm vụ</h2>
    <ol>
      <li><b>Task 1 · khoảng 20 phút</b><br>Thư/email khoảng 120 từ; đáp ứng các ý trong đề.</li>
      <li><b>Task 2 · khoảng 40 phút</b><br>Bài luận khoảng 250 từ, có lập luận và ví dụ; chiếm tỷ trọng điểm lớn hơn.</li>
    </ol>
    <p>Tiêu chí thực hành: hoàn thành yêu cầu, tổ chức ý, từ vựng và ngữ pháp.</p>
  </article>
</div>

<div class="level-grid">
  <article>
    <b>B1 · nền tảng</b>
    <p>Trả lời trực tiếp, câu đơn/ghép chắc; vốn từ quen thuộc về học tập, công việc, gia đình, sức khỏe, đi lại.</p>
  </article>
  <article>
    <b>B2 · mở rộng</b>
    <p>Giải thích nguyên nhân/hệ quả, so sánh lựa chọn, dùng collocation và câu phức tự nhiên.</p>
  </article>
  <article>
    <b>C1 · mục tiêu</b>
    <p>Thể hiện sắc thái, phản biện có cân bằng, diễn đạt chính xác và linh hoạt; từ nâng cao phải đúng ngữ cảnh.</p>
  </article>
</div>

<h2 class="subhead">Nguồn tham khảo công khai</h2>
<p class="source-note">Các liên kết mở tới tài liệu bên ngoài. Lingua không chép lại đề có bản quyền; các bài trong ngân hàng này được ghi rõ là mô phỏng.</p>

<div class="source-list">
  ${Object.entries(SOURCE_URLS).map(([n, u]) => {
    let title = 'Kho đề VSTEP';
    if (n === 'sample') title = 'UFL · Đề mẫu công khai 2025';
    else if (n === 'UFL') title = 'UFL–ĐHĐN · Cấu trúc Bậc 3–5';
    else if (n === 'CTU') title = 'ĐH Cần Thơ · Trang tài liệu';
    else if (n === 'QNU') title = 'ĐH Quy Nhơn · Nguồn trường';
    else if (n === 'ZIM') title = 'ZIM · Đề tham khảo';
    else if (n === 'PREP') title = 'PREP · Đề mẫu';
    else if (n === 'Luyen') title = 'Luyện thi VSTEP · Tổng hợp';
    else if (n === 'LuyenWriting1') title = 'Luyện thi VSTEP · Writing Part 1';
    else if (n === 'LuyenWriting2') title = 'Luyện thi VSTEP · Writing Part 2';
    else if (n === 'LuyenSpeaking') title = 'Luyện thi VSTEP · Speaking Part 1';

    return `
      <a href="${esc(u)}" target="_blank" rel="noopener">
        <span>${title}</span>
        <b>Mở nguồn ↗</b>
      </a>
    `;
  }).join('')}
</div>

<div class="ai-settings">
  <span class="eyebrow">CHẤM BÀI AI</span>
  <h2>Thiết lập bộ chấm riêng</h2>
  <p>API key phải nằm trong Worker/backend riêng, không dán trực tiếp key vào trình duyệt. Nhập URL Cloudflare Worker sau khi đã triển khai.</p>
  <div class="endpoint-row">
    <input id="ai-endpoint" type="url" placeholder="https://your-worker.example.workers.dev/grade" value="${esc(appState.aiEndpoint)}">
    <button class="primary" data-save-endpoint>Lưu địa chỉ</button>
  </div>
  <small>AI đưa ra nhận xét và ước lượng phục vụ học tập, không phải điểm thi chính thức. Nhận xét Speaking chỉ dựa trên văn bản chép lời.</small>
</div>
`;
}


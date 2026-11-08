# Lingua · báo cáo phiên bản Writing, Speaking & Vocabulary

**Cập nhật:** 08/11/2026
**Mục tiêu:** hỗ trợ tự luyện Writing và Speaking cho bài đánh giá tiếng Anh Bậc 3–5 tại ĐHĐN, với đích học tập C1.
**Trang:** https://tiendung04dtvt-debug.github.io/lingua/

## Phạm vi hiện hành

- Bản public hiện chỉ tải nội dung Writing, Speaking và từ vựng. Các ngân hàng câu hỏi Reading/Listening cũ đã được gỡ khỏi nhánh hiện hành.
- Bộ luyện gồm **44 nhiệm vụ mô phỏng do Lingua biên soạn**: 23 Writing và 21 Speaking. Chúng không phải câu hỏi đã xác minh từ kỳ thi thật. Bài làm có ô nháp, lưu cục bộ, bộ đếm từ, checklist, đồng hồ/thời lượng gợi ý và xuất tiến độ.
- Bộ từ gồm **226 flashcard**: 80 B1, 72 B2, 74 C1, phân loại theo chủ đề và lịch ôn đơn giản. Các mức là phân tầng học tập ước lượng, không phải nhãn chính thức cho đề thi.
- Trang cấu trúc tóm tắt đề Bậc 3–5: Speaking 3 phần trong khoảng 12 phút; Writing 2 nhiệm vụ trong 60 phút. B1/B2/C1 không phải ba lựa chọn đề riêng trong format này; mức chứng nhận được xác định theo kết quả bài thi.
- Có thể kết nối chấm bài AI qua Cloudflare Worker. Worker mẫu đã được thêm, nhưng dịch vụ **chưa hoạt động trực tuyến** cho đến khi chủ dự án triển khai Worker, thêm bí mật `GEMINI_API_KEY` và nhập URL Worker vào ứng dụng. Phản hồi Speaking hiện chỉ chấm transcript, không đánh giá phát âm.

## Nguồn cấu trúc và giới hạn

Nguồn cấu trúc là thông tin công khai của [UFL–ĐHĐN về định dạng VSTEP Bậc 3–5](https://vstep.ufl.udn.vn/CDR/Dinhdang/2024/Dinh-dang-de-thi-danh-gia-nang-luc-su-dung-tieng-Anh-tu-bac-3-den-bac-5-theo-Khung-nang-luc-ngoai-ngu-6-bac-dung-cho-Viet-Nam--2024.12.33910) và [đề mẫu UFL 2025](https://vstep.ufl.udn.vn/files/2025/2025_9_3_41_23_569_de_thi_mau_vstep_3.5.pdf). Các nguồn đề ngoài được liên kết để người học tự mở và đối chiếu; đề có bản quyền không được chép nguyên văn vào ngân hàng public. Thực tế kỳ thi địa phương cần theo hướng dẫn thí sinh hiện hành của đơn vị tổ chức.

## Chạy và cập nhật

Trang tĩnh dùng `index.html`, `app.js`, `styles.css`, `packs/writing-speaking-practice.json` và `packs/vocabulary.tsv`. Hướng dẫn cấu hình Gemini xem tại [AI_SETUP.md](AI_SETUP.md). Gói nội dung mẫu mới là [content-pack-template.json](content-pack-template.json). Tài liệu tham khảo cục bộ dưới `packs/private/` vẫn bị loại khỏi Git.

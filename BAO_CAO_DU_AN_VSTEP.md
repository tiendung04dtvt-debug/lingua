# Kiểm kê và triển khai Lingua VSTEP

**Cập nhật:** 08/11/2026
**Mục tiêu:** Luyện VSTEP Bậc 3–5 hướng C1 cho kỳ thi dự kiến 29/11/2026 tại ĐH Sư phạm – ĐHĐN.
**Trang:** https://tiendung04dtvt-debug.github.io/lingua/
**Repository:** https://github.com/tiendung04dtvt-debug/lingua (nhánh main)

## Nội dung trong ứng dụng

| Kỹ năng | Số lượng | Ghi chú nguồn |
|---|---:|---|
| Đọc | 170 câu / 17 bộ | 160 mục trong bốn gói UFL Đà Nẵng, QNU, ZIM, PREP; 10 mục trong gói luyện C1 Lingua. Nhãn trình độ từng câu có thể là ước lượng học tập. |
| Nghe | 35 câu | Bài luyện mô phỏng Lingua; trình duyệt đọc transcript bằng TTS, không phải audio ghi âm đề thi. |
| Viết Task 1 | 15 nhiệm vụ | 5 nhiệm vụ nguồn mẫu/luyện tập và 10 tình huống thư mô phỏng Lingua. |
| Viết Task 2 | 16 nhiệm vụ | Mẫu/luyện tập; không xác nhận là câu hỏi của kỳ thi UED tháng 11/2026. |
| Nói | 33 nhiệm vụ | 15 nhiệm vụ mẫu/luyện tập và 18 tình huống mô phỏng Lingua. |

Tổng: **205 câu trắc nghiệm (170 Đọc + 35 Nghe mô phỏng)** và **64 nhiệm vụ mở (31 Viết + 33 Nói)**. Đây không phải 6 bộ đề trọn vẹn đã xác minh. Không có mục nào được xác nhận là đề thi thật của một đợt UED cụ thể.

Ba gói Lingua mới được gắn nguồn `Đề luyện tập chuẩn cấu trúc VSTEP (TTS Audio / Simulated)` cho Nghe và `Đề luyện tập chuẩn cấu trúc VSTEP (Simulated)` cho Viết/Nói. Nội dung do Lingua biên soạn để luyện dạng thức; không tuyên bố là câu hỏi trích từ hội đồng thi.

## Đề mẫu CFLA – Đại học Cần Thơ

Đã tải PDF đề mẫu tháng 5/2015 và đáp án Reading về thư mục cá nhân `packs/private/reference-materials/official-supplementary/ctu/`. Đây là đề mẫu công bố công khai, không phải đề thi thực tế gần đây. Trang nguồn hiện được liên kết trong mục Tài liệu của ứng dụng. Nội dung câu hỏi và đáp án đầy đủ không được chép vào kho web công khai; trang nguồn chưa có audio/transcript hay đáp án Listening khớp với PDF. [Trang tài liệu CFLA–CTU](https://cfla.ctu.edu.vn/tai-lieu)

## Nguồn và giới hạn

- [Đề mẫu UFL Đà Nẵng](https://vstep.ufl.udn.vn/NLTA/Dinhdang/2025/De-thi-mau-Vstep-bac-3-52025.9.10067) là nguồn gần với khu vực thi và có các track Listening.
- [Đề mẫu ULIS-VNU](https://vstep.vnu.edu.vn/sample-test/) được rà soát nhưng đường tải Drive không mở ẩn danh trong lượt này.
- Các gói C1 và ba gói mở rộng được ghi là bài luyện; không dùng nhãn “đề thật”.
- PDF và các file audio sưu tầm riêng giữ trong `packs/private/`, không được đưa lên GitHub Pages.

## Triển khai

Các gói được nạp tự động từ JSON công khai; tiến độ người học lưu trong trình duyệt. Phiên bản cache đang giữ `v6`. Đề mẫu Cần Thơ mở từ nguồn trường, không sao chép nội dung vào gói công khai.
(() => {
  const sources = [
    {
      icon: 'ĐN',
      title: 'ĐH Ngoại ngữ · ĐH Đà Nẵng',
      detail: 'Đề mẫu 2025 đủ bốn kỹ năng, có đáp án và ba file nghe. Nguồn gần nhất với kỳ thi tại Đà Nẵng.',
      link: 'https://vstep.ufl.udn.vn/NLTA/Dinhdang/2025/De-thi-mau-Vstep-bac-3-52025.9.10067',
      label: 'Đề mẫu + audio'
    },
    {
      icon: 'QNU',
      title: 'ĐH Quy Nhơn',
      detail: 'Đề minh họa Bậc 3–5 đủ bốn kỹ năng, có bảng đáp án. Bản ĐH Đồng Tháp lưu cùng đề này nên chỉ tính một bộ.',
      link: 'https://qnu.edu.vn/Resources/Docs/SubDomain/ttnn/%C4%90%E1%BB%81%20thi%20minh%20h%E1%BB%8Da%20b%E1%BA%ADc%203%20%C4%91%E1%BA%BFn%205.pdf',
      label: 'Mở PDF đề mẫu'
    },
    {
      icon: 'TVU',
      title: 'ĐH Trà Vinh',
      detail: 'Đề minh họa Bậc 3–5, đủ bốn kỹ năng; PDF do trung tâm ngoại ngữ của trường đăng.',
      link: 'https://victory.tvu.edu.vn/wp-content/uploads/2022/05/%C4%90%E1%BB%81-thi-minh-h%E1%BB%8Da-b%E1%BA%ADc-3-%C4%91%E1%BA%BFn-5.pdf',
      label: 'Mở PDF đề mẫu'
    },
    {
      icon: 'AJC',
      title: 'Học viện Báo chí & Tuyên truyền',
      detail: 'Đề minh họa đính kèm thông báo kỳ thi năm 2026; là tài liệu tham khảo, không phải đề thi tháng 9.',
      link: 'https://media.ajc.edu.vn/Document/ad072003-6753-cadf-b977-c480f5a41e24/2026/8/4//De-thi-minh-hoa-bac-3-den-5-277a1f0377.pdf',
      label: 'Mở PDF đề mẫu'
    },
    {
      icon: 'FTU',
      title: 'ĐH Ngoại thương',
      detail: 'Đề minh họa do Trung tâm Khảo thí & Đảm bảo chất lượng của trường công bố.',
      link: 'https://vstep.ftu.edu.vn/wp-content/uploads/2023/10/DE-THI-MINH-HOA-VSTEP.pdf',
      label: 'Mở PDF đề mẫu'
    },
    {
      icon: 'CTU',
      title: 'ĐH Cần Thơ · CFLA',
      detail: 'Đề mẫu tháng 5/2015 gồm Listening, Reading, Writing và Speaking; trang nguồn có đáp án Reading riêng. Mở tài liệu gốc để làm bài.',
      link: 'https://cfla.ctu.edu.vn/tai-lieu',
      label: 'Mở trang tài liệu chính thức'
    },
    {
      icon: 'UFM',
      title: 'ĐH Tài chính – Marketing',
      detail: 'Trang đề minh họa của Trung tâm Ngoại ngữ – Tin học UFM, có PDF xem trực tiếp.',
      link: 'https://vstep.ufm.edu.vn/Home/DeThiMinhHoa',
      label: 'Mở đề mẫu'
    },
    {
      icon: 'HCMUE',
      title: 'ĐH Sư phạm TP.HCM',
      detail: 'Cổng chính thức có mục thi thử Bậc 3, 4, 5 và trang định dạng. Một số phần luyện yêu cầu mở trên hệ thống.',
      link: 'https://vstep.hcmue.edu.vn/',
      label: 'Vào cổng thi thử'
    },
    {
      icon: 'ULIS',
      title: 'ĐH Ngoại ngữ · ĐHQG Hà Nội',
      detail: 'Trang chính thức về đề minh họa VSTEP.3–5; dùng đối chiếu dạng thức và kỹ năng.',
      link: 'https://vstep.vnu.edu.vn/sample-test/',
      label: 'Mở trang đề mẫu'
    }
  ];

  const practiceSources = [
    {
      icon: 'ZIM',
      title: 'ZIM · Đề thi VSTEP mẫu',
      detail: 'Có bài mẫu đủ bốn kỹ năng. Trang ghi rõ đây là đề mô phỏng để tham khảo, không phải đề thi thật đã tổ chức.',
      link: 'https://zim.vn/de-thi-vstep',
      label: 'Mở đề mẫu',
      badge: 'Mô phỏng · có nguồn'
    },
    {
      icon: 'PREP',
      title: 'PREP · Đề mẫu và kho PDF',
      detail: 'Đã tải riêng PDF 199 trang có tên “20 Mock Tests”. Cần kiểm tra từng bộ và đáp án để loại trùng; con số trong tiêu đề chưa được xác nhận độc lập.',
      link: 'https://prepedu.com/vi/blog/de-thi-mau-vstep',
      label: 'Mở bài viết & kho đề',
      badge: 'Nguồn luyện · cần rà soát'
    },
    {
      icon: 'VSTEP',
      title: 'VSTEP.edu.vn · Bộ đề B1–C1',
      detail: 'Trang tổng hợp đề mẫu và audio; đây là trang luyện thi, không phải cổng của hội đồng tổ chức thi. Kiểm tra từng tài liệu trước khi dùng.',
      link: 'https://vstep.edu.vn/de-thi-mau-chung-chi-b1-b2-c1-tieng-anh-theo-dinh-dang-vstep',
      label: 'Xem bộ đề',
      badge: 'Trang tổng hợp'
    },
    {
      icon: 'LT',
      title: 'Luyenthivstep.vn · Ngân hàng bài luyện',
      detail: 'Có bài luyện trực tuyến và danh mục chủ đề Writing/Speaking theo trang giới thiệu; dạng bài do nền tảng cung cấp, không phải đề UED.',
      link: 'https://luyenthivstep.vn/de-thi-vstep',
      label: 'Luyện trực tuyến',
      badge: 'Ngân hàng luyện tập'
    },
    {
      icon: 'DOC',
      title: 'Studocu · 10 bài Reading do người dùng đăng',
      detail: 'Bản xem trước do người dùng tải lên, có thể cần đăng nhập. Chưa xác minh nguồn gốc, đáp án hoặc quyền chia sẻ; chỉ mở để tự thẩm định.',
      link: 'https://www.studocu.vn/vn/document/truong-dai-hoc-sai-gon/tieng-anh-b1/10-de-doc-hieu1-73-cxvcv/111688259',
      label: 'Xem tài liệu',
      badge: 'Người dùng chia sẻ'
    },
    {
      icon: 'FB',
      title: 'Nhóm VSTEP · Bài đăng cộng đồng',
      detail: 'Hai bài đăng bạn gửi yêu cầu quyền truy cập/đăng nhập nên nội dung và tệp đính kèm chưa thể xác minh. Không tính vào số đề đã rà soát.',
      link: 'https://www.facebook.com/groups/2112628082435991/posts/2443241212708008/',
      label: 'Mở bài đăng',
      badge: 'Chưa xác minh'
    },
    {
      icon: 'FB',
      title: 'VSTEP SV · Bài đăng cộng đồng',
      detail: 'Nguồn Facebook cộng đồng bạn gửi; nội dung cần đăng nhập và chưa kiểm tra được đề/đáp án.',
      link: 'https://www.facebook.com/groups/vstepsv.onthicaptoc/posts/1639368890095028/',
      label: 'Mở bài đăng',
      badge: 'Chưa xác minh'
    }
  ];

  function mountSourceLibrary() {
    const view = document.querySelector('#view');
    if (!view || view.querySelector('.source-library')) return;
    const heading = [...view.querySelectorAll('.section-head h2')]
      .find((item) => ['Nguồn luyện tập đã kiểm tra', 'Nguồn luyện tập & kho đề mẫu'].includes(item.textContent.trim()));
    if (!heading) return;
    let notice = heading.closest('.section-head')?.nextElementSibling;
    while (notice && !notice.classList.contains('notice')) notice = notice.nextElementSibling;
    if (!notice) return;

    const section = document.createElement('section');
    section.className = 'source-library-wrap';
    section.setAttribute('aria-label', 'Thư viện đề mẫu VSTEP có nguồn');
    section.innerHTML = `
      <div class="source-library-heading">
        <div><span class="eyebrow">ĐỀ MẪU CÓ NGUỒN</span><h2>Thư viện VSTEP Bậc 3–5</h2></div>
        <span class="source-total">${sources.length} nguồn trường / hội đồng thi</span>
      </div>
      <p class="source-library-intro">Các liên kết mở đề do đơn vị công bố trực tiếp. Đây là đề mẫu luyện tập, không phải đề nội bộ UED hay bản đề của kỳ thi tháng cụ thể.</p>
      <div class="resource-grid source-library">
        ${sources.map((source) => `
          <article class="resource-card source-card">
            <div class="source-card-top"><span class="resource-icon">${source.icon}</span><span class="verified-chip">Nguồn trường</span></div>
            <h3>${source.title}</h3>
            <p>${source.detail}</p>
            <a class="source-tag" target="_blank" rel="noopener noreferrer" href="${source.link}">${source.label} ↗</a>
          </article>`).join('')}
      </div>
      <p class="source-library-note">Bậc 3–5 là một bài thi chung. Mỗi đề mẫu không được chia thành các bộ B1, B2, C1 riêng nếu nguồn không gắn nhãn trình độ cho từng câu.</p>`;
    notice.insertAdjacentElement('afterend', section);

    const practiceSection = document.createElement('section');
    practiceSection.className = 'source-library-wrap practice-library-wrap';
    practiceSection.setAttribute('aria-label', 'Nguồn luyện tập và kho đề cộng đồng');
    practiceSection.innerHTML = `
      <div class="source-library-heading">
        <div><span class="eyebrow">NGUỒN LUYỆN MỞ RỘNG</span><h2>Kho bài luyện & đề mẫu trực tuyến</h2></div>
        <span class="source-total">${practiceSources.length} nguồn bạn gửi</span>
      </div>
      <p class="source-library-intro">Các nguồn dưới đây giúp mở rộng lượng bài luyện. Nhãn thể hiện đúng mức đã kiểm tra; các trang tổng hợp, nội dung cộng đồng và tài liệu chia sẻ không được coi là đề thi thật của UED.</p>
      <div class="resource-grid source-library">
        ${practiceSources.map((source) => `
          <article class="resource-card source-card">
            <div class="source-card-top"><span class="resource-icon">${source.icon}</span><span class="verified-chip">${source.badge}</span></div>
            <h3>${source.title}</h3>
            <p>${source.detail}</p>
            <a class="source-tag" target="_blank" rel="noopener noreferrer" href="${source.link}">${source.label} ↗</a>
          </article>`).join('')}
      </div>
      <p class="source-library-note">PDF “20 Mock Tests” của PREP và PDF “7 Vstep Tests” từ Drive bạn cung cấp đang nằm riêng trong kho cá nhân. Đã xác nhận tệp PREP dài 199 trang; chưa rà từng bộ để loại trùng, đối chiếu đáp án và ghép audio. Không đưa các PDF/audio lên repo công khai hoặc gọi chúng là đề thi thật của UED.</p>`;
    section.insertAdjacentElement('afterend', practiceSection);
  }

  const observer = new MutationObserver(mountSourceLibrary);
  const view = document.querySelector('#view');
  if (view) observer.observe(view, { childList: true, subtree: true });
  mountSourceLibrary();
})();

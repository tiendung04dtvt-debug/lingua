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

  function mountSourceLibrary() {
    const view = document.querySelector('#view');
    if (!view || view.querySelector('.source-library')) return;
    const heading = [...view.querySelectorAll('.section-head h2')]
      .find((item) => item.textContent.trim() === 'Nguồn luyện tập đã kiểm tra');
    if (!heading) return;
    const notice = heading.closest('.section-head')?.nextElementSibling;
    if (!notice?.classList.contains('notice')) return;
    notice.innerHTML = '<b>Đề mẫu công khai đã xác minh nguồn:</b> mình đã tìm được các bộ mẫu từ nhiều trường tổ chức VSTEP. Chúng giúp luyện đúng dạng bài; chưa xác minh được kho đề thật nội bộ UED theo từng đợt thi.';

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
  }

  const observer = new MutationObserver(mountSourceLibrary);
  const view = document.querySelector('#view');
  if (view) observer.observe(view, { childList: true, subtree: true });
  mountSourceLibrary();
})();

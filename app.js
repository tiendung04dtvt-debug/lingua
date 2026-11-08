let QUESTIONS = [
 {id:'gen-b1-001',provider:'General CEFR practice',level:'B1',skill:'Reading & Use of English',setId:'b1-core',type:'Multiple choice',prompt:'Maya usually ___ the bus to work, but today she is walking.',options:['takes','is taking','take','has taken'],answer:0,explanation:'“Usually” describes a routine, so the present simple “takes” is appropriate. “Is taking” would describe an action happening around now; the other options do not agree with the subject or context.',source:'Original practice item written for this demo; grammar checked against standard English usage.',year:null,reviewStatus:'reviewed'},
 {id:'gen-b1-002',provider:'General CEFR practice',level:'B1',skill:'Reading & Use of English',setId:'b1-core',type:'Multiple choice',prompt:'We have lived in this neighbourhood ___ 2021.',options:['for','during','since','from'],answer:2,explanation:'Use “since” with the starting point of a period (“2021”). Use “for” with a duration, such as “for three years.”',source:'Original practice item written for this demo; usage checked against standard English grammar.',year:null,reviewStatus:'reviewed'},
 {id:'gen-b1-003',provider:'General CEFR practice',level:'B1',skill:'Reading & Use of English',setId:'b1-core',type:'Multiple choice',prompt:'If it ___ tomorrow, we will move the picnic indoors.',options:['rained','will rain','rains','would rain'],answer:2,explanation:'In a first conditional sentence, the if-clause uses the present simple (“if it rains”) and the result clause uses “will” + verb.',source:'Original practice item written for this demo; grammar checked against standard English usage.',year:null,reviewStatus:'reviewed'},
 {id:'gen-b1-004',provider:'General CEFR practice',level:'B1',skill:'Reading & Use of English',setId:'b1-core',type:'Multiple choice',prompt:'The new sports centre is ___ than the old one.',options:['more modern','most modern','modernest','the more modern'],answer:0,explanation:'For a comparative adjective of more than one syllable, use “more” + adjective + “than”: “more modern than.”',source:'Original practice item written for this demo; grammar checked against standard English usage.',year:null,reviewStatus:'reviewed'},
 {id:'gen-b1-005',provider:'General CEFR practice',level:'B1',skill:'Reading & Use of English',setId:'b1-core',type:'Multiple choice',prompt:'Could you tell me where ___?',options:['is the station','the station is','does the station','the station'],answer:1,explanation:'An indirect question uses statement word order: subject before verb (“where the station is”), without “do/does” inversion.',source:'Original practice item written for this demo; grammar checked against standard English usage.',year:null,reviewStatus:'reviewed'},
 {id:'gen-b2-001',provider:'General CEFR practice',level:'B2',skill:'Reading & Use of English',setId:'b2-core',type:'Multiple choice',prompt:'The report recommends that every applicant ___ a copy of their identification.',options:['provides','provide','will provide','provided'],answer:1,explanation:'After “recommend that,” formal English commonly uses the base form of the verb in the that-clause: “that every applicant provide.”',source:'Original practice item written for this demo; grammar checked against standard English usage.',year:null,reviewStatus:'reviewed'},
 {id:'gen-b2-002',provider:'General CEFR practice',level:'B2',skill:'Reading & Use of English',setId:'b2-core',type:'Multiple choice',prompt:'Despite ___ several delays, the team delivered the project on time.',options:['face','faced','facing','to face'],answer:2,explanation:'“Despite” is a preposition, so it is followed by a noun or gerund. “Facing several delays” is the correct gerund phrase.',source:'Original practice item written for this demo; grammar checked against standard English usage.',year:null,reviewStatus:'reviewed'},
 {id:'gen-b2-003',provider:'General CEFR practice',level:'B2',skill:'Reading & Use of English',setId:'b2-core',type:'Multiple choice',prompt:'The museum, ___ opened in 1892, attracts visitors from around the world.',options:['that','whose','which','where'],answer:2,explanation:'The comma introduces a non-defining relative clause. “Which” is used for things in this clause; “that” is not normally used after a comma in this structure.',source:'Original practice item written for this demo; grammar checked against standard English usage.',year:null,reviewStatus:'reviewed'},
 {id:'gen-b2-004',provider:'General CEFR practice',level:'B2',skill:'Reading & Use of English',setId:'b2-core',type:'Multiple choice',prompt:'I wish I ___ more carefully before signing the contract.',options:['read','had read','would read','have read'],answer:1,explanation:'“I wish” + past perfect expresses regret about a past event. The speaker regrets not reading the contract carefully before signing.',source:'Original practice item written for this demo; grammar checked against standard English usage.',year:null,reviewStatus:'reviewed'},
 {id:'gen-b2-005',provider:'General CEFR practice',level:'B2',skill:'Reading & Use of English',setId:'b2-core',type:'Multiple choice',prompt:'The meeting was postponed ___ the director could attend.',options:['in order to','so that','because of','in spite of'],answer:1,explanation:'“So that” introduces a clause expressing purpose, followed here by subject + modal (“the director could attend”). “In order to” would be followed by an infinitive.',source:'Original practice item written for this demo; grammar checked against standard English usage.',year:null,reviewStatus:'reviewed'},
 {id:'gen-c1-001',provider:'General CEFR practice',level:'C1',skill:'Reading & Use of English',setId:'c1-core',type:'Multiple choice',prompt:'Rarely ___ such a convincing case for reform.',options:['we have heard','have we heard','we heard','did we have heard'],answer:1,explanation:'A negative or limiting adverb at the start (“Rarely”) triggers subject–auxiliary inversion. Present perfect inversion is “have we heard.”',source:'Original practice item written for this demo; grammar checked against standard English usage.',year:null,reviewStatus:'reviewed'},
 {id:'gen-c1-002',provider:'General CEFR practice',level:'C1',skill:'Reading & Use of English',setId:'c1-core',type:'Multiple choice',prompt:'The proposal was rejected, not because it was impractical, ___ because it was too costly.',options:['but','rather','yet','instead'],answer:0,explanation:'The paired structure “not because … but because …” contrasts the actual reason with the rejected explanation. “But” completes this contrast naturally.',source:'Original practice item written for this demo; usage checked against standard English.',year:null,reviewStatus:'reviewed'},
 {id:'gen-c1-003',provider:'General CEFR practice',level:'C1',skill:'Reading & Use of English',setId:'c1-core',type:'Multiple choice',prompt:'Had the researchers received more funding, they ___ the study sooner.',options:['would complete','would have completed','will have completed','had completed'],answer:1,explanation:'This is an inverted third conditional: “Had the researchers received…” means “If they had received…”. The result clause takes “would have” + past participle.',source:'Original practice item written for this demo; grammar checked against standard English usage.',year:null,reviewStatus:'reviewed'},
 {id:'gen-c1-004',provider:'General CEFR practice',level:'C1',skill:'Reading & Use of English',setId:'c1-core',type:'Multiple choice',prompt:'Her explanation was so ___ that even the most sceptical members were persuaded.',options:['compelling','complacent','compulsory','comprehensive'],answer:0,explanation:'“Compelling” means powerfully convincing, which fits the result that sceptical members were persuaded. The other adjectives mean self-satisfied, required, and thorough.',source:'Original practice item written for this demo; vocabulary checked against standard English usage.',year:null,reviewStatus:'reviewed'},
 {id:'gen-c1-005',provider:'General CEFR practice',level:'C1',skill:'Reading & Use of English',setId:'c1-core',type:'Multiple choice',prompt:'The findings, ___ preliminary, point to a need for further research.',options:['albeit','whereas','provided','unless'],answer:0,explanation:'“Albeit” means “although” and introduces a concession: the findings are preliminary, yet they still point to further research. It is followed here by the adjective “preliminary.”',source:'Original practice item written for this demo; usage checked against standard English.',year:null,reviewStatus:'reviewed'}
];
let SETS=[{id:'b1-core',level:'B1',title:'Everyday English',subtitle:'Grammar & vocabulary · 5 câu',count:5,icon:'✎'},{id:'b2-core',level:'B2',title:'Ideas & arguments',subtitle:'Grammar & vocabulary · 5 câu',count:5,icon:'◈'},{id:'c1-core',level:'C1',title:'Nuance & precision',subtitle:'Grammar & vocabulary · 5 câu',count:5,icon:'✦'}];
const BASE_QUESTIONS=QUESTIONS.slice(),BASE_SETS=SETS.slice();
const KEY='lingua-cefr-progress-v1';let state=loadState(),currentPage='home',session=null,toastTimer,timerId;
function syncCustomContent(){const baseQIds=new Set(BASE_QUESTIONS.map(q=>q.id)),baseSIds=new Set(BASE_SETS.map(s=>s.id));QUESTIONS=[...BASE_QUESTIONS,...(state.customQuestions||[]).filter(q=>!baseQIds.has(q.id))];SETS=[...BASE_SETS,...(state.customSets||[]).filter(s=>!baseSIds.has(s.id))]}
syncCustomContent();
function loadState(){try{return JSON.parse(localStorage.getItem(KEY))||{attempts:[],mistakes:[],daily:{date:'',count:0},resume:null}}catch{return{attempts:[],mistakes:[],daily:{date:'',count:0},resume:null}}}
function save(){localStorage.setItem(KEY,JSON.stringify(state));updateSidebar()}
function today(){return new Date().toLocaleDateString('en-CA')}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function updateSidebar(){document.querySelector('#mistake-count').textContent=state.mistakes.length;const n=state.daily.date===today()?state.daily.count:0;document.querySelector('#daily-progress').style.width=Math.min(100,n/5*100)+'%';document.querySelector('#daily-label').textContent=`${Math.min(n,5)} / 5 câu hôm nay`}
function nav(page){location.hash=page}
function setPage(page){window.speechSynthesis?.cancel();currentPage=page;document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active',a.dataset.page===page));document.querySelector('#crumb').textContent=({home:'Tổng quan',practice:'Luyện tập',review:'Ôn đáp án',mistakes:'Sổ lỗi sai',resources:'Tài liệu'})[page]||'Tổng quan';render()}
function render(){const v=document.querySelector('#view');({home:homePage,practice:practicePage,review:reviewPage,mistakes:mistakesPage,resources:resourcesPage})[currentPage]?.(v)}
function homePage(v){
  const attempted=new Set(state.attempts.map(a=>a.setId)).size;
  const correct=state.attempts.reduce((sum,a)=>sum+(a.score||0),0);
  const answered=state.attempts.reduce((sum,a)=>sum+(a.total||0),0);
  const resume=state.resume&&SETS.find(s=>s.id===state.resume.setId);
  const tasks=state.customTasks||[];
  const readSets=SETS.filter(s=>s.skill!=='Listening'&&!s.id.startsWith('lis-')&&s.skill!=='Writing'&&s.skill!=='Speaking');
  const lisSets=SETS.filter(s=>s.skill==='Listening'||s.id.startsWith('lis-'));

  const counts={
    B1:{
      read:readSets.filter(s=>s.level==='B1').length,
      listen:lisSets.filter(s=>s.level==='B1').length,
      write:tasks.filter(t=>t.skill==='Writing'&&t.level==='B1').length,
      speak:tasks.filter(t=>t.skill==='Speaking'&&t.level==='B1').length
    },
    B2:{
      read:readSets.filter(s=>s.level==='B2').length,
      listen:lisSets.filter(s=>s.level==='B2').length,
      write:tasks.filter(t=>t.skill==='Writing'&&t.level==='B2').length,
      speak:tasks.filter(t=>t.skill==='Speaking'&&t.level==='B2').length
    },
    C1:{
      read:readSets.filter(s=>s.level==='C1').length,
      listen:lisSets.filter(s=>s.level==='C1').length,
      write:tasks.filter(t=>t.skill==='Writing'&&t.level==='C1').length,
      speak:tasks.filter(t=>t.skill==='Speaking'&&t.level==='C1').length
    }
  };

  v.innerHTML=`<div class="hero">
    <div class="hero-copy">
      <div class="eyebrow" style="color:#d4e4d8">HỆ THỐNG LUYỆN THI VSTEP BẬC 3–5 CHUẨN XÁC</div>
      <h1>Mục tiêu đạt chuẩn C1<br><em>với kho đề mẫu & bài luyện.</em></h1>
      <p>170 câu Đọc từ các gói mẫu/luyện tập và 35 câu Nghe mô phỏng bằng TTS. Thêm 10 đề thư và 18 đề Nói mô phỏng; đây không phải đề thi thật.</p>
      <div style="display:flex;gap:10px;margin-top:18px;flex-wrap:wrap">
        <button class="button" style="background:#f0d0ae;color:#1e3b2e;padding:12px 18px;font-size:13px" onclick="currentFolderLevel='C1';currentFolderTab='all';nav('practice')">
          🟣 Mở kho tài liệu Bậc C1 →
        </button>
        <button class="button ghost" style="background:rgba(255,255,255,0.15);color:#fff;border-color:rgba(255,255,255,0.3);padding:12px 18px;font-size:13px" onclick="currentFolderLevel='all';currentFolderTab='all';nav('practice')">
          📂 Xem toàn bộ thư mục →
        </button>
      </div>
    </div>
  </div>

  ${resume?`<article class="set-card" style="margin-bottom:23px;border-left:5px solid var(--green)">
    <div class="set-icon">↻</div>
    <div class="set-main">
      <h3>Tiếp tục bài ${esc(resume.level||'Bậc 3–5')} · ${esc(resume.title)}</h3>
      <p>Bạn đang ở câu ${(state.resume.index||0)+1} · Tiến độ đã lưu trên thiết bị này</p>
    </div>
    <button class="button small" onclick="resumeSet()">Tiếp tục làm bài →</button>
  </article>`:''}

  <div class="section-head">
    <div>
      <h2>Chọn bậc trình độ để ôn luyện</h2>
      <p>Bấm vào từng bậc để mở ngay thư mục Nghe, Nói, Viết và Đọc tương ứng</p>
    </div>
    <button class="text-link" onclick="currentFolderLevel='all';currentFolderTab='all';nav('practice')">Toàn bộ 4 kỹ năng →</button>
  </div>

  <div class="level-grid">
    <article class="level-card" role="button" tabindex="0" onclick="currentFolderLevel='B1';currentFolderTab='all';nav('practice')">
      <div class="level-top">
        <span class="badge-b1">🟢 Bậc B1</span>
        <span class="level-arrow">↗</span>
      </div>
      <h3>B1 · Nền tảng vững chắc</h3>
      <p>Giao tiếp tình huống quen thuộc, thư thân mật, đọc nắm ý chính và nghe thông báo ngắn.</p>
      <div class="level-meta">
        <span>🎧 <b>${counts.B1.listen}</b> phần nghe (8 câu)</span>
        <span>📖 <b>${counts.B1.read}</b> bài đọc</span>
        <span>✍️ <b>${counts.B1.write}</b> bài viết</span>
        <span>🎤 <b>${counts.B1.speak}</b> bài nói</span>
      </div>
    </article>

    <article class="level-card" role="button" tabindex="0" onclick="currentFolderLevel='B2';currentFolderTab='all';nav('practice')">
      <div class="level-top">
        <span class="badge-b2">🔵 Bậc B2</span>
        <span class="level-arrow">↗</span>
      </div>
      <h3>B2 · Sử dụng linh hoạt</h3>
      <p>Thảo luận giải pháp Part 2, thư công vụ/phàn nàn, đọc chuyên ngành và nghe hội thoại.</p>
      <div class="level-meta">
        <span>🎧 <b>${counts.B2.listen}</b> phần nghe (12 câu)</span>
        <span>📖 <b>${counts.B2.read}</b> bài đọc</span>
        <span>✍️ <b>${counts.B2.write}</b> bài viết</span>
        <span>🎤 <b>${counts.B2.speak}</b> bài nói</span>
      </div>
    </article>

    <article class="level-card" role="button" tabindex="0" style="border:2px solid #d8b4fe;background:linear-gradient(135deg,#ffffff,#faf5ff);box-shadow:0 6px 18px rgba(124,58,237,0.08)" onclick="currentFolderLevel='C1';currentFolderTab='all';nav('practice')">
      <div class="level-top">
        <span class="badge-c1">🟣 Bậc C1 · Trọng tâm</span>
        <span class="level-arrow">↗</span>
      </div>
      <h3>C1 · Làm chủ phản biện</h3>
      <p>17 bài luận học thuật, 7 bài Nói Part 3, 7 bài đọc C1 và 3 bài giảng học thuật Nghe Part 3.</p>
      <div class="level-meta" style="color:#6b21a8;font-weight:700">
        <span>🎧 <b>${counts.C1.listen}</b> bài giảng (15 câu)</span>
        <span>📖 <b>${counts.C1.read}</b> bài đọc (70 câu)</span>
        <span>✍️ <b>${counts.C1.write}</b> bài luận C1</span>
        <span>🎤 <b>${counts.C1.speak}</b> bài nói C1</span>
      </div>
    </article>
  </div>

  <div class="section-head" style="margin-top:28px">
    <div>
      <h2>Thống kê tiến độ ôn luyện</h2>
      <p>Lưu tự động trên trình duyệt, an toàn và riêng tư</p>
    </div>
  </div>
  <div class="stat-strip">
    <div class="stat"><b>${QUESTIONS.length}</b><small>Tổng câu hỏi (Đọc & Nghe)</small></div>
    <div class="stat"><b>${tasks.length}</b><small>Nhiệm vụ Viết & Nói</small></div>
    <div class="stat"><b>${answered}</b><small>Câu trắc nghiệm đã làm</small></div>
    <div class="stat"><b>${Object.keys(state.taskResponses||{}).length}</b><small>Bài viết/nói đã lưu nháp</small></div>
  </div>`;
}

let currentFolderTab = 'all'; // 'all', 'speaking', 'writing', 'reading', 'exams'
let currentFolderLevel = 'all'; // 'all', 'B1', 'B2', 'C1'

function setFolderTab(tab) {
  currentFolderTab = tab;
  document.querySelectorAll('.folder-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  renderPracticeFolders();
}

function setFolderLevel(lvl) {
  currentFolderLevel = lvl;
  document.querySelectorAll('.level-pill-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.level === lvl);
  });
  renderPracticeFolders();
}

function practicePage(v) {
  const resume = state.resume && SETS.find(s => s.id === state.resume.setId);
  const tasks = state.customTasks || [];
  const writingCount = tasks.filter(t => t.skill === 'Writing').length;
  const speakingCount = tasks.filter(t => t.skill === 'Speaking').length;
  const readSets = SETS.filter(s => s.skill !== 'Listening' && !s.id.startsWith('lis-') && s.skill !== 'Writing' && s.skill !== 'Speaking');
  const lisSets = SETS.filter(s => s.skill === 'Listening' || s.id.startsWith('lis-'));
  const readingCount = readSets.length;
  const listeningCount = QUESTIONS.filter(q => q.skill === 'Listening').length;

  v.innerHTML = `
    <div class="page-heading">
      <div class="eyebrow" style="color:var(--green);font-weight:700">THƯ MỤC LUYỆN THI VSTEP · B1 – B2 – C1</div>
      <h1 style="color:var(--ink);letter-spacing:-1px">Kho đề luyện thi 4 kỹ năng</h1>
      <p style="color:var(--muted);font-size:14px;line-height:1.6">
        Thư mục được phân tách rõ ràng theo <strong>Kỹ năng</strong> (Nghe, Nói, Viết, Đọc) và <strong>trình độ mục tiêu</strong> (B1, B2, C1). Nhấp vào bài để bắt đầu luyện tập hoặc xem dàn ý chi tiết.
      </p>
    </div>

    ${resume ? `
      <article class="set-card" style="margin-bottom:18px;border-left:5px solid var(--green)">
        <div class="set-icon">↻</div>
        <div class="set-main">
          <h3>Tiếp tục bài ${esc(resume.level || 'Bậc 3–5')} · ${esc(resume.title)}</h3>
          <p>Tiến độ làm bài của bạn đang được lưu cục bộ trên thiết bị này</p>
        </div>
        <button class="button small" onclick="resumeSet()">Tiếp tục làm bài →</button>
      </article>
    ` : ''}

    <div class="folder-nav-container">
      <div class="folder-tabs" role="tablist">
        <button class="folder-tab ${currentFolderTab === 'all' ? 'active' : ''}" data-tab="all" onclick="setFolderTab('all')">
          📂 <span>Tất cả thư mục</span>
        </button>
        <button class="folder-tab ${currentFolderTab === 'listening' ? 'active' : ''}" data-tab="listening" onclick="setFolderTab('listening')">
          🎧 <span>Kỹ năng Nghe</span> <span class="tab-count">${listeningCount} câu</span>
        </button>
        <button class="folder-tab ${currentFolderTab === 'speaking' ? 'active' : ''}" data-tab="speaking" onclick="setFolderTab('speaking')">
          🎤 <span>Kỹ năng Nói</span> <span class="tab-count">${speakingCount} đề</span>
        </button>
        <button class="folder-tab ${currentFolderTab === 'writing' ? 'active' : ''}" data-tab="writing" onclick="setFolderTab('writing')">
          ✍️ <span>Kỹ năng Viết</span> <span class="tab-count">${writingCount} đề</span>
        </button>
        <button class="folder-tab ${currentFolderTab === 'reading' ? 'active' : ''}" data-tab="reading" onclick="setFolderTab('reading')">
          📖 <span>Kỹ năng Đọc hiểu</span> <span class="tab-count">${readingCount} bài</span>
        </button>
        <button class="folder-tab ${currentFolderTab === 'exams' ? 'active' : ''}" data-tab="exams" onclick="setFolderTab('exams')">
          🏛️ <span>Đề thi trọn bộ</span> <span class="tab-count">6 bộ</span>
        </button>
      </div>

      <div class="level-filter-bar">
        <span style="font-size:12.5px;font-weight:700;color:var(--muted);margin-right:4px">Lọc theo bậc:</span>
        <button class="level-pill-btn ${currentFolderLevel === 'all' ? 'active' : ''}" data-level="all" onclick="setFolderLevel('all')">
          Tất cả các bậc
        </button>
        <button class="level-pill-btn ${currentFolderLevel === 'B1' ? 'active' : ''}" data-level="B1" onclick="setFolderLevel('B1')">
          🟢 Bậc B1 (Nền tảng)
        </button>
        <button class="level-pill-btn ${currentFolderLevel === 'B2' ? 'active' : ''}" data-level="B2" onclick="setFolderLevel('B2')">
          🔵 Bậc B2 (Trung cấp)
        </button>
        <button class="level-pill-btn ${currentFolderLevel === 'C1' ? 'active' : ''}" data-level="C1" onclick="setFolderLevel('C1')">
          🟣 Bậc C1 (Mục tiêu C1)
        </button>
      </div>
    </div>

    <div id="practice-folders"></div>
  `;

  renderPracticeFolders();
}

function getLevelBadgeHtml(lvl) {
  if (lvl === 'C1') return '<span class="badge-c1">🟣 Bậc C1</span>';
  if (lvl === 'B2') return '<span class="badge-b2">🔵 Bậc B2</span>';
  return '<span class="badge-b1">🟢 Bậc B1</span>';
}

function renderPracticeFolders() {
  const container = document.querySelector('#practice-folders');
  if (!container) return;

  const tab = currentFolderTab;
  const lvl = currentFolderLevel;
  const tasks = state.customTasks || [];
  let html = '';

  // 1. LISTENING FOLDERS
  if (tab === 'all' || tab === 'listening') {
    const lisSets = SETS.filter(s => s.skill === 'Listening' || s.id.startsWith('lis-'));
    const lisC1 = lisSets.filter(s => s.level === 'C1');
    const lisB2 = lisSets.filter(s => s.level === 'B2');
    const lisB1 = lisSets.filter(s => s.level === 'B1');

    if ((lvl === 'all' || lvl === 'C1') && lisC1.length) {
      html += renderListeningFolderSection(
        '🎧',
        'Thư mục: Nghe Bậc C1 — Part 3: 3 Bài giảng học thuật chuyên sâu (15 câu có Transcript)',
        'Luyện nghe bài giảng học thuật đại học về Đảo nhiệt đô thị, Vòng lặp thói quen thần kinh & Thủy lợi Lưỡng Hà cổ đại; phân tích chi tiết các bẫy từ vựng suy luận.',
        lisC1
      );
    }

    if ((lvl === 'all' || lvl === 'B2') && lisB2.length) {
      html += renderListeningFolderSection(
        '🎧',
        'Thư mục: Nghe Bậc B2 — Part 2: 3 hội thoại mô phỏng (12 câu có lời thoại)',
        'Luyện nghe hội thoại đời sống & học đường (Đăng ký tín chỉ, Đàm phán địa điểm hội thảo, Hợp đồng thuê nhà) với giọng đọc phân vai Nam/Nữ.',
        lisB2
      );
    }

    if ((lvl === 'all' || lvl === 'B1') && lisB1.length) {
      html += renderListeningFolderSection(
        '🎧',
        'Thư mục: Nghe Bậc B1 — Part 1: 8 Thông báo & Hướng dẫn nơi công cộng (8 câu có Transcript)',
        'Luyện phản xạ bắt thông tin then chốt (cổng bay, thời tiết biển, bảo trì hệ thống, nha khoa, vé xe bus, quy định bảo tàng).',
        lisB1
      );
    }
  }

  // 2. SPEAKING FOLDERS
  if (tab === 'all' || tab === 'speaking') {
    const spTasks = tasks.filter(t => t.skill === 'Speaking');

    const spC1 = spTasks.filter(t => t.level === 'C1');
    const spB2 = spTasks.filter(t => t.level === 'B2');
    const spB1 = spTasks.filter(t => t.level === 'B1');

    if ((lvl === 'all' || lvl === 'C1') && spC1.length) {
      html += renderFolderSection(
        '🎤',
        'Thư mục: Nói Bậc C1 — Part 3: 7 Chủ đề phát triển & Phản biện chuyên sâu',
        'Luyện lập dàn ý, mở rộng quan điểm và trả lời các câu hỏi phụ (follow-up questions) đòi hỏi tư duy học thuật C1 (5 phút).',
        spC1,
        'speaking'
      );
    }

    if ((lvl === 'all' || lvl === 'B2') && spB2.length) {
      html += renderFolderSection(
        '🎤',
        'Thư mục: Nói Bậc B2 — Part 2: 14 Tình huống thảo luận & Biện hộ giải pháp (3 phương án)',
        'Luyện so sánh ưu/nhược điểm giữa 3 phương án, chọn 1 phương án tối ưu và phản bác 2 phương án còn lại (4 phút). Bao gồm 8 tình huống mở rộng mới nhất.',
        spB2,
        'speaking'
      );
    }

    if ((lvl === 'all' || lvl === 'B1') && spB1.length) {
      html += renderFolderSection(
        '🎤',
        'Thư mục: Nói Bậc B1 — Part 1: 12 Chủ đề tương tác xã hội & Phản xạ giao tiếp',
        'Luyện trả lời trôi chảy, mở rộng 2-3 câu về các chủ đề đời sống: Thời tiết, Công nghệ, Đi lại, Mua sắm, Âm nhạc, Lễ hội, Bạn bè, Ngôn ngữ, Giấc ngủ (3 phút).',
        spB1,
        'speaking'
      );
    }
  }

  // 3. WRITING FOLDERS
  if (tab === 'all' || tab === 'writing') {
    const wrTasks = tasks.filter(t => t.skill === 'Writing');

    const wrC1 = wrTasks.filter(t => t.level === 'C1');
    const wrB2 = wrTasks.filter(t => t.level === 'B2');
    const wrB1 = wrTasks.filter(t => t.level === 'B1');

    if ((lvl === 'all' || lvl === 'C1') && wrC1.length) {
      html += renderFolderSection(
        '✍️',
        'Thư mục: Viết Bậc C1 — Task 2: 17 Bài luận học thuật & Phản biện xã hội',
        'Gồm 10 chủ đề luyện tập tổng hợp 2026 (AI trong giáo dục, xã hội không tiền mặt, rác nhựa, bảo tồn di sản...) kèm dàn ý 4 bước và checklist tiêu chí VSTEP.',
        wrC1,
        'writing'
      );
    }

    if ((lvl === 'all' || lvl === 'B2') && wrB2.length) {
      html += renderFolderSection(
        '✍️',
        'Thư mục: Viết Bậc B2 — Task 1: 12 Bức thư công vụ & Thư trang trọng',
        'Bao quát toàn diện các dạng thư: Phàn nàn dịch vụ (Complaint), Xin lỗi khách hàng (Apology), Hỏi thông tin hội thảo (Inquiry), Thư ứng tuyển (Job application), Mời diễn giả, Xin gia hạn nộp dự án. Dung lượng tối thiểu 120 từ.',
        wrB2,
        'writing'
      );
    }

    if ((lvl === 'all' || lvl === 'B1') && wrB1.length) {
      html += renderFolderSection(
        '✍️',
        'Thư mục: Viết Bậc B1 — Task 1: Thư cá nhân & Email xã giao cho bạn bè',
        'Luyện viết thư thân mật, diễn đạt cảm xúc, chia sẻ trải nghiệm (chuyến đi dã ngoại, hội thảo sinh viên) tối thiểu 120 từ.',
        wrB1,
        'writing'
      );
    }
  }

  // 4. READING FOLDERS
  if (tab === 'all' || tab === 'reading') {
    const readSets = SETS.filter(s => s.skill !== 'Listening' && !s.id.startsWith('lis-') && s.skill !== 'Writing' && s.skill !== 'Speaking');
    const rdC1 = readSets.filter(s => s.level === 'C1');
    const rdB2 = readSets.filter(s => s.level === 'B2');
    const rdB1 = readSets.filter(s => s.level === 'B1');

    if ((lvl === 'all' || lvl === 'C1') && rdC1.length) {
      html += renderReadingFolderSection(
        '📖',
        'Thư mục: Đọc Bậc C1 — Văn bản học thuật & Suy luận trừu tượng (7 bài · 70 câu)',
        'Tập trung vào câu hỏi suy luận, hàm ý tác giả, từ vựng học thuật hiếm gặp (RNA World, Tượng Moai đảo Phục Sinh, Nguồn gốc ngôn ngữ, Kiến tạo địa chất, Tiếng ồn đô thị).',
        rdC1
      );
    }

    if ((lvl === 'all' || lvl === 'B2') && rdB2.length) {
      html += renderReadingFolderSection(
        '📖',
        'Thư mục: Đọc Bậc B2 — Phân tích chi tiết & Ngữ cảnh chuyên ngành (8 bài · 80 câu)',
        'Luyện kỹ năng scan tìm thông tin, câu hỏi paraphrase, từ đồng nghĩa và cấu trúc câu phức (Rạn san hô, Rác thải điện tử, Chánh niệm, Văn hóa duyên hải).',
        rdB2
      );
    }

    if ((lvl === 'all' || lvl === 'B1') && rdB1.length) {
      html += renderReadingFolderSection(
        '📖',
        'Thư mục: Đọc Bậc B1 — Thông tin sự kiện & Ý chính bài đọc (2 bài · 20 câu)',
        'Luyện kỹ năng đọc lướt nắm ý chính (skimming) và xác định thông tin sự kiện trực tiếp (Làm việc từ xa, Môi trường làm việc khắc nghiệt).',
        rdB1
      );
    }
  }

  // 5. FULL EXAM DECKS FOLDER
  if (tab === 'all' || tab === 'exams') {
    html += renderExamsFolderSection();
  }

  container.innerHTML = html || `
    <div class="empty">
      <div class="empty-icon">📁</div>
      <h3>Không có bài nào phù hợp bộ lọc</h3>
      <p>Vui lòng chọn bậc trình độ khác hoặc nhấp vào "Tất cả các bậc".</p>
    </div>
  `;
}

function renderListeningFolderSection(icon, title, desc, sets) {
  return `
    <section class="folder-section">
      <div class="folder-section-header">
        <div class="folder-title-area">
          <div class="folder-icon-large">${icon}</div>
          <div>
            <h2>${esc(title)}</h2>
            <p>${esc(desc)}</p>
          </div>
        </div>
        <span class="folder-count-badge">${sets.length} phần (${sets.reduce((sum, s) => sum + (s.count || 0), 0)} câu)</span>
      </div>
      <div class="folder-grid">
        ${sets.map(s => {
          const badgeClass = s.level === 'C1' ? 'badge-c1' : (s.level === 'B2' ? 'badge-b2' : 'badge-b1');
          return `
            <article class="folder-card" style="border-left:4px solid #0284c7">
              <div class="folder-card-top">
                <span class="folder-card-kicker">LISTENING · ${s.count || 5} CÂU HỎI</span>
                <span class="${badgeClass}">${getLevelBadgeHtml(s.level)}</span>
              </div>
              <h3>${esc(s.title)}</h3>
              <p>${esc(s.subtitle || 'Bài nghe trắc nghiệm có Transcript & Audio')}</p>
              <div class="folder-card-footer">
                <span class="folder-card-meta">🎧 Có phát âm Audio & Lời thoại</span>
                <button class="folder-card-btn" style="background:#0284c7" onclick="startSet('${esc(s.id)}')">
                  🎧 Luyện nghe ngay →
                </button>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function renderFolderSection(icon, title, desc, items, skillType) {
  return `
    <section class="folder-section">
      <div class="folder-section-header">
        <div class="folder-title-area">
          <div class="folder-icon-large">${icon}</div>
          <div>
            <h2>${esc(title)}</h2>
            <p>${esc(desc)}</p>
          </div>
        </div>
        <span class="folder-count-badge">${items.length} nhiệm vụ</span>
      </div>
      <div class="folder-grid">
        ${items.map(t => {
          const isWriting = skillType === 'writing';
          const btnText = isWriting ? '✍️ Xem dàn ý & Viết bài →' : '🎤 Xem gợi ý & Luyện nói →';
          const kicker = `${t.skill.toUpperCase()} · ${t.part || t.task_type}${t.time_minutes ? ` · ${t.time_minutes} PHÚT` : ''}`;
          return `
            <article class="folder-card">
              <div class="folder-card-top">
                <span class="folder-card-kicker">${esc(kicker)}</span>
                ${getLevelBadgeHtml(t.level)}
              </div>
              <h3>${esc(t.task_type || t.prompt.slice(0, 60))}</h3>
              <p>${esc(t.prompt.length > 140 ? t.prompt.slice(0, 140) + '…' : t.prompt)}</p>
              <div class="folder-card-footer">
                <span class="folder-card-meta">
                  ${t.minimum_words ? `Tối thiểu ${t.minimum_words} từ` : 'Có dàn ý gợi ý'}
                </span>
                <button class="folder-card-btn" onclick="openTaskWorkspace('${esc(t.task_id)}')">
                  ${btnText}
                </button>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function renderReadingFolderSection(icon, title, desc, sets) {
  return `
    <section class="folder-section">
      <div class="folder-section-header">
        <div class="folder-title-area">
          <div class="folder-icon-large">${icon}</div>
          <div>
            <h2>${esc(title)}</h2>
            <p>${esc(desc)}</p>
          </div>
        </div>
        <span class="folder-count-badge">${sets.length} bài đọc (${sets.length * 10} câu)</span>
      </div>
      <div class="folder-grid">
        ${sets.map(s => {
          const isOfficial = s.id.includes('udn') || s.id.includes('qnu') || s.id.includes('official');
          const isMock = s.id.includes('zim') || s.id.includes('prep');
          const badgeText = isOfficial ? 'Đề mẫu chính thức' : (isMock ? 'Bài mẫu luyện thi' : 'Bài luyện C1 tổng hợp');
          const badgeClass = isOfficial ? 'badge-official' : (s.level === 'C1' ? 'badge-c1' : (s.level === 'B2' ? 'badge-b2' : 'badge-b1'));
          return `
            <article class="folder-card">
              <div class="folder-card-top">
                <span class="folder-card-kicker">READING · 10 CÂU HỎI</span>
                <span class="${badgeClass}">${badgeText}</span>
              </div>
              <h3>${esc(s.title)}</h3>
              <p>${esc(s.subtitle || s.description || 'Bài đọc hiểu tiêu chuẩn VSTEP Bậc 3-5')}</p>
              <div class="folder-card-footer">
                <span class="folder-card-meta">10 câu trắc nghiệm</span>
                <button class="folder-card-btn" onclick="startSet('${esc(s.id)}')">
                  📖 Luyện đọc ngay →
                </button>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function renderExamsFolderSection() {
  const exams = [
    {
      title: 'Đề mẫu chính thức ĐH Ngoại ngữ Đà Nẵng 2025',
      desc: 'Đề mẫu do ĐH Ngoại ngữ Đà Nẵng công bố năm 2025; dùng tham khảo cấu trúc cho đợt UED, không phải đề thi riêng của UED. Có 40 câu Reading và nhiệm vụ Writing/Speaking.',
      readingSets: ['udn-sample-r1', 'udn-sample-r2', 'udn-sample-r3', 'udn-sample-r4'],
      packId: 'udn-vstep-sample-2025',
      packUrl: 'packs/vstep-official-sample-udn.json',
      badge: 'Đề mẫu ĐHĐN 2025'
    },
    {
      title: 'Đề mẫu ĐH Quy Nhơn',
      desc: 'Bộ đề thi chuẩn VSTEP Bậc 3-5 do trường công bố: 40 câu hỏi Đọc hiểu, 2 bài Viết (Thư tư vấn tour cho Richard & Luận) và 3 phần thi Nói.',
      readingSets: ['qnu-sample-r1', 'qnu-sample-r2', 'qnu-sample-r3', 'qnu-sample-r4'],
      packId: 'qnu-vstep-sample-official',
      packUrl: 'packs/vstep-official-sample-qnu.json',
      badge: 'Đề mẫu ĐH Quy Nhơn'
    },
    {
      title: 'Bài mẫu luyện tập theo nguồn ZIM',
      desc: 'Gói luyện 4 kỹ năng, 40 câu Reading và nhiệm vụ Writing/Speaking; nguồn trang mô tả là bài mô phỏng để tham khảo.',
      readingSets: ['zim-sample-r1', 'zim-sample-r2', 'zim-sample-r3', 'zim-sample-r4'],
      packId: 'vstep-sample-zim',
      packUrl: 'packs/vstep-sample-zim.json',
      badge: 'Bài mẫu mô phỏng · ZIM'
    },
    {
      title: 'Bài mẫu luyện tập theo nguồn PREP',
      desc: 'Trọn bộ 4 kỹ năng có lời giải chi tiết: 40 câu hỏi Đọc hiểu (Remote work, Chánh niệm, E-waste, Tượng Moai), Viết luận Toàn cầu hóa và Nói 3 phần.',
      readingSets: ['prep-sample-r1', 'prep-sample-r2', 'prep-sample-r3', 'prep-sample-r4'],
      packId: 'vstep-sample-prep',
      packUrl: 'packs/vstep-sample-prep.json',
      badge: 'Bài mẫu · PREP'
    },
    {
      title: 'Gói luyện C1 tổng hợp · Chủ đề 2025–2026',
      desc: '10 câu Reading với bài đọc tổng hợp và 16 nhiệm vụ Writing/Speaking. Nội dung luyện tập; chưa xác minh là đề thi thật.',
      readingSets: ['set-c1-reading-hot'],
      packId: 'lingua-vstep-hot-topics-c1-2026',
      packUrl: 'packs/vstep-hot-topics-c1.json',
      badge: 'Bài luyện tổng hợp · Lingua'
    }
  ];

  return `
    <section class="folder-section">
      <div class="folder-section-header">
        <div class="folder-title-area">
          <div class="folder-icon-large">🏛️</div>
          <div>
            <h2>Thư mục: 6 Bộ đề thi VSTEP hoàn chỉnh 4 kỹ năng</h2>
            <p>Tuyển tập đầy đủ các bộ đề thi mẫu chính thức từ các trường Đại học và đề thi thử chuẩn mực đã được nạp sẵn vào ứng dụng.</p>
          </div>
        </div>
        <span class="folder-count-badge">6 bộ đề hoàn chỉnh</span>
      </div>
      <div class="folder-grid">
        ${exams.map(e => `
          <article class="folder-card" style="border-left:4px solid var(--green)">
            <div class="folder-card-top">
              <span class="folder-card-kicker">FULL MOCK TEST</span>
              <span class="badge-official">${esc(e.badge)}</span>
            </div>
            <h3>${esc(e.title)}</h3>
            <p>${esc(e.desc)}</p>
            <div class="folder-card-footer">
              <span class="folder-card-meta">4 Kỹ năng (Đọc, Viết, Nói)</span>
              <button class="folder-card-btn" onclick="startSet('${esc(e.readingSets[0])}')">
                📖 Bắt đầu làm Bài 1 →
              </button>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function openTaskWorkspace(taskId) {
  const task = (state.customTasks || []).find(t => t.task_id === taskId);
  if (!task) {
    toast('Không tìm thấy nhiệm vụ.');
    return;
  }

  const v = document.querySelector('#view');
  const isWriting = task.skill === 'Writing';
  const savedResponse = (state.taskResponses || {})[taskId] || '';
  const currentWordCount = savedResponse.trim() ? savedResponse.trim().split(/\s+/).length : 0;
  const minWords = task.minimum_words || (isWriting ? 250 : 0);

  v.innerHTML = `
    <div class="task-workspace">
      <div class="workspace-top-bar">
        <button class="back-btn" onclick="setPage('practice')">
          ← Quay lại Thư mục luyện thi
        </button>
        <div style="display:flex;align-items:center;gap:10px">
          ${getLevelBadgeHtml(task.level)}
          <span style="font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase">
            ${esc(task.skill)} · ${esc(task.part || task.task_type)}
          </span>
        </div>
      </div>

      <div style="margin-bottom:12px">
        <h1 style="font-size:24px;color:var(--ink);letter-spacing:-0.5px;margin:0 0 6px">
          ${esc(task.task_type || 'Nhiệm vụ luyện thi')}
        </h1>
        <div style="display:flex;gap:12px;font-size:13px;color:var(--muted)">
          <span>⏱ Thời gian khuyến nghị: <strong>${task.time_minutes || (isWriting ? 40 : 5)} phút</strong></span>
          ${minWords ? `<span>📝 Dung lượng yêu cầu: <strong>Tối thiểu ${minWords} từ</strong></span>` : ''}
        </div>
      </div>

      <div class="workspace-prompt-box">
        <h3>${esc(task.prompt)}</h3>
        ${task.topic_statement ? `
          <div class="topic-statement" style="margin-top:14px">
            <span>CHỦ ĐỀ (TOPIC)</span>
            <p>${esc(task.topic_statement)}</p>
          </div>
        ` : ''}
        ${Array.isArray(task.mindmap) ? `
          <div class="mindmap-grid" style="margin-top:14px">
            ${task.mindmap.map((idea, i) => `
              <div class="mindmap-node">
                <span>${i === task.mindmap.length - 1 ? 'YOUR OWN IDEA' : `Ý CHÍNH ${i + 1}`}</span>
                <p>${esc(idea)}</p>
              </div>
            `).join('')}
          </div>
        ` : ''}
        ${Array.isArray(task.follow_up_questions) ? `
          <div class="followups" style="margin-top:14px;background:#fff;padding:12px 14px;border-radius:8px;border:1px solid #cbd5e1">
            <strong style="color:var(--ink)">Câu hỏi mở rộng (Follow-up Questions):</strong>
            <ol style="margin-top:6px;padding-left:18px">
              ${task.follow_up_questions.map(q => `<li style="margin-bottom:4px">${esc(q)}</li>`).join('')}
            </ol>
          </div>
        ` : ''}
        ${!isWriting ? `
          <div style="margin-top:12px">
            <button class="button secondary small" onclick="speakTaskPrompt('${esc(taskId)}')">
              🔊 Nghe phát âm đề bài bằng giọng chuẩn (Anh - Anh)
            </button>
          </div>
        ` : ''}
      </div>

      ${Array.isArray(task.planning_steps) && task.planning_steps.length ? `
        <div class="workspace-outline-box">
          <h4>
            <span>💡 Dàn ý gợi ý ${task.level === 'C1' ? 'chuẩn C1' : ''}</span>
            <button class="button ghost small" onclick="copyTaskOutline('${esc(taskId)}')">
              📋 Sao chép dàn ý vào bài làm
            </button>
          </h4>
          <ul>
            ${task.planning_steps.map(step => `<li>${esc(step)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      <div class="workspace-editor-area">
        <label for="workspace-response">
          ${isWriting ? '✍️ Khu vực làm bài viết của bạn:' : '🎤 Khu vực soạn dàn ý / ghi chú luyện nói của bạn:'}
        </label>
        <textarea 
          id="workspace-response" 
          class="workspace-textarea" 
          placeholder="${isWriting ? 'Bắt đầu soạn bài viết luận hoặc thư của bạn tại đây...' : 'Ghi chú các luận điểm, từ vựng và câu nối cho phần thi Nói của bạn tại đây...'}"
          oninput="updateWorkspaceCount(${minWords})"
        >${esc(savedResponse)}</textarea>

        <div class="workspace-toolbar">
          <div id="workspace-count" class="workspace-word-count ${currentWordCount >= minWords && minWords > 0 ? 'reached' : ''}">
            ${currentWordCount} từ ${minWords ? `(Yêu cầu: tối thiểu ${minWords} từ)` : ''}
          </div>
          <div style="display:flex;gap:8px">
            <button class="button small" onclick="saveWorkspaceTask('${esc(taskId)}')">
              💾 Lưu bài làm trên thiết bị
            </button>
          </div>
        </div>
      </div>

      ${Array.isArray(task.self_review) && task.self_review.length ? `
        <div class="workspace-checklist">
          <h4>✓ Checklist tự chấm điểm bài làm theo tiêu chí VSTEP</h4>
          ${task.self_review.map((item, idx) => `
            <label class="checklist-item" for="chk-${idx}">
              <input type="checkbox" id="chk-${idx}">
              <span>${esc(item)}</span>
            </label>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateWorkspaceCount(minWords) {
  const el = document.querySelector('#workspace-response');
  const countEl = document.querySelector('#workspace-count');
  if (!el || !countEl) return;
  const count = el.value.trim() ? el.value.trim().split(/\s+/).length : 0;
  countEl.textContent = `${count} từ ${minWords ? `(Yêu cầu: tối thiểu ${minWords} từ)` : ''}`;
  if (minWords > 0 && count >= minWords) {
    countEl.classList.add('reached');
  } else {
    countEl.classList.remove('reached');
  }
}

function saveWorkspaceTask(taskId) {
  const el = document.querySelector('#workspace-response');
  if (!el) return;
  state.taskResponses = state.taskResponses || {};
  state.taskResponses[taskId] = el.value;
  save();
  toast('Đã lưu bài làm của bạn trên thiết bị này thành công!');
}

function copyTaskOutline(taskId) {
  const task = (state.customTasks || []).find(t => t.task_id === taskId);
  if (!task || !Array.isArray(task.planning_steps)) return;
  const text = task.planning_steps.map((s, i) => `• ${s}`).join('\n');
  const el = document.querySelector('#workspace-response');
  if (el) {
    el.value = (el.value ? el.value + '\n\n' : '') + '--- DÀN Ý GỢI Ý ---\n' + text + '\n\n';
    el.focus();
    updateWorkspaceCount(task.minimum_words || 0);
  }
  navigator.clipboard?.writeText(text);
  toast('Đã chèn dàn ý gợi ý vào khung bài làm.');
}

function speakTaskPrompt(taskId) {
  const task = (state.customTasks || []).find(t => t.task_id === taskId);
  if (!task || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(task.prompt);
  utter.lang = 'en-GB';
  utter.rate = 0.95;
  window.speechSynthesis.speak(utter);
}

function reviewPage(v){v.innerHTML=`<div class="page-heading"><div class="eyebrow">REVIEW BEFORE PRACTISING</div><h1>Ôn đáp án</h1><p>Xem câu hỏi, lựa chọn, đáp án và giải thích trước khi làm bài. Hoạt động này không ghi nhận lượt luyện tập.</p></div><div class="filter-row"><select id="review-level" class="filter-select"><option value="all">Tất cả trình độ</option><option>B1</option><option>B2</option><option>C1</option></select><select id="review-set" class="filter-select"><option value="all">Tất cả bộ câu hỏi</option>${SETS.map(s=>`<option value="${s.id}">${s.level} · ${s.title}</option>`).join('')}</select></div><div id="review-list"></div>`;document.querySelector('#review-level').onchange=drawReview;document.querySelector('#review-set').onchange=drawReview;drawReview()}
function drawReview(){const l=document.querySelector('#review-level')?.value||'all',s=document.querySelector('#review-set')?.value||'all',qs=QUESTIONS.filter(q=>(l==='all'||q.level===l)&&(s==='all'||q.setId===s));document.querySelector('#review-list').innerHTML=qs.map((q,i)=>`<article class="review-card"><div class="question-kicker">${q.level} · ${q.skill} · Câu ${i+1}</div>${renderStimulus(q)}<h3>${esc(q.prompt)}</h3>${q.options.map((o,j)=>`<div class="review-option ${j===q.answer?'is-answer':''}">${String.fromCharCode(65+j)}.&nbsp; ${esc(o)} ${j===q.answer?'✓ Đáp án':''}</div>`).join('')}<details class="review-explain"><summary>Xem giải thích</summary><p>${esc(q.explanation)}</p></details></article>`).join('')||`<div class="empty"><div class="empty-icon">▤</div><h3>Chưa có câu hỏi</h3></div>`}
function mistakesPage(v){const ms=state.mistakes;v.innerHTML=`<div class="page-heading"><div class="eyebrow">YOUR PERSONAL REVIEW LIST</div><h1>Sổ lỗi sai</h1><p>Các câu bạn trả lời sai, được nhóm theo trình độ và bộ luyện tập để dễ ôn lại.</p></div><div class="filter-row"><select id="mistake-level" class="filter-select"><option value="all">Tất cả trình độ</option><option>B1</option><option>B2</option><option>C1</option></select><select id="mistake-set" class="filter-select"><option value="all">Tất cả bộ câu hỏi</option>${SETS.map(s=>`<option value="${s.id}">${s.level} · ${s.title}</option>`).join('')}</select><input id="mistake-search" class="search-input" placeholder="Tìm trong câu hỏi…" aria-label="Tìm câu hỏi"></div><div id="mistake-list"></div>`;['mistake-level','mistake-set','mistake-search'].forEach(id=>document.querySelector('#'+id).addEventListener(id==='mistake-search'?'input':'change',drawMistakes));drawMistakes()}
function drawMistakes(){const l=document.querySelector('#mistake-level')?.value||'all',s=document.querySelector('#mistake-set')?.value||'all',term=(document.querySelector('#mistake-search')?.value||'').toLowerCase(),unique=[...new Set(state.mistakes)].map(id=>QUESTIONS.find(q=>q.id===id)).filter(q=>q&&(l==='all'||q.level===l)&&(s==='all'||q.setId===s)&&(q.prompt.toLowerCase().includes(term)||(q.stimulusText||'').toLowerCase().includes(term)));document.querySelector('#mistake-list').innerHTML=unique.length?unique.map(q=>`<article class="review-card"><div class="question-kicker">${q.provider} · ${q.level} · ${q.setId}</div>${renderStimulus(q)}<h3>${esc(q.prompt)}</h3>${q.options.map((o,j)=>`<div class="review-option ${j===q.answer?'is-answer':''}">${String.fromCharCode(65+j)}.&nbsp; ${esc(o)} ${j===q.answer?'✓ Đáp án':''}</div>`).join('')}<details class="review-explain"><summary>Xem giải thích</summary><p>${esc(q.explanation)}</p></details></article>`).join(''):`<div class="empty"><div class="empty-icon">✓</div><h3>${msEmptyTitle()}</h3><p>${msEmptyText()}</p></div>`}
function msEmptyTitle(){return state.mistakes.length?'Không tìm thấy câu phù hợp':'Sổ lỗi sai đang trống'}function msEmptyText(){return state.mistakes.length?'Thử đổi bộ lọc hoặc từ khóa tìm kiếm.':'Khi trả lời sai trong lúc luyện tập, câu hỏi sẽ xuất hiện ở đây để bạn ôn lại.'}
function resourcesPage(v){v.innerHTML=`<div class="page-heading"><div class="eyebrow">ĐÍCH ĐẾN: C1 · KỲ THI CHUẨN ĐẦU RA ĐHĐN</div><h1>Học liệu & định dạng thi</h1><p>Đợt thi tại ĐH Sư phạm dự kiến ngày 29/11/2026. Dùng định dạng Bậc 3–5 làm khung luyện theo nguồn chính thức, đồng thời phân biệt rõ tài liệu tham khảo với ngân hàng đề riêng của kỳ thi.</p></div><div class="notice"><b>Mục tiêu C1:</b> Bài thi đánh giá chung B1–C1; điểm thi quyết định bậc đạt được. Cấu trúc dưới đây theo định dạng 729/QĐ-BGDĐT được trường công bố. Trang đợt thi xác nhận ngày thi và lệ phí, nhưng người học nên làm theo hướng dẫn dự thi mới nhất của trường nếu có thay đổi.</div><div class="section-head"><div><h2>Khung bài thi Bậc 3–5</h2><p>Bốn kỹ năng · đề đa bậc · thông số theo định dạng công bố</p></div><span class="set-badge">Nguồn: QĐ 729/QĐ-BGDĐT</span></div><div class="level-grid"><article class="level-card"><div class="level-top"><span class="level-tag">LISTENING</span></div><h3>Nghe · khoảng 40 phút</h3><p>35 câu, khoảng 40 phút. Đề mẫu 2025: Part 1 có 8 thông báo ngắn; Part 2 có 3 hội thoại, mỗi hội thoại 4 câu; Part 3 có 3 bài nói/bài giảng, mỗi bài 5 câu. Bản mẫu hướng dẫn nghe mỗi bản ghi một lần.</p><div class="level-meta"><span>Chi tiết · ý chính · suy luận</span></div></article><article class="level-card"><div class="level-top"><span class="level-tag">READING</span></div><h3>Đọc · 60 phút</h3><p>40 câu trắc nghiệm trên 4 bài đọc, 10 câu mỗi bài. Dạng trọng tâm: chi tiết, ý chính, thái độ/quan điểm, suy luận và từ vựng trong ngữ cảnh.</p><div class="level-meta"><span>4 bài · tăng dần độ khó</span></div></article><article class="level-card"><div class="level-top"><span class="level-tag">WRITING</span></div><h3>Viết · 60 phút</h3><p>60 phút: thư/email tối thiểu khoảng 120 từ, chiếm 1/3 điểm Viết; bài luận tối thiểu khoảng 250 từ, chiếm 2/3 điểm.</p><div class="level-meta"><span>Task 1 + Task 2</span></div></article></div><div class="quick-grid" style="margin-top:12px"><article class="resource-card"><div class="resource-icon">◉</div><h3>Nói · khoảng 12 phút</h3><p>12 phút: Part 1 tương tác xã hội, Part 2 chọn và bảo vệ giải pháp, Part 3 phát triển chủ đề và trả lời câu hỏi phụ. Đề mẫu chia thời gian lần lượt 3, 4 và 5 phút.</p></article><article class="resource-card"><div class="resource-icon">▤</div><h3>Quy đổi bậc tham khảo</h3><p>Điểm trung bình 4 kỹ năng được làm tròn theo bước 0,5: 4,0–5,5 = B1; 6,0–8,0 = B2; 8,5–10 = C1. Xác nhận quy tắc áp dụng với thông báo kỳ thi hiện hành.</p></article></div><div class="section-head"><div><h2>Cách luyện theo từng kỹ năng</h2><p>Chiến thuật tóm tắt cho bài đa bậc; đối chiếu chỉ dẫn trên đề thật</p></div></div><div class="resource-grid"><article class="resource-card"><div class="resource-icon">🎧</div><h3>Nghe · đọc trước, bắt ý rồi kiểm chứng</h3><p>Trước audio, lướt câu hỏi và gạch từ khóa. Khi nghe, ghi ý/quan hệ giữa người nói; tránh chọn đáp án chỉ vì nghe thấy một từ giống lựa chọn.</p></article><article class="resource-card"><div class="resource-icon">▤</div><h3>Đọc · xác định bằng chứng trong đoạn</h3><p>Đọc câu hỏi trước để định hướng, tìm vị trí thông tin, phân biệt chi tiết với suy luận. Với câu từ vựng, đọc cả câu và các câu lân cận.</p></article><article class="resource-card"><div class="resource-icon">✎</div><h3>Viết · lập dàn ý, trả lời đủ yêu cầu</h3><p>Task 1: xác định người nhận, mục đích và các ý bắt buộc. Task 2: nêu lập trường, phát triển luận điểm bằng giải thích/ví dụ và dành thời gian rà soát.</p></article><article class="resource-card"><div class="resource-icon">◉</div><h3>Nói · trả lời trực tiếp rồi mở rộng</h3><p>Part 1: trả lời và thêm lý do/ví dụ. Part 2: so sánh giải pháp, chọn và biện minh. Part 3: trình bày quan điểm có cấu trúc, liên kết ý và đáp câu hỏi mở rộng.</p></article></div><div class="section-head"><div><h2>Tính điểm mục tiêu</h2><p>Nhập điểm thử 4 kỹ năng để xem trung bình và bậc tham khảo</p></div></div><div class="result-card"><div class="filter-row"><label class="score-field">Nghe <input class="filter-select skill-score" type="number" min="0" max="10" step="0.5" value="0"></label><label class="score-field">Đọc <input class="filter-select skill-score" type="number" min="0" max="10" step="0.5" value="0"></label><label class="score-field">Viết <input class="filter-select skill-score" type="number" min="0" max="10" step="0.5" value="0"></label><label class="score-field">Nói <input class="filter-select skill-score" type="number" min="0" max="10" step="0.5" value="0"></label></div><div id="score-output" class="answer-feedback">Nhập điểm từng kỹ năng để tính kết quả tham khảo.</div></div><div class="section-head"><div><h2>Nguồn luyện tập & kho đề mẫu</h2><p>Đề mẫu chính thức, bài mẫu luyện thi và gói tự biên soạn; nạp trực tiếp để luyện</p></div><a class="button ghost small" href="content-pack-template.json" download>Tải mẫu JSON</a><button class="button secondary small" onclick="document.querySelector('#pack-file').click()">Nhập gói từ file JSON</button><input id="pack-file" type="file" accept=".json,application/json" hidden></div><div class="preset-banner" style="background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:16px;margin:14px 0">
  <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;margin-bottom:12px">
    <div>
      <strong style="font-size:13px;color:var(--ink);display:block">⚡ Kho đề mẫu có nguồn & bài luyện (170 câu Đọc · 35 câu Nghe TTS mô phỏng · 64 nhiệm vụ Viết/Nói)</strong>
      <p style="font-size:11.5px;color:var(--muted);margin:3px 0 0">Tự động nạp 8 gói: đề mẫu ĐHĐN, Quy Nhơn, bài mẫu ZIM/PREP, gói C1 Lingua và ba gói luyện mô phỏng Nghe/Viết/Nói:</p>
    </div>
    <span class="set-badge" style="background:#ecfdf5;color:#065f46;border-color:#a7f3d0">Đã đồng bộ 8 gói</span>
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:8px">
    <button class="button small" style="text-align:left;justify-content:flex-start" onclick="loadPresetPack('packs/vstep-official-sample-udn.json','Đề mẫu ĐHĐN 2025')">
      📥 <strong>ĐHNN Đà Nẵng 2025</strong> · 40 Đọc + 5 Viết/Nói
    </button>
    <button class="button secondary small" style="text-align:left;justify-content:flex-start" onclick="loadPresetPack('packs/vstep-official-sample-qnu.json','Đề mẫu ĐH Quy Nhơn')">
      📥 <strong>ĐH Quy Nhơn & ĐH Đồng Tháp</strong> · 40 Đọc + 5 Viết/Nói
    </button>
    <a class="button secondary small" style="text-align:left;justify-content:flex-start" href="https://cfla.ctu.edu.vn/tai-lieu" target="_blank" rel="noopener">
      🔗 <strong>Đề mẫu CFLA · ĐH Cần Thơ (2015)</strong> · Mở tài liệu gốc
    </a>
    <button class="button secondary small" style="text-align:left;justify-content:flex-start" onclick="loadPresetPack('packs/vstep-sample-zim.json','Đề mẫu luyện tập ZIM')">
      📥 <strong>Đề mẫu luyện tập ZIM</strong> · 40 Đọc + 5 Viết/Nói
    </button>
    <button class="button secondary small" style="text-align:left;justify-content:flex-start" onclick="loadPresetPack('packs/vstep-sample-prep.json','Đề mẫu luyện tập PREP')">
      📥 <strong>Đề mẫu luyện tập PREP</strong> · 40 Đọc + 5 Viết/Nói
    </button>
    <button class="button small" style="text-align:left;justify-content:flex-start;background:#0284c7" onclick="loadPresetPack('packs/vstep-listening-full.json','Nghe mô phỏng VSTEP · TTS')">
      🎧 <strong>Nghe mô phỏng VSTEP · TTS</strong> · 35 câu, lời thoại hiển thị
    </button>
    <button class="button secondary small" style="text-align:left;justify-content:flex-start" onclick="loadPresetPack('packs/vstep-writing-task1-expanded.json','10 Đề Viết Thư Task 1')">
      ✍️ <strong>Viết thư Task 1 mô phỏng</strong> · B1–B2 đủ dạng thư
    </button>
    <button class="button secondary small" style="text-align:left;justify-content:flex-start" onclick="loadPresetPack('packs/vstep-speaking-expanded.json','Nói mô phỏng Part 1 & 2')">
      🎤 <strong>Nói mô phỏng Part 1 & 2</strong> · 10 Part 1 + 8 Part 2
    </button>
    <button class="button small" style="text-align:left;justify-content:flex-start;grid-column:1/-1" onclick="loadPresetPack('packs/vstep-hot-topics-c1.json','Gói luyện C1 tự biên soạn')">
      🔥 <strong>Gói luyện C1 tự biên soạn · chủ đề 2025–2026</strong> · 10 Đọc + 16 nhiệm vụ Viết/Nói
    </button>
  </div>
</div><div class="notice"><b>Phân biệt nguồn:</b> ĐHNN Đà Nẵng và ĐH Quy Nhơn công bố đề mẫu; ZIM/PREP cung cấp bài mẫu luyện tập; gói C1 của Lingua là nội dung tổng hợp chưa xác minh nguồn từng câu. Chưa xác nhận câu nào là đề thi thật của một đợt UED cụ thể.</div><div class="resource-grid"><article class="resource-card"><div class="resource-icon">🇻🇳</div><h3>Định dạng Bậc 3–5 · ĐHĐN / QĐ 729</h3><p>Nguồn chính để luyện dạng bài, thời lượng và quy đổi bậc. Có trang định dạng và đề mẫu nghe.</p><a class="source-tag" target="_blank" rel="noopener" href="https://vstep.ufl.udn.vn/CDR/Dinhdang/2024/Dinh-dang-de-thi-danh-gia-nang-luc-su-dung-tieng-Anh-tu-bac-3-den-bac-5-theo-Khung-nang-luc-ngoai-ngu-6-bac-dung-cho-Viet-Nam--2024.12.33910">Mở định dạng chính thức ↗</a></article><article class="resource-card"><div class="resource-icon">🎧</div><h3>Đề mẫu VSTEP 3–5 · ĐHNN Đà Nẵng</h3><p>Đề mẫu chính thức Bậc 3–5 do ĐHNN Đà Nẵng công bố năm 2025; đây là đề tham khảo VSTEP, không phải đề nội bộ UED. PDF và ba phần nghe được giữ trên máy cá nhân; liên kết bên dưới mở trực tiếp từ nguồn.</p><a class="source-tag" target="_blank" rel="noopener" href="https://vstep.ufl.udn.vn/files/2025/2025_9_3_41_23_569_de_thi_mau_vstep_3.5.pdf">Mở / tải PDF đề mẫu ↗</a> <a class="source-tag" target="_blank" rel="noopener" href="https://vstep.ufl.udn.vn/files/2025/2025_9_3_44_32_669_sample_test_2_part_1.mp3">Nghe Part 1 ↗</a> <a class="source-tag" target="_blank" rel="noopener" href="https://vstep.ufl.udn.vn/files/2025/2025_9_3_45_14_513_sample_test_2_part_2.mp3">Nghe Part 2 ↗</a> <a class="source-tag" target="_blank" rel="noopener" href="https://vstep.ufl.udn.vn/files/2025/2025_9_3_49_54_684_sample-test-2-part-3c.mp3">Nghe Part 3 ↗</a> <a class="source-tag" target="_blank" rel="noopener" href="https://vstep.ufl.udn.vn/NLTA/Dinhdang/2025/De-thi-mau-Vstep-bac-3-52025.9.10067">Trang nguồn ↗</a></article><article class="resource-card"><div class="resource-icon">📅</div><h3>Lịch & lệ phí đợt thi UED</h3><p>Thông báo riêng của Trung tâm Tin học và Đánh giá năng lực UED: thi 29/11/2026; lệ phí 450.000 đồng; nhận hồ sơ 05–13/11/2026.</p><a class="source-tag" target="_blank" rel="noopener" href="https://ttth.ued.udn.vn/vi/news/tin-hoat-dong/thong-bao-ve-viec-to-chuc-danh-gia-nang-luc-tieng-anh-chuan-dau-ra-cho-sinh-vien-cac-co-so-dao-tao-thuoc-dai-hoc-da-nang-dot-thi-ngay-29-11-2026-212.html">Mở thông báo UED ↗</a></article><article class="resource-card"><div class="resource-icon">B1</div><h3>Cambridge B1 Preliminary</h3><p>Đề mẫu, đáp án và tài liệu hướng dẫn chính thức. Bài thi có cấu trúc riêng; dùng bổ trợ tiếng Anh B1.</p><a class="source-tag" target="_blank" rel="noopener" href="https://www.cambridgeenglish.org/vn/exams-and-tests/preliminary/preparation/">Mở tài liệu Cambridge ↗</a></article><article class="resource-card"><div class="resource-icon">B2</div><h3>Cambridge B2 First</h3><p>Trang chuẩn bị chính thức và mẫu bài. Dùng để luyện tiếng Anh B2; không xem là đề mẫu VSTEP.</p><a class="source-tag" target="_blank" rel="noopener" href="https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/preparation/">Mở tài liệu Cambridge ↗</a></article><article class="resource-card"><div class="resource-icon">C1</div><h3>Cambridge C1 Advanced</h3><p>Đề mẫu và hướng dẫn chính thức. Luyện tăng độ khó, nhưng format, điểm số và cách thi khác.</p><a class="source-tag" target="_blank" rel="noopener" href="https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/preparation/">Mở tài liệu Cambridge ↗</a></article><article class="resource-card"><div class="resource-icon">🇻🇳</div><h3>ULIS · Mẫu VSTEP 3–5</h3><p>Nguồn chính thức khác có mô tả định dạng và liên kết mẫu đề; chỉ dùng tham khảo kỹ năng và cấu trúc.</p><a class="source-tag" target="_blank" rel="noopener" href="https://vstep.vn/test-format/">Mở định dạng & mẫu ↗</a></article><article class="resource-card"><div class="resource-icon">✦</div><h3>British Council LearnEnglish</h3><p>Bài luyện đọc, nghe, viết, nói và ngữ pháp chia theo mức CEFR B1–C1; không phải đề thi thử.</p><a class="source-tag" target="_blank" rel="noopener" href="https://learnenglish.britishcouncil.org/english-levels">Mở khung CEFR ↗</a></article><article class="resource-card"><div class="resource-icon">◈</div><h3>ETS TOEFL iBT · Bổ trợ học thuật</h3><p>Bộ câu hỏi và bài thi mẫu miễn phí để tăng kỹ năng học thuật; định dạng, điểm số và tác vụ khác kỳ thi ĐHĐN.</p><a class="source-tag" target="_blank" rel="noopener" href="https://www.ets.org/toefl/test-takers/ibt/prepare.html">Mở tài liệu ETS ↗</a></article></div><div class="section-head"><div><h2>Lộ trình 3 tuần hướng đến C1</h2><p>08–29/11/2026 · chỉnh khối lượng theo điểm chẩn đoán đầu vào</p></div></div><div class="set-list"><article class="set-card"><div class="set-icon">1</div><div class="set-main"><h3>08–09/11 · Chẩn đoán 4 kỹ năng</h3><p>Làm mẫu Nghe/Đọc có bấm giờ; viết 1 bài Task 2; ghi âm đủ 3 phần Nói; lập sổ lỗi.</p></div></article><article class="set-card"><div class="set-icon">2</div><div class="set-main"><h3>10–15/11 · Củng cố B1–B2 và chiến thuật</h3><p>Luyện từng dạng, quản lý thời gian, ưu tiên độ chính xác ở phần dễ; sửa bài viết và câu trả lời nói theo rubric.</p></div></article><article class="set-card"><div class="set-icon">3</div><div class="set-main"><h3>16–23/11 · Tăng độ khó lên C1</h3><p>Tập trung bài nghe dài, suy luận khi đọc, phát triển luận điểm, diễn đạt chính xác; ôn lại lỗi lặp.</p></div></article><article class="set-card"><div class="set-icon">4</div><div class="set-main"><h3>24–28/11 · Thi thử và ổn định phong độ</h3><p>Làm 2 bài mô phỏng theo nguồn phù hợp, luyện gõ và ghi âm; rà thiết bị, giấc ngủ và hướng dẫn dự thi.</p></div></article></div><div class="section-head"><div><h2>Nội dung cá nhân trên thiết bị</h2><p>Gói JSON được lưu trong trình duyệt này, không tải lên website hay máy chủ</p></div></div><div class="notice">Định dạng nhập: <code>{"pack_metadata":{"title":"…","source_info":{"source_url":"…"}},"sets":[{"id":"…","level":"B1|B2|C1","title":"…"}],"questions":[{"id":"…","setId":"…","level":"B1|B2|C1","skill":"Reading","prompt":"…","options":["…"],"answer":0,"explanation":"…"}]}</code>. Chỉ nhập tài liệu bạn có quyền sử dụng; bản cá nhân không được đưa lên repo công khai.</div>`;v.innerHTML+=renderPersonalTasks();document.querySelectorAll('.skill-score').forEach(x=>x.addEventListener('input',calculateScore));document.querySelector('#pack-file').addEventListener('change',importRichPack)}
function calculateScore(){const vals=[...document.querySelectorAll('.skill-score')].map(x=>Number(x.value));if(vals.some(x=>!Number.isFinite(x)||x<0||x>10)){document.querySelector('#score-output').textContent='Mỗi điểm phải nằm giữa 0 và 10.';return}const avg=vals.reduce((a,b)=>a+b,0)/4,rounded=Math.round(avg*2)/2,level=rounded>=8.5?'C1':rounded>=6?'B2':rounded>=4?'B1':'Chưa đạt',missing=Math.max(0,33-vals.reduce((a,b)=>a+b,0));document.querySelector('#score-output').innerHTML=`Trung bình ${avg.toFixed(2)} → làm tròn ${rounded.toFixed(1)} · <b>${level}</b> · Còn thiếu ${missing.toFixed(1)} điểm tổng để đạt trung bình 8,25 theo ngưỡng tham khảo.`}
function importPack(ev){const f=ev.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const pack=JSON.parse(r.result),qs=pack.questions||[],sets=pack.sets||[];if(!Array.isArray(qs)||!qs.length)throw Error('Gói không có danh sách questions.');const valid=qs.every(q=>q.id&&q.setId&&['B1','B2','C1'].includes(q.level)&&q.prompt&&Array.isArray(q.options)&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length);if(!valid)throw Error('Một số câu thiếu ID, trình độ, lựa chọn hoặc đáp án hợp lệ.');state.customQuestions=[...(state.customQuestions||[]).filter(old=>!qs.some(q=>q.id===old.id)),...qs];state.customSets=[...(state.customSets||[]).filter(old=>!sets.some(q=>q.id===old.id)),...sets];save();toast(`Đã nhập ${qs.length} câu vào thiết bị này.`);setTimeout(()=>render(),250)}catch(e){toast('Không nhập được: '+e.message)}ev.target.value=''};r.readAsText(f)}
function groupQuestionsByStimulus(questions){const groups=new Map();for(const q of questions){const key=`${q.skill||''}::${q.stimulusTitle||q.id}`;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(q)}return Array.from(groups.values()).flat()}function startSet(id,opts={}){const set=SETS.find(x=>x.id===id);if(!set)return;let questions=groupQuestionsByStimulus(QUESTIONS.filter(q=>q.setId===id));const resume=state.resume?.setId===id?state.resume:null;const shuffle=opts.shuffle??document.querySelector('#shuffle')?.checked??false;if(resume?.questionIds)questions=resume.questionIds.map(qid=>QUESTIONS.find(q=>q.id===qid)).filter(Boolean);else if(shuffle&&questions.every(q=>!q.stimulusText))questions.sort(()=>Math.random()-.5);else if(shuffle)toast('Câu hỏi trong cùng một bài đọc/nghe được giữ theo thứ tự.');session={set,questions,index:0,answers:{},started:Date.now(),timed:opts.timed??resume?.timed??document.querySelector('#timed')?.checked??false};if(resume&&resume.index<questions.length){session.index=resume.index;session.answers=resume.answers||{};session.started=Date.now()-((resume.elapsed||0)*1000)}history.replaceState(null,'','#practice');setPage('practice');renderSession()}
function resumeSet(){if(state.resume)startSet(state.resume.setId,{shuffle:false,timed:state.resume.timed||false})}
function renderSession(){clearTimeout(timerId);const v=document.querySelector('#view'),s=session,q=s.questions[s.index],answered=Object.keys(s.answers).length,elapsed=Math.floor((Date.now()-s.started)/1000);state.resume={setId:s.set.id,index:s.index,answers:s.answers,elapsed,timed:s.timed,questionIds:s.questions.map(x=>x.id)};save();v.innerHTML=`<div class="session"><div class="session-top"><span>${s.set.level} · ${s.set.title}</span><span>${s.index+1} / ${s.questions.length} câu ${s.timed?`· <b id="timer">${formatTime(elapsed)}</b>`:''}</span></div><div class="progress-track"><span style="width:${(s.index/s.questions.length)*100}%"></span></div><article class="question-card"><div class="question-kicker">${q.skill} · ${q.type}</div>${q.stimulusText?`<section class="stimulus"><h3>${esc(q.stimulusTitle||q.skill)}</h3>${q.skill==='Reading'?`<p>${esc(q.stimulusText)}</p>`:`<div style="background:#f0fdf4;border:1px solid #bbf7d0;padding:12px 14px;border-radius:8px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px"><div><strong style="color:#166534;font-size:13px;display:block">🎧 Bài nghe mô phỏng (giọng đọc TTS)</strong><span style="font-size:12px;color:#15803d">Bấm nút để nghe văn bản bằng TTS; không phải audio đề thi thật.</span></div><div style="display:flex;gap:6px"><button class="button small" onclick="speakStimulus('${esc(q.id)}')">▶ Phát Audio</button><button class="button ghost small" onclick="window.speechSynthesis?.cancel()">⏹ Dừng</button></div></div><details class="review-explain" style="margin-top:10px"><summary>📜 Xem lời thoại (Transcript) sau khi làm bài</summary><p style="white-space:pre-line;line-height:1.7">${esc(q.stimulusText)}</p></details>`}</section>`:''}<h2>${esc(q.prompt)}</h2><div class="options">${q.options.map((o,j)=>`<button class="option ${s.answers[q.id]===j?'selected':''}" onclick="selectAnswer(${j})"><span class="option-letter">${String.fromCharCode(65+j)}</span>${esc(o)}</button>`).join('')}</div>${s.answers[q.id]!==undefined?`<div class="answer-feedback ${s.answers[q.id]===q.answer?'':'wrong-feedback'}"><strong>${s.answers[q.id]===q.answer?'Chính xác!':'Chưa đúng lần này.'}</strong> <details><summary>Xem giải thích</summary><p>${esc(q.explanation)}</p></details></div>`:''}<div class="session-actions"><button class="button ghost" onclick="prevQuestion()" ${s.index===0?'disabled':''}>← Trước</button>${s.index<s.questions.length-1?`<button class="button" onclick="nextQuestion()">Tiếp theo →</button>`:`<button class="button" onclick="submitSet()">Nộp bài →</button>`}</div></article><div class="filter-row" style="justify-content:center"><button class="text-link" onclick="if(confirm('Thoát lượt luyện? Tiến độ sẽ được lưu để bạn tiếp tục sau.'))nav('practice')">Thoát lượt luyện</button></div></div>`;if(s.timed)tickTimer()}
function formatTime(sec){return `${Math.floor(sec/60).toString().padStart(2,'0')}:${(sec%60).toString().padStart(2,'0')}`}
function tickTimer(){if(!session?.timed)return;const t=document.querySelector('#timer');if(t)t.textContent=formatTime(Math.floor((Date.now()-session.started)/1000));timerId=setTimeout(()=>{if(session&&currentPage==='practice')tickTimer()},1000)}
function selectAnswer(j){const q=session.questions[session.index];session.answers[q.id]=j;if(state.daily.date!==today())state.daily={date:today(),count:0};state.daily.count++;save();renderSession()}
function prevQuestion(){window.speechSynthesis?.cancel();if(session.index>0){session.index--;renderSession()}}function nextQuestion(){window.speechSynthesis?.cancel();if(session.index<session.questions.length-1){session.index++;renderSession()}}
function submitSet(){window.speechSynthesis?.cancel();const s=session;let correct=0;const ids=[];s.questions.forEach(q=>{const ans=s.answers[q.id];if(ans===q.answer)correct++;else if(ans!==undefined)ids.push(q.id)});state.mistakes=[...new Set([...state.mistakes,...ids])];const unanswered=s.questions.length-Object.keys(s.answers).length;state.attempts.push({setId:s.set.id,date:today(),score:correct,total:s.questions.length});state.resume=null;save();const percent=Math.round(correct/s.questions.length*100),time=Math.floor((Date.now()-s.started)/1000);session=null;document.querySelector('#view').innerHTML=`<div class="session"><div class="page-heading"><div class="eyebrow">PRACTICE COMPLETE</div><h1>Kết quả luyện tập</h1><p>${s.set.level} · ${s.set.title}</p></div><article class="result-card"><div class="result-score"><div class="score-ring">${percent}%</div><div><h2>${correct===s.questions.length?'Rất tốt!':correct>=s.questions.length/2?'Bạn đang tiến bộ.':'Mỗi lần luyện là một bước tiến.'}</h2><p>Bạn trả lời đúng ${correct} trên ${s.questions.length} câu.</p></div></div><div class="result-stats"><div class="result-stat"><b>${correct}</b><small>Đúng</small></div><div class="result-stat"><b>${Object.keys(s.answers).length-correct}</b><small>Sai</small></div><div class="result-stat"><b>${unanswered}</b><small>Chưa trả lời</small></div></div>${s.timed?`<p style="font-size:11px;color:#7f8981">Thời gian: ${formatTime(time)}</p>`:''}<div class="result-actions"><button class="button" onclick="startSet('${s.set.id}',{shuffle:false,timed:${s.timed}})">Làm lại bộ này</button><button class="button secondary" onclick="retryMistakes('${s.set.id}')">Làm lại câu sai</button><button class="button ghost" onclick="nav('practice')">Danh sách bộ luyện</button><button class="button ghost" onclick="nav('mistakes')">Sổ lỗi sai (${state.mistakes.length})</button><button class="button ghost" onclick="nav('review');setTimeout(()=>{document.querySelector('#review-set').value='${s.set.id}';drawReview()},0)">Xem đáp án</button></div></article></div>`;updateSidebar()}
function retryMistakes(id){const qs=QUESTIONS.filter(q=>q.setId===id&&state.mistakes.includes(q.id));if(!qs.length){toast('Không có câu sai trong bộ này để làm lại.');return}session={set:SETS.find(s=>s.id===id),questions:qs,index:0,answers:{},started:Date.now(),timed:false};history.replaceState(null,'','#practice');setPage('practice');renderSession()}
function toast(m){const t=document.querySelector('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2200)}
document.querySelector('#export-btn').addEventListener('click',()=>{const blob=new Blob([JSON.stringify({exportedAt:new Date().toISOString(),progress:state},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='lingua-progress.json';a.click();URL.revokeObjectURL(a.href);toast('Đã xuất tiến độ về thiết bị này.')});window.addEventListener('hashchange',()=>{let p=location.hash.slice(1)||'home';if(!['home','practice','review','mistakes','resources'].includes(p))p='home';setPage(p)});window.addEventListener('beforeunload',()=>{if(session){state.resume={setId:session.set.id,index:session.index,answers:session.answers,elapsed:Math.floor((Date.now()-session.started)/1000),timed:session.timed,questionIds:session.questions.map(x=>x.id)};localStorage.setItem(KEY,JSON.stringify(state))}});const AUTO_PACKS=[
  {id:'udn-vstep-sample-2025',url:'packs/vstep-official-sample-udn.json',label:'ĐHNN Đà Nẵng 2025'},
  {id:'qnu-vstep-sample-official',url:'packs/vstep-official-sample-qnu.json',label:'ĐH Quy Nhơn & ĐH Đồng Tháp'},
  {id:'vstep-sample-zim',url:'packs/vstep-sample-zim.json',label:'ZIM · bài mẫu luyện tập'},
  {id:'vstep-sample-prep',url:'packs/vstep-sample-prep.json',label:'PREP · bài mẫu luyện tập'},
  {id:'lingua-vstep-hot-topics-c1-2026',url:'packs/vstep-hot-topics-c1.json',label:'Lingua · gói luyện C1 tổng hợp'},
  {id:'vstep-listening-simulated-2026-11',url:'packs/vstep-listening-full.json',label:'Nghe mô phỏng VSTEP · TTS (35 câu)'},
  {id:'vstep-writing-task1-simulated-2026-11',url:'packs/vstep-writing-task1-expanded.json',label:'Viết thư Task 1 mô phỏng (10 đề)'},
  {id:'vstep-speaking-simulated-2026-11',url:'packs/vstep-speaking-expanded.json',label:'Nói mô phỏng Part 1 & 2 (18 đề)'},
];
async function autoLoadPacks(){
  let anyNew=false;
  for(const p of AUTO_PACKS){
    const existing=(state.customPacks||[]).find(cp=>cp.pack_id===p.id);
    const needUpdate=!existing
      ||(p.id==='lingua-vstep-hot-topics-c1-2026'&&(state.customTasks||[]).filter(t=>t.set_id==='vstep-hot-topics-c1-ws').length<16)
      ||(p.id==='vstep-listening-simulated-2026-11'&&(state.customQuestions||[]).filter(q=>q.skill==='Listening').length<35)
      ||(p.id==='vstep-writing-task1-simulated-2026-11'&&(state.customTasks||[]).filter(t=>t.set_id==='vstep-task1-expanded-ws').length<10)
      ||(p.id==='vstep-speaking-simulated-2026-11'&&(state.customTasks||[]).filter(t=>t.set_id==='vstep-speaking-expanded-ws').length<18);
    if(needUpdate){
      try{
        const res=await fetch(p.url);
        if(res.ok){
          const pack=await res.json();
          applyPackData(pack,p.label,true);
          anyNew=true
        }
      }catch(e){
        console.warn('Auto-load pack error:',p.url,e)
      }
    }
  }
  if(anyNew){
    syncCustomContent();
    render()
  }
}
updateSidebar();setPage(location.hash.slice(1)||'home');autoLoadPacks();
function applyPackData(pack,sourceName,silent=false){const qs=pack.questions||[],sets=pack.sets||[],tasks=pack.open_tasks||[];if(!Array.isArray(qs)||!Array.isArray(tasks)||(!qs.length&&!tasks.length))throw Error('Gói cần có questions hoặc open_tasks.');const validQ=qs.every(q=>q.id&&q.setId&&['B1','B2','C1'].includes(q.level)&&q.prompt&&Array.isArray(q.options)&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length);const validT=tasks.every(t=>t.task_id&&t.set_id&&['B1','B2','C1'].includes(t.level)&&['Writing','Speaking'].includes(t.skill)&&t.prompt&&t.task_type);if(!validQ||!validT)throw Error('Có mục thiếu ID, trình độ, kỹ năng hoặc đáp án hợp lệ.');state.customQuestions=[...(state.customQuestions||[]).filter(old=>!qs.some(q=>q.id===old.id)),...qs];state.customSets=[...(state.customSets||[]).filter(old=>!sets.some(q=>q.id===old.id)),...sets];state.customTasks=[...(state.customTasks||[]).filter(old=>!tasks.some(q=>q.task_id===old.task_id)),...tasks];state.customPacks=[...(state.customPacks||[]).filter(old=>old.pack_id!==pack.pack_metadata?.pack_id),{pack_id:pack.pack_metadata?.pack_id||sourceName,title:pack.pack_metadata?.title||sourceName,source_info:pack.pack_metadata?.source_info||{}}];syncCustomContent();save();if(!silent)toast(`Đã nạp ${qs.length} câu & ${tasks.length} nhiệm vụ (${sourceName}).`);setTimeout(()=>render(),250)}
async function loadPresetPack(url,label){try{toast(`Đang nạp ${label}…`);const res=await fetch(url);if(!res.ok)throw new Error(`HTTP ${res.status}`);const pack=await res.json();applyPackData(pack,label)}catch(e){toast('Không nạp được: '+e.message)}}
function importRichPack(ev){const f=ev.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const pack=JSON.parse(r.result);applyPackData(pack,f.name)}catch(e){toast('Không nhập được: '+e.message)}ev.target.value=''};r.readAsText(f)}
function renderPersonalTasks(){const tasks=state.customTasks||[];if(!tasks.length)return '';return `<div class="section-head"><div><h2>Nhiệm vụ Writing & Speaking đã nhập</h2><p>Ghi bài/ý trả lời và lưu cục bộ trên thiết bị</p></div></div><div class="set-list">${tasks.map(t=>`<article class="review-card"><div class="question-kicker">${esc(t.level)} · ${esc(t.skill)} · ${esc(t.part||t.task_type)}${t.time_minutes?` · ${t.time_minutes} phút`:''}</div>${renderTaskPrompt(t)}${t.minimum_words?`<p class="task-meta">Tối thiểu ${t.minimum_words} từ · gợi ý thời gian ${t.time_minutes||''} phút</p>`:''}${Array.isArray(t.planning_steps)?`<details class="review-explain"><summary>Gợi ý lập ý</summary><ul>${t.planning_steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></details>`:''}<label class="task-response-label" for="response-${esc(t.task_id)}">${t.skill==='Writing'?'Bản nháp của bạn':'Dàn ý / ghi chú luyện nói'}</label><textarea id="response-${esc(t.task_id)}" class="task-response" data-task-id="${esc(t.task_id)}" oninput="updateWordCount('${esc(t.task_id)}')">${esc(state.taskResponses?.[t.task_id]||'')}</textarea><div class="task-toolbar"><small id="word-count-${esc(t.task_id)}">${(state.taskResponses?.[t.task_id]||'').trim()?(state.taskResponses[t.task_id].trim().split(/\s+/).length):0} từ</small><button class="button small" onclick="saveTaskResponse('${esc(t.task_id)}')">Lưu bài nháp</button></div>${Array.isArray(t.self_review)?`<details class="review-explain"><summary>Tự rà soát theo checklist</summary><ul>${t.self_review.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></details>`:''}</article>`).join('')}</div>`}
function updateWordCount(id){const el=document.querySelector(`#response-${CSS.escape(id)}`),out=document.querySelector(`#word-count-${CSS.escape(id)}`);if(el&&out)out.textContent=`${el.value.trim()?el.value.trim().split(/\s+/).length:0} từ`}
function saveTaskResponse(id){const el=document.querySelector(`#response-${CSS.escape(id)}`);if(!el)return;state.taskResponses=state.taskResponses||{};state.taskResponses[id]=el.value;save();toast('Đã lưu bài nháp trên thiết bị này.')}
function speakStimulus(id){const q=session?.questions.find(x=>x.id===id);if(!q?.stimulusText||!window.speechSynthesis){toast('Thiết bị này chưa hỗ trợ đọc văn bản.');return}window.speechSynthesis.cancel();const segments=q.stimulusText.split(/(?=\b(?:Woman|Man):\s*)/gi).map(s=>s.trim()).filter(Boolean);segments.forEach(segment=>{let clean=segment,pitch=1;if(/^Woman:\s*/i.test(segment)){clean=segment.replace(/^Woman:\s*/i,'');pitch=1.12}else if(/^Man:\s*/i.test(segment)){clean=segment.replace(/^Man:\s*/i,'');pitch=.9}const utterance=new SpeechSynthesisUtterance(clean);utterance.lang='en-GB';utterance.rate=.95;utterance.pitch=pitch;window.speechSynthesis.speak(utterance)})}
function renderTaskPrompt(t){if(!t.topic_statement&&!t.mindmap&&!t.follow_up_questions)return `<h3>${esc(t.prompt)}</h3>`;return `${t.topic_statement?`<div class="topic-statement"><span>TOPIC</span><p>${esc(t.topic_statement)}</p></div>`:''}${Array.isArray(t.mindmap)?`<div class="mindmap-grid">${t.mindmap.map((idea,i)=>`<div class="mindmap-node"><span>${i===t.mindmap.length-1?'YOUR OWN IDEA':`IDEA ${i+1}`}</span><p>${esc(idea)}</p></div>`).join('')}</div>`:''}${t.prompt?`<p class="task-meta">${esc(t.prompt)}</p>`:''}${Array.isArray(t.follow_up_questions)?`<div class="followups"><strong>Follow-up questions</strong><ol>${t.follow_up_questions.map(q=>`<li>${esc(q)}</li>`).join('')}</ol></div>`:''}`}
function renderStimulus(q){return q.stimulusText?`<section class="stimulus"><h3>${esc(q.stimulusTitle||q.skill)}</h3><p>${esc(q.stimulusText)}</p></section>`:''}


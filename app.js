const STORAGE_KEY = "travel-english-free-v1";
const viewEl = document.querySelector("#view");
const navEl = document.querySelector("#bottom-nav");
const toastEl = document.querySelector("#toast");
const speechSupported = "speechSynthesis" in window;

const defaultState = {
  completed: {},
  reviews: {},
  settings: {
    onboarded: false,
    dailyGoal: 10,
    locale: "en-US"
  }
};

let state = loadState();
let currentView = "home";
let activeLessonId = null;
let currentAnswers = {};
let lessonResult = null;
let reviewRevealed = false;
let phraseQuery = "";
let activeRecognition = null;
let toastTimer = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      ...defaultState,
      ...saved,
      settings: { ...defaultState.settings, ...(saved?.settings || {}) }
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function weekOf(day) {
  return Math.min(4, Math.floor((day - 1) / 7) + 1);
}

function weekName(week) {
  return ["抵达与安顿", "会议与沟通", "差旅与突发情况", "商务合作与实战"][week - 1];
}

function completedCount() {
  return Object.keys(state.completed).length;
}

function completedIds() {
  return new Set(Object.keys(state.completed).map(Number));
}

function nextLesson() {
  const ids = completedIds();
  return window.LESSONS.find((lesson) => !ids.has(lesson.id)) || window.LESSONS[window.LESSONS.length - 1];
}

function streakCount() {
  const days = new Set(Object.values(state.completed).map((item) => item.completedAt?.slice(0, 10)).filter(Boolean));
  if (!days.size) return 0;

  let cursor = new Date();
  if (!days.has(localDateKey(cursor)) && days.has(localDateKey(addDays(cursor, -1)))) {
    cursor = addDays(cursor, -1);
  }

  let count = 0;
  while (days.has(localDateKey(cursor))) {
    count += 1;
    cursor = addDays(cursor, -1);
  }
  return count;
}

function dueReviews() {
  const today = localDateKey();
  return Object.entries(state.reviews)
    .filter(([, item]) => item.due <= today)
    .map(([key, item]) => ({ key, ...item }))
    .sort((a, b) => a.due.localeCompare(b.due));
}

function lessonById(id) {
  return window.LESSONS.find((lesson) => lesson.id === Number(id));
}

function showToast(message) {
  clearTimeout(toastTimer);
  toastEl.textContent = message;
  toastEl.classList.add("show");
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2400);
}

function render(options = {}) {
  navEl.hidden = !state.settings.onboarded;

  if (!state.settings.onboarded) {
    viewEl.innerHTML = renderOnboarding();
    document.title = "开始 · 出差英语";
    return;
  }

  if (activeLessonId) {
    viewEl.innerHTML = renderLesson(lessonById(activeLessonId));
    document.title = `第 ${activeLessonId} 天 · 出差英语`;
  } else if (currentView === "course") {
    viewEl.innerHTML = renderCourse();
    document.title = "30 天课程 · 出差英语";
  } else if (currentView === "review") {
    viewEl.innerHTML = renderReview();
    document.title = "间隔复习 · 出差英语";
  } else if (currentView === "phrases") {
    viewEl.innerHTML = renderPhrases();
    document.title = "随身英语句 · 出差英语";
  } else if (currentView === "progress") {
    viewEl.innerHTML = renderProgress();
    document.title = "学习进度 · 出差英语";
  } else {
    viewEl.innerHTML = renderHome();
    document.title = "今天 · 出差英语";
  }

  document.querySelectorAll("#bottom-nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === currentView && !activeLessonId);
  });

  if (options.preserveScroll) {
    window.requestAnimationFrame(() => {
      window.scrollTo(0, options.scrollY || window.scrollY);
    });
  }
}

function renderOnboarding() {
  const goal = state.settings.dailyGoal;
  const locale = state.settings.locale;
  return `
    <section class="onboarding">
      <div class="card onboarding-card">
        <div class="big-icon">🌍</div>
        <span class="pill">完全免费 · 无需登录</span>
        <h1>出国出差，<br>先练说得出口的英语</h1>
        <p>30 个高频出差情境，每次约 10 分钟。从下飞机到开会、谈交付和告别，只学真正用得上的表达。</p>
        <div class="onboarding-points">
          <div><strong>👂 听与说</strong><br>英文朗读、中文谐音、跟读识别。</div>
          <div><strong>🗂 记住而不堆积</strong><br>学完的表达会自动进入间隔复习。</div>
          <div><strong>🔒 永久免费</strong><br>无广告、无内购、无服务器账号，进度保存在本机。</div>
        </div>

        <div class="setting-group" style="text-align:left">
          <span class="setting-label">每天计划</span>
          <div class="segmented">
            ${[5, 10, 15].map((value) => `
              <button data-action="goal" data-value="${value}" class="${goal === value ? "active" : ""}">${value} 分钟</button>
            `).join("")}
          </div>
          <span class="setting-label">朗读口音</span>
          <div class="segmented">
            ${[
              ["en-US", "美式"],
              ["en-GB", "英式"],
              ["en-AU", "澳式"]
            ].map(([value, label]) => `
              <button data-action="accent" data-value="${value}" class="${locale === value ? "active" : ""}">${label}</button>
            `).join("")}
          </div>
        </div>

        <button class="primary" data-action="complete-onboarding">开始学习</button>
      </div>
    </section>
  `;
}

function renderHome() {
  const lesson = nextLesson();
  const done = completedCount();
  const due = dueReviews().length;
  const lessonsThisWeek = window.LESSONS.filter((item) => weekOf(item.id) === weekOf(lesson.id));
  const completed = completedIds();

  return `
    <div class="page-head">
      <div>
        <p class="eyebrow">TODAY'S BUSINESS ENGLISH</p>
        <h1>今天，练一句<br>真正用得上英语</h1>
      </div>
      <span style="font-size:35px">✈️</span>
    </div>

    <button class="card hero week-${weekOf(lesson.id)}" data-action="start-lesson" data-lesson="${lesson.id}" style="width:100%;text-align:left">
      <span class="hero-content">
        <span class="hero-topline">
          <span class="pill">第 ${lesson.id} 天</span>
          <span>约 10 分钟</span>
        </span>
        <span class="hero-icon">${lesson.icon}</span>
        <h2>${escapeHTML(lesson.title)}</h2>
        <p>${escapeHTML(lesson.subtitle)}</p>
        <span class="hero-bottom">
          <span>今日首选 · ${state.settings.dailyGoal} 分钟</span>
          <span class="round-cta">开始 →</span>
        </span>
      </span>
    </button>

    <div class="stat-row">
      <div class="stat"><strong>${done}/30</strong><span>已完成</span></div>
      <div class="stat"><strong>${streakCount()}</strong><span>连续天数</span></div>
      <div class="stat"><strong>${due}</strong><span>今日复习</span></div>
    </div>

    <div class="two-col">
      <button class="card action-tile" data-action="nav" data-view="review">
        <span class="tile-icon">🗂</span>
        <h3>间隔复习</h3>
        <p>${due ? `${due} 张待复习` : "今天已完成"}</p>
      </button>
      <button class="card action-tile" data-action="nav" data-view="phrases">
        <span class="tile-icon">💬</span>
        <h3>随身句</h3>
        <p>90 个出差表达</p>
      </button>
    </div>

    <section class="section">
      <div class="section-title">
        <div>
          <p class="eyebrow">WEEK ${weekOf(lesson.id)}</p>
          <h2>本周路径 · ${weekName(weekOf(lesson.id))}</h2>
        </div>
      </div>
      <div class="list">
        ${lessonsThisWeek.map((item) => lessonRow(item, completed.has(item.id))).join("")}
      </div>
    </section>

    <section class="section card">
      <strong>💡 出差沟通的真实目标</strong>
      <p style="margin:8px 0 0;color:var(--muted);font-size:12px;line-height:1.6">
        先把意思说清楚，再追求说得完美。听不懂时直接说 “Could you say that again?”，比点头假装听懂更专业。
      </p>
    </section>
  `;
}

function renderCourse() {
  const completed = completedIds();
  return `
    <div class="page-head">
      <div>
        <p class="eyebrow">30-DAY ROADMAP</p>
        <h1>30 天出差英语</h1>
        <p>课程可以自由选择，不强制按顺序解锁。</p>
      </div>
      <span class="pill">${completed.size}/30</span>
    </div>
    ${[1, 2, 3, 4].map((week) => {
      const lessons = window.LESSONS.filter((lesson) => weekOf(lesson.id) === week);
      const done = lessons.filter((lesson) => completed.has(lesson.id)).length;
      return `
        <section class="section">
          <div class="section-title">
            <div>
              <p class="eyebrow">WEEK ${week}</p>
              <h2>${weekName(week)}</h2>
            </div>
            <span class="pill">${done}/${lessons.length}</span>
          </div>
          <div class="list">
            ${lessons.map((lesson) => lessonRow(lesson, completed.has(lesson.id))).join("")}
          </div>
        </section>
      `;
    }).join("")}
  `;
}

function lessonRow(lesson, isDone) {
  return `
    <button class="row-card ${isDone ? "done" : ""}" data-action="start-lesson" data-lesson="${lesson.id}">
      <span class="row-icon">${isDone ? "✓" : lesson.icon}</span>
      <span class="row-text">
        <strong>DAY ${lesson.id} · ${escapeHTML(lesson.title)}</strong>
        <small>${escapeHTML(lesson.subtitle)}</small>
      </span>
      <span class="chevron">›</span>
    </button>
  `;
}

function renderLesson(lesson) {
  if (!lesson) return "";

  const allAnswered = lesson.quiz && Object.keys(currentAnswers).length > 0;
  return `
    <div class="lesson-toolbar">
      <button class="back-button" data-action="back-course">‹ 返回课程</button>
      <span class="pill">第 ${lesson.id} 天 · 约 10 分钟</span>
    </div>

    <section class="card hero lesson-hero week-${weekOf(lesson.id)}">
      <span class="hero-content">
        <span class="hero-topline">
          <span class="pill">第 ${weekOf(lesson.id)} 周</span>
          <span>${weekName(weekOf(lesson.id))}</span>
        </span>
        <span class="hero-icon">${lesson.icon}</span>
        <h2>${escapeHTML(lesson.title)}</h2>
        <p>${escapeHTML(lesson.subtitle)}</p>
        <span class="hero-bottom"><span>听、跟读，再做一道检查题</span></span>
      </span>
    </section>

    <section class="card goal-card">
      <span class="goal-icon">◎</span>
      <div>
        <span class="eyebrow">本节目标</span>
        <p>${escapeHTML(lesson.goal)}</p>
      </div>
    </section>

    <section class="section">
      <div class="section-title">
        <div><p class="eyebrow">DIALOGUE</p><h2>听一遍，再看中文</h2></div>
      </div>
      <div class="dialogue">
        ${lesson.dialogue.map((line) => `
          <article class="bubble ${line[0] === "You" ? "me" : ""}">
            <div class="bubble-top">
              <span>${escapeHTML(line[0])}</span>
              <button class="speak-button" data-action="speak" data-text="${escapeHTML(line[1])}" aria-label="朗读">🔊</button>
            </div>
            <h3>${escapeHTML(line[1])}</h3>
            <p class="guide">${escapeHTML(line[2])}</p>
            <p class="translation">${escapeHTML(line[3])}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-title">
        <div><p class="eyebrow">POCKET PHRASES</p><h2>带上这三句</h2></div>
      </div>
      <div class="list">
        ${lesson.phrases.map((phrase, index) => `
          <article class="card phrase-card">
            <div class="phrase-head">
              <div>
                <h3>${escapeHTML(phrase[0])}</h3>
                <p class="phrase-meta">${escapeHTML(phrase[1])}</p>
                <p class="phrase-meta zh">${escapeHTML(phrase[2])}</p>
              </div>
              <button class="round-play" data-action="speak" data-text="${escapeHTML(phrase[0])}" aria-label="朗读">▶</button>
            </div>
            <div class="practice-row">
              <button class="mic-button" data-action="mic" data-phrase="${lesson.id}-${index}">🎙 点我朗读</button>
              <span class="practice-status" data-status="${lesson.id}-${index}">听原句，再尝试跟读</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-title">
        <div><p class="eyebrow">QUICK CHECK</p><h2>马上检查</h2></div>
      </div>
      ${renderQuiz(lesson)}
    </section>

    ${lessonResult ? `
      <section class="card result-card">
        <div class="score-ring">${lessonResult.score}</div>
        <h2>${lessonResult.score === 100 ? "本节掌握得很扎实" : "已经完成，复习会帮你记牢"}</h2>
        <p>关键表达已加入本地间隔复习。明天见到它时，先试着自己说出来。</p>
        <button class="primary" data-action="back-course">返回课程</button>
      </section>
    ` : `
      <button class="primary" data-action="finish-lesson" ${allAnswered ? "" : "disabled"}>
        ${allAnswered ? "完成本节并查看结果" : "回答上面的问题后完成"}
      </button>
    `}

    <p style="text-align:center;color:var(--muted);font-size:10px;margin-top:18px">
      跟读反馈依赖 Safari 的语音识别能力；不可用时仍可正常学习、朗读和答题。
    </p>
  `;
}

function renderQuiz(lesson) {
  const question = lesson.quiz;
  if (!question) return "";
  const selected = currentAnswers[0];
  return `
    <div class="card quiz-card">
      <span class="eyebrow">问题 1</span>
      <p class="question">${escapeHTML(question.prompt)}</p>
      <div class="choices">
        ${question.choices.map((choice, index) => {
          let className = "";
          if (selected !== undefined) {
            if (index === question.answer) className = "correct";
            else if (index === selected) className = "wrong";
          }
          return `
            <button class="choice ${className}" data-action="quiz" data-choice="${index}" ${selected !== undefined ? "disabled" : ""}>
              <span>${selected !== undefined && index === question.answer ? "✓" : selected === index ? "×" : "○"}</span>
              <span>${escapeHTML(choice)}</span>
            </button>
          `;
        }).join("")}
      </div>
      ${selected !== undefined ? `<p class="explanation">${escapeHTML(question.explanation)}</p>` : ""}
    </div>
  `;
}

function renderReview() {
  const due = dueReviews();
  if (!due.length) {
    return `
      <section class="empty">
        <div class="empty-icon">✓</div>
        <h2>今天的复习完成了</h2>
        <p>完成课程后，关键表达会自动进入间隔复习。每天短时回顾，比一次背很多更有效。</p>
      </section>
    `;
  }

  const card = due[0];
  return `
    <div class="page-head">
      <div>
        <p class="eyebrow">SPACED REVIEW</p>
        <h1>今日待复习<br>${due.length} 张</h1>
      </div>
      <span class="pill">先回想，再翻面</span>
    </div>

    <article class="card flashcard" data-action="review-reveal" role="button" tabindex="0" style="width:100%">
      <span class="flashcard-top">
        <span class="pill">第 ${card.lessonDay} 天</span>
        <button class="speak-button" data-action="speak" data-text="${escapeHTML(card.english)}" aria-label="朗读">🔊</button>
      </span>
      <span class="flashcard-content">
        <h2>${escapeHTML(card.english)}</h2>
        ${reviewRevealed ? `
          <span class="guide">${escapeHTML(card.guide)}</span>
          <span class="translation">${escapeHTML(card.chinese)}</span>
        ` : `<span style="color:rgba(255,255,255,.45);font-size:12px">点击卡片看中文</span>`}
      </span>
      <span class="flashcard-bottom">
        <span style="font-size:10px;color:rgba(255,255,255,.45)">已复习 ${card.repetitions || 0} 次</span>
        <span style="font-size:10px;color:rgba(255,255,255,.45)">→ 下一张</span>
      </span>
    </article>

    <div class="rate-grid" style="${reviewRevealed ? "" : "opacity:.35;pointer-events:none"}">
      <button class="rate-button" data-action="rate-review" data-rating="again">↺<br>还没记住</button>
      <button class="rate-button" data-action="rate-review" data-rating="hard">☁<br>有点难</button>
      <button class="rate-button good" data-action="rate-review" data-rating="good">✓<br>记住了</button>
    </div>
  `;
}

function renderPhrases() {
  return `
    <div class="page-head">
      <div>
        <p class="eyebrow">TRAVEL PHRASEBOOK</p>
        <h1>随身英语句</h1>
        <p id="phrase-count">90 个出差高频表达</p>
      </div>
      <span style="font-size:35px">💬</span>
    </div>
    <input id="phrase-search" class="search" type="search" value="${escapeHTML(phraseQuery)}" placeholder="搜索中文或英文，如“结账”“样品”">
    <div id="phrase-results" class="list"></div>
  `;
}

function phraseResultsHTML() {
  const query = phraseQuery.trim().toLowerCase();
  const hits = [];
  window.LESSONS.forEach((lesson) => {
    lesson.phrases.forEach((phrase) => {
      if (!query || phrase[0].toLowerCase().includes(query) || phrase[2].includes(query) || lesson.title.includes(query)) {
        hits.push({ lesson, phrase });
      }
    });
  });

  if (!hits.length) {
    return `<div class="empty"><div class="empty-icon">⌕</div><h2>没有找到</h2><p>试试搜索“酒店”“价格”“过敏”或英文词。</p></div>`;
  }

  return hits.map(({ lesson, phrase }) => `
    <article class="card phrase-card">
      <div class="phrase-head">
        <div>
          <span class="pill">DAY ${lesson.id} · ${escapeHTML(lesson.title)}</span>
          <h3 style="margin-top:10px">${escapeHTML(phrase[0])}</h3>
          <p class="phrase-meta">${escapeHTML(phrase[1])}</p>
          <p class="phrase-meta zh">${escapeHTML(phrase[2])}</p>
        </div>
        <button class="round-play" data-action="speak" data-text="${escapeHTML(phrase[0])}" aria-label="朗读">▶</button>
      </div>
    </article>
  `).join("");
}

function hydratePhrases() {
  const results = document.querySelector("#phrase-results");
  const count = document.querySelector("#phrase-count");
  if (!results || !count) return;
  results.innerHTML = phraseResultsHTML();
  const matches = results.querySelectorAll(".phrase-card").length;
  count.textContent = phraseQuery ? `找到 ${matches} 个表达` : "90 个出差高频表达";
}

function renderProgress() {
  const completed = completedCount();
  const completedData = Object.values(state.completed);
  const average = completedData.length
    ? Math.round(completedData.reduce((sum, item) => sum + (item.bestScore || 0), 0) / completedData.length)
    : 0;
  const reviewTotal = Object.keys(state.reviews).length;
  const due = dueReviews().length;

  return `
    <div class="page-head">
      <div>
        <p class="eyebrow">YOUR PROGRESS</p>
        <h1>我的学习进度</h1>
        <p>所有记录只保存在这台设备。</p>
      </div>
      <span style="font-size:35px">📈</span>
    </div>

    <section class="card progress-hero">
      <div class="progress-ring">${completed}<small style="font-size:11px">/30</small></div>
      <div>
        <h2>${completed === 30 ? "30 天课程已完成" : "出差英语学习进度"}</h2>
        <p>${completed === 0 ? "从第一节开始，先学会自然打招呼。" : "继续保持短时、频繁的练习，让表达真正变成肌肉记忆。"}</p>
      </div>
    </section>

    <div class="metric-grid section">
      <div class="metric"><strong>${streakCount()}</strong><span>连续学习天数</span></div>
      <div class="metric"><strong>${average}%</strong><span>平均练习得分</span></div>
      <div class="metric"><strong>${reviewTotal}</strong><span>复习表达总数</span></div>
      <div class="metric"><strong>${due}</strong><span>当前待复习</span></div>
    </div>

    <section class="card section">
      <h2 style="font-size:16px;margin:0 0 12px">四周进度</h2>
      ${[1, 2, 3, 4].map((week) => {
        const lessons = window.LESSONS.filter((lesson) => weekOf(lesson.id) === week);
        const done = lessons.filter((lesson) => state.completed[lesson.id]).length;
        const percent = Math.round(done / lessons.length * 100);
        return `
          <div class="week-line">
            <div class="week-line-head"><span>${weekName(week)}</span><span>${done}/${lessons.length}</span></div>
            <div class="bar"><i style="width:${percent}%"></i></div>
          </div>
        `;
      }).join("")}
    </section>

    <section class="card section setting-group">
      <h2 style="font-size:16px;margin:0 0 4px">学习设置</h2>
      <span class="setting-label">每天学习</span>
      <div class="segmented">
        ${[5, 10, 15].map((value) => `
          <button data-action="goal" data-value="${value}" class="${state.settings.dailyGoal === value ? "active" : ""}">${value} 分钟</button>
        `).join("")}
      </div>
      <span class="setting-label">朗读口音</span>
      <div class="segmented">
        ${[
          ["en-US", "美式"],
          ["en-GB", "英式"],
          ["en-AU", "澳式"]
        ].map(([value, label]) => `
          <button data-action="accent" data-value="${value}" class="${state.settings.locale === value ? "active" : ""}">${label}</button>
        `).join("")}
      </div>
    </section>

    <section class="card privacy section">
      <strong>🔒 完全免费，本地优先</strong><br>
      没有登录、订阅、广告或内购。课程直接包含在应用中；学习进度保存在浏览器本地。语音朗读使用设备系统声音。
      <br>
      <button class="danger-link" data-action="reset">清空本机学习记录</button>
    </section>
  `;
}

function speak(text) {
  if (!speechSupported) {
    showToast("当前浏览器不支持英文朗读。");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.settings.locale;
  utterance.rate = 0.82;
  utterance.pitch = 1;
  const voice = window.speechSynthesis
    .getVoices()
    .find((candidate) => candidate.lang.replace("_", "-") === state.settings.locale);
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function startRecognition(button) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    showToast("当前 Safari 不支持跟读识别。先跟着系统朗读练习即可。");
    return;
  }

  if (activeRecognition) {
    activeRecognition.stop();
    activeRecognition = null;
  }

  const card = button.closest(".phrase-card");
  const status = card?.querySelector(".practice-status");
  const recognition = new Recognition();
  activeRecognition = recognition;
  recognition.lang = state.settings.locale;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  button.classList.add("recording");
  button.textContent = "■ 结束跟读";
  if (status) status.textContent = "正在听你说…";

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results).map((result) => result[0].transcript).join(" ");
    if (status) status.textContent = transcript;
  };

  recognition.onerror = () => {
    if (status) status.textContent = "没听清楚，再试一次";
    showToast("识别没有成功，请检查麦克风权限。");
  };

  recognition.onend = () => {
    button.classList.remove("recording");
    button.textContent = "🎙 点我朗读";
    activeRecognition = null;
  };

  try {
    recognition.start();
  } catch {
    recognition.onend();
    showToast("语音识别暂时无法启动。");
  }
}

function finishLesson() {
  const lesson = lessonById(activeLessonId);
  if (!lesson || currentAnswers[0] === undefined) return;

  const score = currentAnswers[0] === lesson.quiz.answer ? 100 : 0;
  const previous = state.completed[lesson.id];
  state.completed[lesson.id] = {
    score,
    bestScore: Math.max(previous?.bestScore || 0, score),
    attempts: (previous?.attempts || 0) + 1,
    completedAt: new Date().toISOString()
  };

  lesson.phrases.forEach((phrase, index) => {
    const key = `${lesson.id}-${index}`;
    if (!state.reviews[key]) {
      state.reviews[key] = {
        english: phrase[0],
        guide: phrase[1],
        chinese: phrase[2],
        lessonDay: lesson.id,
        due: localDateKey(),
        interval: 1,
        ease: 2.5,
        repetitions: 0
      };
    }
  });

  saveState();
  lessonResult = { score };
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  render({ preserveScroll: true, scrollY: window.scrollY });
}

function rateReview(rating) {
  const current = dueReviews()[0];
  if (!current || !reviewRevealed) return;
  const card = state.reviews[current.key];

  if (rating === "again") {
    card.repetitions = 0;
    card.interval = 1;
    card.ease = Math.max(1.3, card.ease - 0.2);
  } else if (rating === "hard") {
    card.repetitions += 1;
    card.interval = Math.max(1, Math.round(card.interval * 1.2));
    card.ease = Math.max(1.3, card.ease - 0.05);
  } else {
    card.repetitions += 1;
    if (card.repetitions === 1) card.interval = 1;
    else if (card.repetitions === 2) card.interval = 3;
    else card.interval = Math.max(4, Math.round(card.interval * card.ease));
    card.ease = Math.min(3, card.ease + 0.05);
  }

  card.due = localDateKey(addDays(new Date(), card.interval));
  reviewRevealed = false;
  saveState();
  render();
}

function navTo(view) {
  currentView = view;
  activeLessonId = null;
  lessonResult = null;
  reviewRevealed = false;
  render();
  hydratePhrases();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "nav") {
    event.preventDefault();
    navTo(target.dataset.view);
    return;
  }

  if (action === "start-lesson") {
    activeLessonId = Number(target.dataset.lesson);
    currentAnswers = {};
    lessonResult = null;
    reviewRevealed = false;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (action === "back-course") {
    activeLessonId = null;
    lessonResult = null;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (action === "complete-onboarding") {
    state.settings.onboarded = true;
    saveState();
    render();
    window.scrollTo({ top: 0 });
    return;
  }

  if (action === "goal") {
    state.settings.dailyGoal = Number(target.dataset.value);
    saveState();
    render();
    return;
  }

  if (action === "accent") {
    state.settings.locale = target.dataset.value;
    saveState();
    render();
    return;
  }

  if (action === "speak") {
    event.stopPropagation();
    speak(target.dataset.text);
    return;
  }

  if (action === "mic") {
    startRecognition(target);
    return;
  }

  if (action === "quiz") {
    currentAnswers[0] = Number(target.dataset.choice);
    const y = window.scrollY;
    render({ preserveScroll: true, scrollY: y });
    return;
  }

  if (action === "finish-lesson") {
    finishLesson();
    return;
  }

  if (action === "review-reveal") {
    if (event.target.closest('[data-action="speak"]')) return;
    reviewRevealed = !reviewRevealed;
    render();
    return;
  }

  if (action === "rate-review") {
    rateReview(target.dataset.rating);
    return;
  }

  if (action === "reset") {
    if (window.confirm("清空这台设备上的完成记录和复习卡片？课程内容不会删除。")) {
      state.completed = {};
      state.reviews = {};
      saveState();
      render();
      showToast("本机学习记录已清空。");
    }
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "phrase-search") {
    phraseQuery = event.target.value;
    hydratePhrases();
  }
});

document.addEventListener("keydown", (event) => {
  const target = event.target.closest('[data-action="review-reveal"]');
  if (!target || !["Enter", " "].includes(event.key)) return;
  event.preventDefault();
  reviewRevealed = !reviewRevealed;
  render();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Local preview without HTTPS can still use all learning features.
    });
  });
}

window.speechSynthesis?.getVoices();
window.speechSynthesis?.addEventListener("voiceschanged", () => {
  window.speechSynthesis.getVoices();
});

render();
hydratePhrases();

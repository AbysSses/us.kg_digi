---
{"dg-publish":true,"dg-path":" blogs/index.md","permalink":"/blogs/index/","tags":["gardenEntry"],"created":"2025-04-25T23:37:41.966+08:00","updated":"2025-04-30T12:55:01.845+08:00"}
---

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>我的笔记主页</title>
  <style>
    /* 简单重置 & 布局 */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: sans-serif; background: #f5f5f5; color: #333; line-height: 1.6; }
    header { background: #0070f3; color: white; padding: 1rem; text-align: center; }
    nav a { color: white; margin: 0 0.5rem; text-decoration: none; }
    main { max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
    h1.page-title { margin-bottom: 1rem; }
    /* 笔记卡片 */
    .note-list { list-style: none; }
    .note-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      margin-bottom: 1.5rem;
      overflow: hidden;
    }
    .note-card a {
      color: inherit;
      text-decoration: none;
      display: block;
      padding: 1rem;
    }
    .note-card h2 {
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
    }
    .note-card time {
      font-size: 0.875rem;
      color: #666;
    }
    .note-card p.excerpt {
      margin-top: 0.75rem;
      color: #444;
    }
    /* Loading & 错误提示 */
    #loading, #error {
      text-align: center;
      color: #666;
      margin-top: 2rem;
    }
  </style>
</head>
<body>

  <header>
    <h1>我的笔记站</h1>
    <nav>
      <a href="/">首页</a>
      <a href="/about">关于我</a>
      <a href="/notes">所有笔记</a>
    </nav>
  </header>

  <main>
    <h1 class="page-title">最新发布的笔记</h1>
    <div id="loading">加载中…</div>
    <div id="error" style="display:none;">拉取笔记失败，请稍后重试。</div>
    <ul id="notes" class="note-list"></ul>
  </main>

  <script>
    // 向你的插件/后端暴露的接口请求最新笔记数据
    fetch('/api/notes?sort=date_desc&limit=5')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(notes => {
        document.getElementById('loading').style.display = 'none';
        const ul = document.getElementById('notes');
        if (notes.length === 0) {
          ul.innerHTML = '<p>暂时还没有笔记。</p>';
          return;
        }
        notes.forEach(note => {
          const li = document.createElement('li');
          li.className = 'note-card';
          li.innerHTML = `
            <a href="${note.url}">
              <h2>${note.title}</h2>
              <time datetime="${note.date}">${new Date(note.date).toLocaleDateString()}</time>
              <p class="excerpt">${note.excerpt || ''}</p>
            </a>
          `;
          ul.appendChild(li);
        });
      })
      .catch(err => {
        console.error(err);
        document.getElementById('loading').style.display = 'none';
        const e = document.getElementById('error');
        e.style.display = 'block';
        e.textContent = '加载笔记出错：' + err.message;
      });
  </script>

</body>
</html>

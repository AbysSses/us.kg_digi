---
{"dg-publish":true,"dg-path":" blogs/index.md","permalink":"/blogs/index/","tags":["gardenEntry"],"created":"2025-04-25T23:37:41.966+08:00","updated":"2025-04-28T23:37:19.796+08:00"}
---


{%- raw -%}
<div class="home-content">
  <h1>欢迎来到我的数字花园</h1>
  <p>在这里记录我的想法和学习。</p>

  <hr>

  <h2>最新笔记</h2>
  <ul class="recent-notes-list">
    {# 获取所有笔记，按日期降序排序，并限制为最新的 5 篇 #}
    {% set recentNotes = collections.note | reverse | limit(5) %}

    {# 遍历最新笔记并显示链接和日期 #}
    {% for note in recentNotes %}
      <li>
        <a href="{{ note.url | url }}">{{ note.data.title or note.fileSlug }}</a>
        {# 强制显示日期 - 优先使用 'created'，然后是 'date' #}
        <span class="note-date">- {{ (note.data.created or note.date) | date('yyyy-MM-dd') }}</span>
      </li>
    {% endfor %}
  </ul>

  {# 您可以在此处添加其他主页内容 #}

</div>
{%- endraw -%}

<style>
/* 您可以添加一些基本的样式 */
.home-content {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
}

.recent-notes-list {
  list-style: none;
  padding-left: 0;
}

.recent-notes-list li {
  margin-bottom: 10px;
  font-size: 1.1em;
}

.recent-notes-list a {
  text-decoration: none;
  color: var(--text-accent); /* 使用您主题的强调色 */
}

.recent-notes-list a:hover {
  text-decoration: underline;
}

.note-date {
  color: var(--text-muted); /* 使用您主题的柔和文本颜色 */
  font-size: 0.85em;
  margin-left: 8px;
}
</style>
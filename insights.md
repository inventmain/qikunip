---
layout: default
title: 专业观点
---

<style>
    /* --- 专业观点页面的样式 --- */
.page-header {
    background: var(--dark-color);
    color: var(--light-color);
    text-align: center;
    padding: 60px 20px;
}
.page-header h1 {
    color: var(--light-color);
    font-size: 2.8em;
}
.blog-section {
    padding: 60px 0;
}
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
}
.post-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.post-card-image {
    height: 200px;
    background-size: cover;
    background-position: center;
}
.post-card-content {
    padding: 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
.post-meta {
    color: #888;
    font-size: 0.9em;
    margin-bottom: 10px;
}
.post-card h3 {
    margin-top: 0;
    margin-bottom: 15px;
}
.post-card h3 a {
    text-decoration: none;
    color: var(--dark-color);
    font-size: 1.3em;
}
.post-card h3 a:hover {
    color: var(--primary-color);
}
.post-excerpt {
    color: #555;
    flex-grow: 1;
    margin-bottom: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 最多显示3行 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.read-more-link {
    text-decoration: none;
    color: var(--primary-color);
    font-weight: bold;
    align-self: flex-start; /* 链接总是在卡片底部 */
}
/* --- 响应式适配 --- */
@media (max-width: 768px) {
    .page-header { padding: 40px 20px; }
    .page-header h1 { font-size: 2.2em; }
    .blog-grid { grid-template-columns: 1fr; }
}
</style>

<main>
    <div class="page-header">
        <div class="container">
            <h1>专业观点</h1>
            <p>启坤专家团队的深度洞察与行业分析</p>
        </div>
    </div>

    <section class="blog-section">
        <div class="container">
            <div class="blog-grid">
                
<!-- 请将这段代码复制到 insights.md 中，替换原有的 for 循环 -->
<div class="blog-grid">
    {% for post in site.posts %}
    <article class="post-card">
        <h3 class="post-card-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>

        {% if post.image %}
        <div class="post-card-body with-image">
            <div class="post-card-image" style="background-image: url('{{ post.image | relative_url }}');"></div>
            <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
        </div>
        {% else %}
        <div class="post-card-body">
            <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
        </div>
        {% endif %}
    </article>
    {% endfor %}

</div>
                </div>
        </div>
    </section>
</main>

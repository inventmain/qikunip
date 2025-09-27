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
    /* Use repeat(auto-fit, ...) for a responsive grid with consistent width */
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
    /* Set a fixed height for all cards for consistency */
    height: 400px;
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
    /* This will truncate the text to fit within the card height */
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.read-more-link {
    text-decoration: none;
    color: var(--primary-color);
    font-weight: bold;
    align-self: flex-start;
}
/* --- 响应式适配 --- */
@media (max-width: 768px) {
    .page-header { padding: 40px 20px; }
    .page-header h1 { font-size: 2.2em; }
    .blog-grid { grid-template-columns: 1fr; }
    .post-card { height: auto; } /* Auto height on mobile for better readability */
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
                {% for post in site.posts %}
                <article class="post-card">
                    {% if post.image %}
                    <div class="post-card-image" style="background-image: url('{{ post.image | relative_url }}');"></div>
                    {% endif %}
                    <div class="post-card-content">
                        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                        <div class="post-meta">{{ post.date | date: "%Y年%m月%d日" }}</div>
                        <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
                        <a href="{{ post.url | relative_url }}" class="read-more-link">阅读更多</a>
                    </div>
                </article>
                {% endfor %}
            </div>
        </div>
    </section>
</main>

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
    flex-grow: 1; /* 让摘要部分占据多余空间 */
    margin-bottom: 20px;
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
                
                {% for post in site.posts %}
                <div class="post-card">
                    <div class="post-card-image" style="background-image: url('{{ post.image | default: '/images/default-thumb.jpg' }}');"></div>
                    <div class="post-card-content">
                        <p class="post-meta">{{ post.date | date: "%Y年%m月%d日" }}</p>
                        <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
                        <p class="post-excerpt">{{ post.excerpt }}</p>
                        <a href="{{ site.baseurl }}{{ post.url }}" class="read-more-link">阅读全文 &rarr;</a>
                    </div>
                </div>
                {% endfor %}
                </div>
        </div>
    </section>
</main>

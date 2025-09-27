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
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.post-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    overflow: hidden;
    padding: 25px;
    display: flex;
    flex-direction: column; /* Default to column layout for consistent spacing */
}
.post-card-title {
    font-size: 1.4em;
    margin: 0 0 15px 0;
}
.post-card-title a {
    text-decoration: none;
    color: var(--dark-color);
}

.post-card-body {
    display: flex;
    flex-direction: row; /* Default to horizontal layout for image + text */
    gap: 20px;
    align-items: flex-start; /* Aligns content to the top */
}

/* Specific styles for when there's no image */
.post-card-body:not(.with-image) {
    flex-direction: column;
}

.post-card-image {
    flex-shrink: 0;
    width: 250px; /* Adjust the image width as needed */
    height: 150px; /* Adjust the image height as needed */
    background-size: cover;
    background-position: center;
    border-radius: 6px;
}

.post-excerpt {
    color: #555;
    margin: 0;
    flex-grow: 1;
    line-height: 1.7;
    /* Remove text truncation for full display */
    display: block;
    overflow: visible;
    text-overflow: unset;
    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
}
/* --- 响应式适配 --- */
@media (max-width: 768px) {
    .page-header { padding: 40px 20px; }
    .page-header h1 { font-size: 2.2em; }
    .blog-grid { grid-template-columns: 1fr; }
    .post-card-body.with-image {
        flex-direction: column; /* Stack image and text vertically on mobile */
    }
    .post-card-image {
        width: 100%;
        height: 200px; /* Adjust height for mobile */
    }
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

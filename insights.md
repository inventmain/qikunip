---
layout: default
title: 专业观点
---

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

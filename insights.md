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

        /* --- START: 移动端汉堡菜单按钮 --- */
        .nav-toggle {
            display: none; /* 默认隐藏 */
            background: none;
            border: none;
            cursor: pointer;
            padding: 10px;
        }
        .nav-toggle .hamburger {
            display: block;
            width: 25px;
            height: 2px;
            background-color: var(--light-color);
            position: relative;
            transition: transform 0.3s ease;
        }
        .nav-toggle .hamburger::before,
        .nav-toggle .hamburger::after {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--light-color);
            transition: top 0.3s ease, bottom 0.3s ease, transform 0.3s ease;
        }
        .nav-toggle .hamburger::before { top: -8px; }
        .nav-toggle .hamburger::after { bottom: -8px; }
        .nav-open .nav-toggle .hamburger { transform: rotate(45deg); }
        .nav-open .nav-toggle .hamburger::before { top: 0; transform: rotate(90deg); }
        .nav-open .nav-toggle .hamburger::after { bottom: 0; transform: rotate(90deg); }
        /* --- END: 移动端汉堡菜单按钮 --- */

        /* --- START: 响应式适配 --- */
        @media (max-width: 992px) {
            .nav-toggle { display: block; z-index: 1001; }
            .navbar .container { flex-wrap: nowrap; }
            .nav-links {
                position: fixed;
                top: 0;
                right: 0;
                height: 100vh;
                width: 280px;
                background: var(--header-bg);
                flex-direction: column;
                align-items: flex-start;
                padding: 80px 30px 30px;
                transform: translateX(100%);
                transition: transform 0.3s ease-in-out;
            }
            .nav-open .nav-links { transform: translateX(0); }
            .nav-links > li { margin: 15px 0; width: 100%; }
            .nav-links a.nav-contact-btn { margin: 20px 0 0 0; text-align: center; display: block; }
            .dropdown-menu { position: static; display: none; background: #111; box-shadow: none; border-radius: 0; padding-left: 15px;}
            .dropdown:hover .dropdown-menu { display: block; }
        }

        @media (max-width: 768px) {
            h2 { font-size: 1.8em; }
            .hero { padding: 60px 20px; }
            .hero h1 { font-size: 2.2em; }
            .hero .subtitle { font-size: 1em; }
            .problem-section, .services-section, .how-we-work-section, .case-studies, .value-promise-section, .team-section, .final-cta { padding: 60px 0; }
            .services-section .grid, .case-studies .grid { grid-template-columns: 1fr; gap: 20px; }
            .workflow-container { flex-direction: column; align-items: center; gap: 30px; }
            .workflow-step { width: 80%; }
            .workflow-container::before { left: 50%; transform: translateX(-50%); top: 25px; bottom: 25px; width: 4px; height: auto; right: auto; }
            .main-partners-grid { grid-template-columns: 1fr; gap: 20px; }
            .partner-card .header { flex-direction: column; text-align: center; }
            .partner-card .header img { margin-right: 0; margin-bottom: 15px; }
            .logo-slider img { height: 45px; margin: 0 20px; }
        }
        /* --- END: 响应式适配 --- */
    
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

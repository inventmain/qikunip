/**
 * QiKun IP (启坤知识产权) - Multi-Language Switcher & Auto-Detection System
 * Supports:
 * 1. Persistent language choice via localStorage & Cookie ('zh' | 'en')
 * 2. Instant client-side switching with flag UI
 * 3. Smart first-visit detection (Browser language & GeoIP fallback)
 */

(function () {
    var STORAGE_KEY = 'qikun_lang';
    var path = window.location.pathname;
    var isEnglishPage = path.indexOf('/en/') !== -1;

    // Resolve counterpart URL
    function getCounterpartUrl(targetLang) {
        var currentFile = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
        if (targetLang === 'en') {
            if (isEnglishPage) return null;
            // From root or subfolder to /en/
            var dir = path.substring(0, path.lastIndexOf('/') + 1);
            return dir + 'en/' + currentFile;
        } else {
            if (!isEnglishPage) return null;
            // From /en/ to root
            return path.replace('/en/', '/');
        }
    }

    // Global switch function for buttons
    window.switchLanguage = function (lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
            document.cookie = STORAGE_KEY + "=" + lang + ";path=/;max-age=31536000";
        } catch (e) { }

        var target = getCounterpartUrl(lang);
        if (target) {
            window.location.href = target;
        } else {
            window.location.reload();
        }
    };

    // Check user's stored preference
    var savedLang = null;
    try {
        savedLang = localStorage.getItem(STORAGE_KEY);
    } catch (e) { }

    if (savedLang) {
        // Obey user choice strictly
        if (savedLang === 'en' && !isEnglishPage) {
            var targetEn = getCounterpartUrl('en');
            if (targetEn) window.location.replace(targetEn);
        } else if (savedLang === 'zh' && isEnglishPage) {
            var targetZh = getCounterpartUrl('zh');
            if (targetZh) window.location.replace(targetZh);
        }
    } else {
        // First visit: Heuristic detection
        var browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || '';
        var isChinese = browserLang.toLowerCase().indexOf('zh') === 0;

        if (!isChinese) {
            // International browser -> Default to English
            try { localStorage.setItem(STORAGE_KEY, 'en'); } catch (e) { }
            if (!isEnglishPage) {
                var targetEn = getCounterpartUrl('en');
                if (targetEn) window.location.replace(targetEn);
            }
        } else {
            // Chinese browser -> Check GeoIP asynchronously for overseas users
            try {
                fetch('https://api.country.is')
                    .then(function (res) { return res.json(); })
                    .then(function (data) {
                        if (data && data.country && data.country !== 'CN') {
                            // User is physically located outside China
                            try { localStorage.setItem(STORAGE_KEY, 'en'); } catch (e) { }
                            if (!isEnglishPage) {
                                var target = getCounterpartUrl('en');
                                if (target) window.location.replace(target);
                            }
                        } else {
                            try { localStorage.setItem(STORAGE_KEY, 'zh'); } catch (e) { }
                        }
                    })
                    .catch(function () {
                        try { localStorage.setItem(STORAGE_KEY, 'zh'); } catch (e) { }
                    });
            } catch (err) {
                try { localStorage.setItem(STORAGE_KEY, 'zh'); } catch (e) { }
            }
        }
    }
})();

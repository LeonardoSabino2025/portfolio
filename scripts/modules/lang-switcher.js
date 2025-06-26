// scripts/modules/lang-switcher.js

export function initLangSwitcher() {
    const langToggleBtn = document.getElementById('lang-toggle-btn');

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const currentPath = window.location.pathname;
            let newPath;

            if (currentPath.includes('index-en.html')) {
                newPath = currentPath.replace('index-en.html', 'index.html');
            } else {
                newPath = currentPath.replace('index.html', 'index-en.html');
                if (currentPath === '/') {
                    newPath = '/index-en.html';
                }
            }
            window.location.href = newPath;
        });

        // **Ajuste nesta parte para manipular os spans com emojis**
        const isEnglish = window.location.pathname.includes('index-en.html');
        const usFlag = langToggleBtn.querySelector('.lang-toggle__flag--us');
        const brFlag = langToggleBtn.querySelector('.lang-toggle__flag--br');

        if (isEnglish) {
            if (usFlag) usFlag.style.display = 'none';
            if (brFlag) brFlag.style.display = 'inline-block';
        } else {
            if (usFlag) usFlag.style.display = 'inline-block';
            if (brFlag) brFlag.style.display = 'none';
        }
    }
}
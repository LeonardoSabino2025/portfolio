export function initLangSwitcher() {
    const langToggleBtn = document.getElementById('lang-toggle-btn');

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const currentPathname = window.location.pathname; // Ex: '/index.html', '/portfolio/', '/portfolio/index-en.html'
            let newPath;

            // 1. Determina a "base" do caminho (o diretório onde os arquivos estão)
            let baseDir = '';
            // Se o pathname termina com um nome de arquivo (e.g., /index.html, /portfolio/index.html)
            if (currentPathname.endsWith('index.html')) {
                baseDir = currentPathname.replace('index.html', '');
            } else if (currentPathname.endsWith('index-en.html')) {
                baseDir = currentPathname.replace('index-en.html', '');
            } else {
                // Se o pathname termina apenas com uma barra (e.g., /, /portfolio/)
                baseDir = currentPathname;
            }

            // Garante que o baseDir termine com uma barra para concatenação consistente
            if (!baseDir.endsWith('/')) {
                baseDir += '/';
            }

            // 2. Determina se a página atual é a versão em inglês
            const isEnglishPage = currentPathname.includes('index-en.html');

            // 3. Constrói o novo caminho completo
            if (isEnglishPage) {
                // Se atualmente está na página em inglês, muda para a portuguesa
                newPath = baseDir + 'index.html';
            } else {
                // Se atualmente está na página em português, muda para a inglesa
                newPath = baseDir + 'index-en.html';
            }

            // Redireciona para a nova URL
            // window.location.origin garante que o domínio (http://localhost:8080 ou https://...) seja mantido
            window.location.href = window.location.origin + newPath;
        });

        // Lógica para exibir/ocultar as bandeiras ao carregar a página
        // Esta parte funciona bem, pois apenas verifica a presença de 'index-en.html' no pathname
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
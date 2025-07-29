import { initSmoothScroll } from './modules/smooth-scroll.js';
import { initAnimations } from './modules/animations.js';
import { initThemeSwitcher } from './modules/theme-switcher.js';
import { initMobileMenu } from './modules/mobile-menu.js';
import { initLangSwitcher } from './modules/lang-switcher.js';

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initAnimations();
    initThemeSwitcher();
    initMobileMenu();
    initLangSwitcher();
});
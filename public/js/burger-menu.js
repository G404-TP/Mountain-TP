(function () {
const btn = document.getElementById('burgerBtn');
const menu = document.getElementById('mobileMenu');
const backdrop = document.getElementById('backdrop');
const closeBtn = document.getElementById('closeMenu');
const open = () => {
    menu.classList.remove('-translate-x-full');
    backdrop.classList.remove('pointer-events-none');
    backdrop.classList.add('opacity-100');
    document.body.classList.add('overflow-hidden');
    btn?.setAttribute('aria-expanded', 'true');
};
const close = () => {
    menu.classList.add('-translate-x-full');
    backdrop.classList.add('pointer-events-none');
    backdrop.classList.remove('opacity-100');
    document.body.classList.remove('overflow-hidden');
    btn?.setAttribute('aria-expanded', 'false');
};
    btn?.addEventListener('click', () => {
    const closed = menu.classList.contains('-translate-x-full');
    closed ? open() : close();
});
    closeBtn?.addEventListener('click', close);
    backdrop.addEventListener('click', close);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
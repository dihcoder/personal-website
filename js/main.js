document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    document.addEventListener('click', (event) => {
        if (event.target.closest('.menu-toggle')) {
            return;
        }

        menuToggle.classList.remove('active');
        navMenu.classList.remove('mobile-visible');

        if (menuToggle.getAttribute('aria-expanded') === 'true') {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-visible');
            if (menuToggle.getAttribute('aria-expanded') === 'true') {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
            else {
                menuToggle.setAttribute('aria-expanded', 'true');
            }
            menuToggle.classList.toggle('active');
        });
    }
});
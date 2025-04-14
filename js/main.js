document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li');

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            changeActiveLink(this);
            let section = document.getElementById(this.getAttribute("data-section"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
    
    // Change the active nav link
    function changeActiveLink(currentLink) {
        if (currentLink.classList.contains("active")) {
            return;
        }
        navLinks.forEach(link => {
            link.classList.remove("active");
        });
        currentLink.classList.add("active");
    }

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

    function throttle(func, limit) {
        let lastCall = 0;
        return function (...args) {
            const now = Date.now();
            if (now - lastCall >= limit) {
                lastCall = now;
                func.apply(this, args);
            }
        };
    }

    function handleScroll() {
        const header = document.querySelector('.site-header');
        const scrollY = window.scrollY;
        const viewportWidth = window.innerWidth;
        const halfViewportHeight = window.innerHeight / 2;
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollY >= halfViewportHeight && viewportWidth > 640) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }

        navLinks.forEach(link => {
            const sectionId = link.getAttribute("data-section");
            const section = document.getElementById(sectionId);
        
            if (!section) return;
        
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
        
            const isInSection = scrollPosition >= sectionTop - window.innerHeight / 3 && scrollPosition < sectionBottom;
        
            if (isInSection) {
                changeActiveLink(link);
            }
        });
    }

    window.addEventListener('scroll', throttle(handleScroll, 200));

});
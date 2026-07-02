const navSlide = () => {
    const menu = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list > li');
    const submenuParent = document.querySelector('.has-submenu');
    const submenuToggle = document.querySelector('.submenu-toggle');

    const setMenuOpen = (open) => {
        nav.classList.toggle('nav-active', open);
        menu.classList.toggle('toggle', open);
        menu.setAttribute('aria-expanded', open ? 'true' : 'false');
        navLinks.forEach((link, index) => {
            link.style.animation = open
                ? `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
                : '';
        });
        if (!open && submenuParent) {
            submenuParent.classList.remove('submenu-open');
            submenuToggle.setAttribute('aria-expanded', 'false');
        }
    };

    menu.addEventListener('click', () => {
        setMenuOpen(!nav.classList.contains('nav-active'));
    });

    document.querySelectorAll('.nav-list a').forEach((link) => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) setMenuOpen(false);
        });
    });

    if (submenuToggle && submenuParent) {
        submenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isOpen = submenuParent.classList.toggle('submenu-open');
            submenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }
}

navSlide();


const tl = gsap.timeline({defaults: {duration: 1, ease: 'power1.out'}})

tl.fromTo('#ani_1', {x: -200, opacity: 0}, {x:0, opacity:1, duration: 1.5})
tl.fromTo('#ani_2', {y: 100, opacity: 0}, {opacity: 1, y:0})
tl.fromTo('#ani_3', {opacity: 0, scale: 0}, {opacity: 1, scale: 1, ease:"elastic.out(1, 0.4)", duration: 3})
tl.fromTo('#ani_3', {scale: 1}, {scale: 1.1, y:-15,  yoyo: true, repeat: -1, duration: 0.7})

// Scroll suave ao clicar no link do menu
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[href^='#']");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        if (href === '#about') {
            const aboutSection = document.querySelector(href);
            aboutSection.classList.add('show');

            const homeSection = document.querySelector('#home');
            homeSection.classList.remove('show');
        }

        const offsetTop = document.querySelector(href).offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
    window.addEventListener('beforeunload', function() {
        document.body.classList.add('fade-out');
    });
    
    window.addEventListener('DOMContentLoaded', function() {
        document.body.classList.remove('fade-out');
    });
});


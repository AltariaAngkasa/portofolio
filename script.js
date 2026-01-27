AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(25, 28, 36, 0.95)';
        navbar.style.boxShadow = '0 10px 30px -10px rgba(2,12,27,0.7)';
    } else {
        navbar.style.background = 'rgba(25, 28, 36, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
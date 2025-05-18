// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Update copyright year
    document.getElementById('yearDate').textContent = new Date().getFullYear();

    // Navbar functionality
    const navbar = document.getElementById('davnavbar');
    const menu = document.getElementById('davnavbarmenu');
    const hamburger = document.getElementById('davnavbarhamburger');
    const closeBtn = document.getElementById('davnavbarclose');
    const navLinks = document.querySelectorAll('.davnavbarlink');

    // Add scroll event listener for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-glass');
        } else {
            navbar.classList.remove('navbar-glass');
        }
    });

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.remove('active');
        }
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }, 1500);
    });

    // Active section highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.davnavbarlink');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Parallax effect for hero section
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        const scroll = window.pageYOffset;
        if (heroContent) {
            heroContent.style.transform = `translateY(${scroll * 0.4}px)`;
            heroContent.style.opacity = 1 - scroll / 700;
        }
    });

    // Image hover effect
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        aboutImage.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = aboutImage.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            aboutImage.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
        });

        aboutImage.addEventListener('mouseleave', () => {
            aboutImage.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
        });
    }

    // Service card hover effect
    const serviceCards = document.querySelectorAll('.davservicecard');
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
        });
    });

    // Tech stack card hover effect
    const techCards = document.querySelectorAll('.davtechstackcard');
    techCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Blog card hover effect
    const blogCards = document.querySelectorAll('.davblogcard');
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Script to add interactivity and enhance the website

document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scrolling to all links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    for (const link of navLinks) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }

    // Add hover effects to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.2)';
        });

        section.addEventListener('mouseout', () => {
            section.style.boxShadow = 'none';
        });
    });
});


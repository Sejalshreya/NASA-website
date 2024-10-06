// Script to add interactivity and enhance the website

document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scrolling to all nav links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effect to sections
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


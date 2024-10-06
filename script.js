// script.js
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.cta-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your interest! More information coming soon.');
        });
    });
});


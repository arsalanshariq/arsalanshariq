document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            // You can add more interactive effects here
            link.style.fontWeight = 'bold';
        });

        link.addEventListener('mouseout', () => {
            // Resetting the interactive effects
            link.style.fontWeight = 'normal';
        });
    });
});

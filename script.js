document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content-section');

    // Handle mouseover and mouseout for nav links
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.fontWeight = 'bold';
        });

        link.addEventListener('mouseout', () => {
            link.style.fontWeight = 'normal';
        });

        // Handle click events for nav links
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default anchor behavior

            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId);

            // Remove 'active' class from all sections and nav links
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            navLinks.forEach(lnk => {
                lnk.classList.remove('active');
            });

            // Add 'active' class to the clicked nav link and the target section
            this.classList.add('active');
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Optional: Smooth scroll to the target section
            // Smooth scrolling can be achieved using scrollIntoView method as well
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});

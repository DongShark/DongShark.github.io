// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor click behavior

        // Get the target section's ID
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to the target section smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

function navigateTo(pageId) {
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => {
        page.classList.remove('active');
        page.style.transform = 'translateX(100%)';
        page.style.opacity = 0;
    });

    const targetPage = document.getElementById(pageId);
    targetPage.classList.add('active');
    targetPage.style.transform = 'translateX(0)';
    targetPage.style.opacity = 1;


    // Reset animation on page change
    const title = targetPage.querySelector('h1');
    if (title) {
        title.style.animation = 'none'; // Reset animation
        title.offsetHeight; // Trigger reflow to restart animation
        title.style.animation = 'typeWriter 3s steps(30) 1s forwards'; // Restart animation
    }
}

// Set default to show first page
window.onload = () => navigateTo('page1');


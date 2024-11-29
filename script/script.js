// Select elements
const menu = document.getElementById('offcanvas-menu');
const toggleButton = document.getElementById('menu-toggle');
const closeButton = document.querySelector('.close-btn');

// Open menu and hide the toggle button
toggleButton.addEventListener('click', () => {
    menu.classList.add('show');
    toggleButton.style.display = 'none'; // Immediately hide the button
});

// Close menu and show the toggle button after a delay
closeButton.addEventListener('click', () => {
    menu.classList.remove('show');
    setTimeout(() => {
        toggleButton.style.display = 'block'; // Show the button after 300ms
    }, 300); // 300 milliseconds delay
});

// Close the menu when clicking outside of it and show the toggle button after a delay
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggleButton.contains(e.target)) {
        menu.classList.remove('show');
        setTimeout(() => {
            toggleButton.style.display = 'block'; // Show the button after 300ms
        }, 300); // 300 milliseconds delay
    }
});


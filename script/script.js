// Select elements
const menu = document.getElementById('offcanvas-menu');
const toggleButton = document.getElementById('menu-toggle');
const closeButton = document.querySelector('.close-btn');

// Open menu and hide the toggle button
toggleButton.addEventListener('click', () => {
    menu.classList.add('show');
    toggleButton.style.display = 'none'; // Hide the button
});

// Close menu and show the toggle button
closeButton.addEventListener('click', () => {
    menu.classList.remove('show');
    toggleButton.style.display = 'block'; // Show the button
});

// Close the menu when clicking outside of it and show the toggle button
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggleButton.contains(e.target)) {
        menu.classList.remove('show');
        toggleButton.style.display = 'block'; // Show the button
    }
});

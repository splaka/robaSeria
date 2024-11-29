// Detect touch support
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Open menu and hide the toggle button
const openMenu = () => {
    menu.classList.add('show');
    toggleButton.style.display = 'none';
};

// Close menu and show the toggle button after a delay
const closeMenu = () => {
    menu.classList.remove('show');
    setTimeout(() => {
        toggleButton.style.display = 'block';
    }, 300); // Adjust delay as needed
};

// Add event listeners
if (isTouchDevice) {
    toggleButton.addEventListener('touchstart', openMenu);
    closeButton.addEventListener('touchstart', closeMenu);
    document.addEventListener('touchstart', (e) => {
        if (!menu.contains(e.target) && !toggleButton.contains(e.target)) {
            closeMenu();
        }
    });
} else {
    toggleButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggleButton.contains(e.target)) {
            closeMenu();
        }
    });
}

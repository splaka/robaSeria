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

// Seleziona tutti gli elementi con classe "accordion"
var acc = document.getElementsByClassName("accordion");

// Aggiunge un evento click a ogni elemento
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // Alterna la classe "active"
        this.classList.toggle("active");

        // Gestisce il pannello successivo
        var panel = this.nextElementSibling;

        // Mostra o nasconde il pannello
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null; // Chiude il pannello
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"; // Mostra il pannello
        }
    });
}


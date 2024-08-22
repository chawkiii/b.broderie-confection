document.querySelector('.selected-option').addEventListener('click', function () {
    const optionsContainer = document.querySelector('.options-container');
    optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.option').forEach(function(optionElement) {
    optionElement.addEventListener('click', function () {
        const imgSrc = this.getAttribute('data-image');

        // Update the selected option to show only the flag
        document.querySelector('.selected-option img').src = imgSrc;

        // Hide the options
        document.querySelector('.options-container').style.display = 'none';
    });
});







/**********************************************

const main = document.getElementById('main');
const header = document.getElementById('header');
const headerLogo = document.getElementsByClassName('header-logo')[0];
let originalWidth; // Variable pour stocker la largeur originale
let headerHeight = header.offsetHeight;
let headerTransform;

// Calculer la hauteur du header
function updateHeaderHeight() {
    document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
}

// Calculer la hauteur de la page pour afficher le contenu après le header
function handleScroll() {
    let scrollTop = window.scrollY; // Distance du défilement depuis le haut de la page
    let maxScroll = window.innerHeight / 7; // Distance max pour l'effet d'opacité, ici la hauteur de la fenêtre

    // Calculer l'opacité en fonction de la position de défilement
    let opacity = 1 - (scrollTop / maxScroll);
    opacity = Math.max(0, Math.min(1, opacity)); // Limiter l'opacité entre 0 et 1

    header.style.opacity = opacity;
    main.style.opacity = 1 - opacity;

    // Calculer la nouvelle largeur en fonction de l'opacité
    let newWidth = originalWidth * opacity;
    headerLogo.style.width = newWidth + 'px';
    headerLogo.style.height = newWidth + 'px'; 
}

// Mettre à jour la hauteur du header au chargement de la page
window.onload = function() {
    originalWidth = parseFloat(window.getComputedStyle(headerLogo).width); // Initialiser la largeur originale
    updateHeaderHeight();
    handleScroll();
};

// Mettre à jour la hauteur du header et gérer le défilement lors du redimensionnement de la fenêtre
window.onresize = updateHeaderHeight;
window.onscroll = handleScroll;

// Code pour gérer le défilement spécifique du lien d'ancre
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le lien d'ancre
    const headerLink = document.querySelector('a[href="#header"]');

    // Ajouter un gestionnaire d'événements au clic
    headerLink.addEventListener('click', function(event) {
        // Empêcher le comportement par défaut du lien
        event.preventDefault();

        // Faire défiler la page vers le haut (scroll = 0)
        window.scrollTo({
            top: 0, // Position du défilement
            behavior: 'smooth' // Pour un défilement fluide
        });
    });
});

// Code pour détecter la section visible et appliquer la classe active
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop; // Ajustez en fonction de la hauteur de votre header
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    // Désactiver toutes les classes actives par défaut
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Si on a atteint une section, activer le lien correspondant
    if (current) {
        navLinks.forEach(link => {
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }
});


**********************************************************/
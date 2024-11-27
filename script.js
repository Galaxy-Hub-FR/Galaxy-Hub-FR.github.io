// Désactivation des outils de développement
document.addEventListener('keydown', (event) => {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'C' || event.key === 'J')) || (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
        alert("L'utilisation des outils de développement est désactivée !");
    }
});

// Désactiver clic droit
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    alert("Le clic droit est désactivé !");
});

// Codes valides pour chaque cheat
const validCodes = {
    Spoofer: "458554456585565656863846246425242742747240732470247204721472215525HBBDBVHGZBBVGH-GALAXY-HUB",
    GalaxyBoostFR: "863846246425242742747240732470247204721472215525HBB863846246425242742747240732470247204721472215525HBB",
    ModMenuFiveMBETA: "Fivem-OP-GALAXY-654321",
    SpeedHack: "SPEED-FAST-GALAXY-098765",
};

// Afficher le modal pour entrer le code
function showModal(cheat) {
    const modal = document.getElementById('modal');
    document.getElementById('cheat-name').textContent = cheat;
    modal.setAttribute('data-cheat', cheat); // Stocker le nom du cheat en cours
    modal.classList.add('show');
}

// Vérifier le code
function verifyCode() {
    const modal = document.getElementById('modal');
    const cheat = modal.getAttribute('data-cheat');
    const enteredCode = document.getElementById('codeInput').value;
    const errorMessage = document.getElementById('error-message');

    // Vérifier si le code est valide
    if (validCodes[cheat] === enteredCode) {
        errorMessage.textContent = "";
        alert("Code valide. Téléchargement en cours...");

        // Afficher le bouton de téléchargement direct
        document.getElementById(`${cheat}-download`).style.display = 'inline-block';
        
        closeModal();
    } else {
        errorMessage.textContent = "Code incorrect. Veuillez essayer à nouveau.";
    }
}

// Fermer le modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    document.getElementById('codeInput').value = ""; // Réinitialiser le champ code
}

// Empêcher la fermeture du modal si l'utilisateur clique en dehors du contenu
document.querySelector('.modal').addEventListener('click', (event) => {
    if (event.target === document.querySelector('.modal')) {
        closeModal();
    }
});

// Télécharger directement le cheat
function directDownload(cheat) {
    alert(`${cheat} - Téléchargement direct démarré !`);
    window.location.href = `downloads/${cheat}.rar`; // Modifier le chemin du fichier à télécharger
}

// Fonction pour créer des étoiles aléatoires
function createStars() {
    const body = document.querySelector('body');
    const numStars = 100; // Nombre d'étoiles à générer
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Position aléatoire
        const xPos = Math.random() * window.innerWidth;  // Position horizontale
        const yPos = Math.random() * window.innerHeight; // Position verticale
        const size = Math.random() * 3 + 1;  // Taille des étoiles entre 1px et 3px
        const delay = Math.random() * 2 + 's';  // Délai d'animation aléatoire

        // Application des styles CSS pour l'étoile
        star.style.left = `${xPos}px`;
        star.style.top = `${yPos}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = delay;
        
        // Ajouter l'étoile au body
        body.appendChild(star);
    }
}

// Appeler la fonction pour générer les étoiles à l'ouverture de la page
window.onload = createStars;

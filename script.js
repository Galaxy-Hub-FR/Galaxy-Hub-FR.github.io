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

        // Lancer les confettis
        launchConfetti();

        // Commencer le téléchargement après les confettis
        startDownload(cheat);
        
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

// Fonction pour démarrer le téléchargement
function startDownload(cheat) {
    // Lancer l'effet des confettis
    launchConfetti();
    
    // Télécharger directement sans message
    window.location.href = `downloads/${cheat}.rar`; // Modifier le chemin du fichier à télécharger
}

// Fonction pour créer des confettis
function launchConfetti() {
    const confettiCount = 100;
    for (let i = 0; i < confettiCount; i++) {
        createConfetti();
    }
}

// Fonction pour créer un confetti
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Positionnement et animation aléatoires
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;

    confetti.style.left = `${xPos}px`;
    confetti.style.top = `${yPos}px`;

    // Taille aléatoire des confettis
    const size = Math.random() * 10 + 5; // Taille entre 5px et 15px
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    // Couleurs aléatoires
    const colors = ['#ff6347', '#ffa500', '#32cd32', '#1e90ff', '#800080'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.backgroundColor = randomColor;

    // Ajouter le confetti à la page
    document.body.appendChild(confetti);

    // Supprimer le confetti après 3 secondes
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Créer des étoiles aléatoires (pour l'effet visuel de fond)
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    const xPosition = Math.random() * window.innerWidth;
    const yPosition = Math.random() * window.innerHeight;
    star.style.left = `${xPosition}px`;
    star.style.top = `${yPosition}px`;
    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 5000);
}

// Créer des étoiles toutes les 300ms
setInterval(createStar, 300);

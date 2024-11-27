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

// Fonction pour créer une étoile
function createStar() {
    // Créer un élément div pour l'étoile
    const star = document.createElement('div');
    star.classList.add('star');

    // Taille aléatoire entre 2px et 5px
    const size = Math.random() * 3 + 2; // Taille entre 2px et 5px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Position aléatoire
    const xPosition = Math.random() * window.innerWidth;
    const yPosition = Math.random() * window.innerHeight;

    star.style.left = `${xPosition}px`;
    star.style.top = `${yPosition}px`;

    // Ajouter l'étoile au body
    document.body.appendChild(star);

    // Supprimer l'étoile après un certain temps pour éviter l'accumulation
    setTimeout(() => {
        star.remove();
    }, 5000); // L'étoile disparaît après 5 secondes
}

// Créer des étoiles toutes les 300 ms
setInterval(createStar, 300);

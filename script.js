// Désactiver les outils de développement
document.addEventListener('keydown', (event) => {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && ['I', 'C', 'J'].includes(event.key)) || (event.ctrlKey && event.key === 'U')) {
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

// Vérification si un cheat a déjà été validé
function checkSavedState() {
    for (let cheat in validCodes) {
        if (localStorage.getItem(cheat) === "unlocked") {
            markAsCompleted(cheat);
        }
    }
}

// Sauvegarder l'état d'un cheat
function saveState(cheat) {
    localStorage.setItem(cheat, "unlocked");
}

// Marquer un cheat comme terminé
function markAsCompleted(cheat) {
    const button = document.querySelector(`button[onclick="showModal('${cheat}')"]`);
    if (button) {
        button.textContent = "Déjà téléchargé";
        button.disabled = true;
        button.classList.add('completed');
    }
}

// Afficher le modal pour entrer le code
function showModal(cheat) {
    if (localStorage.getItem(cheat) === "unlocked") {
        alert("Ce cheat a déjà été débloqué !");
        return;
    }

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

        // Sauvegarder l'état
        saveState(cheat);

        // Marquer comme terminé et lancer le téléchargement
        markAsCompleted(cheat);
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
    window.location.href = `downloads/${cheat}.rar`; // Modifier le chemin du fichier à télécharger
}

// Fonction pour créer des confettis avec un effet plus fluide
function launchConfetti() {
    const confettiCount = 100;
    for (let i = 0; i < confettiCount; i++) {
        createConfetti();
    }
}

// Appeler la fonction pour vérifier l'état au chargement
window.addEventListener('load', function () {
    checkSavedState();

    // Masquer le loader une fois la page chargée
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});

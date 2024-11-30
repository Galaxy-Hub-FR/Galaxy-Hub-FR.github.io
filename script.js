// Codes valides pour chaque cheat
const validCodes = {
    Spoofer: "458554456585565656863846246425242742747240732470247204721472215525HBBDBVHGZBBVGH-GALAXY-HUB",
    GalaxyBoostFR: "863846246425242742747240732470247204721472215525HBB863846246425242742747240732470247204721472215525HBB",
    ValorantMod: "Galaxy_crack_784250105812522525878922425525221005225022020",
    Galaxy_activateur: "Activateur_galaxy_745787444555855585214055455255525555656",
};

// Gestion des événements pour afficher le modal
document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function () {
        const cheatName = this.getAttribute('data-cheat');
        openModal(cheatName);
    });
});

// Fonction pour ouvrir le modal
function openModal(cheat) {
    const modal = document.getElementById('modal');
    const cheatNameElement = document.getElementById('cheat-name');
    cheatNameElement.textContent = `Téléchargement : ${cheat}`;
    modal.setAttribute('data-cheat', cheat); // Sauvegarder le nom du cheat dans l'attribut data
    modal.classList.add('show'); // Afficher le modal
}

// Vérification du code d'accès
document.getElementById('verifyCodeBtn').addEventListener('click', function () {
    const modal = document.getElementById('modal');
    const cheat = modal.getAttribute('data-cheat');
    const enteredCode = document.getElementById('codeInput').value;
    const errorMessage = document.getElementById('error-message');

    if (validCodes[cheat] === enteredCode) {
        alert(`Code correct ! Téléchargement de ${cheat} débloqué.`);
        triggerDownload(cheat);
        closeModal();
    } else {
        errorMessage.textContent = "Code incorrect. Veuillez réessayer.";
    }
});

// Fonction pour fermer le modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show'); // Cacher le modal
    document.getElementById('codeInput').value = ""; // Réinitialiser le champ
    document.getElementById('error-message').textContent = ""; // Réinitialiser l'erreur
}

// Déclencher le téléchargement
function triggerDownload(cheat) {
    const link = document.createElement('a');
    link.href = `downloads/${cheat}.rar`; // Chemin du fichier
    link.download = `${cheat}.rar`; // Nom du fichier
    link.click(); // Simuler le clic pour télécharger
}

// Fermer le modal en cliquant à l'extérieur
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Désactiver le clic droit
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

// Désactiver les raccourcis clavier Ctrl+Shift+I et Ctrl+U
document.addEventListener('keydown', function (event) {
    if (
        event.ctrlKey &&
        (event.key === 'I' || event.key === 'i' || event.key === 'u' || event.key === 'U' || (event.shiftKey && event.key === 'I'))
    ) {
        event.preventDefault(); // Empêche l'ouverture des outils de développement
    }
});

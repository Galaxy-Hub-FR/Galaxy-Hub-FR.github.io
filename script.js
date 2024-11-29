// Codes valides pour chaque cheat
const validCodes = {
    Spoofer: "458554456585565656863846246425242742747240732470247204721472215525HBBDBVHGZBBVGH-GALAXY-HUB",
    GalaxyBoostFR: "863846246425242742747240732470247204721472215525HBB863846246425242742747240732470247204721472215525HBB",
    ValorantMod: "Fivem-OP-GALAXY-654321",
    SpeedHack: "SPEED-FAST-GALAXY-098765",
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
    cheatNameElement.textContent = cheat;
    modal.setAttribute('data-cheat', cheat); // Sauvegarder le nom du cheat dans l'attribut data
    modal.style.display = 'block';
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
    modal.style.display = 'none';
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

// Codes valides pour chaque cheat
const validCodes = {
    Spoofer: "458554456585565656863846246425242742747240732470247204721472215525HBBDBVHGZBBVGH-GALAXY-HUB",
    GalaxyBoostFR: "863846246425242742747240732470247204721472215525HBB863846246425242742747240732470247204721472215525HBB",
    ModMenuFiveMBETA: "Fivem-OP-GALAXY-654321",
    SpeedHack: "SPEED-FAST-GALAXY-098765",
};

// Vérification de l'état à l'ouverture de la page
function initializeCheats() {
    for (let cheat in validCodes) {
        if (localStorage.getItem(cheat) === "unlocked") {
            markAsCompleted(cheat);
        }
    }
}

// Sauvegarder l'état dans LocalStorage
function saveState(cheat) {
    localStorage.setItem(cheat, "unlocked");
}

// Marquer un cheat comme débloqué dans l'UI
function markAsCompleted(cheat) {
    const button = document.querySelector(`button[onclick="showModal('${cheat}')"]`);
    if (button) {
        button.textContent = "Déjà téléchargé";
        button.disabled = true;
        button.classList.add('completed');
    }
}

// Afficher le modal pour entrer un code
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

// Vérifier le code saisi
function verifyCode() {
    const modal = document.getElementById('modal');
    const cheat = modal.getAttribute('data-cheat');
    const enteredCode = document.getElementById('codeInput').value;
    const errorMessage = document.getElementById('error-message');

    // Vérification du code
    if (validCodes[cheat] === enteredCode) {
        errorMessage.textContent = "";
        saveState(cheat);
        markAsCompleted(cheat);
        alert("Code correct ! Téléchargement débloqué.");
        closeModal();
        triggerDownload(cheat);
    } else {
        errorMessage.textContent = "Code incorrect. Veuillez réessayer.";
    }
}

// Fermer le modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    document.getElementById('codeInput').value = ""; // Réinitialiser le champ code
}

// Déclencher le téléchargement
function triggerDownload(cheat) {
    const link = document.createElement('a');
    link.href = `downloads/${cheat}.rar`; // Chemin du fichier
    link.download = `${cheat}.rar`; // Nom du fichier
    link.click(); // Simuler le clic pour télécharger
}

// Initialisation
window.onload = initializeCheats;

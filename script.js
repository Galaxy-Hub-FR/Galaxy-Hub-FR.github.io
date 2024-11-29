// Codes valides pour chaque cheat
const validCodes = {
    Spoofer: "458554456585565656863846246425242742747240732470247204721472215525HBBDBVHGZBBVGH-GALAXY-HUB",
    GalaxyBoostFR: "863846246425242742747240732470247204721472215525HBB863846246425242742747240732470247204721472215525HBB",
    ModMenuFiveMBETA: "Fivem-OP-GALAXY-654321",
    SpeedHack: "SPEED-FAST-GALAXY-098765",
};

// Désactiver le clic droit et certaines touches de développement
document.addEventListener("contextmenu", function(e) {
    e.preventDefault(); // Empêche le menu contextuel (clic droit)
});

document.addEventListener("keydown", function(e) {
    if ((e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.shiftKey && e.key === "C") || (e.ctrlKey && e.key === "U")) {
        e.preventDefault(); // Empêche l'ouverture des outils de développement
        alert("Vous ne pouvez pas utiliser cette fonctionnalité !");
    }
});

// Vérification de l'état des cheats à l'ouverture de la page
function initializeCheats() {
    for (let cheat in validCodes) {
        if (localStorage.getItem(cheat) === "unlocked") {
            markAsCompleted(cheat);
        }
    }
}

// Sauvegarder l'état dans LocalStorage (le cheat débloqué)
function saveState(cheat) {
    localStorage.setItem(cheat, "unlocked");
}

// Marquer un cheat comme débloqué dans l'interface
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

// Vérifier le code saisi par l'utilisateur
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
    link.href = `downloads/${cheat}.rar`; // Chemin du fichier de téléchargement
    link.download = `${cheat}.rar`; // Nom du fichier téléchargé
    document.body.appendChild(link); // Ajouter l'élément au DOM
    link.click(); // Simuler le clic pour déclencher le téléchargement
    document.body.removeChild(link); // Retirer le lien du DOM après le clic
}

// Initialisation des cheats lorsque la page se charge
window.onload = initializeCheats;

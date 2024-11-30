// Codes valides pour chaque cheat avec un état et un nombre d'utilisations
const validCodes = {
    "458554": { cheatName: "Spoofer", isActive: true, usesLeft: 1 },
    "863846": { cheatName: "GalaxyBoostFR", isActive: true, usesLeft: 3 },
    "784250": { cheatName: "ValorantMod", isActive: false, usesLeft: 0 }, // Désactivé
    "745787": { cheatName: "Galaxy_activateur", isActive: true, usesLeft: 5 }
};

// Gestion des événements pour afficher le modal
document.querySelectorAll('.download-btn').forEach(button => {
    const cheat = button.getAttribute('data-cheat');
    
    // Vérifier si le cheat est actif
    if (!isCheatEnabled(cheat)) {
        button.disabled = true; // Désactiver le bouton
        button.textContent = "Indisponible"; // Changer le texte du bouton
    }

    button.addEventListener('click', function () {
        const modal = document.getElementById('modal');
        modal.classList.add('show'); // Afficher le modal
        modal.setAttribute('aria-hidden', 'false'); // Mettre à jour l'attribut aria
        modal.setAttribute('data-cheat', cheat);
    });
});

// Vérification du code d'accès
document.getElementById('verifyCodeBtn').addEventListener('click', function () {
    const enteredCode = document.getElementById('codeInput').value.trim();
    const codeData = validCodes[enteredCode];

    if (codeData && codeData.isActive && codeData.usesLeft > 0) {
        // Code valide
        alert(`Code correct ! Téléchargement de ${codeData.cheatName} débloqué.`);
        triggerDownload(codeData.cheatName);

        // Réduire le nombre d'utilisations restantes
        codeData.usesLeft--;

        // Désactiver le code s'il n'a plus d'utilisations
        if (codeData.usesLeft <= 0) {
            codeData.isActive = false;
        }

        closeModal();
    } else if (codeData && codeData.usesLeft === 0) {
        // Code utilisé mais plus disponible
        alert("Ce code a atteint sa limite d'utilisations.");
    } else {
        // Code invalide
        alert("Code incorrect. Veuillez réessayer.");
    }
});

// Fonction pour déclencher un téléchargement
function triggerDownload(cheat) {
    const link = document.createElement('a');
    link.href = `downloads/${cheat}.rar`; // Chemin du fichier
    link.download = `${cheat}.rar`; // Nom du fichier
    link.click(); // Simuler le clic pour télécharger
}

// Fonction pour fermer le modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show'); // Cacher le modal
    modal.setAttribute('aria-hidden', 'true'); // Mettre à jour l'attribut aria
    document.getElementById('codeInput').value = ""; // Réinitialiser le champ
}

// Vérifier si un cheat est activé
function isCheatEnabled(cheatName) {
    return Object.values(validCodes).some(code => code.cheatName === cheatName && code.isActive);
}

// Fermer le modal en cliquant à l'extérieur
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Initialisation des données avec sauvegarde locale
const initialValidCodes = {
    "458554": { cheatName: "Spoofer", isActive: true, usesLeft: 1 },
    "863846": { cheatName: "GalaxyBoostFR", isActive: true, usesLeft: 3 },
    "784250": { cheatName: "ValorantMod", isActive: false, usesLeft: 0 }, // Désactivé
    "745787": { cheatName: "Galaxy_activateur", isActive: true, usesLeft: 5 }
};

// Charger les données depuis LocalStorage ou utiliser les données par défaut
let validCodes = JSON.parse(localStorage.getItem('validCodes')) || initialValidCodes;

// Sauvegarder les données dans LocalStorage
function saveCodesToLocalStorage() {
    localStorage.setItem('validCodes', JSON.stringify(validCodes));
}

// Cacher le modal par défaut au chargement
window.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    modal.classList.remove('show'); // Retirer la classe "show"
    modal.setAttribute('aria-hidden', 'true');
});

// Gestion des événements pour afficher le modal uniquement sur clic d'un bouton
document.querySelectorAll('.download-btn').forEach(button => {
    const cheat = button.getAttribute('data-cheat');

    // Vérifier si le cheat est actif
    if (!isCheatEnabled(cheat)) {
        button.disabled = true; // Désactiver le bouton
        button.textContent = "Indisponible"; // Changer le texte du bouton
    }

    button.addEventListener('click', function () {
        const modal = document.getElementById('modal');
        const cheatTitle = document.getElementById('modalCheatTitle');

        // Mettre à jour le titre et afficher le modal
        cheatTitle.textContent = cheat;
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
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

        // Mettre à jour les boutons associés aux cheats
        updateCheatButtons();

        // Sauvegarder l'état mis à jour
        saveCodesToLocalStorage();

        closeModal(); // Fermer le modal après vérification
    } else if (codeData && codeData.usesLeft === 0) {
        alert("Ce code a atteint sa limite d'utilisations.");
    } else {
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

// Mettre à jour l'état des boutons en fonction de l'état des cheats
function updateCheatButtons() {
    document.querySelectorAll('.download-btn').forEach(button => {
        const cheat = button.getAttribute('data-cheat');
        if (!isCheatEnabled(cheat)) {
            button.disabled = true;
            button.textContent = "Indisponible";
        } else {
            button.disabled = false;
            button.textContent = "Télécharger";
        }
    });
}

// Initialiser l'état des boutons au chargement
updateCheatButtons();

// Sauvegarder les changements lorsqu'un utilisateur quitte la page
window.addEventListener('beforeunload', saveCodesToLocalStorage);

// Fermer le modal en cliquant à l'extérieur
window.addEventListener('click', function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Ajouter un écouteur pour la touche "Échap" pour fermer le modal
document.addEventListener('keydown', function (event) {
    const modal = document.getElementById('modal');
    if (event.key === "Escape" && modal.classList.contains('show')) {
        closeModal();
    }
});

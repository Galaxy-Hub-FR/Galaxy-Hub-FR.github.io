// Lien vers la vidéo Rickroll
const rickrollURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

// Désactivation des outils de développement et rediriger vers Rickroll
document.addEventListener('keydown', (event) => {
    if (
        event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && ['I', 'C', 'J'].includes(event.key)) || 
        (event.ctrlKey && event.key === 'U')
    ) {
        event.preventDefault();
        window.location.href = rickrollURL; // Rediriger vers Rickroll
    }
});

// Désactiver le clic droit et rediriger vers Rickroll
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    window.location.href = rickrollURL; // Rediriger vers Rickroll
});

// Codes valides pour chaque cheat
const validCodes = {
    Spoofer: "458554456585565656863846246425242742747240732470247204721472215525HBBDBVHGZBBVGH-GALAXY-HUB",
    GalaxyBoostFR: "863846246425242742747240732470247204721472215525HBB863846246425242742747240732470247204721472215525HBB",
    GalaxyCrossHair: "GalaxyCrossHair-ULTRA-GALAXY-123456552855552555855655455255258554545558565685565556",
    ModMenuFiveMBETA: "Fivem-OP-GALAXY-654321",
    SpeedHack: "SPEED-FAST-GALAXY-098765",
    TeleportHack: "TELEPORT-OP-GALAXY-112233",
    InvisibilityHack: "INVISIBLE-GALAXY-445566",
    MoneyHack: "MONEY-HACK-GALAXY-778899"
};

// Affichage de la modale pour entrer le code
function showModal(cheat) {
    const modal = document.getElementById('modal');
    document.getElementById('cheat-name').textContent = cheat;
    modal.setAttribute('data-cheat', cheat); // Stocker le cheat sélectionné
    modal.classList.add('show');
}

// Vérification du code de triche
function verifyCode() {
    const modal = document.getElementById('modal');
    const cheat = modal.getAttribute('data-cheat'); // Récupérer le cheat en cours
    const enteredCode = document.getElementById('codeInput').value;
    const errorMessage = document.getElementById('error-message');

    // Vérifier si le code est valide pour ce cheat
    if (validCodes[cheat] === enteredCode) {
        errorMessage.textContent = "";
        alert("Code valide. Téléchargement en cours...");
        window.location.href = `downloads/${cheat}.rar`; // Téléchargement du fichier
        closeModal();
    } else {
        errorMessage.textContent = "Code incorrect. Veuillez essayer à nouveau.";
    }
}

// Fermer la modale
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    document.getElementById('codeInput').value = ""; // Réinitialiser le champ de saisie
}

// Empêcher la fermeture de la modale si l'utilisateur clique en dehors du contenu
document.querySelector('.modal').addEventListener('click', (event) => {
    if (event.target === document.querySelector('.modal')) {
        closeModal();
    }
});

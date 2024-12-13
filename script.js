// === Initialisation des données et des codes dynamiques ===
const initialValidCodes = {
    "458554": generateCode("Spoofer", 1),
    "863846": generateCode("GalaxyBoostFR", 3),
    "784250": generateCode("ValorantMod", 0), // Désactivé
    "745787": generateCode("GalaxyActivateur", 5)
};

// Charger les données depuis LocalStorage ou utiliser les données initiales
let validCodes = JSON.parse(localStorage.getItem("validCodes")) || initialValidCodes;

// Sauvegarder les données dans LocalStorage
function saveCodesToLocalStorage() {
    localStorage.setItem("validCodes", JSON.stringify(validCodes));
}

// Générer un code unique avec durée de vie et nombre d'utilisations
function generateCode(cheatName, uses, expirationInHours = 24) {
    const code = Math.random().toString(36).substring(2, 10).toUpperCase(); // Code unique
    const expirationTime = Date.now() + expirationInHours * 60 * 60 * 1000; // Durée en ms
    return {
        cheatName,
        isActive: true,
        usesLeft: uses,
        expirationTime
    };
}

// Vérifier si un code est valide
function isValidCode(code) {
    const codeData = validCodes[code];
    if (!codeData) return false;

    const isExpired = Date.now() > codeData.expirationTime;
    if (isExpired) {
        codeData.isActive = false;
        saveCodesToLocalStorage();
        return false;
    }
    return codeData.isActive && codeData.usesLeft > 0;
}

// === Gestion du Modal ===
window.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
});

// Affichage du modal
document.querySelectorAll(".download-btn").forEach((button) => {
    const cheat = button.getAttribute("data-cheat");

    if (!isCheatEnabled(cheat)) {
        button.disabled = true;
        button.textContent = "Indisponible";
        button.classList.add("disabled-btn");
    }

    button.addEventListener("click", function () {
        const modal = document.getElementById("modal");
        const cheatTitle = document.getElementById("modalCheatTitle");
        cheatTitle.textContent = cheat;
        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");
        modal.setAttribute("data-cheat", cheat);
    });
});

// Vérification d'un code d'accès
document.getElementById("verifyCodeBtn").addEventListener("click", function () {
    const enteredCode = document.getElementById("codeInput").value.trim();
    const codeData = validCodes[enteredCode];

    if (isValidCode(enteredCode)) {
        alert(`Code correct ! Téléchargement de ${codeData.cheatName} débloqué.`);
        triggerDownload(codeData.cheatName);

        // Réduire les utilisations et désactiver le code si nécessaire
        codeData.usesLeft--;
        if (codeData.usesLeft <= 0) {
            codeData.isActive = false;
        }

        updateCheatButtons();
        saveCodesToLocalStorage();
        closeModal();
    } else if (codeData && codeData.usesLeft === 0) {
        alert("Ce code a atteint sa limite d'utilisations.");
    } else {
        alert("Code incorrect ou expiré. Veuillez réessayer.");
    }
});

// Téléchargement du fichier
function triggerDownload(cheat) {
    const link = document.createElement("a");
    link.href = `downloads/${cheat}.rar`;
    link.download = `${cheat}.rar`;
    link.click();
}

// Fermer le modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.getElementById("codeInput").value = "";
}

// Vérifier si un cheat est activé
function isCheatEnabled(cheatName) {
    return Object.values(validCodes).some((code) => code.cheatName === cheatName && code.isActive);
}

// Mettre à jour l'état des boutons en fonction des cheats
function updateCheatButtons() {
    document.querySelectorAll(".download-btn").forEach((button) => {
        const cheat = button.getAttribute("data-cheat");
        if (!isCheatEnabled(cheat)) {
            button.disabled = true;
            button.textContent = "Indisponible";
            button.classList.add("disabled-btn");
        } else {
            button.disabled = false;
            button.textContent = "Télécharger";
            button.classList.remove("disabled-btn");
        }
    });
}

// Sauvegarde des données avant de quitter la page
window.addEventListener("beforeunload", saveCodesToLocalStorage);

// Fermer le modal en cliquant à l'extérieur
window.addEventListener("click", function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
});

// Fermer le modal avec "Escape"
document.addEventListener("keydown", function (event) {
    const modal = document.getElementById("modal");
    if (event.key === "Escape" && modal.classList.contains("show")) {
        closeModal();
    }
});

// === Chiffres dynamiques en fond ===
function createRandomNumbers() {
    const body = document.body;
    const numberCount = 150; // Nombre total de chiffres
    for (let i = 0; i < numberCount; i++) {
        const number = document.createElement("div");
        number.classList.add("number");
        number.textContent = Math.floor(Math.random() * 10); // Générer un chiffre aléatoire
        number.style.left = `${Math.random() * 100}%`;
        number.style.animationDuration = `${Math.random() * 10 + 5}s`;
        number.style.animationDelay = `${Math.random() * 5}s`;
        body.appendChild(number);
    }
}

// Ajouter styles dynamiques pour les chiffres
const style = document.createElement("style");
style.textContent = `
    .number {
        position: fixed;
        top: -50px;
        font-size: 1.5rem;
        color: rgba(0, 255, 200, 0.8);
        animation: fall infinite linear;
    }
    @keyframes fall {
        to {
            transform: translateY(120vh);
        }
    }
`;
document.head.appendChild(style);

// Initialiser les chiffres dynamiques
createRandomNumbers();

// === Initialiser ===
updateCheatButtons();

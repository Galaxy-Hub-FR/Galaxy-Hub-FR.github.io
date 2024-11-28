// Fonction pour ajouter un nouveau cheat
function addCheat() {
    const cheatName = document.getElementById('cheatName').value;
    const cheatDescription = document.getElementById('cheatDescription').value;
    const cheatDownloadLink = document.getElementById('cheatDownloadLink').value;

    // Vérifie si tous les champs sont remplis
    if (cheatName && cheatDescription && cheatDownloadLink) {
        // Crée une carte de cheat
        const cheatCard = document.createElement('div');
        cheatCard.classList.add('card');
        
        const cheatTitle = document.createElement('h2');
        cheatTitle.textContent = cheatName;
        cheatCard.appendChild(cheatTitle);
        
        const cheatDesc = document.createElement('p');
        cheatDesc.textContent = cheatDescription;
        cheatCard.appendChild(cheatDesc);
        
        const cheatBtn = document.createElement('button');
        cheatBtn.classList.add('download-btn');
        cheatBtn.textContent = 'Télécharger';
        cheatBtn.onclick = function() {
            window.location.href = cheatDownloadLink; // Redirige vers le lien de téléchargement
        };
        cheatCard.appendChild(cheatBtn);
        
        // Ajoute la nouvelle carte au conteneur de cheats sur la page principale
        const cheatContainer = document.getElementById('cheats-container');
        cheatContainer.appendChild(cheatCard);

        // Sauvegarde des cheats dans le localStorage (ou dans une base de données pour une solution plus avancée)
        saveCheats(cheatName, cheatDescription, cheatDownloadLink);
    } else {
        alert('Tous les champs doivent être remplis');
    }
}

// Fonction pour sauvegarder les cheats dans le localStorage
function saveCheats(name, description, downloadLink) {
    let cheats = JSON.parse(localStorage.getItem('cheats')) || [];

    // Ajoute un nouveau cheat à la liste
    cheats.push({
        name: name,
        description: description,
        downloadLink: downloadLink
    });

    // Sauvegarde dans le localStorage
    localStorage.setItem('cheats', JSON.stringify(cheats));
}

// Fonction pour charger les cheats à partir du localStorage
function loadCheats() {
    const cheats = JSON.parse(localStorage.getItem('cheats')) || [];
    const cheatContainer = document.getElementById('cheats-container');

    // Crée une carte pour chaque cheat sauvegardé
    cheats.forEach(cheat => {
        const cheatCard = document.createElement('div');
        cheatCard.classList.add('card');
        
        const cheatTitle = document.createElement('h2');
        cheatTitle.textContent = cheat.name;
        cheatCard.appendChild(cheatTitle);
        
        const cheatDesc = document.createElement('p');
        cheatDesc.textContent = cheat.description;
        cheatCard.appendChild(cheatDesc);
        
        const cheatBtn = document.createElement('button');
        cheatBtn.classList.add('download-btn');
        cheatBtn.textContent = 'Télécharger';
        cheatBtn.onclick = function() {
            window.location.href = cheat.downloadLink;
        };
        cheatCard.appendChild(cheatBtn);
        
        cheatContainer.appendChild(cheatCard);
    });
}

// Charger les cheats à la page d'accueil
window.onload = function() {
    loadCheats();
};

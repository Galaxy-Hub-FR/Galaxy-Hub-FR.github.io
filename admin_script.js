// Code admin
const adminCode = "admin123"; // Code de connexion de l'admin

// Fonction pour authentifier l'admin
function authenticateAdmin() {
    const enteredCode = document.getElementById('admin-code').value;
    const errorMessage = document.getElementById('admin-error');

    if (enteredCode === adminCode) {
        localStorage.setItem('adminLoggedIn', 'true');
        window.location.href = 'admin_dashboard.html';
    } else {
        errorMessage.textContent = "Code administrateur incorrect.";
    }
}

window.onload = function() {
    if (localStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = 'admin_panel.html';
    }
    loadCheats();
}

// Fonction pour charger les cheats
function loadCheats() {
    const cheatList = JSON.parse(localStorage.getItem('cheats')) || [];
    const cheatListContainer = document.getElementById('cheat-list');
    cheatListContainer.innerHTML = '';

    cheatList.forEach((cheat, index) => {
        const cheatItem = document.createElement('li');
        cheatItem.innerHTML = `
            <strong>${cheat.title}</strong>
            <p>${cheat.description}</p>
            <p><a href="${cheat.link}" target="_blank">Télécharger</a></p>
            <p>Clé : ${cheat.key}</p>
            <p>Limite : ${cheat.limit === 0 ? 'Illimité' : cheat.limit} téléchargements</p>
            <button onclick="deleteCheat(${index})">Supprimer</button>
            <button onclick="editCheat(${index})">Modifier</button>
        `;
        cheatListContainer.appendChild(cheatItem);
    });
}

// Ajouter un cheat avec la clé d'activation
function addCheat() {
    const cheatTitle = document.getElementById('new-cheat-title').value;
    const cheatDescription = document.getElementById('new-cheat-description').value;
    const cheatLink = document.getElementById('new-cheat-link').value;
    const cheatKey = document.getElementById('new-cheat-key').value;
    const cheatLimit = parseInt(document.getElementById('new-cheat-limit').value) || 0;

    if (cheatTitle && cheatDescription && cheatLink && cheatKey) {
        const newCheat = {
            title: cheatTitle,
            description: cheatDescription,
            link: cheatLink,
            key: cheatKey,  // Stocke la clé d'activation
            limit: cheatLimit,
            downloads: 0
        };

        const cheatList = JSON.parse(localStorage.getItem('cheats')) || [];
        cheatList.push(newCheat);
        localStorage.setItem('cheats', JSON.stringify(cheatList));
        loadCheats();
        alert("Cheat ajouté avec succès !");
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}

// Supprimer un cheat
function deleteCheat(index) {
    const cheatList = JSON.parse(localStorage.getItem('cheats')) || [];
    cheatList.splice(index, 1);
    localStorage.setItem('cheats', JSON.stringify(cheatList));
    loadCheats();
}

// Modifier un cheat
function editCheat(index) {
    const cheatList = JSON.parse(localStorage.getItem('cheats')) || [];
    const cheat = cheatList[index];

    document.getElementById('new-cheat-title').value = cheat.title;
    document.getElementById('new-cheat-description').value = cheat.description;
    document.getElementById('new-cheat-link').value = cheat.link;
    document.getElementById('new-cheat-key').value = cheat.key;
    document.getElementById('new-cheat-limit').value = cheat.limit;

    const addButton = document.querySelector('button');
    addButton.textContent = "Modifier le cheat";
    addButton.onclick = function() {
        updateCheat(index);
    };
}

// Mettre à jour un cheat
function updateCheat(index) {
    const cheatTitle = document.getElementById('new-cheat-title').value;
    const cheatDescription = document.getElementById('new-cheat-description').value;
    const cheatLink = document.getElementById('new-cheat-link').value;
    const cheatKey = document.getElementById('new-cheat-key').value;
    const cheatLimit = parseInt(document.getElementById('new-cheat-limit').value) || 0;

    const cheatList = JSON.parse(localStorage.getItem('cheats')) || [];
    const cheat = cheatList[index];

    cheat.title = cheatTitle;
    cheat.description = cheatDescription;
    cheat.link = cheatLink;
    cheat.key = cheatKey;
    cheat.limit = cheatLimit;

    localStorage.setItem('cheats', JSON.stringify(cheatList));
    loadCheats();
    alert("Cheat mis à jour avec succès !");
    
    document.querySelector('button').textContent = "Ajouter";
    document.querySelector('button').onclick = addCheat;
}

// Déconnexion
function logout() {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = 'admin_panel.html';
}

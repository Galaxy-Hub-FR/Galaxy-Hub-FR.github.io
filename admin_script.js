// Fonction pour charger les cheats depuis le LocalStorage
function loadCheats() {
    const cheats = JSON.parse(localStorage.getItem('cheats')) || [];
    const cheatList = document.getElementById('cheat-list');
    cheatList.innerHTML = ''; // Efface la liste existante

    cheats.forEach(cheat => {
        const cheatItem = document.createElement('li');
        cheatItem.innerHTML = `
            <h4>${cheat.title}</h4>
            <p>${cheat.description}</p>
            <a href="${cheat.link}" target="_blank">Télécharger</a>
            <p><strong>Clé d'activation :</strong> ${cheat.key}</p>
            <p><strong>Limite de téléchargements :</strong> ${cheat.limit}</p>
        `;
        cheatList.appendChild(cheatItem);
    });
}

// Fonction pour ajouter un nouveau cheat
function addCheat() {
    const title = document.getElementById('new-cheat-title').value;
    const description = document.getElementById('new-cheat-description').value;
    const link = document.getElementById('new-cheat-link').value;
    const key = document.getElementById('new-cheat-key').value;
    const limit = document.getElementById('new-cheat-limit').value || "illimité";

    // Vérification des champs vides
    if (!title || !description || !link || !key) {
        alert('Tous les champs doivent être remplis.');
        return;
    }

    // Créer un objet cheat
    const newCheat = {
        title: title,
        description: description,
        link: link,
        key: key,
        limit: limit
    };

    // Récupérer la liste des cheats existants dans le LocalStorage
    const cheats = JSON.parse(localStorage.getItem('cheats')) || [];

    // Ajouter le nouveau cheat à la liste
    cheats.push(newCheat);

    // Sauvegarder la liste mise à jour dans le LocalStorage
    localStorage.setItem('cheats', JSON.stringify(cheats));

    // Réactualiser la liste des cheats affichée
    loadCheats();

    // Réinitialiser le formulaire
    document.getElementById('new-cheat-title').value = '';
    document.getElementById('new-cheat-description').value = '';
    document.getElementById('new-cheat-link').value = '';
    document.getElementById('new-cheat-key').value = '';
    document.getElementById('new-cheat-limit').value = '';
}

// Fonction pour la déconnexion (simulée)
function logout() {
    // Ici, tu peux ajouter une fonction de déconnexion, par exemple :
    alert('Déconnexion réussie !');
    // Rediriger vers la page de login
    window.location.href = 'login.html';
}

// Charger les cheats au démarrage de la page
window.onload = loadCheats;

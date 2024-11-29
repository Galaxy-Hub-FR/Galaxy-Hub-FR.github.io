// Fonction pour ajouter un nouveau cheat
function addCheat() {
    const title = document.getElementById('new-cheat-title').value;
    const description = document.getElementById('new-cheat-description').value;
    const link = document.getElementById('new-cheat-link').value;
    const key = document.getElementById('new-cheat-key').value;
    const limit = document.getElementById('new-cheat-limit').value;

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
        limit: limit || "illimité"
    };

    // Ajouter le cheat à la liste
    const cheatList = document.getElementById('cheat-list');
    const cheatItem = document.createElement('li');
    cheatItem.innerHTML = `
        <h4>${newCheat.title}</h4>
        <p>${newCheat.description}</p>
        <a href="${newCheat.link}" target="_blank">Télécharger</a>
        <p><strong>Clé d'activation :</strong> ${newCheat.key}</p>
        <p><strong>Limite de téléchargements :</strong> ${newCheat.limit}</p>
    `;
    cheatList.appendChild(cheatItem);

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

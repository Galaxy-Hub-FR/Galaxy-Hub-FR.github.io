// Fonction pour envoyer les données au backend
function addCheat() {
    const title = document.getElementById("new-cheat-title").value;
    const description = document.getElementById("new-cheat-description").value;
    const link = document.getElementById("new-cheat-link").value;
    const key = document.getElementById("new-cheat-key").value;
    const limit = document.getElementById("new-cheat-limit").value;

    const cheatData = {
        title: title,
        description: description,
        link: link,
        key: key,
        limit: limit
    };

    // Envoi de la requête POST vers le backend (ici en PHP)
    fetch("add_cheat.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cheatData) // Conversion en JSON
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Cheat ajouté avec succès !");
            // Optionnel : Mettre à jour la liste sur le frontend
            loadCheats(); // Fonction pour recharger la liste
        } else {
            alert("Erreur lors de l'ajout du cheat.");
        }
    })
    .catch(error => {
        console.error("Erreur:", error);
    });
}

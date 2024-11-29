<?php
// Définir l'entête pour le JSON
header('Content-Type: application/json');

// Récupérer les données envoyées
$data = json_decode(file_get_contents('php://input'), true);

// Vérifier si les données sont complètes
if (isset($data['title'], $data['description'], $data['link'], $data['key'], $data['limit'])) {
    // Charger les cheats existants
    $cheats = json_decode(file_get_contents('cheats.json'), true);

    // Ajouter le nouveau cheat à la liste
    $newCheat = [
        'title' => $data['title'],
        'description' => $data['description'],
        'link' => $data['link'],
        'key' => $data['key'],
        'limit' => $data['limit']
    ];

    // Ajouter à la liste des cheats
    $cheats[] = $newCheat;

    // Enregistrer la nouvelle liste dans le fichier JSON
    if (file_put_contents('cheats.json', json_encode($cheats, JSON_PRETTY_PRINT))) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Échec de l\'enregistrement.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Données manquantes.']);
}
?>

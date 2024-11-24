<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galaxy Hub - Téléchargement de Cheats</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Loader -->
    <div id="loader" class="loader-container">
        <div class="loader"></div>
    </div>

    <!-- Header Section -->
    <header>
        <div class="logo-container">
            <img src="images/logo.png" alt="Logo Galaxy Hub" class="logo">
            <span class="site-name">Galaxy Hub</span>
        </div>
        <div class="discord-link">
            <a href="https://discord.gg/MuaNANFnPq" target="_blank">
                <img src="images/discord-icon.png" alt="Discord" class="discord-icon">
            </a>
        </div>
    </header>

    <!-- Main Content Section -->
    <div class="content">
        <h1 class="main-title">Téléchargez votre Cheat Préféré</h1>
        <p class="description">Utilisez les cheats de manière sécurisée et simple, avec des outils de qualité.</p>

        <!-- Download Section -->
        <div class="download-section">
            <!-- Existing Cheats -->
            <div class="download-item">
                <h2>Spoofer</h2>
                <p>Profitez de l'anonymat total avec notre spoofer de qualité supérieure.</p>
                <button class="download-btn" onclick="showModal('Spoofer', '458554456585565656863846246425242742747240732470247204721472215525HBBDBVHGZBBVGH-GALAXY-HUB')">Télécharger</button>
            </div>
            <div class="download-item">
                <h2>GalaxyBoostFR</h2>
                <p>Optimisez votre système. + ajout de FiveM+ = Boost En Jeux</p>
                <button class="download-btn" onclick="showModal('GalaxyBoostFR', '863846246425242742747240732470247204721472215525HBB863846246425242742747240732470247204721472215525HBB')">Télécharger</button>
            </div>

            <!-- New Cheats -->
            <div class="download-item">
                <h2>AimBotPro</h2>
                <p>Un AimBot ultra précis pour dominer vos parties.</p>
                <button class="download-btn" onclick="showModal('AimBotPro', 'AIMBOT-ULTRA-GALAXY-123456')">Télécharger</button>
            </div>
            <div class="download-item">
                <h2>WallHack V3</h2>
                <p>Un WallHack qui révèle tout pour une victoire assurée.</p>
                <button class="download-btn" onclick="showModal('WallHackV3', 'WALLHACK-OP-GALAXY-654321')">Télécharger</button>
            </div>
            <div class="download-item">
                <h2>SpeedHack</h2>
                <p>Déplacez-vous à une vitesse incroyable.</p>
                <button class="download-btn" onclick="showModal('SpeedHack', 'SPEED-FAST-GALAXY-098765')">Télécharger</button>
            </div>
            <div class="download-item">
                <h2>TeleportHack</h2>
                <p>Téléportez-vous instantanément à n'importe quel endroit.</p>
                <button class="download-btn" onclick="showModal('TeleportHack', 'TELEPORT-OP-GALAXY-112233')">Télécharger</button>
            </div>
            <div class="download-item">
                <h2>InvisibilityHack</h2>
                <p>Rendez-vous complètement invisible pour surprendre vos adversaires.</p>
                <button class="download-btn" onclick="showModal('InvisibilityHack', 'INVISIBLE-GALAXY-445566')">Télécharger</button>
            </div>
            <div class="download-item">
                <h2>MoneyHack</h2>
                <p>Augmentez vos ressources en un clic.</p>
                <button class="download-btn" onclick="showModal('MoneyHack', 'MONEY-HACK-GALAXY-778899')">Télécharger</button>
            </div>
        </div>
    </div>

    <!-- Modal (Code Entry) -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <h2>Entrez votre code pour <span id="cheat-name"></span></h2>
            <input type="text" id="codeInput" placeholder="Entrez le code ici..." required>
            <button class="confirm-btn" onclick="verifyCode()">Confirmer</button>
            <p id="error-message"></p>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Galaxy Hub - Tous droits réservés.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

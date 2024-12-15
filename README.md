# TWO-MAN-SHOW

# Conception

Création de différentes classes pour de l'orienté objet.
- GameObject.js pour gérer tous les objets de notre jeu.
- Player.js qui hérite de GameObject.js et qui utilise ses propres fonctions pour déplacer le joueur, mettre à jour sa position, sa direction etc...
- Obstacle.js qui hérite de GameObject.js qui permet de créer les fonctions qui gèrent les obstacles.
- Level.js qui crée un tableau de niveaux afin de les ajouter à notre canvas en fonction.
- Game.js qui gère le moteur du jeu, c'est là où il y a tous les appels et toute la logique du jeu.

Création de index.html et index.css pour organiser la page web et le style.

# Difficultés

- Gestion des collisions entre objets --> Les joueurs n'ont pas le même comportement lorsqu'ils se touchent que lorsqu'ils touchent un obstacle. --> Meilleure gestion des collisions pour le futur car il y a malheureusement encore trop de bugs de collisions.
- Gestion de la logique du moteur de jeu --> Logique trop hard-codée pas assez flexible. Cela nous donne une piste d'amélioration. --> Il faudrait disperser le travail en plusieurs fonctions pour améliorer la lisibilité du Game.js.
- Gestion du chargement des niveaux et des obstacles gagnants.

# Solutions apportées

- Pour les niveaux, on a crée un tableau qui selon l'index qu'on a, charge les éléments présents au même indice dans le tableau sur notre canvas.
- Pour les collisions on est resté sur une gestion basique des collisions notamment avec des if else pour update la position de notre player.

# Comment jouer ? 

- Ajouter des joueurs avec le bouton prévu à cet effet (Minimum 1, maximum 4).
- Appuyer sur le bouton afin de démarrer le jeu.
- Le but du jeu étant de rejoindre la boule dorée pour finir le 1er et marquer le plus de points.
- ENJOY.




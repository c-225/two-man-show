import Player from './Classes/Player.js';
import Obstacle from './Classes/Obstacle.js';

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

<<<<<<< Updated upstream
const player1 = new Player(0, 0, 30, 5, 'green');

=======
const player1 = new Player(0, 0, 30, 5, 'blue', [ "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", {ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false}] );
var players = []
>>>>>>> Stashed changes
const obstacles = [
    new Obstacle(200, 200, 50, 50, 0, 0, false),
    new Obstacle(300, 100, 100, 50, 0, 2, true),
];

var podium = []

const keys = player1.keys

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = player1.color;
    context.fillRect(player1.x, player1.y, player1.width, player1.height);

    obstacles.forEach(obstacle => {
        context.fillStyle = 'red';
        context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

function win(player) {
    // on va foutre le truc qui ajoute le joueur au podium quand il touche le truc d'arrivée
}

function gameLoop() {
<<<<<<< Updated upstream
    obstacles.forEach(obstacle => obstacle.move(canvas));
    player1.updatePosition(canvas, obstacles);
=======
    
    player1.movePlayer(canvas, obstacles);
>>>>>>> Stashed changes
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();

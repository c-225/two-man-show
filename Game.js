import Player from './Classes/Player.js';
import Obstacle from './Classes/Obstacle.js';

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const player1 = new Player(0, 0, 30, 5, 'blue');

const obstacles = [
    new Obstacle(200, 200, 50, 50),
    new Obstacle(300, 100, 100, 50),
];

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
}

function movePlayer(e) {
    if (keys[e.key] !== undefined) {
        keys[e.key] = true;
        player1.updateDirection(keys);
    }
}

function stopPlayer(e) {
    if (keys[e.key] !== undefined){
        keys[e.key] = false;
        player1.updateDirection(keys);
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'blue';
    context.fillRect(player1.x, player1.y, player1.width, player1.height);

    context.fillStyle = 'red';
    obstacles.forEach(obstacle => {
        context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

function gameLoop() {
    player1.updatePosition(canvas, obstacles);
    draw();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', movePlayer);
document.addEventListener('keyup', stopPlayer);

gameLoop();

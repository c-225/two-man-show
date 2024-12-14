import Player from './Classes/Player.js';
import Obstacle from './Classes/Obstacle.js';

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const players = [
    new Player(50, 50, 30, 5, 'green', { 'z': false, 's': false, 'q': false, 'd': false }),
    new Player(0, 0, 30, 5, 'blue', { 'ArrowUp': false, 'ArrowDown': false, 'ArrowLeft': false, 'ArrowRight': false }),]

const obstacles = [
    new Obstacle(200, 200, 50, 50, 0, 0, false),
    new Obstacle(300, 100, 100, 50, 0, 2, true),
];

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    players.forEach(player => {
        context.fillStyle = player.color;
        context.fillRect(player.x, player.y, player.width, player.height);
    });

    obstacles.forEach(obstacle => {
        context.fillStyle = 'red';
        context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

function gameLoop() {
    obstacles.forEach(obstacle => obstacle.move(canvas));
    players.forEach(player => player.updatePosition(canvas, obstacles));
    draw();
    requestAnimationFrame(gameLoop);
}

players.forEach(player => player.movePlayer(canvas, obstacles));

gameLoop();

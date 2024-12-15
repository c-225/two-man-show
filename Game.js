import Player from './Classes/Player.js';
import Obstacle from './Classes/Obstacle.js';
import GameObject from "./Classes/GameObject.js";

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

let players = [];

let depart = document.getElementById("start")
depart.addEventListener('click', () => {
    let hide = document.getElementById("Intro")
    hide.style.display='none'
    let show = document.getElementById("gameCanvas")
    show.style.display='block'
})

let obstacles = [
    new Obstacle(850, 250, 50, 50, 0, 0, false),
    new Obstacle(300, 100, 100, 50, 0, 2, true),
    new Obstacle(100, 100, 50, 50, 0, 2, false),
];

function setFinish(){
    obstacles[0].win = true; // toujours avoir le premier qui est le finish
}

function addPlayers(color, up, down, left, right) {
    players.push(new Player(0, 0, 30, 5, color, { up: false, down: false, left: false, right: false }));
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    addPlayers('green', 'z', 's', 'q', 'd');

    players.forEach(player => {
        context.fillStyle = player.color;
        context.fillRect(player.x, player.y, player.width, player.height);
    });

    setFinish();

    obstacles.forEach(obstacle => {
        if (obstacle.win) {
            context.fillStyle = 'gold';
            context.beginPath();
            context.arc(obstacle.x + obstacle.width / 2, obstacle.y + obstacle.height / 2, obstacle.width / 2, 0, Math.PI * 2);
            context.fill();
        }
        else {
            context.fillStyle = 'red';
            context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        }

    });
}

function gameLoop() {
    obstacles.forEach(obstacle => obstacle.move(canvas));
    players.forEach(player => player.updatePosition(canvas, obstacles, players));
    draw();
    requestAnimationFrame(gameLoop);
}

export function nextLevel() {
    console.log("Level Passed");
}

players.forEach(player => player.movePlayer(canvas, obstacles, players));

gameLoop();

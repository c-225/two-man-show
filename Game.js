import Player from './Classes/Player.js';
import Level from './Classes/Level.js';
import Bonus from "./Classes/Bonus.js";
import player from "./Classes/Player.js";

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
let index = 0;

let players = [];
const levelManager = new Level();
let obstacles = levelManager.getCurrentLevel();

let depart = document.getElementById("start")
depart.addEventListener('click', () => {
    let hide = document.getElementById("Intro")
    hide.style.display='none'
    let show = document.getElementById("gameCanvas")
    show.style.display='block'
})

function setFinish(){
    obstacles[0].win = true; // toujours avoir le premier qui est le finish
}

function addPlayer() {
    let newPlayer;
    if (index === 0) {
        newPlayer = new Player(0, 50, 30, 5, 'green', { 'z': false, 's': false, 'q': false, 'd': false });
    } else if (index === 1) {
        newPlayer = new Player(0, 0, 30, 5, 'blue', { 'ArrowUp': false, 'ArrowDown': false, 'ArrowLeft': false, 'ArrowRight': false });
    } else if (index === 2) {
        newPlayer = new Player(50, 0, 30, 5, 'orange', { 'i': false, 'k': false, 'j': false, 'l': false });
    } else if (index === 3) {
        newPlayer = new Player(50, 50, 30, 5, 'purple', { 't': false, 'g': false, 'f': false, 'h': false });
    }
    if (newPlayer) {
        newPlayer.movePlayer(canvas, obstacles, players);
        players.push(newPlayer);
        index++;
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

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

document.getElementById('addPlayerButton').addEventListener('click', addPlayer);

function gameLoop() {
    obstacles.forEach(obstacle => obstacle.move(canvas));
    players.forEach(player => player.updatePosition(canvas, obstacles, players));
    draw();
    requestAnimationFrame(gameLoop);
}

export function nextLevel() {
    console.log("Level Passed");
    obstacles = levelManager.nextLevel();
    if (obstacles) {
        players.forEach(player => {
            player.x = 0;
            player.y = 0;
        });
    }
}

players.forEach(player => player.movePlayer(canvas, obstacles, players));

gameLoop();

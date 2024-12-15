import Player from './Classes/Player.js';
import Level from './Classes/Level.js';
import AllLevels from "./Levels/AllLevels.js";
import Obstacle from "./Classes/Obstacle.js";

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
let index = 0;

let players = [];
const levelManager = new Level();
let obstacles = levelManager.getCurrentLevel();

let depart = document.getElementById("start")
document.addEventListener('DOMContentLoaded', (event) => {
    const startButton = document.getElementById('start');
    startButton.addEventListener('click', () => {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('gameCanvas').style.display = 'block';
    });
});

function showCountdown(value, func) {
    if (value === 0) {
        func();
        gameLoop();
        return;
    }
    context.save();

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "black";
    context.font = "50px Verdana";
    context.fillText(value.toString(), canvas.width / 2, canvas.height / 2);

    context.restore();

    setTimeout(() => showCountdown(value - 1, func), 1000);
}

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
        document.getElementById('playerCount').innerText = `Players: ${players.length}`;
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    players.forEach(player => {
        context.fillStyle = player.color;
        context.fillRect(player.x, player.y, player.width, player.height);

        context.fillStyle = "black";
        context.font = "20px Arial";
        context.fillText(`Score: ${player.score}`, player.x, player.y - 10);
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
    if (!gameRunning) return;
    obstacles.forEach(obstacle => obstacle.move(canvas));
    players.forEach(player => player.updatePosition(canvas, obstacles, players));
    draw();
    requestAnimationFrame(gameLoop);
}

function startGame() {
    showCountdown(4, () => {
        console.log("starts!");
    });
}

let finishOrder = [];
let currentLevelIndex = 0;
const totalLevels = 20;
let gameRunning = true;

function showLeaderboard() {
    gameRunning = false;
    document.getElementById('gameCanvas').style.display = 'none';
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.style.display = 'block';
    leaderboard.innerHTML = '';

    const title = document.createElement('h2');
    title.textContent = 'Leaderboard';
    leaderboard.appendChild(title);

    players.sort((a, b) => b.score - a.score);

    players.forEach((player, index) => {
        const playerScore = document.createElement('p');
        playerScore.textContent = `${index + 1}. ${player.color} - Score: ${player.score}`;
        leaderboard.appendChild(playerScore);
    });
}

function loadNextLevel() {
    if (currentLevelIndex < totalLevels) {
        const levelKey = `level${currentLevelIndex + 1}`;
        const levelData = AllLevels[levelKey];
        obstacles = levelData;
        console.log(`Loading ${levelKey}`, levelData);
        currentLevelIndex++;
    } else {
        console.log('All levels completed!');
        showLeaderboard();
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const startButton = document.getElementById('start');
    startButton.addEventListener('click', () => {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('gameCanvas').style.display = 'block';
        document.getElementById('leaderboard').style.display = 'none'; // Hide the leaderboard initially
    });
});

export function nextLevel(player) {
    console.log("Level Passed");
    if (player) {
        finishOrder.push(player);
        player.hide();
        if (finishOrder.length === 1) {
            player.score += 3;
        } else if (finishOrder.length === 2) {
            player.score += 2;
        } else if (finishOrder.length === 3) {
            player.score += 1;
        }
    }
    if (finishOrder.length === players.length) {
        finishOrder = [];
        loadNextLevel();
        if (obstacles) {
            players.forEach(player => {
                player.x = 0;
                player.y = 0;
                player.visible = true;
            });
        }
    }
}

players.forEach(player => player.movePlayer(canvas, obstacles, players));

startGame();

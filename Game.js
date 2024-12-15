import Player from './Classes/Player.js';
import Obstacle from './Classes/Obstacle.js';

let joueurs = []
let controls = []
let keys = ["KeyW", "KeyT", "KeyO", "ArrowUp"]
let state = "init"

document.addEventListener('keyup', (e) => {
    if (state==="init") {
        if (keys.includes(e.code)) {
            let indice = keys.indexOf(e.code);
            keys[indice]=null
            joueurs.push("J"+(1+joueurs.length))

            if (e.code === "KeyW"){ controls.push( [ "KeyW", "KeyS", "KeyA", "KeyD", { KeyW : false, KeyS : false, KeyA : false, KeyD : false}] ) }
            if (e.code === "KeyT"){ controls.push( [ "KeyT", "KeyG", "KeyF", "KeyH", { KeyT : false, KeyG : false, KeyF : false, KeyH : false}] ) }
            if (e.code === "KeyO"){ controls.push( [ "KeyO", "KeyL", "KeyK", "Semicolon", { KeyO : false, KeyL : false, KeyK : false, Semicolon : false}] ) }
            if (e.code === "ArrowUp"){ controls.push( [ "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", { ArrowUp : false, ArrowDown : false, ArrowLeft : false, ArrowRight : false}] ) }
            var paragraph = document.getElementById("listeP");
            paragraph.innerHTML += joueurs[joueurs.length-1] +" est pret ! <br/>"
            if (joueurs.length===4) {
                var canvas = document.getElementById("gameCanvas")
                canvas.style.display='block'
                var init = document.getElementById("intro")
            console.log(init)
                init.style.display='none'
            }
        }
    }
})

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const players = [
    new Player(50, 50, 30, 5, 'green', ['KeyW','KeyS','KeyA','KeyD', { KeyW: false, KeyS: false, KeyA: false, KeyD: false }]),
    new Player(0, 0, 30, 5, 'blue',[ 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',{ ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false }]),
    new Player(100, 100, 30, 5, 'orange', [ 'KeyT','KeyG','KeyF','KeyH',{ KeyT: false, KeyG: false, KeyF: false, KeyH: false }]),
    new Player(150, 150, 30, 5, 'purple', [ 'KeyO','KeyL','KeyK','Semicolon',{ KeyO: false, KeyL: false, KeyK: false, Semicolon: false }]),
];

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
    players.forEach(player => player.updatePosition(canvas, obstacles, players));
    draw();
    requestAnimationFrame(gameLoop);
}

players.forEach(player => player.movePlayer(canvas, obstacles, players));

gameLoop();

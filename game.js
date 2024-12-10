const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const player = {
    x: 50,
    y: 50,
    size: 30,
    speed: 5,
    dx: 0,
    dy: 0,
};

const obstacles = [
    { x: 200, y: 200, width: 50, height: 50 },
    { x: 300, y: 100, width: 100, height: 50 },
];

function updatePlayerPosition() {
    const newX = player.x + player.dx;
    const newY = player.y + player.dy;

    const futurePlayer = { x: newX, y: newY, size: player.size };

    if (newX < 0) {
        player.x = 0;
    } else if (newX + player.size > canvas.width) {
        player.x = canvas.width - player.size;
    } else if (newY < 0) {
        player.y = 0;
    } else if (newY + player.size > canvas.height) {
        player.y = canvas.height - player.size;
    } else if (!isCollidingWithObstacles(futurePlayer)) {
        player.x = newX;
        player.y = newY;
    }
}

function isCollidingWithObstacles(player) {
    return obstacles.some(obstacle => isColliding(player, obstacle));
}

function isColliding(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.size > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.size > rect2.y
    );
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = 'blue';
    context.fillRect(player.x, player.y, player.size, player.size);
    
    context.fillStyle = 'red';
    obstacles.forEach(obstacle => {
        context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

function movePlayer(e) {
    if (e.key === 'ArrowUp') player.dy = -player.speed;
    if (e.key === 'ArrowDown') player.dy = player.speed;
    if (e.key === 'ArrowLeft') player.dx = -player.speed;
    if (e.key === 'ArrowRight') player.dx = player.speed;
}

function stopPlayer(e) {
    if (
        e.key === 'ArrowUp' || e.key === 'ArrowDown' ||
        e.key === 'ArrowLeft' || e.key === 'ArrowRight'
    ) {
        player.dx = 0;
        player.dy = 0;
    }
}

function gameLoop() {
    updatePlayerPosition();
    draw();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', movePlayer);
document.addEventListener('keyup', stopPlayer);

gameLoop();

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const player = {
    x: 0,
    y: 0,
    size: 30,
    speed: 5,
    dx: 0,
    dy: 0,
};

const obstacles = [
    { name: "ob1", x: 200, y: 200, width: 50, height: 50 },
    { name: "ob2", x: 300, y: 100, width: 100, height: 50 },
];

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
}

function resetIfHitted() {
    if (isCollidingWithObstacles(player)) {
        player.x = 50;
        player.y = 50;
    }
}

function movePlayer(e) {
    if (keys[e.key] !== undefined) {
        keys[e.key] = true;
        updateDirection();
    }
}

function stopPlayer(e) {
    if (keys[e.key] !== undefined){
        keys[e.key] = false;
        updateDirection();
    }
}

function updatePlayerPosition() {
    const newX = player.x + player.dx;
    const newY = player.y + player.dy;

    const futurePlayer = { x: newX, y: newY, size: player.size };

    if (newX >= 0 && newX + player.size <= canvas.width &&
        newY >= 0 && newY + player.size <= canvas.height) {
            if (isCollidingWithObstacles(futurePlayer)) {
                player.x = 0;
                player.y = 0;
            } else {
                player.x = newX;
                player.y = newY;
            }
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

function updateDirection(e) {
    player.dx = 0;
    player.dy = 0;

    if (keys.ArrowUp) {
        player.dy = -player.speed;
    }
    if (keys.ArrowDown) {
        player.dy = player.speed;
    }
    if (keys.ArrowLeft) {
        player.dx = -player.speed;
    }
    if (keys.ArrowRight) {
        player.dx = player.speed;
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

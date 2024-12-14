import GameObject from './GameObject.js';

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
}

export class Player extends GameObject {

    constructor (x, y, size, speed, color) {
        super(x, y, size, size);
        this.speed = speed;
        this.dx = 0;
        this.dy = 0;
        this.color = color;
    }

    movePlayer(canvas, obstacles) {
        document.addEventListener('keydown', (e) => {
            if (keys[e.key] !== undefined) {
                keys[e.key] = true;
                this.updateDirection(keys);
                this.updatePosition(canvas, obstacles);
            }
        });

        document.addEventListener('keyup', (e) => {
            if (keys[e.key] !== undefined) {
                keys[e.key] = false;
                this.updateDirection(keys);
                this.updatePosition(canvas, obstacles);
            }
        });
    }

    stopPlayer(canvas, obstacles) {
        document.addEventListener('keyup', (e) => {
            if (keys[e.key] !== undefined) {
                keys[e.key] = false;
                this.updateDirection(keys);
                this.updatePosition(canvas, obstacles);
            }
        });
    }

    updateDirection(keys) {
        this.dx = 0;
        this.dy = 0;

        if (keys.ArrowUp) {
            this.dy = -this.speed;
        }
        if (keys.ArrowDown) {
            this.dy = this.speed;
        }
        if (keys.ArrowLeft) {
            this.dx = -this.speed;
        }
        if (keys.ArrowRight) {
            this.dx = this.speed;
        }
    }

    updatePosition(canvas, obstacles) {
        const newX = this.x + this.dx;
        const newY = this.y + this.dy;
        const futurePlayer = new GameObject(newX, newY, this.width, this.height);

        if (newX >= 0 && newX + this.width <= canvas.width &&
            newY >= 0 && newY + this.height <= canvas.height) {
            if (obstacles.some(obstacle => futurePlayer.isCollidingWith(obstacle))) {
                this.x = 0;
                this.y = 0;
            } else {
                this.x = newX;
                this.y = newY;
            }
        }
    }
}

export default Player;
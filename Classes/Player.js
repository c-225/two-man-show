import GameObject from './GameObject.js';

export class Player extends GameObject {

    constructor (x, y, size, speed, color, keys) {
        super(x, y, size, size);
        this.speed = speed;
        this.dx = 0;
        this.dy = 0;
        this.keys = keys;
        this.color = color;
    }

    movePlayer(canvas, obstacles) {
        document.addEventListener('keydown', (e) => {
            if (this.keys[4][e.code] !== undefined) {
                this.keys[4][e.code] = true;
                this.updateDirection();
                this.updatePosition(canvas, obstacles);
            }
        });

        document.addEventListener('keyup', (e) => {
            if (this.keys[4][e.code] !== undefined) {
                this.keys[4][e.code] = false;
                this.updateDirection();
                this.updatePosition(canvas, obstacles);
            }
        });
    }

    updateDirection() {
        this.dx = 0;
        this.dy = 0;

        if (this.keys[4][[this.keys[0]]]) {
            this.dy = -this.speed;
        }
        if (this.keys[4][[this.keys[1]]]) {
            this.dy = this.speed;
        }
        if (this.keys[4][[this.keys[2]]]) {
            this.dx = -this.speed;
        }
        if (this.keys[4][[this.keys[3]]]) {
            this.dx = this.speed;
        }

    }

    updatePosition(canvas, obstacles) {
        const newX = this.x + this.dx;
        const newY = this.y + this.dy;
        const futurePlayer = new GameObject(newX, newY, this.width, this.height);

        if (newX >= 0 && newX + this.width <= canvas.width &&
            newY >= 0 && newY + this.height <= canvas.height) {
            const collidingObstacle = obstacles.find(obstacle => futurePlayer.isCollidingWith(obstacle));
            if (collidingObstacle) {
                if (collidingObstacle.moving) {
                    this.x += collidingObstacle.dx;
                    this.y += collidingObstacle.dy;
                    if (this.x < 0 || this.x + this.width > canvas.width ||
                        this.y < 0 || this.y + this.height > canvas.height) {
                            this.x = 0;
                            this.y = 0;
                    }
                }
            } else {
                this.x = newX;
                this.y = newY;
            }
        }
    }
}

export default Player;
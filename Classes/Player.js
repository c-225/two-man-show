import GameObject from './GameObject.js';
import {nextLevel} from "../Game.js";

export class Player extends GameObject {

    constructor(x, y, size, speed, color, keys) {
        super(x, y, size, size);
        this.speed = speed;
        this.dx = 0;
        this.dy = 0;
        this.keys = keys;
        this.color = color;
        this.initialX = x;
        this.initialY = y;
        this.score = 0;
        this.visible = true;
    }

    resetPosition() {
        this.x = this.initialX;
        this.y = this.initialY;
    }

    hide() {
        this.visible = false;
    }

    movePlayer(canvas, obstacles, players) {
        document.addEventListener('keydown', (e) => {
            if (this.keys[e.key] !== undefined) {
                this.keys[e.key] = true;
                this.updateDirection();
                this.updatePosition(canvas, obstacles, players);
            }
        });

        document.addEventListener('keyup', (e) => {
            if (this.keys[e.key] !== undefined) {
                this.keys[e.key] = false;
                this.updateDirection();
                this.updatePosition(canvas, obstacles, players);
            }
        });
    }

    updateDirection() {
        this.dx = 0;
        this.dy = 0;

        if (this.keys['ArrowUp'] || this.keys['t'] || this.keys['z'] || this.keys['i']) {
            this.dy = -this.speed;
        }
        if (this.keys['ArrowDown'] || this.keys['s'] || this.keys['g'] || this.keys['k']) {
            this.dy = this.speed;
        }
        if (this.keys['ArrowLeft'] || this.keys['q'] || this.keys['f'] || this.keys['j']) {
            this.dx = -this.speed;
        }
        if (this.keys['ArrowRight'] || this.keys['d'] || this.keys['h'] || this.keys['l']) {
            this.dx = this.speed;
        }

    }

    updatePosition(canvas, obstacles, players) {
        if (!this.visible) return;

        const newX = this.x + this.dx;
        const newY = this.y + this.dy;
        const futurePlayer = new GameObject(newX, newY, this.width, this.height);

        if (newX >= 0 && newX + this.width <= canvas.width &&
            newY >= 0 && newY + this.height <= canvas.height) {
            const collidingObstacles = obstacles.filter(obstacle => futurePlayer.isCollidingWith(obstacle));
            const collidingPlayers = players.filter(player => player !== this && futurePlayer.isCollidingWith(player));

            if (collidingObstacles.length === 0 && collidingPlayers.length === 0) {
                this.x = newX;
                this.y = newY;
            } else {
                collidingPlayers.forEach(collidingPlayer => {
                    const pushedX = collidingPlayer.x + this.dx;
                    const pushedY = collidingPlayer.y + this.dy;
                    const futurePushedPlayer = new GameObject(pushedX, pushedY, collidingPlayer.width, collidingPlayer.height);
                    if (pushedX >= 0 && pushedX + collidingPlayer.width <= canvas.width &&
                        pushedY >= 0 && pushedY + collidingPlayer.height <= canvas.height) {
                        const pushedPlayerCollidingObstacles = obstacles.filter(obstacle => futurePushedPlayer.isCollidingWith(obstacle));
                        if (pushedPlayerCollidingObstacles.length === 0) {
                            collidingPlayer.x = pushedX;
                            collidingPlayer.y = pushedY;
                        }
                    }
                });

                if (collidingObstacles.length > 0) {
                    collidingObstacles.forEach(collidingObstacle => {
                        if (collidingObstacle.win) {
                            nextLevel(this);
                        }
                        if (collidingObstacle.moving) {
                            this.x += collidingObstacle.dx;
                            this.y += collidingObstacle.dy;
                            if (this.x < 0 || this.x + this.width > canvas.width ||
                                this.y < 0 || this.y + this.height > canvas.height) {
                                this.resetPosition();
                            }
                        }
                        if (collidingObstacle.resetting) {
                            this.resetPosition();
                        }
                    });
                }
            }
        }
    }
}

export default Player;
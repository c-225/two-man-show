import GameObject from './GameObject.js';

export class Obstacle extends GameObject {
    constructor(x, y, width, height, dx , dy, moving = false, resetting = false) {
        super(x, y, width, height);
        this.dx = dx;
        this.dy = dy;
        this.moving = moving;
        this.win = false;
        this.resetting = resetting;
    }


    move(canvas) {
        if (this.moving) {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0 || this.x + this.width > canvas.width) {
                this.dx = -this.dx;
            }
            if (this.y < 0 || this.y + this.height > canvas.height) {
                this.dy = -this.dy;
            }
        }
    }
}

export default Obstacle;
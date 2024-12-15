import GameObject from './GameObject.js';

export class Bonus extends GameObject {
    constructor(x, y, width, height, dx, dy, moving = false, resetting = false, speedEffect = 0) {
        super(x, y, width, height);
        this.dx = dx;
        this.dy = dy;
        this.moving = moving;
        this.resetting = resetting;
        this.speedEffect = speedEffect;
        this.active = true;
    }

    applyBonus(player) {
        if (this.active) {
            player.speed += this.speedEffect;
            this.active = false; // Bonus disappears after being collected
        }
    }

    draw(context) {
        if (this.active) {
            context.fillStyle = this.speedEffect > 0 ? 'green' : 'blue';
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

export default Bonus;
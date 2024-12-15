import Obstacle from './Obstacle.js';
import AllLevels from '../Levels/AllLevels.js';

export class Level {
    constructor() {
        this.levelIndex = 0;
        this.levels = [
            AllLevels.level1,
            AllLevels.level2,
            AllLevels.level3,
            AllLevels.level4,
            AllLevels.level5,
            AllLevels.level6,
            AllLevels.level7,
            AllLevels.level8,
            AllLevels.level9,
            AllLevels.level10,
            AllLevels.level11,
            AllLevels.level12,
            AllLevels.level13,
            AllLevels.level14,
            AllLevels.level15,
            AllLevels.level16,
            AllLevels.level17,
            AllLevels.level18,
            AllLevels.level19,
            AllLevels.level20,
            AllLevels.level21,
            AllLevels.level22,
            AllLevels.level23,
        ];
    }

    getCurrentLevel() {
        return this.levels[this.levelIndex];
    }

    nextLevel() {
        this.sound.play()
        this.levelIndex++;
        if (this.levelIndex < this.levels.length) {
            return this.getCurrentLevel();
        } else {
            document.getElementById("leaderboard").style.display="block"
            console.log("All levels completed!");
            return null;
        }
    }
}

export default Level;
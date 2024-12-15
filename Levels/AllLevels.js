import Obstacle from '../Classes/Obstacle.js';
import Bonus from "../Classes/Bonus.js";

export const AllLevels = {
    level1:[
        new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(450, 150, 100, 200, 0, 0, false),
    ],
    level2: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(200, 150, 200, 350, 0, 0, false),
        new Obstacle(600, 0, 200, 350, 0, 0, false),
    ],
    level3: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(100, 0, 150, 350, 0, 0, false),
        new Obstacle(725, 150, 150, 350, 0, 0, false),
        new Obstacle(350, 200, 300, 100, 0, 0, false)
    ],
    level4: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(100, 0, 150, 100, 0, 0, false),
        new Obstacle(100, 200, 150, 300, 0, 0, false),
        new Obstacle(425, 0,  150, 300, 0, 0, false),
        new Obstacle(425, 400, 150, 100, 0, 0, false),
        new Obstacle(750, 0, 150, 100, 0, 0, false),
        new Obstacle(750, 200, 150, 300, 0, 0, false),
    ],
    level5: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(725, 0, 275, 350, 0, 0, false),
        new Obstacle(100, 200, 175, 75, 0, 0, false),
        new Obstacle(200, 0, 75, 200, 0, 0, false),
        new Obstacle(100 , 350, 450, 150, 0, 0, false),
        new Obstacle(400, 100, 200, 400, 0, 0, false),
    ],
    level6: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(450, 150, 100, 200, 0, 1, true),
    ],
    level7: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(200, 150, 200, 350, 0, 1, true),
        new Obstacle(600, 0, 200, 350, 0, -1, true),
    ],
    level8: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(100, 0, 150, 350, 0, -1, true),
        new Obstacle(725, 150, 150, 350, 0, 1, true),
        new Obstacle(350, 200, 300, 100, 3, 0, true)
    ],
    level9: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(100, 0, 150, 100, 0, 0, false),
        new Obstacle(100, 200, 150, 300, 0, 1, true),
        new Obstacle(425, 0,  150, 300, 0, 1, true),
        new Obstacle(425, 400, 150, 100, 0, 0, false),
        new Obstacle(750, 0, 150, 100, 0, 0, false),
        new Obstacle(750, 200, 150, 300, 0,  1, true),
    ],
    level10: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(725, 0, 275, 350, 0, 1, true),
        new Obstacle(100, 200, 175, 75, 0, 0, false),
        new Obstacle(200, 0, 75, 200, 0, 0, false),
        new Obstacle(100 , 350, 450, 150, 1, 0, true),
        new Obstacle(400, 100, 200, 400, 0, 0, false),
    ],
    level11: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(450, 150, 100, 200, 0, 3, true, true),
    ],
    level12: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(200, 150, 200, 350, 0, 1, true, true),
        new Obstacle(600, 0, 200, 350, 0, -1, true, true),
    ],
    level13: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(100, 0, 150, 350, 0, -1, true),
        new Obstacle(725, 150, 150, 350, 0, 1, true),
        new Obstacle(350, 200, 300, 100, 3, 0, true, true)
    ],
    level14: [
        new Obstacle(950, 450, 100, 50, 0, 0, false, true),
        new Obstacle(100, 0, 150, 100, 0, 0, false, true),
        new Obstacle(100, 200, 150, 300, 0, 1, true),
        new Obstacle(425, 0,  150, 300, 0, 1, true),
        new Obstacle(425, 400, 150, 100, 0, 0, false, true),
        new Obstacle(750, 0, 150, 100, 0, 0, false, true),
        new Obstacle(750, 200, 150, 300, 0,  1, true),
    ],
    level15: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(725, 0, 275, 350, 0, 1, true, true),
        new Obstacle(100, 200, 175, 75, 0, 0, false),
        new Obstacle(200, 0, 75, 200, 0, 0, false),
        new Obstacle(100 , 350, 450, 150, 1, 0, true, true),
        new Obstacle(400, 100, 200, 400, 0, 0, false),
    ],
    level16: [new Obstacle(950, 450, 50, 50, 0, 0, false),
        new Obstacle(450, 150, 100, 200, 0, 3, true, true),
        new Obstacle(350, 150, 100, 200, 0, 1, true, true),
        new Obstacle(550, 150, 100, 200, 0, -1, true, true),
    ],
    level17: [
        new Obstacle(950, 450, 100, 50, 0, 0, false, true),
        new Obstacle(200, 150, 200, 350, 0, 1, true, true),
        new Obstacle(600, 0, 200, 350, 0, -1, true, true),
    ],
    level18: [
        new Obstacle(950, 450, 100, 50, 0, 0, false, true),
        new Obstacle(100, 0, 150, 350, 0, -1, true, true),
        new Obstacle(725, 150, 150, 350, 0, 1, true, true),
        new Obstacle(350, 200, 300, 100, 3, 0, true, true)
    ],
    level19: [
        new Obstacle(950, 450, 100, 50, 0, 0, false, true),
        new Obstacle(100, 0, 150, 100, 0, 0, false, true),
        new Obstacle(100, 200, 150, 300, 0, 1, true, true),
        new Obstacle(425, 0,  150, 300, 0, 1, true, true),
        new Obstacle(425, 400, 150, 100, 0, 0, false, true),
        new Obstacle(750, 0, 150, 100, 0, 0, false, true),
        new Obstacle(750, 200, 150, 300, 0,  1, true, true),
    ],
    level20: [
        new Obstacle(950, 450, 100, 50, 0, 0, false, true),
        new Obstacle(725, 0, 275, 350, 0, 2, true, true),
        new Obstacle(100, 200, 175, 75, 0, 0, false, true),
        new Obstacle(200, 0, 75, 200, 0, 0, false, true),
        new Obstacle(100 , 350, 450, 150, 2, 0, true, true),
        new Obstacle(400, 100, 200, 400, 0, 0, false, true),
    ],
};

export default AllLevels;
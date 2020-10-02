import * as readline from 'readline';

import SpaceCraft from './spacecraft';

const spacecraft = new SpaceCraft(0, 0);

const moveSpacecraft = (input: string): boolean => {
    switch(input) {
        case "w":
            spacecraft.move(0, 1);
            return true;
        case "s":
            spacecraft.move(0, -1);
            return true;
        case "a":
            spacecraft.move(-1, 0);
            return true;
        case "d":
            spacecraft.move(1, 0);
            return true;
        default:
            return false;
    }
}

const stdin = process.openStdin();

stdin.on("data", function(d) {
    if (moveSpacecraft(d)) {
        const x = spacecraft.getX();
        const y = spacecraft.getY();
        console.log(`(${x}, ${y})`)
    }
});

console.log(spacecraft.createMessage());

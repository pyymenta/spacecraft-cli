import * as readline from 'readline';

import SpaceCraft from './spacecraft';

const spacecraft = new SpaceCraft(0, 0);

let message: string;

message = spacecraft.createMessage();

let running = false;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const loop = () => {
    while (running) {
        console.log(`X: ${spacecraft.X} Y: ${spacecraft.Y}`);
    }
}


console.log(message);

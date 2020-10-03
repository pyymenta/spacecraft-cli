import CLI from './cli';
import SpaceCraft from './spacecraft';
import { Earth, Moon } from './locations';

const spacecraft = new SpaceCraft(Earth, Moon);
const cli = new CLI(process.stdin, process.stdout, spacecraft);
cli.start();

/* The main loop which shows coordinates after each movement */
let latestX: number = 0;
let latestY: number = 0;
setInterval(() => {
    if (latestX !== spacecraft.x || latestY !== spacecraft.y) {
        latestX = spacecraft.x;
        latestY = spacecraft.y;
        console.log(`(${latestX}, ${latestY}) # ${cli.latestKeyPressed.toUpperCase()}`);
    }
}, 100);

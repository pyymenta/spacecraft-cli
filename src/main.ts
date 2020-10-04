import CLI from './cli';
import SpaceCraft from './spacecraft';
import { Earth, Moon } from './locations';

const spacecraft = new SpaceCraft(Earth, Moon);
const cli = new CLI(process.stdin, process.stdout, spacecraft);
cli.start();

/* The main loop which shows coordinates after each movement */
let latestX = 0;
let latestY = 0;
let eventMessage = '';
setInterval(() => {
    if (latestX !== spacecraft.x || latestY !== spacecraft.y) {
        latestX = spacecraft.x;
        latestY = spacecraft.y;
        eventMessage = spacecraft?.event?.message ? `# ${spacecraft.event.message}` : '';

        console.log(`(${latestX}, ${latestY}) # ${cli.latestKeyPressed.toUpperCase()} ${eventMessage}`);
    }
}, 100);

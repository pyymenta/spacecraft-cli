"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = __importDefault(require("./cli"));
const spacecraft_1 = __importDefault(require("./spacecraft"));
const locations_1 = require("./locations");
const spacecraftEmitter_1 = __importDefault(require("./spacecraftEmitter"));
const spacecraft = new spacecraft_1.default(locations_1.Earth, locations_1.Moon, new spacecraftEmitter_1.default(process.stdout));
const cli = new cli_1.default(process.stdin, process.stdout, spacecraft);

cli.start();
let latestX = 0;
let latestY = 0;
setInterval(() => {
    if (latestX !== spacecraft.x || latestY !== spacecraft.y) {
        latestX = spacecraft.x;
        latestY = spacecraft.y;
        console.log(`(${latestX}, ${latestY}) # ${cli.latestKeyPressed.toUpperCase()}`);
    }
}, 100);
//# sourceMappingURL=main.js.map
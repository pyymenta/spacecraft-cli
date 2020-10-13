"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = __importDefault(require("./cli"));
const spacecraft_1 = __importDefault(require("./spacecraft"));
const locations_1 = require("./locations");
const spacecraftEmitter_1 = __importDefault(require("./spacecraftEmitter"));
const spaceCraftEmitter = new spacecraftEmitter_1.default(process.stdout);
const spacecraft = new spacecraft_1.default(locations_1.Earth, locations_1.Moon, spaceCraftEmitter);
const cli = new cli_1.default(process.stdin, process.stdout, spacecraft);
console.log("      __      __          ___                                          __               ____                                                            ___  __    __     ", "\n", "    /\\ \\  __/\\ \\        /\\_ \\                                        /\\ \\__           /\\  _`\\                                                        /'___\\\/\\ \\__/\\ \\    ", "\n", "    \\ \\ \\\/\\ \\ \\ \\     __\\\/\/\\ \\     ___    ___     ___ ___      __    \\ \\ ,_\\   ___    \\ \\,\\L\\_\\  _____      __      ___     __    ___   _ __    __  /\\ \\__/\\ \\ ,_\\ \\ \\   ", "\n", "     \\ \\ \\ \\ \\ \\ \\  /'__`\\\\ \\ \\   /'___\\ / __`\\ /' __` __`\\  /'__`\\   \\ \\ \\\/  / __`\\   \\/_\\__ \\ /\\ '__`\\  /'__`\\   /'___\\ /'__`\\ /'___\\/\\`'__\\/'__`\\\\ \\ ,__\\\\ \\ \\/\\ \\ \\  ", "\n", "      \\ \\ \\_/ \\_\\ \\/\\  __/ \\_\\ \\_/\\ \\__//\\ \\L\\ \\/\\ \\/\\ \\/\\ \\/\\  __/    \\ \\ \\_/\\ \\L\\ \\    /\\ \\L\\ \\ \\ \\L\\ \\/\\ \\L\\.\\_/\\ \\__//\\  __//\\ \\__/\\ \\ \\//\\ \\L\\.\\\\ \\ \\_/ \\ \\ \\_\\ \\_\\ ", "\n", "       \\ `\\___x___/\\ \\____\\/\\____\\ \\____\\ \\____/\\ \\_\\ \\_\\ \\_\\ \\____\\    \\ \\__\\ \\____/    \\ `\\____\\ \\ ,__/\\ \\__/.\\_\\ \\____\\ \\____\\ \\____\\\\ \\_\\\\ \\__/.\\_\\ \\_\\   \\ \\__\\\\/\\_\\", "\n", "        '\\/__//__/  \\/____/\\/____/\\/____/\\/___/  \\/_/\\/_/\\/_/\\/____/     \\/__/\\/___/      \\/_____/\\ \\ \\/  \\/__/\\/_/\\/____/\\/____/\\/____/ \\/_/ \\/__/\\/_/\\/_/    \\/__/ \\/_/", "\n", "                                                                                                   \\ \\_\\                                                                 ", "\n", "                                                                                                    \\/_/                                                                 ");



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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var spacecraft_1 = require("./spacecraft");
var spacecraft = new spacecraft_1.default(0, 0);
var message;
message = spacecraft.createMessage();
var running = false;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var loop = function () {
    while (running) {
        console.log("X: " + spacecraft.X + " Y: " + spacecraft.Y);
    }
};
spacecraft.forward(spacecraft.y);
console.log(message);
//# sourceMappingURL=cli.js.map
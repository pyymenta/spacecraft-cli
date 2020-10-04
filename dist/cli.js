"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keyListener_1 = __importDefault(require("./keyListener"));
class CLI {
    constructor(input, output, spacecraft) {
        this.input = input;
        this.output = output;
        this.keyListener = new keyListener_1.default(this.input);
        this.spacecraft = spacecraft;
        this.bindKeyEvents();
    }
    bindKeyEvents() {
        const communicateFirstMovement = () => {
            if (!this.firstEventCalled) {
                this.firstEventCalled = true;
                this.launch();
            }
        };
        const accelerateEvent = this.keyListener.bindEvent({
            keyName: "w",
            handler: (keyName) => {
                this.latestKeyPressed = keyName;
                communicateFirstMovement();
                this.spacecraft.moveForward(1);
            },
        });
        const decelerateEvent = this.keyListener.bindEvent({
            keyName: "s",
            handler: (keyName) => {
                this.latestKeyPressed = keyName;
                communicateFirstMovement();
                this.spacecraft.moveForward(-1);
            }
        });
        const leftMovementEvent = this.keyListener.bindEvent({
            keyName: "a",
            handler: (keyName) => {
                this.latestKeyPressed = keyName;
                communicateFirstMovement();
                this.spacecraft.moveForward(0, -1);
            }
        });
        const rightMovementEvent = this.keyListener.bindEvent({
            keyName: "d",
            handler: (keyName) => {
                this.latestKeyPressed = keyName;
                communicateFirstMovement();
                this.spacecraft.moveForward(0, 1);
            }
        });
        const closeEvent = this.keyListener.bindEvent({
            keyName: ["c", "x"],
            ctrl: true,
            handler: function (keyName) {
                console.log("Closing! Goodbye.");
                process.exit(1);
            }
        });
    }
    start() {
        this.output.write('(0, 0) ready for launch');
    }
    launch() {
        this.output.write(`(${this.spacecraft.x}, ${this.spacecraft.y}) spacecraft launched from Earth`);
    }
    exit() {
        console.log("Closing! Goodbye.");
        this.input.destroy();
    }
}
exports.default = CLI;
//# sourceMappingURL=cli.js.map
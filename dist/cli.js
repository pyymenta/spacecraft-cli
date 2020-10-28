"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keyListener_1 = __importDefault(require("./keyListener"));
const rocket_1 = __importDefault(require("./rocket"));
const welcome_1 = __importDefault(require("./welcome"));
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
        this.keyListener.bindEvent({
            keyName: 'w',
            handler: (keyName) => {
                this.latestKeyPressed = keyName;
                communicateFirstMovement();
                this.spacecraft.moveForward(1);
            },
        });
        this.keyListener.bindEvent({
            keyName: 's',
            handler: (keyName) => {
                this.latestKeyPressed = keyName;
                communicateFirstMovement();
                this.spacecraft.moveForward(-1);
            },
        });
        this.keyListener.bindEvent({
            keyName: 'a',
            handler: (keyName) => {
                this.latestKeyPressed = keyName;
                communicateFirstMovement();
                this.spacecraft.moveForward(0, -1);
            },
        });
        this.keyListener.bindEvent({
            keyName: 'd',
            handler: (keyName) => {
                this.latestKeyPressed = keyName;
                communicateFirstMovement();
                this.spacecraft.moveForward(0, 1);
            },
        });
        this.keyListener.bindEvent({
            keyName: ['c', 'x'],
            ctrl: true,
            handler: function () {
                console.log('Closing! Goodbye.\n');
                process.exit(1);
            },
        });
        this.keyListener.bindEvent({
            keyName: 'h',
            handler: function () {
                console.log(`
Start => Earth(0, 0)
Goal => Moon(0, 250)

Once Launched, the Ship moves Forward 

W -> Increase Forward Speed
S -> Decrease Forward Speed 
A -> Move Left
D -> Move Right
Max Speed - 5 speedunit
Min Speed - 1 speedunit (after leaving (0, 0))

Press H -> Show the Ship Reference Manual
Press CTRL + C to Exit
                `);
            },
        });
    }
    start() {
        console.log(welcome_1.default);
        console.log(rocket_1.default);
        this.output.write('(0, 0) ready for launch\nPress H to Show Help\n');
    }
    launch() {
        this.output.write(`(${this.spacecraft.x}, ${this.spacecraft.y}) spacecraft launched from Earth\n`);
    }
    exit() {
        this.output.write('Closing! Goodbye.');
        this.input.destroy();
    }
}
exports.default = CLI;
//# sourceMappingURL=cli.js.map
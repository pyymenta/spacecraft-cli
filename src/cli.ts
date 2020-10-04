import KeyListener from './keyListener';
import Spacecraft from './spacecraft';

export default class CLI {
    private input: NodeJS.ReadStream;
    private output: NodeJS.WriteStream;
    private keyListener: KeyListener;
    private spacecraft: Spacecraft;
    private firstEventCalled: boolean;
    public latestKeyPressed: string;

    public constructor(input: NodeJS.ReadStream, output: NodeJS.WriteStream, spacecraft: Spacecraft) {
        this.input = input;
        this.output = output;
        this.keyListener = new KeyListener(this.input);
        this.spacecraft = spacecraft;

        this.bindKeyEvents();
    }

    bindKeyEvents(): void {
        const communicateFirstMovement = () => {
            if (!this.firstEventCalled) {
                this.firstEventCalled = true;
                this.launch();
            }
        };

        const accelerateEvent = this.keyListener.bindEvent({
            keyName: 'w',
            handler: (keyName) => {
                this.latestKeyPressed = keyName;
                communicateFirstMovement();
                this.spacecraft.moveForward(1);
            },
        });

        const decelerateEvent = this.keyListener.bindEvent({
            keyName: 's',
            handler: (keyName) => {
                this.latestKeyPressed = keyName;
                communicateFirstMovement();
                this.spacecraft.moveForward(-1);
            },
        });

        const leftMovementEvent = this.keyListener.bindEvent({
            keyName: 'a',
            handler: (keyName) => {
                this.latestKeyPressed = keyName;
                communicateFirstMovement();
                this.spacecraft.moveForward(0, -1);
            },
        });

        const rightMovementEvent = this.keyListener.bindEvent({
            keyName: 'd',
            handler: (keyName) => {
                this.latestKeyPressed = keyName;
                communicateFirstMovement();
                this.spacecraft.moveForward(0, 1);
            },
        });

        const closeEvent = this.keyListener.bindEvent({
            keyName: ['c', 'x'],
            ctrl: true,
            handler: function (keyName) {
                console.log('Closing! Goodbye.');
                process.exit(1);
            },
        });
    }

    start(): void {
        console.log('(0, 0) ready for launch');
    }

    launch(): void {
        console.log(`(${this.spacecraft.x}, ${this.spacecraft.y}) spacecraft launched from Earth`);
    }

    exit(): void {
        console.log('Closing! Goodbye.');

        this.input.destroy();
    }
}

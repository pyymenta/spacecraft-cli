import KeyListener from './keyListener';
import Spacecraft from './spacecraft';
import Rocket from './rocket';
import Welcome from './welcome';

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

    start(): void {
        console.log(Welcome);
        console.log(Rocket);

        this.output.write('(0, 0) ready for launch\nPress H to Show Help\n');
    }

    launch(): void {
        this.output.write(`(${this.spacecraft.x}, ${this.spacecraft.y}) spacecraft launched from Earth\n`);
    }

    exit(): void {
        this.output.write('Closing! Goodbye.');

        this.input.destroy();
    }
}

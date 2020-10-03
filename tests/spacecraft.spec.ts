import CLI from '../src/cli';
import SpaceCraft from '../src/spacecraft';
import { Earth, Moon } from '../src/locations';

describe('Earth', () => {
    it('is in (0, 0)', () => {
        expect(Earth.x).toBe(0);
        expect(Earth.y).toBe(0);
    });
});

describe('Moon', () => {
    it('is in (0, 250)', () => {
        expect(Moon.x).toBe(0);
        expect(Moon.y).toBe(250);
    });
});

describe('Spacecraft', () => {
    const spacecraft = new SpaceCraft(Earth, Moon);
    const cli = new CLI(process.stdin, process.stdout, spacecraft);
    cli.start();

    afterAll(() => {
        // Finalize the inputStream

        cli.exit();
    });

    it('starts from Earth', () => {
        expect(spacecraft.x).toBe(Earth.x);
        expect(spacecraft.y).toBe(Earth.y);
    });

    it('launches', () => {
        spacecraft.launch();

        expect(spacecraft.launched).toBeTruthy();
    });

    it('moves correctly accelerating', () => {
        spacecraft.moveForward(1); // (0, 0) => (0, 2)
        expect(spacecraft.x).toBe(0);
        expect(spacecraft.y).toBe(2);
    });

    it('moves correctly decelerating', () => {
        spacecraft.moveForward(-1); // (0, 2) => (0, 3)
        expect(spacecraft.x).toBe(0);
        expect(spacecraft.y).toBe(3);
    });

    it('moves correctly right', () => {
        spacecraft.moveForward(0, 1); // (0, 3) => (1, 4)
        expect(spacecraft.x).toBe(1);
        expect(spacecraft.y).toBe(4);
    });

    it('moves correctly left', () => {
        spacecraft.moveForward(0, -1); // (1, 4) => (0, 5)
        expect(spacecraft.x).toBe(0);
        expect(spacecraft.y).toBe(5);
    });

    it('accelerates correctly', () => {
        // (0, 5) => (0, 7) => (0, 10) => (0, 14) => (0, 19)

        spacecraft.moveForward(1);
        expect(spacecraft.x).toBe(0);
        expect(spacecraft.y).toBe(7);

        spacecraft.moveForward(1);
        expect(spacecraft.x).toBe(0);
        expect(spacecraft.y).toBe(10);

        spacecraft.moveForward(1);
        expect(spacecraft.x).toBe(0);
        expect(spacecraft.y).toBe(14);

        spacecraft.moveForward(1);
        expect(spacecraft.x).toBe(0);
        expect(spacecraft.y).toBe(19);
    });
});

import CLI from '../src/cli';
import { Earth, Moon } from '../src/locations';
import SpacecraftEmitter from '../src/spacecraftEmitter';
import { EventEmitter } from 'events';
import { event_messages } from '../src/events_messages.json';
import Spacecraft from '../src/spacecraft';

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
    let spacecraft: Spacecraft;
    let emitterSpy: any;
    beforeEach(() => {
        emitterSpy = jest.spyOn(EventEmitter.prototype, 'emit');
        spacecraft = new Spacecraft(Earth, Moon, new SpacecraftEmitter(process.stdout));
    });
    afterEach(() => {
        jest.resetAllMocks();
    })

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
        spacecraft.y = 2
        spacecraft.moveForward(-1); // (0, 2) => (0, 3)
        expect(spacecraft.x).toBe(0);
        expect(spacecraft.y).toBe(3);
    });

    it('moves correctly right', () => {
        spacecraft.moveForward(0, 1); // (0, 0) => (1, 1)
        expect(spacecraft.x).toBe(1);
        expect(spacecraft.y).toBe(1);
    });

    it('moves correctly left', () => {
        spacecraft.moveForward(0, -1); // (0, 0) => (1, 1)
        expect(spacecraft.x).toBe(-1);
        expect(spacecraft.y).toBe(1);
    });

    it('accelerates correctly', () => {
        // (0, 5) => (0, 7) => (0, 10) => (0, 14) => (0, 19)

        spacecraft.moveForward(1);
        expect(spacecraft.x).toBe(0);
        expect(spacecraft.y).toBe(2);

        spacecraft.moveForward(1);
        expect(spacecraft.x).toBe(0);
        expect(spacecraft.y).toBe(5);

        spacecraft.moveForward(1);
        expect(spacecraft.x).toBe(0);
        expect(spacecraft.y).toBe(9);

        spacecraft.moveForward(1);
        expect(spacecraft.x).toBe(0);
        expect(spacecraft.y).toBe(14);
    });
    
    it('does not exceed the maximum speed', () => {
        const maxSpeedEvent = event_messages.find((message) => message.id === 'max_speed')
        spacecraft.moveForward(1);
        spacecraft.moveForward(1);
        spacecraft.moveForward(1);
        spacecraft.moveForward(1);
        spacecraft.moveForward(1);
        spacecraft.moveForward(1);
        expect(spacecraft.y).toBe(24);
        expect(emitterSpy).toBeCalledWith('max_speed', maxSpeedEvent);
    }); 

    it('does not slow down past the minimum speed', () => {
        const minSpeedEvent = event_messages.find((message) => message.id === 'min_speed')
        spacecraft.moveForward(-1);
        expect(emitterSpy).toBeCalledWith('min_speed', minSpeedEvent);
    });

    it('warns if the trajectory is too far off', () => {
        const wrongTrajectoryEvent = event_messages.find((message) => message.id === 'wrong_trajectory')
        spacecraft.moveForward(0, 1);
        spacecraft.moveForward(0, 1);
        spacecraft.moveForward(0, 1);
        spacecraft.moveForward(0, 1);
        spacecraft.moveForward(0, 1);
        spacecraft.moveForward(0, 1);
        expect(emitterSpy).toBeCalledWith('wrong_trajectory', wrongTrajectoryEvent)
    });

    it('notifies when it has reached the moon', () => {
        const moonEvent = event_messages.find((message) => message.id === 'moon')
        spacecraft.y = 248;
        spacecraft.moveForward(1)
        expect(emitterSpy).toBeCalledWith('moon', moonEvent)
    });

    it('warns lost when it has passed the moon', () => {
        const lostEvent = event_messages.find((message) => message.id === 'lost')
        spacecraft.y = 248;
        spacecraft.moveForward(1)
        spacecraft.moveForward(1)
        expect(emitterSpy).toBeCalledWith('lost', lostEvent)
    });

    it('notifies both wrong_trajectory and max_speed at the same time', () => {
        const wrongTrajectoryEvent = event_messages.find((message) => message.id === 'wrong_trajectory')
        const maxSpeedEvent = event_messages.find((message) => message.id === 'max_speed')
        
        spacecraft.x = 4;
        spacecraft.speed = 5
        spacecraft.moveForward(1);
        spacecraft.moveForward(0, 1);

        expect(emitterSpy).toBeCalledWith('max_speed', maxSpeedEvent);
        expect(emitterSpy).toBeCalledWith('wrong_trajectory', wrongTrajectoryEvent)
        expect(emitterSpy).toBeCalledTimes(3);
    });

});



import SpacecraftEmitter from '../src/spacecraftEmitter';
import { EventEmitter } from 'events';
import { event_messages } from '../src/events_messages.json';

describe('Spacecraft Emitter', () => {
    const spacecraftEmitter = new SpacecraftEmitter(process.stdout);
    const emitterSpy = jest.spyOn(EventEmitter.prototype, 'emit');

    it('reports a maximum-speed event', () => {
        spacecraftEmitter.report('max_speed');
        expect(emitterSpy).toHaveBeenCalledWith(
            'max_speed',
            event_messages.find((event_message) => event_message.id === 'max_speed'),
        );
    });
});

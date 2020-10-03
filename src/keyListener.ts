import * as readline from 'readline';

export interface Event {
    keyName: string|string[],
    ctrl?: boolean,
    shift?: boolean,
    handler: (keyName: string, ctrl: boolean, shift: boolean) => void,
}

export default class KeyListener {
    private input: NodeJS.ReadStream;
    private events: Event[] = [];

    public constructor(input: NodeJS.ReadStream, ...events: Event[]) {
        this.input = input;
        this.events = events ? events : [];

        readline.emitKeypressEvents(this.input);
        this.input.setRawMode(true);

        this.input.on("keypress", this.onKeyPressExecuteEvent.bind(this));
    }

    bindEvent(event: Event): Event {
        this.events.push(event);
        return event;
    }

    unbindEvent(event: Event): boolean {
        const foundRelatedEventIndex = this.events.findIndex(e => e.keyName === event.keyName && e.ctrl === event.ctrl && e.shift === event.shift);
        if (foundRelatedEventIndex >= 0) {
            this.events.splice(foundRelatedEventIndex, 1);
            return true;
        } else return false;
    }

    onKeyPressExecuteEvent(str: string, key: any): void {
        const foundRelatedEvent = this.events.find(e =>
            (Array.isArray(e.keyName) ? e.keyName.includes(key.name) : e.keyName === key.name) && (e.ctrl ? key.ctrl : true) && (e.shift ? key.shift : true));

        if (foundRelatedEvent) {
            foundRelatedEvent.handler(key.name, key.ctrl, key.shift);
        }
    }
}
import EventInterface from './EventInterface';

declare module 'events_messages.json' {
    const value: EventInterface[];
    export default value;
}

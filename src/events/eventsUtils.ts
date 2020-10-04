import eventMessages from './events_messages.json';

/**
 *
 * Find at events_messages.json
 * an event with the same 'id' key and return it
 *
 * @param id
 */

export function findEventById(id: string) {
    return eventMessages.event_messages.find((eventMessage) => eventMessage.id === id);
}

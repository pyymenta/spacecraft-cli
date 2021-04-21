import { EventEmitter } from 'events';
import { event_messages } from './events_messages.json';

export default class SpacecraftEmitter {
  private eventEmitter: EventEmitter = new EventEmitter();

  constructor(output: NodeJS.WriteStream) {
    this.init(output);
  }

  private init(output: NodeJS.WriteStream) {
    event_messages.forEach((message) => {
      this.eventEmitter.on(message.id, () => {
        output.write(` ${message.message} `);
      });
    });
  }

  public report(event: string): void {
    const event_message = event_messages.find((message) => {
      return message.id === event;
    });

    if (event_message) {
      this.eventEmitter.emit(event_message.id, event_message);
    }
  }
}

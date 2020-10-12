"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const events_messages_json_1 = require("./events_messages.json");
class SpacecraftEmitter {
    constructor(output) {
        this.eventEmitter = new events_1.EventEmitter();
        this.init(output);
    }
    init(output) {
        events_messages_json_1.event_messages.forEach((message) => {
            this.eventEmitter.on(message.id, () => {
                output.write(` ${message.message} `);
            });
        });
    }
    report(event) {
        const event_message = events_messages_json_1.event_messages.find((message) => {
            return message.id === event;
        });
        if (event_message) {
            this.eventEmitter.emit(event_message.id, event_message);
        }
    }
}
exports.default = SpacecraftEmitter;
//# sourceMappingURL=spacecraftEmitter.js.map
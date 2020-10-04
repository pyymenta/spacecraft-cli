"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
class KeyListener {
    constructor(input, ...events) {
        this.events = [];
        this.input = input;
        this.events = events ? events : [];
        readline.emitKeypressEvents(this.input);
        this.input.setRawMode(true);
        this.input.on("keypress", this.onKeyPressExecuteEvent.bind(this));
    }
    bindEvent(event) {
        this.events.push(event);
        return event;
    }
    unbindEvent(event) {
        const foundRelatedEventIndex = this.events.findIndex(e => e.keyName === event.keyName && e.ctrl === event.ctrl && e.shift === event.shift);
        if (foundRelatedEventIndex >= 0) {
            this.events.splice(foundRelatedEventIndex, 1);
            return true;
        }
        else
            return false;
    }
    onKeyPressExecuteEvent(str, key) {
        const foundRelatedEvent = this.events.find(e => (Array.isArray(e.keyName) ? e.keyName.includes(key.name) : e.keyName === key.name) && (e.ctrl ? key.ctrl : true) && (e.shift ? key.shift : true));
        if (foundRelatedEvent) {
            foundRelatedEvent.handler(key.name, key.ctrl, key.shift);
        }
    }
}
exports.default = KeyListener;
//# sourceMappingURL=keyListener.js.map
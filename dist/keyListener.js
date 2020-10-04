'use strict';
exports.__esModule = true;
var readline = require('readline');
var KeyListener = (function () {
    function KeyListener(input) {
        var events = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            events[_i - 1] = arguments[_i];
        }
        this.events = [];
        this.input = input;
        this.events = events ? events : [];
        readline.emitKeypressEvents(this.input);
        this.input.setRawMode(true);
        this.input.on('keypress', this.onKeyPressExecuteEvent.bind(this));
    }
    KeyListener.prototype.bindEvent = function (event) {
        this.events.push(event);
        return event;
    };
    KeyListener.prototype.unbindEvent = function (event) {
        var foundRelatedEventIndex = this.events.findIndex(function (e) {
            return e.keyName === event.keyName && e.ctrl === event.ctrl && e.shift === event.shift;
        });
        if (foundRelatedEventIndex >= 0) {
            this.events.splice(foundRelatedEventIndex, 1);
            return true;
        } else return false;
    };
    KeyListener.prototype.onKeyPressExecuteEvent = function (str, key) {
        var foundRelatedEvent = this.events.find(function (e) {
            return (
                (Array.isArray(e.keyName) ? e.keyName.includes(key.name) : e.keyName === key.name) &&
                (e.ctrl ? key.ctrl : true) &&
                (e.shift ? key.shift : true)
            );
        });
        if (foundRelatedEvent) {
            foundRelatedEvent.handler(key.name, key.ctrl, key.shift);
        }
    };
    return KeyListener;
})();
exports['default'] = KeyListener;
//# sourceMappingURL=keyListener.js.map

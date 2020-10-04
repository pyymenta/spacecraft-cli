'use strict';
exports.__esModule = true;
var keyListener_1 = require('./keyListener');
var CLI = (function () {
    function CLI(input, output, spacecraft) {
        this.input = input;
        this.output = output;
        this.keyListener = new keyListener_1['default'](this.input);
        this.spacecraft = spacecraft;
        this.bindKeyEvents();
    }
    CLI.prototype.bindKeyEvents = function () {
        var _this = this;
        var communicateFirstMovement = function () {
            if (!_this.firstEventCalled) {
                _this.firstEventCalled = true;
                _this.launch();
            }
        };
        var accelerateEvent = this.keyListener.bindEvent({
            keyName: 'w',
            handler: function (keyName) {
                _this.latestKeyPressed = keyName;
                communicateFirstMovement();
                _this.spacecraft.moveForward(1);
            },
        });
        var decelerateEvent = this.keyListener.bindEvent({
            keyName: 's',
            handler: function (keyName) {
                _this.latestKeyPressed = keyName;
                communicateFirstMovement();
                _this.spacecraft.moveForward(-1);
            },
        });
        var leftMovementEvent = this.keyListener.bindEvent({
            keyName: 'a',
            handler: function (keyName) {
                _this.latestKeyPressed = keyName;
                communicateFirstMovement();
                _this.spacecraft.moveForward(0, -1);
            },
        });
        var rightMovementEvent = this.keyListener.bindEvent({
            keyName: 'd',
            handler: function (keyName) {
                _this.latestKeyPressed = keyName;
                communicateFirstMovement();
                _this.spacecraft.moveForward(0, 1);
            },
        });
        var closeEvent = this.keyListener.bindEvent({
            keyName: ['c', 'x'],
            ctrl: true,
            handler: function (keyName) {
                console.log('Closing! Goodbye.');
                process.exit(1);
            },
        });
    };
    CLI.prototype.start = function () {
        console.log('(0, 0) ready for launch');
    };
    CLI.prototype.launch = function () {
        console.log('(' + this.spacecraft.x + ', ' + this.spacecraft.y + ') spacecraft launched from Earth');
    };
    return CLI;
})();
exports['default'] = CLI;
//# sourceMappingURL=cli.js.map

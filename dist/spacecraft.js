"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spacecraft = (function () {
    function Spacecraft(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Spacecraft.prototype, "X", {
        get: function () {
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Spacecraft.prototype, "Y", {
        get: function () {
            return this.y;
        },
        enumerable: false,
        configurable: true
    });
    Spacecraft.prototype.createMessage = function () {
        return 'Starter point Spacecraft CLI';
    };
    Spacecraft.prototype.forward = function (y) {
        return y + 1;
    };
    Spacecraft.prototype.left = function (x) {
        return x - 1;
    };
    Spacecraft.prototype.right = function (x) {
        return x + 1;
    };
    return Spacecraft;
}());
exports.default = Spacecraft;
//# sourceMappingURL=spacecraft.js.map
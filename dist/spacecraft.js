"use strict";
exports.__esModule = true;
var Spacecraft = (function () {
    function Spacecraft(start, end) {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.start = start;
        this.end = end;
        this.x = this.start.x;
        this.y = this.start.y;
        this.prepareLaunch();
    }
    Spacecraft.prototype.prepareLaunch = function () {
        this.speed = 1;
    };
    Spacecraft.prototype.launch = function () {
        return this.launched = true;
    };
    Spacecraft.prototype.moveForward = function (alterSpeed, sideMovement) {
        if (alterSpeed === void 0) { alterSpeed = 0; }
        if (sideMovement === void 0) { sideMovement = 0; }
        if (sideMovement !== 0)
            this.x += sideMovement;
        else if (alterSpeed !== 0) {
            if (((this.speed + alterSpeed) <= 5) && ((this.speed + alterSpeed) > 0)) {
                this.speed += alterSpeed;
            }
        }
        this.y += this.speed;
    };
    return Spacecraft;
}());
exports["default"] = Spacecraft;
//# sourceMappingURL=spacecraft.js.map
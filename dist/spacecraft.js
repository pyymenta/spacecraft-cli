"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Spacecraft {
    constructor(start, end, spacecraftEmitter) {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.start = start;
        this.end = end;
        this.x = this.start.x;
        this.y = this.start.y;
        this.spacecraftEmitter = spacecraftEmitter;
        this.prepareLaunch();
    }
    prepareLaunch() {
        this.speed = 1;
    }
    launch() {
        return (this.launched = true);
    }
    moveForward(alterSpeed = 0, sideMovement = 0) {
        if (sideMovement !== 0) {
            this.x += sideMovement;
        }
        if (this.speed + alterSpeed <= 5 && this.speed + alterSpeed > 0) {
            this.speed += alterSpeed;
        }
        this.y += this.speed;
        this.reportStatus();
    }
    reportStatus() {
        if (Math.abs(this.x) > 4) {
            this.spacecraftEmitter.report('wrong_trajectory');
        }
        if (this.speed == 5) {
            this.spacecraftEmitter.report('max_speed');
        }
        if (this.speed == 1) {
            this.spacecraftEmitter.report('min_speed');
        }
        if (this.y === 250) {
            this.spacecraftEmitter.report('moon');
        }
        else if (this.y > 250) {
            this.spacecraftEmitter.report('lost');
        }
    }
}
exports.default = Spacecraft;
//# sourceMappingURL=spacecraft.js.map
import { ObjectLocation } from './locations';

export default class Spacecraft {
    public start: ObjectLocation;
    public end: ObjectLocation;
    public x: number = 0;
    public y: number = 0;
    public speed: number = 0;
    public launched: boolean;

    public constructor(start: ObjectLocation, end: ObjectLocation) {
        this.start = start;
        this.end = end;

        this.x = this.start.x;
        this.y = this.start.y;

        this.prepareLaunch();
    }

    private prepareLaunch(): void {
        this.speed = 1;
    }

    public launch(): boolean {
        return this.launched = true;
    }

    /* addSpeed can be negative to decrease it; sideMovement can be negative to go to left, else positive to go to right */
    public moveForward(alterSpeed: number = 0, sideMovement: number = 0) {
        /* The speed SHOULD NOT change in case of side movement, but only in case of acceleration or deceleration. */

        /* Increases or decreases x axys (left or right movement) */
        if (sideMovement !== 0) this.x += sideMovement;
        /* Increases or decreases speed */
        else if (alterSpeed !== 0) {
            if (((this.speed + alterSpeed) <= 5) && ((this.speed + alterSpeed) > 0)) {
                this.speed += alterSpeed;
            }
        }

        /* The spacecraft should move forward in any case, even when doing a side movement. */
        this.y += this.speed;
    }
}

import { ObjectLocation } from './locations';
import SpacecraftEmitter from './spacecraftEmitter';

export default class Spacecraft {
  private spacecraftEmitter: SpacecraftEmitter;
  public start: ObjectLocation;
  public end: ObjectLocation;
  public x = 0;
  public y = 0;
  public speed = 0;
  public launched: boolean;

  public constructor(start: ObjectLocation, end: ObjectLocation, spacecraftEmitter: SpacecraftEmitter) {
    this.start = start;
    this.end = end;

    this.x = this.start.x;
    this.y = this.start.y;

    this.spacecraftEmitter = spacecraftEmitter;

    this.prepareLaunch();
  }

  private prepareLaunch(): void {
    this.speed = 1;
  }

  public launch(): boolean {
    return (this.launched = true);
  }

  public moveForward(alterSpeed = 0, sideMovement = 0): void {
    if (sideMovement !== 0) {
      this.x += sideMovement;
    }
    if (this.speed + alterSpeed <= 5 && this.speed + alterSpeed > 0) {
      this.speed += alterSpeed;
    }
    this.y += this.speed;
    this.reportStatus();
  }

  public reportStatus(): void {
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
    } else if (this.y > 250) {
      this.spacecraftEmitter.report('lost');
    }
  }
}

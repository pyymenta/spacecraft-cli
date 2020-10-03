export default class Spacecraft {
  public x: number = 0;
  public y: number = 0;

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public get X() {
    return this.x;
  }

  public get Y() {
    return this.y;
  }

  createMessage(): string {
    return 'Starter point Spacecraft CLI';
  }
  forward(y: number): number {
    return y + 1;
  }
  back(y: number): number {
    return y - 1;
  }

  left(x: number): number {
    return x - 1;
  }
  right(x: number): number {
    return x + 1;
  }
}

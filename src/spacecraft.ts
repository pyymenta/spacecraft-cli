export default class Spacecraft {

    public x: number = 0;
    public y: number = 0;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number{
        return this.y;
    }

    public move(xOffset: number, yOffset: number) {
        this.x + xOffset;
        this.y + yOffset;
    }

    createMessage(): string {
        return 'Starter point Spacecraft CLI';
    }

}

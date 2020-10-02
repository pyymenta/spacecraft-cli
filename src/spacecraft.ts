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
}

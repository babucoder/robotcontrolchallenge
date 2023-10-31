import { Robot } from "./robot";
import { Coordinates } from "./robotPosition/coordinates";

export class World {

  
    private _width: number;


    private _height: number;

   
    private _lostRobots: number;

   
    private _positionsWithRobotScent: Coordinates[];

    private _robots: Robot[];

    constructor(width: number, height: number) {
        
        this._width = width;
        this._height = height;
        this._robots = [];
        this._lostRobots = 0;
        this._positionsWithRobotScent = [];

    }

    public get width(): number {
        return this._width;
    }
    public set width(width: number) {
        this._width = width;
    }

    public get height(): number {
        return this._height;
    }
    public set height(height: number) {
        this._width = height;
    }

    public get robots(): Robot[] {
        return this._robots;
    }
    public set robots(value: Robot[]) {
        this._robots = value;
    }

    public get lostRobots(): number {
        return this._lostRobots;
    }

    public get positionsWithRobotScent(): Coordinates[] {
        return this._positionsWithRobotScent;
    }

    public incrementLostRobots(): void {
        this._lostRobots++;
    }

    public setNewPositionWithRobotScent(coordinates: Coordinates): void {
        this._positionsWithRobotScent.push(coordinates);
    }

    public positionHasRobotScent(coordinates: Coordinates): boolean {
        return this._positionsWithRobotScent.some( positionWithRobotScent => positionWithRobotScent.xCoordinate == coordinates.xCoordinate && positionWithRobotScent.yCoordinate == coordinates.yCoordinate);
    }

}
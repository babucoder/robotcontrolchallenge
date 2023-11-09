import { RemoteController } from "./robotInstructions/remoteController";
import { Position } from "./robotPosition/position";

export class Robot {

   
    private _position: Position;

    constructor(position: Position) {
        this._position = position;
    }

    public get position(): Position {
        return this._position;
    }

    public set position(position: Position) {
        this._position = position;
    }

    /**
     * Execute a given instruction (via remote controller).
     * 
     * @param remoteController - The remote controller that indicates what a given instruction means.
     */
    public move(remoteController: RemoteController): void {
        remoteController.executeInstruction(this);
    }

    public toString(): string {
        let robotInfo: string = `${this.position.coordinates.xCoordinate} ${this.position.coordinates.yCoordinate} ${this.position.orientation} `;
        return robotInfo;
    }

}
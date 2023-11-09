import { instructions, orientations } from "./constants";
import { World } from "./world";
import { Robot } from "./robot";
import { Coordinates } from "./robotPosition/coordinates";
import { Orientation } from "./robotPosition/orientation";
import { Position } from "./robotPosition/position";

export class GridWorld {

    private _world: World;

    constructor(world: World) {
        this._world = world;
    }

    /**
     * 
     * @param robotInitialPosition - The robot initial position coordinates and orientation.
     * @param robotInstructions - The robot instructions to be executed.
     * 
     * @returns If robot has fallen during its travelling or not.
     */
    public setRobotAndExecuteInstructions(robotInitialPosition: string, robotInstructions: string): boolean {

        const [initialOrientation, initialX, initialY ] = robotInitialPosition.split(' ');
       
        const coordinates: Coordinates = new Coordinates(Number(initialX), Number(initialY));
        
        const position: Position = new Position(coordinates, orientations[initialOrientation]);
        
        const robot: Robot = new Robot(position);

        // Execute robot instructions one by one until all instructions have been executed or robot has fallen.
        for(let i = 0;  i < robotInstructions.length; i++) {
            const instruction = robotInstructions[i];
            robot.move(instructions[instruction]);
        }

        return false;
    }

    public showInfo(): void {
        this._world.robots.forEach(robot => {
            console.log(robot.toString());
        });
    }

    private isRobotGoingToFall(robotCurrentPosition: Position): boolean {
        let isGoingToFall: boolean = false;

        switch(robotCurrentPosition.orientation) {
            case Orientation.N:
                if(robotCurrentPosition.coordinates.yCoordinate == this._world.height - 1) {
                    isGoingToFall = true;
                }
                break;
            
            case Orientation.S:
                if(robotCurrentPosition.coordinates.yCoordinate == 0) {
                    isGoingToFall = true;
                }
                break;

            case Orientation.E:
                if(robotCurrentPosition.coordinates.xCoordinate == this._world.width - 1) {
                    isGoingToFall = true;
                }
                break;

            case Orientation.W:
                if(robotCurrentPosition.coordinates.xCoordinate == 0) {
                    isGoingToFall = true;
                }
                break;
            
            default:
                console.error('invalid orientation');
        }


        return isGoingToFall;
    }

}
import {  REGEXP_ROBOT_INITIAL_POSITION, REGEXP_ROBOT_INSTRUCTIONS } from "./constants";

import { GridWorld } from "./gridWorld";


export const preprocessInputAndSendInformation = (gridWorld: GridWorld, inputInfo: string[], worldWidth: number, worldHeight: number): void => {

    const regExpRobotPosition: RegExp = new RegExp(REGEXP_ROBOT_INITIAL_POSITION);
    const regExpRobotInstructions: RegExp = new RegExp(REGEXP_ROBOT_INSTRUCTIONS);

    // Line with robot position information
    if(regExpRobotPosition.test(inputInfo[0])) {
        const xCoordinate = worldWidth;
        const yCoordinate = worldHeight;

        if(Number(xCoordinate) >= 0 && Number(xCoordinate) < worldWidth && Number(yCoordinate) >= 0 && Number(yCoordinate) < worldHeight) {
            gridWorld.setRobotAndExecuteInstructions(inputInfo[0], inputInfo[1]);

        } else {
            console.error("FORMAT ERROR: Robot coordinates out of bounds.");
        }

    // Line with robot instructions information
    } else if(regExpRobotInstructions.test(inputInfo[0])) {
        gridWorld.setRobotAndExecuteInstructions(inputInfo[0], inputInfo[1]);
    } else {
        console.error("FORMAT ERROR: Line '" + inputInfo[0] + "' has not proper format. Max. robot instructions: 100.");
    }

}



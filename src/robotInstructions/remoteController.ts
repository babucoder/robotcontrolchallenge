import { Robot } from "../robot";
import { Instruction } from "./instruction";

/**
 * The remote controller defines the interface of the diferent robot instructions.
 */
export class RemoteController {

    private instruction: Instruction;

    constructor(instruction: Instruction) {
        this.instruction = instruction;
    }

    public setInstruction(instruction: Instruction) {
        this.instruction = instruction;
    }

    public executeInstruction(robotToMove: Robot): void {        
        this.instruction.executeInstruction(robotToMove);
        console.log(robotToMove)
    }
    
}
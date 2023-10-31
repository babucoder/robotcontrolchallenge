import * as fs from 'fs';
import { PATH_TO_INPUT_FILE, REGEXP_Lines_SIZE } from "./constants";
import { preprocessInputAndSendInformation} from "./helpers";
import { World } from "./world";
import { GridWorld } from "./gridWorld";

const inputInfo: string[] = fs.readFileSync(PATH_TO_INPUT_FILE).toString().split("\n");

let world: World;

const linesSize: string | undefined = inputInfo.shift();
console.log(inputInfo,"as")
// Check if input is empty
if(linesSize) {

    if(inputInfo.length) {

        const [ WorldUpperRightXCoordinate, WorldUpperRightYCoordinate ] = linesSize.split(' ');

        const WorldWidth: number = (Number(WorldUpperRightXCoordinate) > 100 || Number(WorldUpperRightXCoordinate) < 1) ? 100 : Number(WorldUpperRightXCoordinate) + 1;
        const WorldHeight: number = (Number(WorldUpperRightYCoordinate) > 100 || Number(WorldUpperRightYCoordinate) < 1) ? 100 : Number(WorldUpperRightYCoordinate) + 1;

        console.log("Found World of dimensions " + WorldWidth + "x" + WorldHeight);

        world = new World(WorldWidth, WorldHeight);

        const gridWorld: GridWorld = new GridWorld(world);

        preprocessInputAndSendInformation(gridWorld, inputInfo, WorldWidth, WorldHeight);

        // Show output info in console
        gridWorld.showInfo();

    } else {
        console.error("FORMAT ERROR: World info must include two lines of information for each robot.");
    }

} 

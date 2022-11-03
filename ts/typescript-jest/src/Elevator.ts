export class Elevator {
    floor: number;
    isMoving: boolean


    enum direction {
        up = "UP",
        down = "DOWN"
    }

    public call(source: number, destination: number)  {
        if (destination - source < 0 ) {
            // go down
        } else {
            // go up
        }
    }
}

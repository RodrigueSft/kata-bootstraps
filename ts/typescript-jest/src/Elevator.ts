enum direction {
    up = "UP",
    down = "DOWN"
}

class Motor {
    getUp() {};
    getDown() {};
}

export class Elevator {
    private floor: number;
    private isMoving: boolean
    private actions: {source: number, destination: number}[];

    constructor () {
        this.floor = 0;
        this.isMoving = false;
        this.actions = [];
    }

    getFloor() {
        return this.floor;
    };

    getUp() {};
    getDown() {};

    public call(destination: number)  {
        if (destination - source < 0 ) {
            // go down
        } else {
            // go up
        }
    }

    run () {
        while (this.actions.length > 0) {
            this.run()
        }
    }
}

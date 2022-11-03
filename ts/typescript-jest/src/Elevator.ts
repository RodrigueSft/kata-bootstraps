enum direction {
    up = "UP",
    down = "DOWN"
}

class Motor {
    public getUp() {}
    public getDown() {}
}

export class Elevator {
    private floor: number
    private isMoving: boolean
    private actions: Array<{source: number, destination: number}>

    constructor() {
        this.floor = 0
        this.isMoving = false
        this.actions = []
    }

    public getFloor() {
        return this.floor
    }

    public call(source: number, destination: number)  {
        this.actions.push({source, destination});
        if (this.actions.length === 1)
            this.run();
    }

    private goUp() {
        this.floor = this.floor + 1
    }

    private goDown() {
        this.floor = this.floor - 1
    }

    private run() {
        while (this.actions.length > 0) {
            const action = this.actions.shift();
            this.goToFloor(action.source);
            this.goToFloor(action.destination);
        }
    }

    private goToFloor(source: number) {
        while (this.floor != source) {
            if (this.floor > source)
                this.goDown();
            else
                this.goUp();
        }
    }
}

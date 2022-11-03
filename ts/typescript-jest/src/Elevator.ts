interface motorOrder {
    goUp()

    goDown()

    openDoors()
}

export class Elevator {
    private floor: number
    private isMoving: boolean
    private actions: Array<{source: number, destination: number}>
    private motorOrder: motorOrder

    constructor(motorOrd: motorOrder) {
        this.floor = 0;
        this.isMoving = false;
        this.actions = [];
        this.motorOrder = motorOrd;
    }

    public getFloor() {
        return this.floor;
    }

    openDoors() {
        
    }

    public call(source: number, destination: number)  {
        this.actions.push({source, destination});
        if (this.actions.length === 1)
            this.run();
    }

    private goUp() {
        this.floor = this.floor + 1;
        this.motorOrder.goUp();
    }

    private goDown() {
        this.floor = this.floor - 1;
        this.motorOrder.goDown();
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

interface motorOrder {
    goUp()

    goDown()

    closeDoors()

    openDoors()
}

export class Elevator {
    private floor: number
    private isMoving: boolean
    private actions: Array<{source: number, destination: number}>
    private motorOrder: motorOrder
    private areDoorsOpen: boolean

    constructor(motorOrd: motorOrder) {
        this.floor = 0;
        this.isMoving = false;
        this.actions = [];
        this.motorOrder = motorOrd;
        this.areDoorsOpen = false;
    }

    public getFloor() {
        return this.floor;
    }

    private closeDoors() {
        this.areDoorsOpen = false;
        this.motorOrder.closeDoors();
    }

    private openDoors() {
        this.areDoorsOpen = true;
        this.motorOrder.openDoors();
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
            this.closeDoors();
            this.goToFloor(action.source);
            this.openDoors();
            this.closeDoors();
            this.goToFloor(action.destination);
            this.openDoors();
        }
    }

    private goToFloor(source: number) {
        while (this.floor !== source) {
            if (this.floor > source)
                this.goDown();
            else
                this.goUp();
        }
    }
}



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
        this.actions.push({source, destination})
    }

    private getUp() {
        this.floor = this.floor + 1
    }

    private getDown() {
        this.floor = this.floor - 1
    }

    private run() {
        while (this.actions.length > 0) {
            this.run()
        }
    }
}

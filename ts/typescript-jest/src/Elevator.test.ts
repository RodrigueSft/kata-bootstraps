import { Elevator } from './Elevator'

describe('Elevator', () => {
    it('create elevator', () => {
        const { goUp, goDown, closeDoors, openDoors } = generateMotor();
        const elevator = new Elevator({ goUp, goDown, closeDoors, openDoors });

        expect(elevator.getFloor()).toBe(0);
    })

    it('move elevator once', () => {
        const { goUp, goDown, closeDoors, openDoors } = generateMotor();
        const elevator = new Elevator({ goUp, goDown, closeDoors, openDoors });

        elevator.call(3, 5)

        expect(elevator.getFloor()).toBe(5);
        expect(goUp).toHaveBeenCalledTimes(5);
        expect(closeDoors).toHaveBeenCalledTimes(2);
        expect(openDoors).toHaveBeenCalledTimes(2);
    })

    it('should move up and down correctly', () => {
        const { goUp, goDown, closeDoors, openDoors } = generateMotor();
        const elevator = new Elevator({ goUp, goDown, closeDoors, openDoors });

        elevator.call(3, 0);
        expect(goUp).toHaveBeenCalledTimes(3);
        expect(goDown).toHaveBeenCalledTimes(3);
        expect(closeDoors).toHaveBeenCalledTimes(2);
        expect(openDoors).toHaveBeenCalledTimes(2);
    })

    function generateMotor() {
        const goUp = jest.fn();
        const goDown = jest.fn();
        const closeDoors = jest.fn();
        const openDoors = jest.fn();

        return { goUp, goDown, closeDoors, openDoors };
    }
})

import { Elevator } from './Elevator'

describe('Elevator', () => {
    it('create elevator', () => {
        const goUp = jest.fn();
        const goDown = jest.fn();
        const openDoors = jest.fn();
        const elevator = new Elevator({ goUp, goDown, openDoors });
        
        expect(elevator.getFloor()).toBe(0);
    })

    it('move elevator once', () => {
        const goUp = jest.fn();
        const goDown = jest.fn();
        const openDoors = jest.fn();
        const elevator = new Elevator({ goUp, goDown, openDoors });
        
        elevator.call(3, 5)

        expect(elevator.getFloor()).toBe(5);
        expect(goUp).toHaveBeenCalledTimes(5);
        expect(openDoors).toHaveBeenCalledTimes(2);
    })

    it('should move up and down correctly', () => {
        const goUp = jest.fn();
        const goDown = jest.fn();
        const openDoors = jest.fn();
        const elevator = new Elevator({ goUp, goDown, openDoors });

        elevator.call(3, 0);
        expect(goUp).toHaveBeenCalledTimes(3); 
        expect(goDown).toHaveBeenCalledTimes(3);
        expect(openDoors).toHaveBeenCalledTimes(2);
    })
})

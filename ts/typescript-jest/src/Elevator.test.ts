import { Elevator } from './Elevator'

describe('Elevator', () => {
    it('create elevator', () => {
        const elevator = new Elevator()
        
        expect(elevator.getFloor()).toBe(0);
    })

    it('move elevator once', () => {
        const elevator = new Elevator()
        
        elevator.call(3, 5)

        expect(elevator.getFloor()).toBe(5);
    })

    it('mock goUp', () => {
        
    })
})

import { MarsRover } from '../src/mars-rover';

describe('Mars Rover', (): void => {
    it('should rotate to West when robot execute "L" command', (): void => {
        const sut = new MarsRover();
        expect(sut.execute('L')).toBe('0:0:W');
    });

    it('given "LL" should rotate to South', (): void => {
        const sut = new MarsRover();
        expect(sut.execute('LL')).toBe('0:0:S');
    });

    it('given "LLL" should rotate to East', (): void => {
        const sut = new MarsRover();
        expect(sut.execute('LLL')).toBe('0:0:E');
    });

    it('given "LLLL" should rotate to the initial position', (): void => {
        const sut = new MarsRover();
        expect(sut.execute('LLLL')).toBe('0:0:N');
    });

    it('should rotate to East when robot execute "R" command', (): void => {
        const sut = new MarsRover();
        expect(sut.execute('R')).toBe('0:0:E');
    });

    it('given "RR" should rotate to South', (): void => {
        const sut = new MarsRover();
        expect(sut.execute('RR')).toBe('0:0:S');
    });

    it('given "RRR" should rotate to West', (): void => {
        const sut = new MarsRover();
        expect(sut.execute('RRR')).toBe('0:0:W');
    });

    it('given "RRRR" should rotate to the initial position', (): void => {
        const sut = new MarsRover();
        expect(sut.execute('RRRR')).toBe('0:0:N');
    });

    it('given "LR" should rotate to the initial position', (): void => {
        const sut = new MarsRover();
        expect(sut.execute('LR')).toBe('0:0:N');
    });

    it('given "RL" should rotate to the initial position', (): void => {
        const sut = new MarsRover();
        expect(sut.execute('RL')).toBe('0:0:N');
    });

    it('given "LRRLLLLR" should rotate S', (): void => {
        const sut = new MarsRover();
        expect(sut.execute('LRRLLLLR')).toBe('0:0:S');
    });

    it('given "F" should move forward to the next position', (): void => {
        const sut = new MarsRover();
        expect(sut.execute('F')).toBe('0:1:N');
    });
});

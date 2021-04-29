import { Command } from './command';
import { Commands } from './commands';
import { Directions } from './directions';

export class MarsRover implements Command {
    private direction: string = Directions.North;

    private x: number = 0;
    private y: number = 0;

    execute(commands: string): string {
        commands.split('').forEach((command: string): void => {
            switch (command) {
                case Commands.Left:
                    this.rotateLeft();
                    break;
                case Commands.Right:
                    this.rotateRight();
                    break;
                case Commands.Forward:
                    this.y++;
                    break;
            }
        });

        return `${this.x}:${this.y}:${this.direction}`;
    }
    private rotateRight(): void {
        switch (this.direction) {
            case Directions.North:
                this.direction = Directions.East;
                break;
            case Directions.East:
                this.direction = Directions.South;
                break;
            case Directions.South:
                this.direction = Directions.West;
                break;
            case Directions.West:
                this.direction = Directions.North;
                break;
        }
    }

    private rotateLeft(): void {
        switch (this.direction) {
            case Directions.North:
                this.direction = Directions.West;
                break;
            case Directions.West:
                this.direction = Directions.South;
                break;
            case Directions.South:
                this.direction = Directions.East;
                break;
            case Directions.East:
                this.direction = Directions.North;
                break;
        }
    }
}

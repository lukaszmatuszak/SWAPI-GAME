import { Status } from './Status';

export interface GameStatusPlayer {
    name: string;
    status: Status;
    mass: number;
    crew: number;
    score: number;
}

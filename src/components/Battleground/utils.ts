import { Status } from '../../interfaces/Status';
import { Starship } from '../../interfaces/Starship';
import { Character } from '../../interfaces/Character';

export const defineStatusForStarship = (
    firstChallenger: Starship,
    secondChallenger: Starship,
): Status[] => {
    if (Number(firstChallenger.crew) === Number(secondChallenger.crew)) {
        return [Status.DRAW, Status.DRAW];
    }

    return Number(firstChallenger.crew) > Number(secondChallenger.crew)
        ? [Status.WINNER, Status.LOOSER]
        : [Status.LOOSER, Status.WINNER];
};

export const defineStatusForCharacter = (
    firstChallenger: Character,
    secondChallenger: Character,
): Status[] => {
    if (Number(firstChallenger.mass) === Number(secondChallenger.mass)) {
        return [Status.DRAW, Status.DRAW];
    }

    return Number(firstChallenger.mass) > Number(secondChallenger.mass)
        ? [Status.WINNER, Status.LOOSER]
        : [Status.LOOSER, Status.WINNER];
};

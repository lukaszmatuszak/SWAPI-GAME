import {
    contestantsStarshipMock,
    contestantsCharactersMock,
} from './fixtures/contestants';
import {
    defineStatusForStarship,
    defineStatusForCharacter,
} from '../components/Battleground/utils';
import { Status } from '../interfaces/Status';

describe('Battleground Utils - defineStatusForStarship', () => {
    it('Define draw', () => {
        contestantsStarshipMock.forEach(starshipMock =>
            expect(
                defineStatusForStarship(starshipMock, starshipMock),
            ).toStrictEqual([Status.DRAW, Status.DRAW]),
        );
    });

    it('Define correct winner and looser', () => {
        expect(
            defineStatusForStarship(
                contestantsStarshipMock[0],
                contestantsStarshipMock[1],
            ),
        ).toStrictEqual([Status.WINNER, Status.LOOSER]);

        expect(
            defineStatusForStarship(
                contestantsStarshipMock[1],
                contestantsStarshipMock[0],
            ),
        ).toStrictEqual([Status.LOOSER, Status.WINNER]);

        expect(
            defineStatusForStarship(
                contestantsStarshipMock[0],
                contestantsStarshipMock[2],
            ),
        ).toStrictEqual([Status.LOOSER, Status.WINNER]);

        expect(
            defineStatusForStarship(
                contestantsStarshipMock[2],
                contestantsStarshipMock[0],
            ),
        ).toStrictEqual([Status.WINNER, Status.LOOSER]);
    });
});

describe('Battleground Utils - defineStatusForCharacter', () => {
    it('Define draw', () => {
        contestantsCharactersMock.forEach(characterMock =>
            expect(
                defineStatusForCharacter(characterMock, characterMock),
            ).toStrictEqual([Status.DRAW, Status.DRAW]),
        );
    });

    it('Define correct winner and looser', () => {
        expect(
            defineStatusForCharacter(
                contestantsCharactersMock[0],
                contestantsCharactersMock[1],
            ),
        ).toStrictEqual([Status.WINNER, Status.LOOSER]);

        expect(
            defineStatusForCharacter(
                contestantsCharactersMock[1],
                contestantsCharactersMock[0],
            ),
        ).toStrictEqual([Status.LOOSER, Status.WINNER]);

        expect(
            defineStatusForCharacter(
                contestantsCharactersMock[0],
                contestantsCharactersMock[2],
            ),
        ).toStrictEqual([Status.WINNER, Status.LOOSER]);

        expect(
            defineStatusForCharacter(
                contestantsCharactersMock[2],
                contestantsCharactersMock[0],
            ),
        ).toStrictEqual([Status.LOOSER, Status.WINNER]);
    });
});

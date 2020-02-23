import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import DetailsTile from '../../components/DetailsTile/DetailsTile';
import { Starship } from '../../interfaces/Starship';
import { Character } from '../../interfaces/Character';
import { GameStatus } from '../../interfaces/GameStatus';
import { Status } from '../../interfaces/Status';
import { Challenger } from '../../interfaces/Challenger';
import { getRandomInteger } from '../../core/utils';
import { defineStatusForStarship, defineStatusForCharacter } from './utils';

const Battleground: React.FC<BattlegroundProps> = ({
    contestants,
}: BattlegroundProps) => {
    const { t } = useTranslation();

    const [gameStatus, setGameStatus] = useState<GameStatus>({
        playerOne: {
            name: null,
            status: null,
            mass: null,
            crew: null,
            score: 0,
        },
        playerTwo: {
            name: null,
            status: null,
            mass: null,
            crew: null,
            score: 0,
        },
    });

    const drawChallengers = (): Challenger[] => {
        const playerOne = getRandomInteger(contestants.length);
        const playerTwo = getRandomInteger(contestants.length);

        return [contestants[playerOne], contestants[playerTwo]];
    };

    const defineStatus = (
        firstChallenger: Challenger,
        secondChallenger: Challenger,
    ): Status[] => {
        if ((firstChallenger as Starship).crew) {
            return defineStatusForStarship(
                firstChallenger as Starship,
                secondChallenger as Starship,
            );
        }

        if ((firstChallenger as Character).mass) {
            return defineStatusForCharacter(
                firstChallenger as Character,
                secondChallenger as Character,
            );
        }
    };

    const prepareBattleground = (
        firstChallenger: Challenger,
        secondChallenger: Challenger,
    ): void => {
        const [statusPlayerOne, statusPlayerTwo] = defineStatus(
            firstChallenger,
            secondChallenger,
        );

        setGameStatus({
            playerOne: {
                name: firstChallenger.name,
                status: statusPlayerOne,
                mass: Number((firstChallenger as Character).mass),
                crew: Number((firstChallenger as Starship).crew),
                score:
                    statusPlayerOne !== Status.LOOSER
                        ? gameStatus.playerOne.score + 1
                        : gameStatus.playerOne.score,
            },
            playerTwo: {
                name: secondChallenger.name,
                status: statusPlayerTwo,
                mass: Number((secondChallenger as Character).mass),
                crew: Number((secondChallenger as Starship).crew),
                score:
                    statusPlayerTwo !== Status.LOOSER
                        ? gameStatus.playerTwo.score + 1
                        : gameStatus.playerTwo.score,
            },
        });
    };

    const startBattle = (): void => {
        const [firstChallenger, secondChallenger] = drawChallengers();

        prepareBattleground(firstChallenger, secondChallenger);
    };

    useEffect(() => {
        startBattle();
    }, [contestants]);

    return (
        <Grid xs={12} item container spacing={2} justify="center">
            <Grid container item xs={12} justify="center">
                <Typography variant="h3" data-test="score">
                    {gameStatus.playerOne.score} : {gameStatus.playerTwo.score}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <DetailsTile playerStatus={gameStatus.playerOne} />
            </Grid>
            <Grid item xs={4}>
                <DetailsTile playerStatus={gameStatus.playerTwo} />
            </Grid>
            <Grid container item xs={12} justify="center">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={startBattle}
                    data-test="play-again"
                >
                    {t('PLAY_AGAIN')}
                </Button>
            </Grid>
        </Grid>
    );
};

interface BattlegroundProps {
    contestants: Challenger[];
}

export default Battleground;

import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import DetailsTile from '../../components/DetailsTile/DetailsTile';
import { Starship } from '../../interfaces/Starship';
import { Character } from '../../interfaces/Character';

const Battleground: React.FC<BattlegroundProps> = ({
    contestants,
}: BattlegroundProps) => {
    const { t } = useTranslation();
    const [score, setScore] = useState<{
        playerOne: number;
        playerTwo: number;
    }>({ playerOne: 0, playerTwo: 0 });
    const [challengers, setChallengers] = useState<{
        first: Character | Starship;
        second: Character | Starship;
    }>({
        first: null,
        second: null,
    });

    const drawChallengers = (): void => {
        const playerOne = Math.floor(Math.random() * contestants.length);
        const playerTwo = Math.floor(Math.random() * contestants.length);

        setChallengers({
            first: contestants[playerOne],
            second: contestants[playerTwo],
        });
    };

    useEffect(() => {
        drawChallengers();
    }, [contestants]);

    useEffect(() => {
        if ((challengers.first as Starship)?.crew) {
            +(challengers.first as Starship)?.crew >
            +(challengers.second as Starship)?.crew
                ? setScore({ ...score, playerOne: score.playerOne + 1 })
                : setScore({ ...score, playerTwo: score.playerTwo + 1 });
        }

        if ((challengers.first as Character)?.mass) {
            +(challengers.first as Character)?.mass >
            +(challengers.second as Character)?.mass
                ? setScore({ ...score, playerOne: score.playerOne + 1 })
                : setScore({ ...score, playerTwo: score.playerTwo + 1 });
        }
    }, [challengers]);

    return (
        <Grid xs={12} item container spacing={2} justify="center">
            <Grid container item xs={12} justify="center">
                <Typography variant="h3">
                    {score.playerOne} : {score.playerTwo}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <DetailsTile contestant={challengers.first} />
            </Grid>
            <Grid item xs={4}>
                <DetailsTile contestant={challengers.second} />
            </Grid>
            <Grid container item xs={12} justify="center">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={drawChallengers}
                >
                    {t('PLAY_AGAIN')}
                </Button>
            </Grid>
        </Grid>
    );
};

interface BattlegroundProps {
    contestants: Starship[] | Character[];
}

export default Battleground;

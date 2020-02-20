import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

import Battleground from '../../components/Battleground/Battleground';
import { useFetch } from '../../hooks/useFetch';
import { Character } from '../../interfaces/Character';
import { ApiUrls } from '../../core/urls/ApiUrls';

const CharactersArenaView: React.FC = () => {
    const characters = useFetch<Character>(ApiUrls.CHARACTERS);
    console.log({ characters });

    return (
        <Grid container direction="column">
            <Grid item xs={12}>
                <Box pt={6} pb={6}>
                    <Typography align="center" variant="h2">
                        Characters Arena
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Battleground />
            </Grid>
        </Grid>
    );
};

export default CharactersArenaView;

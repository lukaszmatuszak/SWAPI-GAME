import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

import Battleground from '../../components/Battleground/Battleground';

const CharactersArenaView: React.FC = () => (
    <Grid container direction="column">
        <Grid item xs={12}>
            <Box pt={4} pb={4}>
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

export default CharactersArenaView;

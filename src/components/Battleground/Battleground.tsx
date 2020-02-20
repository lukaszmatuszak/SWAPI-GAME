import React from 'react';
import { Grid } from '@material-ui/core';

import DetailsTile from '../../components/DetailsTile/DetailsTile';

const Battleground: React.FC = () => (
    <Grid xs={12} item container spacing={2} justify="center">
        <Grid item xs={4}>
            <DetailsTile />
        </Grid>
        <Grid item xs={4}>
            <DetailsTile />
        </Grid>
    </Grid>
);

export default Battleground;

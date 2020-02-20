import React from 'react';
import { Grid } from '@material-ui/core';

import DetailsTile from '../../components/DetailsTile/DetailsTile';
import { Starship } from '../../interfaces/Starship';
import { Character } from '../../interfaces/Character';

const Battleground: React.FC<BattlegroundProps> = ({
    contestants,
}: BattlegroundProps) => (
    <Grid xs={12} item container spacing={2} justify="center">
        <Grid item xs={4}>
            <DetailsTile contestant={contestants?.[0]} />
        </Grid>
        <Grid item xs={4}>
            <DetailsTile contestant={contestants?.[1]} />
        </Grid>
    </Grid>
);

interface BattlegroundProps {
    contestants: Starship[] | Character[];
}

export default Battleground;

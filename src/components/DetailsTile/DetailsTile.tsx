import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';

import { Starship } from '../../interfaces/Starship';
import { Character } from '../../interfaces/Character';

const DetailsTile: React.FC<DetailsTileProps> = ({
    contestant,
}: DetailsTileProps) => (
    <Card>
        <CardContent>
            <Grid container alignItems="center" direction="column">
                <Grid item xs={6}>
                    {contestant?.name}
                </Grid>
                <Grid item xs={6}>
                    {(contestant as Starship)?.crew ||
                        (contestant as Character)?.mass}
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

interface DetailsTileProps {
    contestant: Starship | Character;
}

export default DetailsTile;

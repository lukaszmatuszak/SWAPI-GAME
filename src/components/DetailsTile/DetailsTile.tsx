import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';

const DetailsTile: React.FC = () => (
    <Card>
        <CardContent>
            <Grid container alignItems="center">
                <Grid item xs={6}>
                    name
                </Grid>
                <Grid item xs={6}>
                    details
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default DetailsTile;

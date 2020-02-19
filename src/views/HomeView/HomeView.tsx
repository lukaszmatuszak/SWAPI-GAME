import React from 'react';
import { Grid } from '@material-ui/core';

import PageGrid from '../../components/PageGrid/PageGrid';

const HomeView: React.FC = () => (
    <PageGrid container direction="row" justify="center" alignItems="center">
        <Grid item xs={2}>
            placeholder
        </Grid>
        <Grid item xs={2}>
            placeholder
        </Grid>
    </PageGrid>
);

export default HomeView;

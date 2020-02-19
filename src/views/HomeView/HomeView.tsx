import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { RESOURCES } from './resources';
import ResourceTile from '../../components/ResourceTile/ResourceTile';

const HomeView: React.FC = () => (
    <Grid container>
        <Grid xs={12} item container spacing={2} justify="center">
            <Box pb={2} pt={2}>
                <Typography variant="h2">Choose Your Weapon</Typography>
            </Box>
        </Grid>
        <Grid xs={12} item container spacing={2} justify="center">
            {RESOURCES.map(resource => (
                <Grid key={resource.iconAlt} item xs={4}>
                    <Link to={resource.redirect}>
                        <ResourceTile resource={resource} />
                    </Link>
                </Grid>
            ))}
        </Grid>
    </Grid>
);

export default HomeView;

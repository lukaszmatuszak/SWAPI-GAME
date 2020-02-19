import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { RESOURCES } from './resources';
import ResourceTile from '../../components/ResourceTile/ResourceTile';

const HomeView: React.FC = () => (
    <>
        <Box pb={2} pt={2}>
            <Typography align="center" variant="h2">
                Choose Your Weapon
            </Typography>
        </Box>
        <Grid xs={12} container spacing={2} justify="center">
            {RESOURCES.map(resource => (
                <Grid key={resource.iconAlt} item xs={4}>
                    <Link to={resource.redirect}>
                        <ResourceTile resource={resource} />
                    </Link>
                </Grid>
            ))}
        </Grid>
    </>
);

export default HomeView;

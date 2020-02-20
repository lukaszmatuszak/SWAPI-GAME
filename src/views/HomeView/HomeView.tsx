import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { RESOURCES } from './resources';
import ResourceTile from '../../components/ResourceTile/ResourceTile';

const HomeView: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Grid container>
            <Grid xs={12} item>
                <Box pb={6} pt={6}>
                    <Typography align="center" variant="h2">
                        {t('CHOOSE_GAME_MODE')}
                    </Typography>
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
};

export default HomeView;

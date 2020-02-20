import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

import Battleground from '../../components/Battleground/Battleground';
import { useFetch } from '../../hooks/useFetch';
import { Starship } from '../../interfaces/Starship';
import { ApiUrls } from '../../core/urls/ApiUrls';
import { useTranslation } from 'react-i18next';

const StarshipsArenaView: React.FC = () => {
    const starships = useFetch<Starship>(ApiUrls.STARSHIPS);
    const { t } = useTranslation();

    return (
        <Grid container direction="column">
            <Grid item xs={12}>
                <Box pt={6} pb={6}>
                    <Typography align="center" variant="h2">
                        {t('STARSHIPS_ARENA')}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Battleground />
            </Grid>
        </Grid>
    );
};

export default StarshipsArenaView;

import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import Battleground from '../../components/Battleground/Battleground';
import { useFetch } from '../../hooks/useFetch';
import { Character } from '../../interfaces/Character';
import { ApiUrls } from '../../core/urls/ApiUrls';
import Spinner from '../../components/Spinner/Spinner';

const CharactersArenaView: React.FC = () => {
    const [characters, isLoading] = useFetch<Character>(ApiUrls.CHARACTERS);
    const { t } = useTranslation();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Grid container direction="column">
            <Grid item xs={12}>
                <Box pt={6} pb={6}>
                    <Typography align="center" variant="h2">
                        {t('CHARACTERS_ARENA')}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Battleground
                    contestants={characters.filter(
                        character => character.mass !== 'unknown',
                    )}
                />
            </Grid>
        </Grid>
    );
};

export default CharactersArenaView;

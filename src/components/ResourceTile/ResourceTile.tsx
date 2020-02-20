import React from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { Resource } from '../../views/HomeView/resources';

const ResourceTile: React.FC<ResourceProps> = ({ resource }: ResourceProps) => {
    const { t } = useTranslation();

    return (
        <Card>
            <CardContent>
                <Grid container alignItems="center">
                    <img
                        width="40%"
                        src={resource.iconSrc}
                        alt={resource.iconAlt}
                    />
                    <Typography variant="h3">{t(resource.title)}</Typography>
                </Grid>
            </CardContent>
        </Card>
    );
};

interface ResourceProps {
    resource: Resource;
}

export default ResourceTile;

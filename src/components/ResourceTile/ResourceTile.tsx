import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import { Resource } from '../../views/HomeView/resources';

const ResourceTile: React.FC<ResourceProps> = ({ resource }: ResourceProps) => (
    <Card>
        <CardContent>
            <img width="100%" src={resource.iconSrc} alt={resource.iconAlt} />
            <Typography align="center" variant="h3">
                {resource.title}
            </Typography>
        </CardContent>
    </Card>
);

interface ResourceProps {
    resource: Resource;
}

export default ResourceTile;

import React from 'react';
import { Card, CardContent, Grid, Typography, styled } from '@material-ui/core';

import { GameStatusPlayer } from '../../interfaces/GameStatusPlayer';
import { Status } from '../../interfaces/Status';

const colors = {
    draw: '#b3b300',
    looser: '#990000',
    winner: '#006400',
};

const FullWidthGrid = styled(Grid)({
    width: '100%',
});

const StatusTypography = styled(Typography)(
    ({ status }: { status: Status }) => ({
        textTransform: 'uppercase',
        color: colors[status],
    }),
);

const RotatedImg = styled('img')({
    transform: 'rotate(45deg)',
});

const DetailsTile: React.FC<DetailsTileProps> = ({
    playerStatus,
}: DetailsTileProps) => (
    <Card>
        <CardContent>
            <Grid container alignItems="center" direction="column">
                <Grid item xs={12}>
                    <StatusTypography
                        variant="h5"
                        status={playerStatus.status}
                        data-test="status"
                    >
                        {playerStatus.status}
                    </StatusTypography>
                </Grid>
                <FullWidthGrid item xs={6}>
                    {playerStatus.crew ? (
                        <RotatedImg
                            width="100%"
                            src="falcon.svg"
                            alt="falcon"
                        />
                    ) : (
                        <img width="100%" src="vader.svg" alt="vader" />
                    )}
                </FullWidthGrid>
                <Grid item xs={6}>
                    <Typography data-test="details-name">
                        {playerStatus?.name}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        data-test={`details-${
                            playerStatus.crew ? 'crew' : 'mass'
                        }`}
                    >
                        {playerStatus.crew
                            ? `Crew: ${playerStatus.crew}`
                            : `Mass: ${playerStatus.mass}`}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

interface DetailsTileProps {
    playerStatus: GameStatusPlayer;
}

export default DetailsTile;

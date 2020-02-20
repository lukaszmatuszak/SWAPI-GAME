import React from 'react';
import { CircularProgress, Box } from '@material-ui/core';

const Spinner: React.FC = () => (
    <Box
        display="flex"
        height="calc(100vh - 48px)"
        alignItems="center"
        justifyContent="center"
    >
        <CircularProgress size={70} />
    </Box>
);

export default Spinner;

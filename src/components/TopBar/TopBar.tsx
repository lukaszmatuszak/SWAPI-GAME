import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const TopBar: React.FC = () => (
    <AppBar position="static">
        <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
                SWAPI Game
            </Typography>
        </Toolbar>
    </AppBar>
);

export default TopBar;

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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

import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';

import ChangeLanguageMenu from '../ChangeLanguageMenu/ChangeLanguageMenu';

const TopBar: React.FC = () => (
    <AppBar position="static">
        <Toolbar variant="dense">
            <Box flexGrow={1}>
                <Typography variant="h6" color="inherit">
                    SWAPI Game
                </Typography>
            </Box>
            <ChangeLanguageMenu />
        </Toolbar>
    </AppBar>
);

export default TopBar;

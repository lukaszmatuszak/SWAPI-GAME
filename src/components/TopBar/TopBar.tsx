import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ChangeLanguageMenu from '../ChangeLanguageMenu/ChangeLanguageMenu';

const TopBar: React.FC = () => (
    <AppBar position="static">
        <Toolbar variant="dense">
            <Box flexGrow={1}>
                <Link to="/">
                    <Typography variant="h6" color="inherit">
                        SWAPI Game
                    </Typography>
                </Link>
            </Box>
            <ChangeLanguageMenu />
        </Toolbar>
    </AppBar>
);

export default TopBar;

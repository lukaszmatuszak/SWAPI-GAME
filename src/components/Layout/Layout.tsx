import React from 'react';
import { Grid } from '@material-ui/core';

import TopBar from './TopBar/TopBar';

const Layout: React.FC = ({ children }) => {
    return (
        <Grid container>
            <TopBar />
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    );
};

export default Layout;

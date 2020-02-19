import React from 'react';
import { Box } from '@material-ui/core';

import TopBar from '../TopBar/TopBar';

const Layout: React.FC = ({ children }) => {
    return (
        <Box height="100vh">
            <TopBar />
            {children}
        </Box>
    );
};

export default Layout;

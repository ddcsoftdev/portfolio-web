import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position="static" color="default" elevation={0}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    My Portfolio
                </Typography>
                {/* Add additional navigation items as needed */}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;

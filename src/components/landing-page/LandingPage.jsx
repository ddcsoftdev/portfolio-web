import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme.jsx';
import PortfolioGrid from "../PortfolioGrid.jsx";
import {Container, setRef} from "@mui/material";
import NavBar from "../NavBar.jsx";
import {useEffect, useRef, useState} from "react";
import MainHeader from "../MainHeader.jsx";
import FilterBar from "../FilterBar.jsx";

const defaultTheme = createTheme({});

function ToggleCustomTheme({showCustomTheme, toggleCustomTheme}) {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100dvw',
                position: 'fixed',
                bottom: 24,
            }}
        >
            <ToggleButtonGroup
                color="primary"
                exclusive
                value={showCustomTheme}
                onChange={toggleCustomTheme}
                aria-label="Platform"
                sx={{
                    backgroundColor: 'background.default',
                    '& .Mui-selected': {
                        pointerEvents: 'none',
                    },
                }}
            >
                <ToggleButton value>
                    <AutoAwesomeRoundedIcon sx={{fontSize: '20px', mr: 1}}/>
                    Data here
                </ToggleButton>
                <ToggleButton value={false}>
                    For Projects
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
}

ToggleCustomTheme.propTypes = {
    showCustomTheme: PropTypes.shape({
        valueOf: PropTypes.func.isRequired,
    }).isRequired,
    toggleCustomTheme: PropTypes.func.isRequired,
};

export default function LandingPage({projects}) {

    LandingPage.propTypes = {
        projects: PropTypes.array
    }
    const [mode, setMode] = React.useState('dark');
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const LPtheme = createTheme(getLPTheme(mode));

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const toggleCustomTheme = () => {
        setShowCustomTheme((prev) => !prev);
    };

    /* Handle window size */
    const [width, setWidth] = useState(window.innerWidth);
    //get inner width on render
    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', () => setWidth(window.innerWidth));
    }, []);


    return (
        <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
            <CssBaseline/>
            <NavBar mode={mode} toggleColorMode={toggleColorMode}/>
            <div id={"home"}/>
            <MainHeader width={width} id='home'/>
            <Box width={width} sx={{bgcolor: 'background.default'}}>

                <Container sx={{py: 8}} maxWidth="md">
                    <div id={"projects"}/>
                    <FilterBar/>
                    <div style={{ height: '3rem' }}></div>
                    {/* End hero unit */}
                    <PortfolioGrid projects={projects}/>
                </Container>
                {/*
        <LogoCollection />
          <Features />
        <Divider />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
          */}

                <Footer/>
            </Box>
            <ToggleCustomTheme
                showCustomTheme={showCustomTheme}
                toggleCustomTheme={toggleCustomTheme}
            />
        </ThemeProvider>
    );
}

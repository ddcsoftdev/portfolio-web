import React, {useEffect, useRef, useState} from 'react';
import { CssBaseline, Container } from '@mui/material';
import NavBar from "./components/NavBar.jsx";
import PortfolioGrid from "./components/PortfolioGrid.jsx";
import LandingPage from "./components/landing-page/LandingPage.jsx";
import getProjects from "./services/client.jsx";

const App = () => {


    return (
        <>
            <LandingPage></LandingPage>
            <CssBaseline />
        </>
    );
}

export default App;

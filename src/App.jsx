import React, {useRef} from 'react';
import { CssBaseline, Container } from '@mui/material';
import NavBar from "./components/NavBar.jsx";
import PortfolioGrid from "./components/PortfolioGrid.jsx";
import LandingPage from "./components/landing-page/LandingPage.jsx";

const App = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'This is a brief description of Project 1.',
            tags: ['React', 'Node.js'],
            technologyStack: ['MongoDB', 'Express', 'React']
        },
        {
            title: 'Project 2',
            description: 'This is a brief description of Project 1.',
            tags: ['React', 'Node.js'],
            technologyStack: ['MongoDB', 'Express', 'React']
        },
        {
            title: 'Project 3',
            description: 'This is a brief description of Project 1.',
            tags: ['React', 'Node.js'],
            technologyStack: ['MongoDB', 'Express', 'React']
        },

        ]

    return (
        <>
            <LandingPage></LandingPage>
            <CssBaseline />
        </>
    );
}

export default App;

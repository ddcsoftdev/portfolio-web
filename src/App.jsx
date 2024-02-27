import React, {useEffect, useRef, useState} from 'react';
import { CssBaseline, Container } from '@mui/material';
import NavBar from "./components/NavBar.jsx";
import PortfolioGrid from "./components/PortfolioGrid.jsx";
import LandingPage from "./components/landing-page/LandingPage.jsx";
import getProjects from "./services/client.jsx";

const App = () => {
    //Declaration of States
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //Fetching Data
    const fetchProjects = () => {
        setLoading(true);
        setError(null); // Reset error state before fetching
        getProjects().then(projects => {
            // Assuming the actual projects list is directly at res.data; adjust as needed
            setProjects(projects || []); // Adjust according to actual data structure
        })
            .catch(err => {
                console.log(err);
                setError(err.message || "An error occurred"); // Update error state on error
            })
            .finally(() => {
                setLoading(false);
                console.log("finished");
            });
    };

    //fetch data on loading component
    useEffect(() => {
        fetchProjects();
    }, [])

    return (
        <>
            <LandingPage projects={projects}></LandingPage>
            <CssBaseline />
        </>
    );
}

export default App;

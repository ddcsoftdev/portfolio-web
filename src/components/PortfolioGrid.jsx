import React, {useEffect, useRef, useState} from 'react';
import Grid from '@mui/material/Grid';
import PortfolioCard from "./PortfolioCard.jsx";
import PropTypes from "prop-types";
import "/src/index.css"
import getProjects from "../services/client.jsx";
import {useActiveTags} from "./ProjectsWrapper.jsx";

const ProjectGrid = () => {

    //Declaration of States
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {activeTags, updateActiveTags} = useActiveTags();

    //Fetching Data
    const fetchProjects = (tags) => {
        setLoading(true);
        setError(null); // Reset error state before fetching
        getProjects(tags).then(projects => {
            // Assuming the actual projects list is directly at res.data; adjust as needed
            setProjects(projects || []); // Adjust according to actual data structure
        })
            .catch(err => {
                console.log(err);
                setError(err.message || "An error occurred"); // Update error state on error
            })
            .finally(() => {
                setLoading(false);
            });
    };

    //fetch data on loading component
    useEffect(() => {
        fetchProjects(activeTags);
    }, [activeTags])

    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid overflow-x-auto snap-x snap-mandatory" style={{height: "640px", width: "1000px" , scrollPaddingLeft: "1rem"}}>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item key={index} xs={8} sm={6} md={6}>
                        <PortfolioCard project = {project} />
                    </Grid>
                ))}
            </Grid>
            </div>
        </div>
    );
};

export default ProjectGrid;

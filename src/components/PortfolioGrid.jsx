import React from 'react';
import Grid from '@mui/material/Grid';
import PortfolioCard from "./PortfolioCard.jsx";

const ProjectGrid = ({ projects }) => {
    return (
        <Grid container spacing={4}>
            {projects.map((project, index) => (
                <Grid item key={index} xs={8} sm={6} md={6}>
                    <PortfolioCard {...project} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProjectGrid;

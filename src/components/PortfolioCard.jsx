import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const PortfolioCard = ({ title, description, tags, technologyStack }) => {
    // Placeholder for the Three.js component integration
    // const ThreeDModel = <YourThreeJSComponent />;

    return (
        <Card>
            <CardActionArea>
                {/* Replace with Three.js 3D model */}
                {/* {ThreeDModel} */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    {/* Display tags and technology stack */}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default PortfolioCard;

import React, {useEffect, useRef, useState} from 'react';
import {Button, Card, CardActionArea, CardContent, Typography} from '@mui/material';
import My3DModel from "./My3DModel.jsx";
import PropTypes from "prop-types";

const PortfolioCard = ({ title, description, tags, technologyStack}) => {
    // Placeholder for the Three.js component integration
    // const ThreeDModel = <YourThreeJSComponent />;
    const domRef = useRef(null)
    const [width, setWidth] = useState(408);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                setWidth(entry.contentRect.width);
            }
        });

        if (domRef.current) {
            resizeObserver.observe(domRef.current);
        }

        return () => resizeObserver && resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        console.log("Width: ", width)
    }, [width])


    return (
        <Card ref={domRef}>
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
                    <Button>Repositry</Button>
                </CardContent>
                <My3DModel boxWidth={width}/>
            </CardActionArea>
        </Card>
    );
};

export default PortfolioCard;

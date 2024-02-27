import React, {useEffect, useRef, useState} from 'react';
import {Button, Card, CardActionArea, CardContent, Typography} from '@mui/material';
import My3DModel from "./My3DModel.jsx";
import PropTypes from "prop-types";
import Link from "@mui/material/Link";

const PortfolioCard = ({project}) => {

    PortfolioCard.propTypes ={
        project: PropTypes.object
    }
    // Placeholder for the Three.js component integration
    // const ThreeDModel = <YourThreeJSComponent />;
    const domRef = useRef(null)
    const [width, setWidth] = useState(408);

    console.log(project);
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
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Category: {project.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {project.description.text}
                    </Typography>
                </CardContent>
                <My3DModel boxWidth={width}/>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {project.stack}
                    </Typography>
                    <Button target={project.title} href={project.repository}>Repository</Button>

                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default PortfolioCard;

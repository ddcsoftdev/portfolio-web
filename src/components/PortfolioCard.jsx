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
    const [height, setHeight] = useState(408);
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                setWidth(entry.contentRect.width,
                setHeight(entry.contentRect.height));
            }
        });

        if (domRef.current) {
            resizeObserver.observe(domRef.current);
        }

        return () => resizeObserver && resizeObserver.disconnect();
    }, []);

    useEffect(() => {
    }, [width, height])

    //rendering only when in viewport to make efficient
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {if (entry.isIntersecting) setIsVisible(entry.isIntersecting)});
        });

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current);
            }
        };
    }, []);

    return (
        <Card ref={domRef} style={{width: "84%"}} onClick={() => { window.open(project.repository, project.title, 'noopener,noreferrer') }}>
            <CardActionArea>
                {/* Replace with Three.js 3D model */}
                {/* {ThreeDModel} */}

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {project.projectName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Category: {project.projectType}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Description: {project.description.text}
                    </Typography>
                </CardContent>
                {isVisible && (
                <My3DModel width={width} height={height / 2}/>
                    )}
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Language: {project.language}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Technologies: {project.technology}
                    </Typography>
                    <Button target={project.title} href={project.repository}>Repository</Button>

                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default PortfolioCard;

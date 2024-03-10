import React, {useRef, useEffect, useState} from 'react';
import videoSrc from "../assets/videos/temo-vid.mp4"
import PropTypes from "prop-types";
import {Application} from "@splinetool/runtime";


const My3DModel = ({width, height}) => {

    My3DModel.propTypes = {
        width: PropTypes.oneOfType([
            PropTypes.number,
        ]),
        height: PropTypes.oneOfType([
            PropTypes.number,
        ])};

    const [isLoading, setIsLoading] = useState(true); // Assume video is loading initially

    // Adjusted to control video loading
    useEffect(() => {
        const handleVideoLoad = () => setIsLoading(false);

        return () => {
            // Cleanup if necessary
        };
    }, [videoSrc]); // Re-run effect if videoSrc changes

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            <video
                width={width}
                height={height}
                autoPlay // Start playing automatically
                muted // Mute the video to ensure autoplay on most browsers
                loop // Loop the video infinitely
                playsInline // Helps with autoplay on iOS devices
                onCanPlayThrough={() => setIsLoading(false)} // Hide loading once video can play through
                style={{ display: isLoading ? 'none' : 'block' }}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};
export default My3DModel;

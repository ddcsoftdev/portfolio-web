import { Application } from '@splinetool/runtime';
import {useEffect, useRef} from "react";
import PropTypes from "prop-types";

const Web3DModel = ({url, width, height, className}) => {

    Web3DModel.propTypes = {
        url: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        className: PropTypes.string,
    }
    
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const app = new Application(canvas);
        app.load(url);
    }, [url]);

    //https://app.spline.design/@paradoxrenders
    return <canvas className={className} width={width} height={height} ref={canvasRef} id="canvas3d" />;
};

export default Web3DModel;

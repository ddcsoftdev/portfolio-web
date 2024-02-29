import './MovingHeaderImage.css';
import PropTypes from "prop-types"; // Make sure this path is correct
import "/src/index.css"
const MovingHeaderImage = ({width, height}) => {

    MovingHeaderImage.propTypes = {
        width: PropTypes.number,
        height: PropTypes.number
    }

    return (
        <div style={{position: 'relative', width: 'fit-content', height: 'fit-content'}}>
            <img
                src="src/assets/header.png"
                alt=""
                width={width}
                height={height}
            />
            <img className="logo" src="src/assets/header_logo.png" alt="Foreground"
                 style={{position: 'absolute', top: '100px', left: '1000px', width: '25%'}}/>
        </div>
    );
}

export default MovingHeaderImage;

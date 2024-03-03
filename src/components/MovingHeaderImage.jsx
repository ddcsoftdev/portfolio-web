import './MovingHeaderImage.css';
import PropTypes from "prop-types"; // Make sure this path is correct
import "/src/index.css"
import background from "../assets/header.png"
import blub from "../assets/header_logo.png"

const MovingHeaderImage = ({width, height}) => {

    MovingHeaderImage.propTypes = {
        width: PropTypes.number,
        height: PropTypes.number
    }

    return (
        <div style={{position: 'relative', width: 'fit-content', height: 'fit-content'}}>
            <img
                src={background}
                alt="background"
                width={width}
                height={height}
            />
            <img className="logo" src={blub} alt="blub"/>
        </div>
    );
}

export default MovingHeaderImage;

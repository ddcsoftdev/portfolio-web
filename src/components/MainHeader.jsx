import MovingHeaderImage from "./MovingHeaderImage.jsx";
import PropTypes from "prop-types";
import "/src/index.css"

export default function MainHeader({width, height}) {
    MainHeader.propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,

    }
    return (
        <MovingHeaderImage width={width} height={height}/>
    )
}

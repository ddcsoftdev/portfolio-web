import MovingHeaderImage from "./MovingHeaderImage.jsx";
import PropTypes from "prop-types";
import "/src/index.css"

export default function MainHeader({width}) {
    MainHeader.propTypes = {
        width: PropTypes.number
    }
    return (
        <MovingHeaderImage width={width}/>
    )
}

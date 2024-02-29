import PropTypes from "prop-types";

const AboutSection = ({width, height})=>{
    AboutSection.propTypes = {
        width: PropTypes.number,
        height: PropTypes.number
    }

    return (
        <img
            src="src/assets/aboutbg.png"
            alt=""
            width={width}
            height={height}
        />
    );
}

export default  AboutSection;
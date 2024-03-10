import './MovingHeaderImage.css';
import PropTypes from "prop-types"; // Make sure this path is correct
import "/src/index.css"
import background from "../assets/header/header-bg.png"
import blub from "../assets/header/header_logo.png"
import smallLogo from "../assets/header/header-mini-logo.png"
import smallLogoText from "../assets/header/ddc-software-header.png"
import diegoDemarco from "../assets/header/diegodemarco-header.png"
import portFolio from "../assets/header/portfolio-header.png"
import Web3DModel from "./Web3DModel.jsx";

const MovingHeaderImage = ({width, height}) => {

    MovingHeaderImage.propTypes = {
        width: PropTypes.number,
        height: PropTypes.number
    }

    return (
        <div style={{position: 'relative', width: 'fit-content', height: 'fit-content'}}>
            <img
                className={'background'}
                src={background}
                alt="background"
                width={width}
                height={height}
            />
            <Web3DModel className={"logo"} width={"5%"} height={"5%"}  url={'https://prod.spline.design/RFTtUwYeBB0-1o6p/scene.splinecode'}/>
            <img className="smallLogo" src={smallLogo} alt="logo"/>
            <img className="smallLogoText" src={smallLogoText} alt="logo"/>
            <img className="title" src={diegoDemarco} alt="title"/>
            <img className="title2" src={portFolio} alt="title2"/>
        </div>
    );
}

export default MovingHeaderImage;

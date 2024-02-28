import './MovingHeaderImage.css'; // Make sure this path is correct

const MovingHeaderImage = ({width, height}) => (
    <div style={{ position: 'relative', width: 'fit-content' }}>
    <img
        src="src/assets/header.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        width={width}
        height={height}
    />
        <img className ="logo" src="src/assets/header_logo.png" alt="Foreground" style={{ position: 'absolute', top: '100px', left: '1000px', width: '25%' }} />
    </div>
);

export default MovingHeaderImage;

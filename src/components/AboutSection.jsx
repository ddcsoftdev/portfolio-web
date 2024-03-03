import PropTypes from "prop-types";
import "./AboutSection.css"
import arr1 from "../assets/about/about_arr1.png"
import arr2 from "../assets/about/about_arr2.png"
import arr3 from "../assets/about/about_arr3.png"
import arr4 from "../assets/about/about_arr4.png"
import arr5 from "../assets/about/about_arr5.png"
import arr6 from "../assets/about/about_arr6.png"
import {useEffect, useRef} from "react";


const AboutSection = ({width, height})=>{
    AboutSection.propTypes = {
        width: PropTypes.number,
        height: PropTypes.number
    }
        const selfRef = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                // The callback will execute when the target meets a threshold specified for the IntersectionObserver

                entries.forEach(entry => {
                    // If the element is in the viewport, add the animation

                    if (entry.isIntersecting) {

                        const arrows = entry.target.querySelectorAll('.arrow');
                        arrows.forEach((arrow, index) => arrow.classList.add(`move-animation-${index + 1}`));
                    } else {
                        const arrows = entry.target.querySelectorAll('.arrow');
                        arrows.forEach((arrow, index) => arrow.classList.remove(`move-animation-${index + 1}`));
                    }

                });
            }, {
                root: null, // The viewport
                rootMargin: '0px',
                threshold: 0.3 // Trigger when 100% of the element is visible in the viewport
            });

            if (selfRef.current) {
                observer.observe(selfRef.current);
            }

            // Clean up the observer on component unmount
            return () => {
                if (selfRef.current) {
                    observer.unobserve(selfRef.current);
                }
            };
        }, []);

    return (
        <div className={"bg"} ref={selfRef} style={{width: `${width}px`, height: `${height}px`} }>
            <img className={"arrow one"} src={arr1} alt="arr1"/>
            <img className={"arrow two"} src={arr2} alt="arr2"/>
            <img className={"arrow three"} src={arr3} alt="arr3"/>
            <img className={"arrow four"} src={arr4} alt="arr4"/>
            <img className={"arrow five"} src={arr5} alt="arr5"/>
            <img className={"arrow six"} src={arr6} alt="arr6"/>
        </div>

    );
}

export default  AboutSection;
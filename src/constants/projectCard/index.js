import React, { useState } from "react";
import style from "./style.scss";

/* Animations */
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const ProjectCard = ({ title, tecnology, img, onClick }) => {
    const [cardHover,setCardHover] = useState("none");

    const onHoverEnter = () => {
        setCardHover("flex");
    }

    const onHoverOut = () => {
        setCardHover("none");
    }

    return(
        <AnimationOnScroll animateIn="animate__fadeIn">
            <div className="cardContainer" onMouseOver={onHoverEnter} onMouseOut={onHoverOut} onClick={onClick}>
                <div className="cardImgContainer" style={{ backgroundImage: `url(${img})` }}>
                    <div className="cardHoverContainer" style={{ display: cardHover }}>
                        <h2>{title}</h2>
                        <p>{tecnology}</p>
                    </div> 
                </div>
            </div>
        </AnimationOnScroll>
    );
}

export default ProjectCard;
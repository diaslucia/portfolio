import style from "./style.scss";
import { useState } from "react";

const ProjectCard = ({ title, tecnology, img, onClick }) => {
    const [cardHover,setCardHover] = useState("none");

    const onHoverEnter = () => {
        setCardHover("flex");
    }

    const onHoverOut = () => {
        setCardHover("none");
    }

    return(
        <div className="cardContainer" onMouseOver={onHoverEnter} onMouseOut={onHoverOut} onClick={onClick}>
            <div className="cardImgContainer" style={{ backgroundImage: `url(${img})` }}>
                <div className="cardHoverContainer" style={{ display: cardHover }}>
                    <h2>{title}</h2>
                    <p>{tecnology}</p>
                </div> 
            </div>
        </div>
    );
}

export default ProjectCard;
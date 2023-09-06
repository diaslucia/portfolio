import React, { useState } from "react";
import "./style.scss";

/* Animations */
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

/* Scroll */
import { Link } from "react-scroll";

const ProjectCard = ({ title, tecnology, img, onClick }) => {
  const [cardHover, setCardHover] = useState("none");

  return (
    <Link activeClass="active" to="projects" spy={true} smooth={true}>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        offset={50}
        animateOnce={true}
      >
        <div
          className="cardContainer"
          onMouseOver={() => setCardHover("flex")}
          onMouseOut={() => setCardHover("none")}
          onClick={onClick}
        >
          <div
            className="cardImgContainer"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="cardHoverContainer" style={{ display: cardHover }}>
              <h2>{title}</h2>
              <p>{tecnology}</p>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </Link>
  );
};

export default ProjectCard;

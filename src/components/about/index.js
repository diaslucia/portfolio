import React, { useState } from "react";
import style from "./style.scss";

/* Img */
import me from "../../assets/me.JPG";

/* Animation */
import { CSSTransition } from "react-transition-group";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

/* Components */
import Button from "../../constants/button/index";
import Border from "../../constants/border/index";
import AboutMore from "../aboutMore/index";
import AboutLess from "../aboutLess/index";

const About = () => {
    const [showMore, setShowMore] = useState(false);

    return(
        <div className="aboutContainer" id="about">

            <div className="aboutImgContainer">
                <Border>
                    <img src={me}/>
                </Border>
            </div>

            <div className="aboutInfoContainer">

                <div className="aboutTitleContainer">
                    <AnimationOnScroll animateIn="animate__slideInDown">
                        <h1 className="aboutTitle">Sobre mi</h1>
                    </AnimationOnScroll>
                </div>

                <CSSTransition in={showMore} timeout={500} classNames="aboutMore">
                {showMore ?
                <AboutMore/>
                :
                <AboutLess/>
                }
                </CSSTransition>

                <div className="aboutButtonContainer">
                    {showMore ? 
                    <Button title="Leer menos" onClick={() => setShowMore(false)}/>
                    :
                    <Button title="Leer más" onClick={() => setShowMore(true)}/>
                    }
                </div>

            </div>

        </div>
    );
}

export default About;
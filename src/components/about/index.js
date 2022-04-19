import React, { useState } from "react";
import style from "./style.scss";

/* Img */
import me from "../../assets/me.JPG";

/* Animation */
import { CSSTransition } from "react-transition-group";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

/* Img */
import me1 from "../../assets/me1.png";
import me2 from "../../assets/me2.png";
import me3 from "../../assets/me3.png";
import me4 from "../../assets/me4.png";
import me5 from "../../assets/me5.png";
import me6 from "../../assets/me6.png";

/* Components */
import Button from "../../constants/button/index";
import Border from "../../constants/border/index";
import AboutMore from "../aboutMore/index";
import AboutLess from "../aboutLess/index";

/* Translations */
import { useTranslation } from "react-i18next"

const About = () => {
    const [showMore, setShowMore] = useState(false);
    const [t] = useTranslation("global");

    return(
        <div className="aboutContainer" id="about">

            <div className="aboutInnerContainer">
                <div className="aboutImgContainer">
                    <Border>
                        <img src={me}/>
                    </Border>
                </div>

                <div className="aboutInfoContainer">

                    <div className="aboutTitleContainer">
                        <AnimationOnScroll animateIn="animate__slideInDown" animateOnce={true}>
                            <h1 className="aboutTitle">{t("about.title")}</h1>
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
                        <Button title={t("about.less")} onClick={() => setShowMore(false)}/>
                        :
                        <Button title={t("about.more")} onClick={() => setShowMore(true)}/>
                        }
                    </div>

                </div>
            </div>
            

            <div className="aboutLogosContainer">
                <AnimationOnScroll animateIn="animate__zoomIn" delay={50} animateOnce={true} offset={50}>
                    <img src={me1} alt="icono cat gato"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={100} animateOnce={true} offset={50}>
                    <img src={me2} alt="icono vegan"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={150} animateOnce={true} offset={50}>
                    <img src={me3} alt="icono rollerblades"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={200} animateOnce={true} offset={50}>
                    <img src={me4} alt="icono pc"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={250} animateOnce={true} offset={50}>
                    <img src={me5} alt="icono books libros"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={300} animateOnce={true} offset={50}>
                    <img src={me6} alt="icono luggage maleta"/>
                </AnimationOnScroll>
            </div>

        </div>
    );
}

export default About;
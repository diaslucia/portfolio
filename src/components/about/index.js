import React, { useState } from "react";
import style from "./style.scss";

/* Img */
import me from "../../assets/me.JPG";

/* Animation */
import { CSSTransition } from "react-transition-group";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

/* Components */
import Border from "../../constants/border/index";
import AboutMore from "../aboutMore/index";
import AboutLess from "../aboutLess/index";

/* Translations */
import { useTranslation } from "react-i18next"

const About = () => {
    const [showMore, setShowMore] = useState(false);
    const [t] = useTranslation("global");

    const seeMore = () => {
        setShowMore(true);
    }

    return(
        <div className="aboutContainer" id="about">

            <div className="aboutInnerContainer">
                <div className="aboutImgContainer">
                    <Border>
                        <img src={me} alt="Picture of me"/>
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
                    <AboutLess onClick={seeMore}/>
                    }
                    </CSSTransition>

                </div>
            </div>

        </div>
    );
}

export default About;
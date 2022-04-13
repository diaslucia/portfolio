import React from "react";
import style from "./style.scss";

/* Img */
import me1 from "../../assets/me1.png";
import me2 from "../../assets/me2.png";
import me3 from "../../assets/me3.png";
import me4 from "../../assets/me4.png";
import me5 from "../../assets/me5.png";
import me6 from "../../assets/me6.png";

/* Animations */
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

/* Translations */
import { useTranslation } from "react-i18next"

const AboutMore = ({ inOpenPage }) => {
    const [t] = useTranslation("global");
    
    return(     
        <div className="aboutParContainer">
            
            <div className="aboutPar">
                <div className="aboutInnerParContainer">
                    <p className="aboutText">{t("about.text1")}</p>
                    <p className="aboutBold">{t("about.bold1")}</p>
                    <p className="aboutText">{t("about.text2")}</p>
                </div>
                <div className="aboutInnerParContainer">
                    <p className="aboutText">{t("about.text3")}</p>
                    <p className="aboutBold">{t("about.bold2")}</p>
                    <p className="aboutText">{t("about.text4")}</p>
                </div>
                <div className="aboutInnerParContainer">
                    <p className="aboutText">{t("about.text5")}</p>
                </div>

                <div className="aboutInnerParContainer">
                    <p className="aboutText">{t("about.text6")}</p>
                    <p className="aboutBold">{t("about.bold3")}</p>
                    <p className="aboutText">{t("about.text7")}</p>
                </div>
                <div className="aboutInnerParContainer">
                    <p className="aboutText">{t("about.text8")}</p>
                </div>
            </div>
            
            <div className="aboutLogosContainer">
                <AnimationOnScroll animateIn="animate__zoomIn" delay={100}>
                    <img src={me1} alt="icono cat gato"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={200}>
                    <img src={me2} alt="icono vegan"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={300}>
                    <img src={me3} alt="icono rollerblades"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={400}>
                    <img src={me4} alt="icono pc"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={500}>
                    <img src={me5} alt="icono books libros"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={600}>
                    <img src={me6} alt="icono luggage maleta"/>
                </AnimationOnScroll>
            </div>
        </div>
    );
}

export default AboutMore;
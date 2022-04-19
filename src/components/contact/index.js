import React from "react";
import style from "./style.scss";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

/* Animation */
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

/* Translations */
import { useTranslation } from "react-i18next"

const Contact = () => {
    const [t] = useTranslation("global");

    return(
        <div className="contactContainer" id="contact">
            <div className="contactBorder">

                <div className="contactTitleContainer">
                    <h2 className="contactSubtitle">{t("contact.subtitle")}</h2>
                    <AnimationOnScroll animateIn="animate__slideInDown" animateOnce={true}>
                        <h1 className="contactTitle">{t("contact.title")}</h1>
                    </AnimationOnScroll>
                </div>


                <div className="contactWaysContainer">
                    <div className="contactEachContainer">
                        <div className="contactIconContainer">
                            <AnimationOnScroll animateIn="animate__fadeInDown" delay={100} animateOnce={true}>
                                <a href="https://wa.me/+5491169679769" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faWhatsapp}/></a>
                            </AnimationOnScroll>
                        </div>
                        <p>{t("contact.whatsapp")}</p>
                    </div>
                    <div className="contactEachContainer">
                        <div className="contactIconContainer">
                            <AnimationOnScroll animateIn="animate__fadeInDown" delay={100} animateOnce={true}>
                                <a href="mailto:lucy_17_4@hotmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a>
                            </AnimationOnScroll>
                        </div>
                        <p>{t("contact.email")}</p>
                    </div>
                    <div className="contactEachContainer">
                        <div className="contactIconContainer">
                            <AnimationOnScroll animateIn="animate__fadeInDown" delay={100} animateOnce={true}>
                                <a href="https://www.linkedin.com/in/lucia-dias/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a>
                            </AnimationOnScroll>
                        </div>
                        <p>{t("contact.linkedin")}</p>
                    </div>
                </div>

             </div>
        </div>
    );
}

export default Contact;
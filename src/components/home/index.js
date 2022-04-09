import React from "react";
import style from "./style.scss";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

/* Translations */
import { useTranslation } from "react-i18next"

const Home = () => {
    const [t] = useTranslation("global");

    return(
        <div className="homeContainer" id="home">
            <div className="whiteBorder">
                <h1 className="homeTitle">{t("home.title")}</h1>
                <h2 className="homeSubtitle">{t("home.subtitle")}</h2>
                <div className="homeIconsContainer">
                    <a href="https://github.com/diaslucia" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/lucia-dias/" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a>
                    <a href="mailto:lucy_17_4@hotmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a>
                </div>
            </div>
        </div>
    );
}

export default Home;
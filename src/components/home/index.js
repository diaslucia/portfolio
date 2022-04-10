import React from "react";
import style from "./style.scss";

/* Img */
import wallpaper from "../../assets/wall2.png";
import wallpaper2 from "../../assets/wall3.png";


/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

/* Translations */
import { useTranslation } from "react-i18next"

const Home = () => {
    const [t] = useTranslation("global");

    window.addEventListener('scroll', throttle(parallax, 14));

    function throttle(fn, wait) {
      var time = Date.now();
      return function() {
        if ((time + wait - Date.now()) < 0) {
          fn();
          time = Date.now();
        }
      }
    };
    
    function parallax() {
      var scrolled = window.pageYOffset;
      var parallax = document.querySelector(".parallax");
        var coords = (scrolled * 0.4) + 'px'
      parallax.style.transform = 'translateY(' + coords + ')';
    };

    return(
        <div className="homeContainer" id="home">
            <div className="parallax">
                <div className="whiteBorder">
                    <h1 className="homeTitle">{t("home.title")}</h1>
                    <div className="homeSubtitleContainer">
                        <h2 className="homeSubtitle">{t("home.subtitle")}</h2>
                    </div>
                    <div className="homeIconsContainer">
                        <div className="contactIconContainer">
                            <a href="https://github.com/diaslucia" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                        </div>
                        <div className="contactIconContainer">
                            <a href="https://www.linkedin.com/in/lucia-dias/" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a>
                        </div>
                        <div className="contactIconContainer">
                            <a href="mailto:lucy_17_4@hotmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <img className="wallpaper" src={wallpaper} alt="wallpaper"/>
            <img className="wallpaper2" src={wallpaper2} alt="wallpaper"/>
        </div>
    );
}

export default Home;
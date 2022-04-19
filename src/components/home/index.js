import React from "react";
import style from "./style.scss";

/* Img */
import wallpaper from "../../assets/wall2.png";
import wallpaper2 from "../../assets/wall3.png";
import wallpaper3 from "../../assets/wall2phone.png";
import wallpaper4 from "../../assets/wall3phone.png";

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
                </div>
            </div>
            <img className="wallpaper" src={wallpaper} alt="wallpaper"/>
            <img className="wallpaper2" src={wallpaper2} alt="wallpaper"/>
            <img className="wallpaper3" src={wallpaper3} alt="wallpaper"/>
            <img className="wallpaper4" src={wallpaper4} alt="wallpaper"/>
        </div>
    );
}

export default Home;
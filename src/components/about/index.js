import { useState } from "react";
import "./style.scss";

/* Img */
import me from "../../assets/me.JPG";

/* Animation */
import { CSSTransition } from "react-transition-group";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

/* Components */
import Border from "./border";
import AboutMore from "../aboutMore";
import AboutLess from "../aboutLess";

/* Translations */
import { useTranslation } from "react-i18next";

/* GA4 */
import { GAEvent } from "../../hooks/useGaveEvent";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [t] = useTranslation("global");

  const seeMore = () => {
    setShowMore(true);
    GAEvent("Click", "Read More About");
  };

  return (
    <div className="aboutContainer" id="about">
      <div className="aboutInnerContainer">
        <div className="aboutImgContainer">
          <Border>
            <img src={me} alt="me" />
          </Border>
        </div>

        <div className="aboutInfoContainer">
          <div className="aboutTitleContainer">
            <AnimationOnScroll
              animateIn="animate__slideInDown"
              animateOnce={true}
            >
              <h1 className="aboutTitle">{t("about.title")}</h1>
            </AnimationOnScroll>
          </div>

          <CSSTransition in={showMore} timeout={500} classNames="aboutMore">
            {showMore ? <AboutMore /> : <AboutLess onClick={seeMore} />}
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default About;

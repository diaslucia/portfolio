import "./style.scss";

/* Img */
import wallpaper from "../../assets/wall2.png";
import wallpaper2 from "../../assets/wall3.png";
import wallpaper3 from "../../assets/wall2phone.png";
import wallpaper4 from "../../assets/wall3phone.png";

/* Animations */
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

/* Translations */
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t] = useTranslation("global");

  window.addEventListener("scroll", throttle(parallax, 14));

  function throttle(fn, wait) {
    var time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }

  function parallax() {
    var scrolled = window.scrollY;
    var parallax = document.querySelector(".parallax");
    var coords = scrolled * 0.4 + "px";
    parallax.style.transform = "translateY(" + coords + ")";
  }

  return (
    <div className="homeContainer" id="home">
      <div className="parallax" style={{ height: window.innerHeight }}>
        <div className="whiteBorder">
          <div className="homeTitles">
            <AnimationOnScroll
              className="homeAnimation"
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <h1 className="homeTitle">{t("home.title")}</h1>
            </AnimationOnScroll>
            <AnimationOnScroll
              className="homeAnimation"
              animateIn="animate__fadeInRight"
              animateOnce={true}
              delay={500}
            >
              <h1 className="homeTitle2">{t("home.title2")}</h1>
            </AnimationOnScroll>
          </div>
          <div className="homeSubtitleContainer">
            <h2 className="homeSubtitle">{t("home.subtitle")}</h2>
          </div>
        </div>
      </div>
      <img
        className="wallpaper"
        src={wallpaper}
        alt="wallpaper"
        style={{ height: window.innerHeight }}
      />
      <img
        className="wallpaper2"
        src={wallpaper2}
        alt="wallpaper"
        style={{ height: window.innerHeight }}
      />
      <img
        className="wallpaper3"
        src={wallpaper3}
        alt="wallpaper"
        style={{ height: window.innerHeight }}
      />
      <img
        className="wallpaper4"
        src={wallpaper4}
        alt="wallpaper"
        style={{ height: window.innerHeight }}
      />
    </div>
  );
};

export default Home;

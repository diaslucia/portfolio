import "./style.scss";

/* Img */
import skill1 from "../../assets/01.png";
import skill2 from "../../assets/02.png";
import skill3 from "../../assets/03.png";
import skill4 from "../../assets/04.png";
import skill5 from "../../assets/05.png";
import skill6 from "../../assets/06.png";
import skill7 from "../../assets/07.png";
import skill8 from "../../assets/08.png";
import skill9 from "../../assets/09.png";
import skill10 from "../../assets/10.png";
import skill11 from "../../assets/11.png";
import skill12 from "../../assets/12.png";
import skill13 from "../../assets/13.png";
import skill14 from "../../assets/14.png";
import skill15 from "../../assets/15.png";
import skill16 from "../../assets/16.png";
import skill17 from "../../assets/17.png";

/* Animations */
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

/* Translations */
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [t] = useTranslation("global");

  return (
    <div className="skillsContainer" id="skills">
      <div className="skillsTitleContainer">
        <AnimationOnScroll animateIn="animate__slideInDown" animateOnce={true}>
          <h1 className="skillsTitle">{t("skills.title")}</h1>
        </AnimationOnScroll>
      </div>
      <div className="skillsImgContainer">
        <div>
          <img src={skill1} alt="logo HTML5" />
          <p>HTML5</p>
        </div>
        <div>
          <img src={skill2} alt="logo CSS" />
          <p>CSS</p>
        </div>
        <div>
          <img src={skill3} alt="logo Javascript" />
          <p>Javascript</p>
        </div>
        <div>
          <img src={skill15} alt="logo TypeScript" />
          <p>TypeScript</p>
        </div>
        <div>
          <img src={skill4} alt="logo React JS" />
          <p>React JS</p>
        </div>

        <div>
          <img src={skill16} alt="logo Next" />
          <p>Next JS</p>
        </div>
        <div>
          <img src={skill17} alt="logo Vite" />
          <p>Vite</p>
        </div>
        <div>
          <img src={skill14} alt="logo Redux" />
          <p>Redux Toolkit</p>
        </div>
        <div>
          <img src={skill11} alt="logo Vue" />
          <p>Vue</p>
        </div>
        <div>
          <img src={skill4} alt="logo React Native" />
          <p>React Native</p>
        </div>
        <div>
          <img src={skill5} alt="logo SASS" />
          <p>SASS</p>
        </div>
        <div>
          <img src={skill6} alt="logo Figma" />
          <p>Figma</p>
        </div>
        <div>
          <img src={skill7} alt="logo Wordpress" />
          <p>Wordpress</p>
        </div>
        <div>
          <img src={skill8} alt="logo Photoshop" />
          <p>Photoshop</p>
        </div>
        <div>
          <img src={skill9} alt="logo Git" />
          <p>Git</p>
        </div>
        <div>
          <img src={skill10} alt="logo Github" />
          <p>Github</p>
        </div>
        <div>
          <img src={skill12} alt="logo Tailwind" />
          <p>Tailwind</p>
        </div>
        <div>
          <img src={skill13} alt="logo Firebase" />
          <p>Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

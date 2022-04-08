import React from "react";
import style from "./style.scss";

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

/* Animations */
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Skills = () => {
    return(
        <div className="skillsContainer" id="skills">
            <div className="skillsTitleContainer">
                <AnimationOnScroll animateIn="animate__slideInDown">
                    <h1 className="skillsTitle">Habilidades</h1>
                </AnimationOnScroll>
            </div>
            <div className="skillsImgContainer">
                <div>
                    <img src={skill1}/>
                    <p>HTML5</p>
                </div>
                <div>
                    <img src={skill2}/>
                    <p>CSS</p>
                </div>
                <div>
                    <img src={skill3}/>
                    <p>Javascript</p>
                </div>
                <div>
                    <img src={skill4}/>
                    <p>React JS</p>
                </div>
                <div>
                    <img src={skill5}/>
                    <p>SASS</p>
                </div>
                <div>
                    <img src={skill6}/>
                    <p>Figma</p>
                </div>
                <div>
                    <img src={skill7}/>
                    <p>Wordpress</p>
                </div>
                <div>
                    <img src={skill8}/>
                    <p>Photoshop</p>
                </div>
                <div>
                    <img src={skill9}/>
                    <p>Git</p>
                </div>
                <div>
                    <img src={skill10}/>
                    <p>Github</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
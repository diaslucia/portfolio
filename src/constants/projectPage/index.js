import React from "react";
import "./style.scss";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip, faXmark } from "@fortawesome/free-solid-svg-icons";

/* Animations */
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const ProjectPage = ({ title, tecnology, description, github, link, onClick, img }) => {

    return(
        <AnimationOnScroll animateIn="animate__fadeIn" duration={2} offset={50} animateOnce={true}>
            <div className="pageAllContainer">
                <a className="exit" onClick={onClick}><FontAwesomeIcon className="icon" icon={faXmark}/></a>
                <div className="pageContainer">
                    <div className="pageInfoContainer">

                        <AnimationOnScroll animateIn="animate__slideInDown" duration={2} offset={50} animateOnce={true}>
                            <h1>{title}</h1>
                        </AnimationOnScroll>
                        <h2>{tecnology}</h2>
                        <p>{description}</p>

                        <div className="pageIconsContainer">
                            <div className="pageIconContainer">
                                <a href={github} target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                            </div>
                            <div className="pageIconContainer">
                                <a href={link} target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faPaperclip}/></a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="pageImgContainer">
                        <a href={link} target="_blank" rel="noreferrer"><img src={img} alt="website"/></a>
                    </div>
                </div>
            </div>
        </AnimationOnScroll>
    );
}

export default ProjectPage;
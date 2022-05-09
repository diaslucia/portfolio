import React, {useState} from "react";
import "./style.scss";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXmark, faDisplay } from "@fortawesome/free-solid-svg-icons";

/* Animations */
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

/* GA4 */
import ReactGA from "react-ga4";

const ProjectPage = ({ title, tecnology, description, github, link, onClick, img }) => {
    const [myLink, setMyLink] = useState(github);

    const GAEvent = (category, action) => {
        ReactGA.event({
            category: category,
            action: action,
        })
    }

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
                                <a href={link} onClick={() => GAEvent("Link", `Link ${title} Page`)} target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faDisplay}/></a>
                            </div>
                            {myLink ? <div className="pageIconContainer">
                                <a href={github} onClick={() => GAEvent("Link", `Link ${title} Repo`)} target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                            </div>
                            :
                            <></>
                            }
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
import style from "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const ProjectPage = ({ title, tecnology, description, github, link, onClick, img }) => {

    return(
        <div className="pageAllContainer">
            <a className="exit" onClick={onClick}><FontAwesomeIcon className="icon" icon={faXmark}/></a>
            <div className="pageContainer">
                <div className="pageInfoContainer">
                    <AnimationOnScroll animateIn="animate__slideInDown" duration="2">
                        <h1>{title}</h1>
                    </AnimationOnScroll>
                    <h2>{tecnology}</h2>
                    <p>{description}</p>
                    <a href={github} target="_blank"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                    <a href={link} target="_blank"><FontAwesomeIcon className="icon" icon={faPaperclip}/></a>
                </div>
                <div className="pageImgContainer">
                    <a href={link}><img src={img} alt="website"/></a>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
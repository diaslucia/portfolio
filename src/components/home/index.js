import style from "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

    return(
        <div className="homeContainer">
            <div className="whiteBorder">
                <h1 className="homeTitle">Hola! Soy Lucia Dias</h1>
                <h2 className="homeSubtitle">Desarrolladora Front-End</h2>
                <div className="homeIconsContainer">
                    <a href="https://github.com/diaslucia"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/lucia-dias/"><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a>
                    <a href="mailto:lucy_17_4@hotmail.com"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a>
                </div>
            </div>
        </div>
    );
}

export default Home;
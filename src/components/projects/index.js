import style from "./style.scss";
import ProjectCard from "../../constants/projectCard/index";
import projectOne from "./p1.png";
import projectTwo from "./p2.png";
import projectThree from "./p3.png";
import projectFour from "./p4.png";
import projectFive from "./p1.png";
import projectSix from "./p1.png";

const Projects = () => {
    return(
        <div className="projectsContainer" id="projects">

            <div className="projectsTitleContainer">
                <h1 className="projectsTitle">Mis Proyectos</h1>
            </div>

            <div className="projectsMainContainer">
                <ProjectCard title={"Hola"} tecnology={"HTML"} img={projectOne}/>
                <ProjectCard title={"Hola"} tecnology={"HTML"} img={projectTwo}/>
                <ProjectCard title={"Hola"} tecnology={"HTML"} img={projectThree}/>
                <ProjectCard title={"Hola"} tecnology={"HTML"} img={projectFour}/>
                <ProjectCard title={"Hola"} tecnology={"HTML"} img={projectFive}/>
                <ProjectCard title={"Hola"} tecnology={"HTML"} img={projectSix}/>
            </div>

        </div>
    );
}

export default Projects;
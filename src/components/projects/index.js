import style from "./style.scss";
import ProjectCard from "../../constants/projectCard/index";
import ProjectPage from "../../constants/projectPage/index";
import projectOne from "./p1.png";
import projectTwo from "./p2.png";
import projectThree from "./p3.png";
import projectFour from "./p4.png";
import projectFive from "./p5.png";
import projectSix from "./p1.png";

const Projects = () => {


    return(
        <div className="projectsContainer" id="projects">

            <div className="projectsTitleContainer">
                <h1 className="projectsTitle">Mis Proyectos</h1>
            </div>

            <div className="projectsMainContainer">
                <ProjectCard title={"Consultoría Integral"} tecnology={"React JS"} img={projectOne} onClick={null}/>
                <ProjectCard title={"Cirse e-commerce"} tecnology={"Javascript"} img={projectTwo}/>
                <ProjectCard title={"Blockbuster e-commerce"} tecnology={"React JS"} img={projectThree}/>
                <ProjectCard title={"Lilhué"} tecnology={"HTML | CSS"} img={projectFour}/>
                <ProjectCard title={"Mecatrónica"} tecnology={"Wordpress"} img={projectFive}/>
                <ProjectCard title={"Hola"} tecnology={"HTML"} img={projectSix}/>
            </div>

        </div>
    );
}

export default Projects;
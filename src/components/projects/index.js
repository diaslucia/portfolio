import style from "./style.scss";
import ProjectCard from "../../constants/projectCard/index";
import ProjectPage from "../../constants/projectPage/index";

import { PROJECTS } from "../../constants/projects/projects";
import { DETAILS } from "../../constants/details/details";

const Projects = () => {

    const renderProjectPage = (id) => {
        let project = DETAILS.filter((page) => page.id === id);
        project.map(page => {
            console.log(page.id);
            return(
            <ProjectPage key={page.id} title={page.title} tecnology={page.tecnology} description={page.description}/>)
        })
    }
    return(
        <div className="projectsContainer" id="projects">

            <div className="projectsTitleContainer">
                <h1 className="projectsTitle">Mis Proyectos</h1>
            </div>

            <div className="projectsMainContainer">
                {PROJECTS.map((project) => {
                    return(
                        <ProjectCard
                        key={project.id}
                        title={project.title}
                        tecnology={project.tecnology}
                        img={project.img}
                        onClick={() => renderProjectPage(project.id)}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Projects;
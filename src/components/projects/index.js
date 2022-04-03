import style from "./style.scss";
import { useState } from "react";
import ProjectCard from "../../constants/projectCard/index";
import ProjectPage from "../../constants/projectPage/index";

import { PROJECTS } from "../../constants/projects/projects";
import { DETAILS } from "../../constants/details/details";

const Projects = () => {
    const [pageItem,setPageItem] = useState([]);
    const [openPage, setOpenPage] = useState(false);

    const renderProjectPage = (id) => {
        let project = DETAILS.filter((page) => page.id === id);
        setPageItem(project);
        setOpenPage(true)
    }

    const closePage = () => {
        setOpenPage(false);
    }

    return(
        <div className="projectsContainer" id="projects">

            <div className="projectsTitleContainer">
                <h1 className="projectsTitle">Mis Proyectos</h1>
            </div>

            <div>
                <div className={openPage ? "displayNone" : "projectsMainContainer"}>
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

                <div className={openPage ? "projectsDetailContainer" : "displayNone"}>
                    {pageItem.map((page) => {
                        return(
                            <ProjectPage key={page.id} title={page.title} tecnology={page.tecnology} description={page.description} onClick={closePage} img={page.img}/>
                        )
                    })}
                </div>
            </div>

        </div>
    );
}

export default Projects;
import React, { useState } from "react";
import "./style.scss";

/* Components */
import ProjectCard from "../../constants/projectCard/index";
import ProjectPage from "../../constants/projectPage/index";

/* Animations */
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

/* Data */
import { PROJECTS } from "../../constants/projects/projects";
import { DETAILS } from "../../constants/details/details";
import { DETAILSEN } from "../../constants/detailsEn/details";

/* Translations */
import { useTranslation } from "react-i18next"

const Projects = ({ lang }) => {
    const [t] = useTranslation("global");
    const [pageItem,setPageItem] = useState([]);
    const [openPage, setOpenPage] = useState(false);

    const renderProjectPage = (id) => {
        if(lang === false){
            let project = DETAILS.filter((page) => page.id === id);
            setPageItem(project);
            setOpenPage(true);
        }else{
            let project = DETAILSEN.filter((page) => page.id === id);
            setPageItem(project);
            setOpenPage(true);
        }
    }

    const closePage = () => {
        setOpenPage(false);
    }
    

    return(
        <div className="projectsContainer" id="projects">

            <div className="projectsTitleContainer">
                <AnimationOnScroll animateIn="animate__slideInDown" animateOnce={true}>
                    <h1 className="projectsTitle">{t("projects.title")}</h1>
                </AnimationOnScroll>
            </div>

            <div className="projectsGridContainer">

                <div className={openPage ? "displayNone" : "projectsMainContainer"}>
                    {PROJECTS.map((project) => {
                        return(
                            <ProjectCard
                            key={project.id.toString()}
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
                            <ProjectPage
                            openPage={openPage}
                            key={page.id.toString()}
                            title={page.title}
                            tecnology={page.tecnology}
                            description={page.description}
                            onClick={closePage}
                            img={page.img}
                            github={page.github}
                            link={page.link}/>
                        )
                    })}
                </div>

            </div>
            
        </div>
    );
}

export default Projects;
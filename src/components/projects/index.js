import React, { useState } from "react";
import style from "./style.scss";

/* Components */
import ProjectCard from "../../constants/projectCard/index";
import ProjectPage from "../../constants/projectPage/index";

/* Animations */
import { CSSTransition } from "react-transition-group";
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
                <AnimationOnScroll animateIn="animate__slideInDown">
                    <h1 className="projectsTitle">{t("projects.title")}</h1>
                </AnimationOnScroll>
            </div>

            <div>

                <div className={openPage ? "displayNone" : "projectsMainContainer"}>
                    {PROJECTS.map((project) => {
                        return(
                            <AnimationOnScroll animateIn="animate__fadeIn" key={project.id.toString()}>
                                <ProjectCard
                                title={project.title}
                                tecnology={project.tecnology}
                                img={project.img}
                                onClick={() => renderProjectPage(project.id)}
                                />
                            </AnimationOnScroll>
                        )
                    })}
                </div>
            
                <div className={openPage ? "projectsDetailContainer" : "displayNone"}>
                    {pageItem.map((page) => {
                        return(
                            <CSSTransition in={openPage} timeout={1000} classNames="alert" key={page.id.toString()}>
                                <ProjectPage
                                title={page.title}
                                tecnology={page.tecnology}
                                description={page.description}
                                onClick={closePage}
                                img={page.img}
                                github={page.github}
                                link={page.link}/>
                            </CSSTransition>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default Projects;
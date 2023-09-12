import React, { useState } from "react";
import "./style.scss";

/* Components */
import ProjectCard from "./projectCard";
import ProjectPage from "./projectPage";

/* Animations */
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

/* Data */
import { PROJECTS } from "../../data/projects";
import { DETAILS, DETAILSEN } from "../../data/details";

/* Translations */
import { useTranslation } from "react-i18next";

/* GA4 */
import { GAEvent } from "../../hooks/useGaveEvent";

const Projects = ({ lang }) => {
  const [t] = useTranslation("global");
  const [pageItem, setPageItem] = useState([]);
  const [openPage, setOpenPage] = useState(false);

  const renderProjectPage = (id) => {
    let data = lang === false ? DETAILS : DETAILSEN;
    let project = data.filter((page) => page.id === id);
    let nameProject = project[0].title;
    setPageItem(project);
    setOpenPage(true);
    GAEvent("Click", `Click ${nameProject}`);
  };

  const closePage = () => {
    setOpenPage(false);
  };

  return (
    <div className="projectsContainer" id="projects">
      <AnimationOnScroll animateIn="animate__slideInDown" animateOnce={true}>
        <h1 className="projectsTitle">{t("projects.title")}</h1>
      </AnimationOnScroll>

      <div className="projectsMainContainer">
        {PROJECTS.map((project) => {
          return (
            <ProjectCard
              key={project.id.toString()}
              title={project.title}
              tecnology={project.tecnology}
              img={project.img}
              onClick={() => renderProjectPage(project.id)}
            />
          );
        })}
      </div>

      {openPage && (
        <>
          {pageItem.map((page) => {
            return (
              <ProjectPage
                openPage={openPage}
                key={page.id.toString()}
                title={page.title}
                tecnology={page.tecnology}
                description={page.description}
                onClick={closePage}
                img={page.img}
                github={page.github}
                link={page.link}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Projects;

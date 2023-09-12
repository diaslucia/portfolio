import "./style.scss";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXmark, faDisplay } from "@fortawesome/free-solid-svg-icons";

/* GA4 */
import { GAEvent } from "../../../hooks/useGaveEvent";

const ProjectPage = ({
  title,
  tecnology,
  description,
  github,
  link,
  onClick,
  img,
}) => {
  return (
    <div className="backgroundPopup">
      <div className="pageAllContainer">
        <FontAwesomeIcon className="exit" icon={faXmark} onClick={onClick} />

        <div className="pageContainer">
          <div className="pageInfoContainer">
            <h1>{title}</h1>
            <h2>{tecnology}</h2>
            <p>{description}</p>

            <div className="pageIconsContainer">
              {link && (
                <div className="pageIconContainer">
                  <a
                    href={link}
                    onClick={() => GAEvent("Link", `Link ${title} Page`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="icon" icon={faDisplay} />
                  </a>
                </div>
              )}
              {github && (
                <div className="pageIconContainer">
                  <a
                    href={github}
                    onClick={() => GAEvent("Link", `Link ${title} Repo`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="pageImgContainer">
            <a href={link} target="_blank" rel="noreferrer">
              <img src={img} alt="website" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

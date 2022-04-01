import style from "./style.scss";

const ProjectCard = ({ title, tecnology, img }) => {
    return(
        <div className="cardContainer" style={{ backgroundImage: `url(${img})` }}>
            <div className="cardHoverContainer" >
                <p>{title}</p>
                <p>{tecnology}</p>
            </div>
        </div> 
    );
}

export default ProjectCard;
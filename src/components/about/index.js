import style from "./style.scss";

const About = () => {
    return(
        <div className="aboutContainer" id="about">
            <div className="aboutImgContainer">
                <img src={require('./me.JPG')}/>
            </div>
            <div className="aboutTitleContainer">
                <h1 className="aboutTitle">Sobre mi</h1>
                <p className="aboutText"> Soy desarrolladora Front-End, recibida de Coderhouse.</p>
            </div>
        </div>
    );
}

export default About;
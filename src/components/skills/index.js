import style from "./style.scss";

const Skills = () => {
    return(
        <div className="skillsContainer" id="skills">
            <div className="skillsTitleContainer">
                <h1 className="skillsTitle">Habilidades</h1>
            </div>
            <div className="skillsImgContainer">
                <div>
                    <img src={require('./01.png')}/>
                    <p>HTML5</p>
                </div>
                <div>
                    <img src={require('./02.png')}/>
                    <p>CSS</p>
                </div>
                <div>
                    <img src={require('./03.png')}/>
                    <p>Javascript</p>
                </div>
                <div>
                    <img src={require('./04.png')}/>
                    <p>React JS</p>
                </div>
                <div>
                    <img src={require('./05.png')}/>
                    <p>SASS</p>
                </div>
                <div>
                    <img src={require('./06.png')}/>
                    <p>Figma</p>
                </div>
                <div>
                    <img src={require('./07.png')}/>
                    <p>Wordpress</p>
                </div>
                <div>
                    <img src={require('./08.png')}/>
                    <p>Photoshop</p>
                </div>
                <div>
                    <img src={require('./09.png')}/>
                    <p>Git</p>
                </div>
                <div>
                    <img src={require('./10.png')}/>
                    <p>Github</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
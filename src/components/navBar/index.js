import React,{ useState } from "react";
import style from "./style.scss";

import { Link } from "react-scroll";

const NavBar = () => {
    const [navbar,setNavbar] = useState(false);

    const changeNavbar = () => {
        if(window.scrollY >= 50){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", changeNavbar);

    return(
        <nav className={navbar ? "nav activeNav" : "nav"}>
            <div className="navBar">
                <Link activeClass="active" className="link" to="about" spy={true} smooth={true} offset={0} duration={500}>Sobre mi</Link>
                <Link activeClass="active" className="link" to="skills" spy={true} smooth={true} offset={0} duration={500}>Hablidades</Link>
                <Link activeClass="active" className="link" to="projects" spy={true} smooth={true} offset={0} duration={500}>Proyectos</Link>
                <Link activeClass="active" className="link" to="contact" spy={true} smooth={true} offset={0} duration={500}>Contacto</Link>
            </div>
            <div className="lang">
                <a href="#esp">Esp</a>
                <a href="#en">En</a>
            </div>
        </nav>
    );
}

export default NavBar;
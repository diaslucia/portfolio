import React,{ useState } from "react";
import "./style.scss";

/* Scroll */
import { Link } from "react-scroll";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ handleClick, t }) => {
    const [navbar,setNavbar] = useState(false);
    const [hamb, setHamb] = useState(false);
    
    const changeNavbar = () => {
        if(window.scrollY >= 50){
            setNavbar(true);
        } else {
            setNavbar(false);
        }   
    }

    const handleHamb = () => {
        setHamb(!hamb);
    }

    window.addEventListener("scroll", changeNavbar);

    return(
        <nav className={navbar ? "nav activeNav" : "nav"}>
            <div className="navBar">
                <Link activeClass="active" className="link" to="home" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.home")}</Link>
                <Link activeClass="active" className="link" to="about" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.about")}</Link>
                <Link activeClass="active" className="link" to="skills" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.skills")}</Link>
                <Link activeClass="active" className="link" to="projects" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.projects")}</Link>
                <Link activeClass="active" className="link" to="contact" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.contact")}</Link>
            </div>
            <div className={hamb ? "navBarActive " : "navBarInactive"}>
                <Link onClick={handleHamb} activeClass="active" className="link" to="home" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.home")}</Link>
                <Link onClick={handleHamb} activeClass="active" className="link" to="about" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.about")}</Link>
                <Link onClick={handleHamb} activeClass="active" className="link" to="skills" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.skills")}</Link>
                <Link onClick={handleHamb} activeClass="active" className="link" to="projects" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.projects")}</Link>
                <Link onClick={handleHamb} activeClass="active" className="link" to="contact" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.contact")}</Link>
            </div>
            <div className="navBarHamb" onClick={handleHamb}>
                <FontAwesomeIcon className="icon" icon={faBars}/>
            </div>
            <div className="lang">
                <div className="langContainer">
                    <p className="langText">ES</p>
                    <div className="toggle" onClick={handleClick}>
                        <span className="langSpan"></span>
                    </div>
                    <p className="langText">EN</p>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
import React,{ useState } from "react";
import "./style.scss";

/* Scroll */
import { Link } from "react-scroll";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

/* GA4 */
import ReactGA from "react-ga4";

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

    const GAEvent = (category, action) => {
        ReactGA.event({
            category: category,
            action: action,
        })
    }

    const handleHamb = (category, action) => {
        setHamb(!hamb);
        GAEvent(category, action);
    }

    window.addEventListener("scroll", changeNavbar);

    return(
        <nav className={navbar ? "nav activeNav" : "nav"}>
            <div className="navBar">
                <Link onClick={() => GAEvent("Link", "Link to Home")} activeClass="active" className="link" to="home" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.home")}</Link>
                <Link onClick={() => GAEvent("Link", "Link to About")} activeClass="active" className="link" to="about" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.about")}</Link>
                <Link onClick={() => GAEvent("Link", "Link to Skills")} activeClass="active" className="link" to="skills" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.skills")}</Link>
                <Link onClick={() => GAEvent("Link", "Link to Projects")} activeClass="active" className="link" to="projects" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.projects")}</Link>
                <Link onClick={() => GAEvent("Link", "Link to Contact")} activeClass="active" className="link" to="contact" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.contact")}</Link>
            </div>
            <div className={hamb ? "navBarActive " : "navBarInactive"}>
                <Link onClick={() => handleHamb("Link", "Link to Home Phone")} activeClass="active" className="link" to="home" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.home")}</Link>
                <Link onClick={() => handleHamb("Link", "Link to About Phone")} activeClass="active" className="link" to="about" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.about")}</Link>
                <Link onClick={() => handleHamb("Link", "Link to Skills Phone")} activeClass="active" className="link" to="skills" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.skills")}</Link>
                <Link onClick={() => handleHamb("Link", "Link to Projects Phone")} activeClass="active" className="link" to="projects" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.projects")}</Link>
                <Link onClick={() => handleHamb("Link", "Link to Contact Phone")} activeClass="active" className="link" to="contact" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.contact")}</Link>
            </div>
            <div className="navBarHamb" onClick={() => handleHamb("Click", "Click Hamb")}>
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
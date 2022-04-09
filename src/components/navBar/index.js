import React,{ useState, useEffect, useCallback } from "react";
import style from "./style.scss";

import { Link } from "react-scroll";

/* Translations */
import { useTranslation } from "react-i18next"

const NavBar = () => {
    const [navbar,setNavbar] = useState(false);
    const [selectProject, setSelectProject] = useState(false);
    const [t, i18n] = useTranslation("global");

    const handleLanguageChanged = useCallback(() => {
        changeLang();
    }, []);
    
    useEffect(() => {
        i18n.on('languageChanged', handleLanguageChanged);
        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, [handleLanguageChanged]);

    const changeLang = () => {
        setSelectProject(!selectProject);
    }
    console.log(selectProject)

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
                <Link activeClass="active" className="link" to="home" spy={true} smooth={true} offset={0} duration={500}>{t("navbar.home")}</Link>
                <Link activeClass="active" className="link" to="about" spy={true} smooth={true} offset={0} duration={500}>{t("navbar.about")}</Link>
                <Link activeClass="active" className="link" to="skills" spy={true} smooth={true} offset={0} duration={500}>{t("navbar.skills")}</Link>
                <Link activeClass="active" className="link" to="projects" spy={true} smooth={true} offset={0} duration={500}>{t("navbar.projects")}</Link>
                <Link activeClass="active" className="link" to="contact" spy={true} smooth={true} offset={0} duration={500}>{t("navbar.contact")}</Link>
            </div>
            <div className="lang">
                <button onClick={() => i18n.changeLanguage("es")}>ES</button>
                <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            </div>
        </nav>
    );
}

export default NavBar;
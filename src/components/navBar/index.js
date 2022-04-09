import React,{ useState, useEffect, useCallback } from "react";
import style from "./style.scss";

import { Link } from "react-scroll";

/* Translations */
import { useTranslation } from "react-i18next"

const NavBar = () => {
    const [navbar,setNavbar] = useState(false);
    const [t, i18n] = useTranslation("global");
    const [lang, setLang] = useState(false);

    const changeNavbar = () => {
        if(window.scrollY >= 50){
            setNavbar(true);
        } else {
            setNavbar(false);
        }   
    }

    window.addEventListener("scroll", changeNavbar);

    const handleClick = (e) => {
        e.preventDefault();
        setLang(!lang);
        if(lang === true) {
            i18n.changeLanguage("es")
            document.querySelector(".langSpan").classList.remove("langSpanActive");
        } else {
            i18n.changeLanguage("en")
            document.querySelector(".langSpan").classList.add("langSpanActive");
        }
    }

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
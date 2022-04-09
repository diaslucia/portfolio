import React from "react";
import style from "./style.scss";

/* Translations */
import { useTranslation } from "react-i18next"

const Footer = () => {
    const [t] = useTranslation("global");

    return(
        <footer className="footerContainer">
            <p>{t("footer.firstline")}</p>
            <p>{t("footer.secondline")}<a href="https://github.com/diaslucia/portfolio" target="_blank" rel="noreferrer">{t("footer.thirdline")}</a></p>
        </footer>
    );
}

export default Footer;
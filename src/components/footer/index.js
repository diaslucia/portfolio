import React from "react";
import "./style.scss";

/* Translations */
import { useTranslation } from "react-i18next"

/* GA4 */
import ReactGA from "react-ga4";

const Footer = () => {
    const [t] = useTranslation("global");

    const GAEvent = (category, action) => {
        ReactGA.event({
            category: category,
            action: action,
        })
    }

    return(
        <footer className="footerContainer">
            <p>{t("footer.firstline")}</p>
            <p>{t("footer.secondline")}<a onClick={() => GAEvent("Link", "Link to Portfolio Github")} href="https://github.com/diaslucia/portfolio" target="_blank" rel="noreferrer">{t("footer.thirdline")}</a></p>
        </footer>
    );
}

export default Footer;
import React from "react";
import "./style.scss";

/* Translations */
import { useTranslation } from "react-i18next"

const AboutMore = ({ inOpenPage }) => {
    const [t] = useTranslation("global");
    
    return(     
        <div className="aboutParContainer">
            
            <div className="aboutPar">
                <div className="aboutInnerParContainer">
                    <p className="aboutText">{t("about.text1")}</p>
                    <p className="aboutBold">{t("about.bold1")}</p>
                    <p className="aboutText">{t("about.text2")}</p>
                </div>
                <div className="aboutInnerParContainer">
                    <p className="aboutText">{t("about.text3")}</p>
                    <p className="aboutBold">{t("about.bold2")}</p>
                    <p className="aboutText">{t("about.text4")}</p>
                </div>
                <div className="aboutInnerParContainer">
                    <p className="aboutText">{t("about.text5")}</p>
                </div>

                <div className="aboutInnerParContainer">
                    <p className="aboutText">{t("about.text6")}</p>
                    <p className="aboutBold">{t("about.bold3")}</p>
                    <p className="aboutText">{t("about.text7")}</p>
                </div>
                <div className="aboutInnerParContainer">
                    <p className="aboutText">{t("about.text8")}</p>
                </div>
            </div>
            
        </div>
    );
}

export default AboutMore;
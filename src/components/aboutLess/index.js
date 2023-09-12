import "./style.scss";

/* Translations */
import { useTranslation } from "react-i18next";

/* Components */
import Button from "./button";

const AboutLess = ({ onClick }) => {
  const [t] = useTranslation("global");

  return (
    <div className="aboutParContainerLess">
      <div className="aboutInContainer">
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
      </div>

      <div className="aboutButtonContainer">
        <Button title={t("about.more")} onClick={onClick} />
      </div>
    </div>
  );
};

export default AboutLess;

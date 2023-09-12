import "./style.scss";

/* Translations */
import { useTranslation } from "react-i18next";

/* GA4 */
import { GAEvent } from "../../hooks/useGaveEvent";

const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <footer className="footerContainer">
      <p>{t("footer.firstline")}</p>
      <p>
        {t("footer.secondline")}
        <a
          onClick={() => GAEvent("Link", "Link to Portfolio Github")}
          href="https://github.com/diaslucia/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          {t("footer.thirdline")}
        </a>
      </p>
    </footer>
  );
};

export default Footer;

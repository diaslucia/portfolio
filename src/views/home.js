import { useState } from "react";

/* Components */
import NavBar from "../components/navBar/index";
import About from "../components/about/index";
import Home from "../components/home/index";
import Skills from "../components/skills/index";
import Projects from "../components/projects/index";
import Contact from "../components/contact/index";
import Footer from "../components/footer/index";

/* Translations */
import { useTranslation } from "react-i18next";

/* GA4 */
import { GAEvent } from "../hooks/useGaveEvent";

const HomeView = () => {
  const [lang, setLang] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleClick = (e) => {
    e.preventDefault();
    setLang(!lang);
    GAEvent("Click", "Click Lang");
    if (lang === true) {
      i18n.changeLanguage("es");
      document.querySelector(".langSpan").classList.remove("langSpanActive");
    } else {
      i18n.changeLanguage("en");
      document.querySelector(".langSpan").classList.add("langSpanActive");
    }
  };

  return (
    <>
      <NavBar handleClick={handleClick} t={t} />
      <Home />
      <About />
      <Skills />
      <Projects lang={lang} />
      <Contact />
      <Footer />
    </>
  );
};

export default HomeView;

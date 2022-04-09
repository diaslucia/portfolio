import * as React from "react";

import NavBar from "./components/navBar/index";
import About from "./components/about/index";
import Home from "./components/home/index";
import Skills from "./components/skills/index";
import Projects from "./components/projects/index";
import Contact from "./components/contact/index";
import Footer from "./components/footer/index";

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
    
  );
}

export default App;

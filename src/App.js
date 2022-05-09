import * as React from "react";
import { useEffect } from "react";

/* Views */
import HomeView from "./views/home";

/* GA4 */
import ReactGA from "react-ga4";

function App() {

  useEffect(() => {
    ReactGA.initialize('G-ZRW014ZYS5');
    ReactGA.send("pageview");
  })

  return (
    <HomeView/>
  );
}

export default App;

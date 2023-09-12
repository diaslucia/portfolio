import ReactGA from "react-ga4";

export const GAEvent = (category, action) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};

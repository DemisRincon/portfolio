import { Fragment } from "react";
import AboutMe from "./aboutMe";
import Services from "./services";
import Contact from "./contact";
import Projects from "./projects";
import Home from "./home";
const Page = () => {
  return (
    <Fragment>
      <Home />
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default Page;

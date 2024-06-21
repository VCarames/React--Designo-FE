import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import DesignsApp from "../sections/designs/DesignsApp";
import ProjectsApp from "../sections/projects/ProjectsApp";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";

function AppDesign() {
  return (
    <div>
      <Header />
      <main>
        <Intro
          introContentClass="intro__content--app"
          heading="App Design"
          text="Our mobile designs bring intuitive digital solutions
 to your customers right at their fingertips."
        />
        <DesignsApp />
        <ProjectsApp projectsClass="projects--custom" />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default AppDesign;

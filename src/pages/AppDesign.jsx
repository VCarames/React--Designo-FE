import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
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
        <ProjectsApp />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default AppDesign;

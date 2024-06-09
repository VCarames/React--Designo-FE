import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import DesignsWeb from "../sections/designs/DesignsWeb";
import ProjectsWeb from "../sections/projects/ProjectsWeb";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";

function WebDesign() {
  return (
    <div>
      <Header />
      <main>
        <Intro
          introContentClass="intro__content--web"
          heading="Web Design"
          text="We build websites that serve as powerful marketing tools 
and bring memorable brand experiences."
        />
        <DesignsWeb />
        <ProjectsWeb />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default WebDesign;

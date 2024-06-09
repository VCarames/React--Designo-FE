import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import ProjectsGraphic from "../sections/projects/ProjectsGraphic";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";

function GraphicDesign() {
  return (
    <div>
      <Header />
      <main>
        <Intro
          introContentClass="intro__content--graphic"
          heading="Graphic Design"
          text="We deliver eye-catching branding materials that are 
tailored to meet your business objectives.
"
        />
        <ProjectsGraphic />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default GraphicDesign;

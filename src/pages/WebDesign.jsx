import Header from "../components/header/Header";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";
import Intro from "../components/intro/Intro";

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
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default WebDesign;

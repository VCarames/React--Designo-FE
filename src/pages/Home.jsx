import Header from "../components/header/Header";
import Hero from "../sections/hero/Hero";
import ProjectsHome from "../sections/projects/ProjectsHome";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectsHome />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default Home;

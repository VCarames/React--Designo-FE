import Header from "../components/header/Header";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <p>This is the "About" page component</p>

      <main>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default About;

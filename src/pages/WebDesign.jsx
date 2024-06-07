import Header from "../components/header/Header";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";

function WebDesign() {
  return (
    <div>
      <Header />
      <h1>Web Design Page</h1>
      <p>This is the "Web Design" page component</p>

      <main>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default WebDesign;

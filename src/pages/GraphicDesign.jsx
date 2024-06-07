import Header from "../components/header/Header";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";

function GraphicDesign() {
  return (
    <div>
      <Header />
      <h1>Graphic Design Page</h1>
      <p>This is the "Graphic Design" page component</p>

      <main>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default GraphicDesign;

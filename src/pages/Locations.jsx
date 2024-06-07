import Header from "../components/header/Header";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";

function Locations() {
  return (
    <div>
      <Header />
      <h1>Locations Page</h1>
      <p>This is the "Locations" page component</p>

      <main>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default Locations;

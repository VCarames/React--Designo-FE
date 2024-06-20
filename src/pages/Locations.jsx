import Header from "../components/header/Header";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";
import LocationSection from "../sections/locations/LocationSection";

function Locations() {
  return (
    <div>
      <Header />

      <main>
        <h1 className="visually-hidden">Our Locations</h1>
        <LocationSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default Locations;

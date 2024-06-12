import Header from "../components/header/Header";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";
import LocationSection from "../sections/locations/LocationSection";

function Locations() {
  return (
    <div>
      <Header />
      <h1>Locations Page</h1>
      <p>This is the "Locations" page component</p>

      <main>
        <LocationSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default Locations;

import Header from "../components/header/Header";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";

function AppDesign() {
  return (
    <div>
      <Header />
      <h1>App Design Page</h1>
      <p>This is the "App Design" page component</p>

      <main>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default AppDesign;

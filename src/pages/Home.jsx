import Header from "../components/header/Header";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <h1>Home Page</h1>
      <p>This is the "Home" page component</p>

      <main>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default Home;

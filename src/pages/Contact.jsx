import Header from "../components/header/Header";
import HeadquartersSection from "../components/headquarters/HeadquartersSection";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <div>
      <Header />
      <h1>Contact Page</h1>
      <p>This is the "Contact" page component</p>

      <main>
        <HeadquartersSection />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;

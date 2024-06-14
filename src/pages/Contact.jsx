import Header from "../components/header/Header";
import HeadquartersSection from "../components/headquarters/HeadquartersSection";
import Footer from "../components/Footer/Footer";
import ContactUs from "../sections/contact/ContactUs";

function Contact() {
  return (
    <div>
      <Header />

      <main>
        <ContactUs
          heading="Contact Us"
          text="Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line."
        />
        <HeadquartersSection />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;

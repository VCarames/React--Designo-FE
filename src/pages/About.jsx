import Header from "../components/header/Header";
import IntroAbout from "../components/intro/IntroAbout";
import HeadquartersSection from "../components/headquarters/HeadquartersSection";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <div>
      <Header />

      <main>
        <IntroAbout
          imgDesktop="/src/assets/about/desktop/image-about-hero.jpg"
          imgTablet="/src/assets/about/tablet/image-about-hero.jpg"
          img="/src/assets/about/mobile/image-about-hero.jpg"
          heading="About Us"
          text="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
        />
        <HeadquartersSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default About;

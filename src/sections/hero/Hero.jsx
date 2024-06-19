import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__container">
          <div className="hero__container--text">
            <h1 className="hero__heading">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="hero__text">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
          </div>
          <Link className="hero__button button" to="/contact">
            Learn More
          </Link>
        </div>

        <img
          className="hero__img"
          src="src/assets/home/desktop/image-hero-phone.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero;

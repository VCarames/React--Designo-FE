import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <>
      <section className="cta">
        <div className="cta__content">
          <div className="cta__container">
            <h2 className="cta__heading">Let’s talk about your project</h2>
            <p className="cta__text">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <Link className="cta__button button" to="/contact">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}

export default CallToAction;

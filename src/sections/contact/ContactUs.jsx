import ContactForm from "./ContactForm";

function ContactUs({ heading, text }) {
  return (
    <section className="contact">
      <div className="contact__content">
        <div className="contact__container">
          <h1 className="contact__heading">{heading}</h1>
          <p className="contact__text">{text}</p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default ContactUs;

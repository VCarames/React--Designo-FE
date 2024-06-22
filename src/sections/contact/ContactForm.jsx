import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value.trim() !== "") {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Can't be empty";
    if (!formData.email.trim()) {
      newErrors.email = "Can't be empty";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = "Invalid email";
      }
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Can't be empty";
    } else {
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(formData.phone)) {
        newErrors.phone = "Invalid phone number";
      }
    }
    if (!formData.message.trim()) newErrors.message = "Can't be empty";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <form className="contact__form" onSubmit={handleSubmit} noValidate>
      <div className="contact__container--name">
        <label htmlFor="name" className="visually-hidden">
          Name:
        </label>
        <input
          className="contact__input"
          type="text"
          id="name"
          name="name"
          aria-describedby="contact__error--name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && (
          <div
            className="contact__error--name"
            id="error-message--name"
            aria-live="assertive"
          >
            <span className="error-message">{errors.name}</span>
            <img src="/assets/contact/desktop/icon-error.svg" alt="" />
          </div>
        )}
      </div>

      <div className="contact__container--email">
        <label htmlFor="email" className="visually-hidden">
          Email:
        </label>
        <input
          className="contact__input"
          type="email"
          id="email"
          name="email"
          inputMode="email"
          aria-describedby="error-message--email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && (
          <div
            className="contact__error--email"
            id="error-message--email"
            aria-live="assertive"
          >
            <span className="error-message">{errors.email}</span>
            <img src="/assets/contact/desktop/icon-error.svg" alt="" />
          </div>
        )}
      </div>

      <div className="contact__container--phone">
        <label htmlFor="phone" className="visually-hidden">
          Phone:
        </label>
        <input
          className="contact__input"
          type="tel"
          id="phone"
          name="phone"
          inputMode="tel"
          aria-describedby="error-message--phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && (
          <div
            className="contact__error--phone"
            id="error-message--phone"
            aria-live="assertive"
          >
            <span className="error-message">{errors.phone}</span>
            <img src="/assets/contact/desktop/icon-error.svg" alt="" />
          </div>
        )}
      </div>

      <div className="contact__container--message">
        <label htmlFor="message" className="visually-hidden">
          Message:
        </label>
        <textarea
          className="contact__input"
          id="message"
          name="message"
          aria-describedby="error-message--message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {errors.message && (
          <div
            className="contact__error--message"
            id="error-message--message"
            aria-live="assertive"
          >
            <span className="error-message">{errors.message}</span>
            <img src="/assets/contact/desktop/icon-error.svg" alt="" />
          </div>
        )}
      </div>

      <button className="contact__button button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;

import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      setSuccessMessage("Your message has been sent successfully!");
      event.target.reset();
    } else {
      setSuccessMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">Contact Me!</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="f9b7fb0f-d794-49e2-a17e-0d99ff8476cd"
          />

          <div className="input-box">
            <input
              type="text"
              placeholder="Full name"
              name="full_name"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              placeholder="Mobile Number"
              name="mobile_number"
              required
            />
            <input
              type="text"
              placeholder="Email Subject"
              name="subject"
              required
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />

          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
      </section>
    </>
  );
};

export default Contact;

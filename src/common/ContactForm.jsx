import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // You can send the form data to a server or handle it as needed

    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-element">
          <label htmlFor="name">Name</label><br />
          <input
            className="contact-input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="contact-element">
          <label htmlFor="email">Email</label><br />
          <input
            className="contact-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="contact-element">
          <label htmlFor="message">Message</label><br />
          <textarea
            className="contact-input"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

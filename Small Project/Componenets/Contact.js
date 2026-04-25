const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <p>We’d love to hear from you! 💬</p>

      <div className="contact-box">
        <p><strong>Email:</strong> support@foodapp.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
        <p><strong>Location:</strong> India</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
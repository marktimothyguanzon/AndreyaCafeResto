import "../../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-title">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Visit us or send us a message.</p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>
              Andreya Café & Resto<br />
              Kabankalan City,<br />
              Negros Occidental, Philippines
            </p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+63 927 202 3361</p>
          </div>

          <div className="info-box">
            <h3>✉ Email</h3>
            <p>andreyacafe@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Business Hours</h3>
            <p>
              Monday - Friday<br />
              7:00 AM - 9:00 PM<br />
              Saturday - Sunday<br />
              7:00 AM - 10:00 PM
            </p>
          </div>

          <div className="info-box">
            <h3>🌐 Follow Us</h3>

            <div className="socials">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">TikTok</a>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="contact-right">

          {/* Google Map */}

          <div className="map">

            <iframe
              title="Andreya Cafe"
              src="https://www.google.com/maps?q=Kabankalan+City+Negros+Occidental&output=embed"
              loading="lazy"
            ></iframe>

          </div>

          {/* Contact Form */}

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;
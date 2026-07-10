import "../../styles/Footer.css";
import logo from "../../assets/logo/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & Description */}
        <div className="footer-section">
          <img src={logo} alt="Andreya Café & Resto" className="footer-logo" />

          <h3>Andreya Café & Resto</h3>

          <p>
            Serving affordable and delicious meals,
            handcrafted coffee, and memorable dining
            experiences for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact Us</h4>

          <p>📍 Kabankalan City, Negros Occidental</p>

          <p>📞 +63 927 202 3361</p>

          <p>✉ andreyacafe@gmail.com</p>
        </div>

        {/* Opening Hours */}
        <div className="footer-section">
          <h4>Opening Hours</h4>

          <p>Monday - Friday</p>
          <p>7:00 AM - 9:00 PM</p>

          <br />

          <p>Saturday - Sunday</p>
          <p>7:00 AM - 10:00 PM</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Andreya Café & Resto.
        All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
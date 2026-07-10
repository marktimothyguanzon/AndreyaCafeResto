import { useState } from "react";
import logo from "../../assets/logo/logo.png";
import "../../styles/Header.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="container">

        <div className="logo">
          <img src={logo} alt="Andreya Café & Resto" />
        </div>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        <nav className={menuOpen ? "nav active" : "nav"}>
          <ul>

            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>

            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>

            <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a></li>

            <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>

            <li><a href="#reservation" onClick={() => setMenuOpen(false)}>Reservation</a></li>

            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

          </ul>
        </nav>

      </div>

    </header>
  );
}

export default Navbar;
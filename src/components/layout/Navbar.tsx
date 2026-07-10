import { useState } from "react";
import logo from "../../assets/logo/logo.png";
import "../../styles/Header.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">

      <div className="container">

        <div className="logo">
          <img src={logo} alt="Andreya Café & Resto" />
        </div>

        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={open ? "nav active" : "nav"}>

          <ul>

            <li><a href="#home" onClick={()=>setOpen(false)}>Home</a></li>

            <li><a href="#about" onClick={()=>setOpen(false)}>About</a></li>

            <li><a href="#menu" onClick={()=>setOpen(false)}>Menu</a></li>

            <li><a href="#gallery" onClick={()=>setOpen(false)}>Gallery</a></li>

            <li><a href="#reservation" onClick={()=>setOpen(false)}>Reservation</a></li>

            <li><a href="#contact" onClick={()=>setOpen(false)}>Contact</a></li>

          </ul>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;
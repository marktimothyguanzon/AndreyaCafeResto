import logo from "../../assets/logo/logo.png";
import "../../styles/Navbar.css";
function Navbar() {
  return (
    <header>
       <div className="logo">
          <img src={logo} alt="Andreya Café & Resto" />
        </div>
      <nav>
        <h2>Andreya Café & Resto</h2>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Gallery</li>
          <li>Reservations</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
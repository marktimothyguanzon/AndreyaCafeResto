import logo from "../../assets/logo/logo.png";
import "../../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">

        <div className="logo">
          <img src={logo} alt="Andreya Café & Resto" />
        </div>

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;
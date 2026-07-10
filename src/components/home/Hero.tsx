import { useState } from "react";
import "../../styles/Hero.css";
import MenuModal from "../ui/MenuModal";

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-overlay">

          <h1></h1>

          <p>
           
          </p>

          <div className="hero-buttons">

            <button
              className="secondary"
              onClick={() => setIsMenuOpen(true)}
            >
              View Menu
            </button>

          </div>

        </div>
      </section>

      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Hero;
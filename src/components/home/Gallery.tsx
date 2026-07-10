import "../../styles/Gallery.css";

import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";
import gallery3 from "../../assets/images/gallery3.png";
import gallery4 from "../../assets/images/gallery4.png";
import gallery5 from "../../assets/images/gallery5.png";
import gallery6 from "../../assets/images/gallery6.png";
import gallery7 from "../../assets/images/gallery7.png";

function Gallery() {
  return (
    <section className="gallery">

      <div className="container">

        <div className="section-title">
          <span>PHOTO GALLERY</span>

          <h2>Moments at Andreya Café & Resto</h2>

          <p>
            Take a glimpse of our delicious meals, handcrafted coffee,
            cozy interiors, and memorable dining experiences.
          </p>
        </div>

        <div className="gallery-grid">

          <img src={gallery1} alt="Burger" />
          <img src={gallery2} alt="Pasta" />
          <img src={gallery3} alt="Coffee" />
          <img src={gallery4} alt="Dessert" />
          <img src={gallery5} alt="Restaurant Interior" />
          <img src={gallery6} alt="Dining Experience" />
          <img src={gallery7} alt="Crews" />

        </div>

      </div>

    </section>
  );
}

export default Gallery;
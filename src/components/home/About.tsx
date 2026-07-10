import "../../styles/About.css";
import aboutImage from "../../assets/images/about.png";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src={aboutImage}
          alt="Andreya Café & Resto"
        />
      </div>

      <div className="about-content">

        <span className="section-tag">
          ABOUT US
        </span>

        <h2>
          Welcome to Andreya Café & Resto
        </h2>

        <p>
          Andreya Café & Resto is your neighborhood casual dining destination,
          serving delicious meals, handcrafted coffee, and refreshing drinks in
          a warm and welcoming atmosphere. Whether you're dining with family,
          meeting friends, or enjoying a quiet coffee break, we strive to make
          every visit enjoyable and memorable.
        </p>

        <div className="about-features">

          <div className="feature">
            🍽️ Freshly Prepared Meals
          </div>

          <div className="feature">
            ☕ Premium Coffee & Refreshments
          </div>

          <div className="feature">
            💰 Great Food at Affordable Prices
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
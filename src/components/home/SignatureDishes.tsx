import "../../styles/SignatureDishes.css";

import burger from "../../assets/images/burger.png";
import pasta from "../../assets/images/pasta.png";
import coffee from "../../assets/images/coffee.png";

function SignatureDishes() {
  return (
    <section className="signature">
      <div className="container">

        <h2>Our Signature Dishes</h2>
        <p className="subtitle">
          Freshly prepared favorites that our guests keep coming back for.
        </p>

        <div className="dish-grid">

          <div className="dish-card">
            <img src={burger} alt="Classic Burger" />
            <h3>Classic Burger</h3>
            <p>
              Juicy beef patty with fresh vegetables,
              melted cheese and crispy fries.
            </p>
          </div>

          <div className="dish-card">
            <img src={pasta} alt="Creamy Pasta" />
            <h3>Creamy Pasta</h3>
            <p>
              Rich creamy sauce tossed with perfectly
              cooked pasta and premium ingredients.
            </p>
          </div>

          <div className="dish-card">
            <img src={coffee} alt="Premium Coffee" />
            <h3>Premium Coffee</h3>
            <p>
              Freshly brewed coffee made from quality
              beans for the perfect cup every time.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SignatureDishes;
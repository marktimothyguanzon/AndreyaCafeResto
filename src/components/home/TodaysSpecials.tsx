import "../../styles/TodaysSpecials.css";

import special1 from "../../assets/images/special1.png";
import special2 from "../../assets/images/special2.png";
import special3 from "../../assets/images/special3.png";

function TodaysSpecials() {
  return (
    <section className="today-specials">
      <div className="container">

        <div className="section-title">
          <span>CHEF'S RECOMMENDATION</span>
          <h2>Today's Specials</h2>
          <p>
            Freshly prepared meals made with quality ingredients and served with care.
          </p>
        </div>

        <div className="special-grid">

          <div className="special-card">
            <img src={special1} alt="Grilled Chicken" />

            <div className="special-content">
              <h3>Grilled Chicken Meal</h3>

              <p>
                Juicy grilled chicken served with steamed rice and fresh vegetables.
              </p>

              <span className="price">₱249</span>
            </div>
          </div>

          <div className="special-card">
            <img src={special2} alt="Creamy Pasta" />

            <div className="special-content">
              <h3>Creamy Chicken Alfredo</h3>

              <p>
                Rich and creamy pasta topped with tender chicken and parmesan cheese.
              </p>

              <span className="price">₱279</span>
            </div>
          </div>

          <div className="special-card">
            <img src={special3} alt="Coffee and Dessert" />

            <div className="special-content">
              <h3>Coffee & Cake Combo</h3>

              <p>
                Fresh brewed coffee paired with our homemade cake of the day.
              </p>

              <span className="price">₱189</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TodaysSpecials;
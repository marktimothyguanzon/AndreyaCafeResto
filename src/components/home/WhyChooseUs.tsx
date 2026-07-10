import "../../styles/WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why">

      <div className="section-title">

        <span>WHY CHOOSE US</span>

        <h2>
          More Than Just Great Food
        </h2>

        <p>
          At Andreya Café & Resto, we combine delicious food,
          affordable prices, and outstanding hospitality to
          create a memorable dining experience for everyone.
        </p>

      </div>

      <div className="why-grid">

        <div className="why-card">
          <div className="icon">🍽️</div>

          <h3>Freshly Prepared</h3>

          <p>
            Every meal is cooked fresh using quality ingredients.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">💰</div>

          <h3>Affordable Prices</h3>

          <p>
            Delicious food that fits every budget.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">☕</div>

          <h3>Premium Coffee</h3>

          <p>
            Enjoy freshly brewed coffee and refreshing beverages.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">❤️</div>

          <h3>Warm Hospitality</h3>

          <p>
            Friendly service that makes every visit memorable.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;
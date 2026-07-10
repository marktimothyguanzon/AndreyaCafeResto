import "../../styles/Featured.css";

function Featured() {
  return (
    <section className="featured">

      <div className="section-title">
        <h2>Our Best Sellers</h2>
        <p>Freshly prepared favorites loved by our customers.</p>
      </div>

      <div className="featured-grid">

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=600"
            alt="Burger"
          />
          <h3>Classic Burger</h3>
          <p>Juicy grilled beef with fresh vegetables.</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
            alt="Pizza"
          />
          <h3>Cheese Pizza</h3>
          <p>Loaded with premium mozzarella cheese.</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600"
            alt="Rice Meal"
          />
          <h3>Rice Meals</h3>
          <p>Filipino favorites served hot every day.</p>
        </div>

      </div>

    </section>
  );
}

export default Featured;
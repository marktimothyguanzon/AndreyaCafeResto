import "../../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">

        <div className="section-title">
          <span>WHAT OUR GUESTS SAY</span>

          <h2>Customer Testimonials</h2>

          <p>
            Here's what our valued customers have to say about their dining experience.
          </p>
        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>

            <p>
              "The food was absolutely delicious, and the staff were incredibly
              friendly. We'll definitely come back!"
            </p>

            <h4>Maria Santos</h4>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>

            <p>
              "Affordable prices with generous servings. The ambiance is cozy,
              clean, and perfect for family gatherings."
            </p>

            <h4>John Reyes</h4>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>

            <p>
              "One of the best cafés in town! Their coffee and pasta are my
              favorite. Highly recommended!"
            </p>

            <h4>Angela Cruz</h4>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
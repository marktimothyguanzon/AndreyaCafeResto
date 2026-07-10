import "../../styles/Reservation.css";

function Reservation() {
  return (
    <section className="reservation" id="reservation">
      <div className="reservation-container">

        <div className="reservation-text">
          <h2>Reserve Your Table</h2>

          <p>
            Planning a family dinner, date night, or celebration?
            Reserve your table today and let Andreya Café & Resto
            make your dining experience memorable.
          </p>
        </div>

        <form className="reservation-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="date"
          />

          <input
            type="time"
          />

          <select>
            <option>Number of Guests</option>
            <option>1 Person</option>
            <option>2 People</option>
            <option>3 People</option>
            <option>4 People</option>
            <option>5 People</option>
            <option>6+ People</option>
          </select>

          <textarea
            rows={5}
            placeholder="Special Requests"
          ></textarea>

          <button type="submit">
            Reserve Now
          </button>

        </form>

      </div>
    </section>
  );
}

export default Reservation;
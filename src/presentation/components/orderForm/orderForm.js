import "./orderForm.css";

function CustomerForm() {
  return (
    <form>
      <div className="order-form">
        {" "}
        <h1>customer and re-grip information</h1>
        <div className="form-field">
          <label for="first-name">first name: </label>
          <input type="text" name="firstname" required></input>
          <label for="last-name">last name: </label>
          <input type="text" name="lastname" required></input>
          <label for="street-address">street address: </label>
          <input type="text" name="street address" required></input>
          <label for="phone-number">phone number: </label>
          <input type="text" name="phone number" required></input>
          <label for="email">email: </label>
          <input type="text" name="email" required></input>
        </div>
        <div className="grip-details">
          <h2>grip details</h2>
          <label for="total clubs">total clubs: </label>
          <input type="number" name="total_clubs" required></input>
          <h2>total wraps</h2>
          <div className="radio-group">
            <label for="total wraps">1</label>
            <input
              type="radio"
              id="total_wraps"
              value="total_wraps"
              name="club_wraps"
              required
            ></input>
            <label for="total wraps">2</label>
            <input
              type="radio"
              id="total_wraps"
              value="total_wraps"
              name="club_wraps"
              required
            ></input>
            <label for="total wraps">3</label>
            <input
              type="radio"
              id="total_wraps"
              value="total_wraps"
              name="club_wraps"
              required
            ></input>
            <h3>logo orientation</h3>
            <label for="logo orientation">
              <span></span>up
            </label>
            <input
              type="radio"
              id="logo-orientation"
              value="logo-orientation"
              name="logo_orientation"
              class="dark"
              required
            ></input>
            <label className="radio" for="logo orientation">
              down<span></span>
            </label>
            <input
              type="radio"
              id="logo-orientation"
              value="logo-orientation"
              name="logo_orientation"
              class="dark"
              required
            ></input>
          </div>
        </div>
        <div className="pricing-container">
          <h2>pricing</h2>
          <div className="price-list">
            <ul>
              <li>5 or less grips: $20</li>
              <li>6 or more grips: $30</li>
              <li>pick-up service: $10</li>
              <li>drop-off service: $10</li>
            </ul>
          </div>
        </div>
        <div className="submit-btn">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
export default CustomerForm;

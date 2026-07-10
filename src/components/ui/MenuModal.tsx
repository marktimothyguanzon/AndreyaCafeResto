import "../../styles/MenuModal.css";

type MenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MenuModal({ isOpen, onClose }: MenuModalProps) {

  if (!isOpen) return null;

  return (

    <div className="modal-overlay">

      <div className="menu-modal">

        <div className="modal-header">

          <h2>Andreya Café & Resto Menu</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <div className="modal-body">

          {/* BREAKFAST */}

          <h3>☀ Breakfast Favorites</h3>

          <p className="subtitle">
            Served until 10:00 AM
          </p>

          <table>

            <tbody>

              <tr>
                <td>Filipino Breakfast (Longganisa, Egg & Rice)</td>
                <td>₱139</td>
              </tr>

              <tr>
                <td>Beef Tapa with Egg & Rice</td>
                <td>₱169</td>
              </tr>

              <tr>
                <td>Corned Beef with Egg & Rice</td>
                <td>₱149</td>
              </tr>

              <tr>
                <td>Tocino with Egg & Rice</td>
                <td>₱149</td>
              </tr>

              <tr>
                <td>Spam with Egg & Rice</td>
                <td>₱169</td>
              </tr>

              <tr>
                <td>Bangus with Egg & Rice</td>
                <td>₱179</td>
              </tr>

              <tr>
                <td>Bacon with Egg & Rice</td>
                <td>₱169</td>
              </tr>

            </tbody>

          </table>

          <hr />

          {/* APPETIZERS */}

          <h3>🍗 Appetizers</h3>

          <table>

            <tbody>

              <tr>
                <td>French Fries</td>
                <td>₱89</td>
              </tr>

              <tr>
                <td>Cheese Fries</td>
                <td>₱109</td>
              </tr>

              <tr>
                <td>Loaded Fries</td>
                <td>₱149</td>
              </tr>

              <tr>
                <td>Chicken Nuggets (6 pcs)</td>
                <td>₱139</td>
              </tr>

              <tr>
                <td>Mozzarella Sticks</td>
                <td>₱159</td>
              </tr>

              <tr>
                <td>Calamari</td>
                <td>₱189</td>
              </tr>

              <tr>
                <td>Onion Rings</td>
                <td>₱109</td>
              </tr>

              <tr>
                <td>Nachos Supreme</td>
                <td>₱199</td>
              </tr>

            </tbody>

          </table>

          <hr />

          {/* RICE MEALS */}

          <h3>🍛 RICE MEALS</h3>

          <table>

            <tbody>

              <tr>
                <td>Crispy Chicken Fillet</td>
                <td>₱169</td>
              </tr>

              <tr>
                <td>Chicken Teriyaki</td>
                <td>₱189</td>
              </tr>

              <tr>
                <td>Pork Sisig</td>
                <td>₱189</td>
              </tr>

              <tr>
                <td>Pork BBQ (2 sticks)</td>
                <td>₱179</td>
              </tr>

              <tr>
                <td>Beef Caldereta</td>
                <td>₱219</td>
              </tr>

              <tr>
                <td>Beef Kare-Kare</td>
                <td>₱239</td>
              </tr>

              <tr>
                <td>Pork Steak</td>
                <td>₱199</td>
              </tr>

              <tr>
                <td>Chicken Adobo</td>
                <td>₱179</td>
              </tr>

              <tr>
                <td>Sweet & Sour Pork</td>
                <td>₱199</td>
              </tr>

              <tr>
                <td>Buttered Chicken</td>
                <td>₱199</td>
              </tr>

              <tr>
                <td>Garlic Butter Shrimp</td>
                <td>₱249</td>
              </tr>

            </tbody>

          </table>

          <hr />

          {/* PASTA */}

          <h3>🍝 PASTA </h3>

          <table>

            <tbody>

              <tr>
                <td>Filipino Style Spaghetti</td>
                <td>₱159</td>
              </tr>

              <tr>
                <td>Creamy Carbonara</td>
                <td>₱199</td>
              </tr>

              <tr>
                <td>Chicken Alfredo</td>
                <td>₱299</td>
              </tr>

              <tr>
                <td>Pesto Pasta</td>
                <td>₱189</td>
              </tr>

              <tr>
                <td>Seafood Marinara</td>
                <td>₱249</td>
              </tr>

              <tr>
                <td>Aglio e Olio</td>
                <td>₱189</td>
              </tr>

            </tbody>

          </table>

          <hr />

           {/* PIZZA */}

          <h3>🍕 PIZZA (10") </h3>

          <table>

            <tbody>

              <tr>
                <td>Hawaiian</td>
                <td>₱329</td>
              </tr>

              <tr>
                <td>Pepperoni</td>
                <td>₱349</td>
              </tr>

              <tr>
                <td>All Meat</td>
                <td>₱389</td>
              </tr>

              <tr>
                <td>Supreme</td>
                <td>₱399</td>
              </tr>

              <tr>
                <td>Four Cheese</td>
                <td>₱349</td>
              </tr>

              <tr>
                <td>BBQ Chicken</td>
                <td>₱389</td>
              </tr>

            </tbody>

          </table>

          <hr />

        {/* BURGERS */}

          <h3>🍔 BURGERS </h3>

          <table>

            <tbody>

              <tr>
                <td>Classic Cheeseburger</td>
                <td>₱169</td>
              </tr>

              <tr>
                <td>Double Cheeseburger</td>
                <td>₱249</td>
              </tr>

              <tr>
                <td>Crispy Chicken Burger</td>
                <td>₱179</td>
              </tr>

              <tr>
                <td>BBQ Bacon Burger</td>
                <td>₱239</td>
              </tr>

              <tr>
                <td><i>Served with fries</i></td>
                <td></td>
              </tr>

            </tbody>

          </table>

          <hr />

          {/* HOUSE SPECIALS */}

<h3>🥩 HOUSE SPECIALS</h3>

<table>

  <tbody>

    <tr>
      <td>Pork Baby Back Ribs</td>
      <td>₱499</td>
    </tr>

    <tr>
      <td>Grilled Pork Belly</td>
      <td>₱249</td>
    </tr>

    <tr>
      <td>Crispy Pata (Sharing)</td>
      <td>₱799</td>
    </tr>

    <tr>
      <td>Beef Steak</td>
      <td>₱359</td>
    </tr>

    <tr>
      <td>Fish Fillet with Rice</td>
      <td>₱219</td>
    </tr>

  </tbody>

</table>

<hr />

{/* SALADS */}

<h3>🥗 SALADS</h3>

<table>

  <tbody>

    <tr>
      <td>Caesar Salad</td>
      <td>₱189</td>
    </tr>

    <tr>
      <td>Garden Salad</td>
      <td>₱169</td>
    </tr>

    <tr>
      <td>Chicken Caesar Salad</td>
      <td>₱239</td>
    </tr>

    <tr>
      <td>Tuna Salad</td>
      <td>₱229</td>
    </tr>

  </tbody>

</table>

<hr />

{/* DESSERTS */}

<h3>🍰 DESSERTS</h3>

<table>

  <tbody>

    <tr>
      <td>Chocolate Cake Slice</td>
      <td>₱149</td>
    </tr>

    <tr>
      <td>Cheesecake</td>
      <td>₱159</td>
    </tr>

    <tr>
      <td>Brownie à la Mode</td>
      <td>₱189</td>
    </tr>

    <tr>
      <td>Ice Cream Sundae</td>
      <td>₱119</td>
    </tr>

    <tr>
      <td>Halo-Halo Special</td>
      <td>₱159</td>
    </tr>

  </tbody>

</table>

<hr />

{/* HOT COFFEE */}

<h3>☕ HOT COFFEE</h3>

<table>

  <tbody>

    <tr>
      <td>Espresso</td>
      <td>₱99</td>
    </tr>

    <tr>
      <td>Americano</td>
      <td>₱109</td>
    </tr>

    <tr>
      <td>Café Latte</td>
      <td>₱129</td>
    </tr>

    <tr>
      <td>Cappuccino</td>
      <td>₱129</td>
    </tr>

    <tr>
      <td>Vanilla Latte</td>
      <td>₱139</td>
    </tr>

    <tr>
      <td>Caramel Macchiato</td>
      <td>₱149</td>
    </tr>

    <tr>
      <td>Mocha</td>
      <td>₱149</td>
    </tr>

    <tr>
      <td>Hazelnut Latte</td>
      <td>₱149</td>
    </tr>

  </tbody>

</table>

<hr />

{/* ICED COFFEE */}

<h3>🧊 ICED COFFEE</h3>

<table>

  <tbody>

    <tr>
      <td>Iced Americano</td>
      <td>₱119</td>
    </tr>

    <tr>
      <td>Iced Latte</td>
      <td>₱139</td>
    </tr>

    <tr>
      <td>Iced Mocha</td>
      <td>₱149</td>
    </tr>

    <tr>
      <td>Caramel Latte</td>
      <td>₱149</td>
    </tr>

    <tr>
      <td>Vanilla Latte</td>
      <td>₱149</td>
    </tr>

    <tr>
      <td>Spanish Latte</td>
      <td>₱159</td>
    </tr>

    <tr>
      <td>Hazelnut Latte</td>
      <td>₱159</td>
    </tr>

  </tbody>

</table>

<hr />

{/* NON-COFFEE */}

<h3>🥤 NON-COFFEE</h3>

<table>

  <tbody>

    <tr>
      <td>Chocolate</td>
      <td>₱139</td>
    </tr>

    <tr>
      <td>Matcha Latte</td>
      <td>₱149</td>
    </tr>

    <tr>
      <td>Cookies & Cream</td>
      <td>₱149</td>
    </tr>

    <tr>
      <td>Strawberry Milk</td>
      <td>₱149</td>
    </tr>

    <tr>
      <td>Taro Milk</td>
      <td>₱149</td>
    </tr>

  </tbody>

</table>

<hr />

{/* FRUIT REFRESHERS */}

<h3>🍓 FRUIT REFRESHERS</h3>

<table>

  <tbody>

    <tr>
      <td>Lemon Iced Tea</td>
      <td>₱99</td>
    </tr>

    <tr>
      <td>Strawberry Lemonade</td>
      <td>₱129</td>
    </tr>

    <tr>
      <td>Blueberry Lemonade</td>
      <td>₱129</td>
    </tr>

    <tr>
      <td>Mango Cooler</td>
      <td>₱139</td>
    </tr>

    <tr>
      <td>Green Apple Soda</td>
      <td>₱129</td>
    </tr>

    <tr>
      <td>Lychee Soda</td>
      <td>₱129</td>
    </tr>

  </tbody>

</table>

<hr />

{/* MILK TEA */}

<h3>🥤 MILK TEA</h3>

<table>

  <tbody>

    <tr>
      <td>Classic Milk Tea</td>
      <td>₱119</td>
    </tr>

    <tr>
      <td>Wintermelon</td>
      <td>₱129</td>
    </tr>

    <tr>
      <td>Okinawa</td>
      <td>₱129</td>
    </tr>

    <tr>
      <td>Hokkaido</td>
      <td>₱129</td>
    </tr>

    <tr>
      <td>Taro</td>
      <td>₱129</td>
    </tr>

    <tr>
      <td>Brown Sugar</td>
      <td>₱139</td>
    </tr>

  </tbody>

</table>

<hr />

{/* FRUIT SHAKES */}

<h3>🍹 FRUIT SHAKES</h3>

<table>

  <tbody>

    <tr>
      <td>Mango</td>
      <td>₱139</td>
    </tr>

    <tr>
      <td>Banana</td>
      <td>₱129</td>
    </tr>

    <tr>
      <td>Avocado</td>
      <td>₱149</td>
    </tr>

    <tr>
      <td>Strawberry</td>
      <td>₱149</td>
    </tr>

    <tr>
      <td>Mixed Berry</td>
      <td>₱159</td>
    </tr>

  </tbody>

</table>

<hr />

{/* SOFT DRINKS */}

<h3>🥤 SOFT DRINKS</h3>

<table>

  <tbody>

    <tr>
      <td>Coke</td>
      <td>₱55</td>
    </tr>

    <tr>
      <td>Coke Zero</td>
      <td>₱55</td>
    </tr>

    <tr>
      <td>Sprite</td>
      <td>₱55</td>
    </tr>

    <tr>
      <td>Royal</td>
      <td>₱55</td>
    </tr>

    <tr>
      <td>Bottled Water</td>
      <td>₱35</td>
    </tr>

  </tbody>

</table>

<hr />

{/* ANDREYA SIGNATURES */}

<h3>⭐ ANDREYA SIGNATURES</h3>

<table>

  <tbody>

    <tr>
      <td>Andreya Signature Burger</td>
      <td>₱299</td>
    </tr>

    <tr>
      <td>Signature Chicken Alfredo</td>
      <td>₱259</td>
    </tr>

    <tr>
      <td>Andreya Mixed Platter (Good for 2–3)</td>
      <td>₱699</td>
    </tr>

    <tr>
      <td>Andreya Seafood Rice</td>
      <td>₱329</td>
    </tr>

    <tr>
      <td>Signature Spanish Latte</td>
      <td>₱169</td>
    </tr>

    <tr>
      <td>Andreya Chocolate Frappe</td>
      <td>₱179</td>
    </tr>

  </tbody>

</table>

<hr />

        </div>

      </div>

    </div>

  );
}

export default MenuModal;
import "../../styles/MenuModal.css";
import notebook from "../../assets/images/notebook-paper.jpg";

interface MenuModalProps {
  onClose: () => void;
}

const breakfast = [
  ["Filipino Breakfast (Longganisa, Egg & Rice)", "₱139"],
  ["Beef Tapa with Egg &Rice", "₱169"],
  ["Corned Beef with Egg & Rice", "₱149"],
  ["Tocino with Egg & Rice", "₱149"],
  ["Spam with Egg & Rice", "₱169"],
  ["Bangus with Egg & Rice", "₱179"],
  ["Bacon with Egg & Rice", "₱169"],
  ["Ham & Egg Sandwich", "₱119"],
  ["Classic Clubhouse Sandwich", "₱169"],
];

const appetizers = [
  ["French Fries", "₱89"],
  ["Cheese Fries", "₱109"],
  ["Loaded Fries", "₱149"],
  ["Chicken Nuggets (6 pcs)", "₱139"],
  ["Mozzarella Sticks", "₱159"],
  ["Calamari", "₱189"],
  ["Onion Rings", "₱109"],
  ["Nachos Supreme", "₱199"],
];

const riceMeals = [
  ["Crispy Chicken Fillet", "₱169"],
  ["Chicken Teriyaki", "₱189"],
  ["Pork Sisig", "₱189"],
  ["Pork BBQ (2 sticks)", "₱179"],
  ["Beef Caldereta", "₱219"],
  ["Beef Kare-Kare", "₱239"],
  ["Pork Steak", "₱199"],
  ["Chicken Adobo", "₱179"],
  ["Sweet & Sour Pork", "₱199"],
  ["Buttered Chicken", "₱199"],
  ["Garlic Butter Shrimp", "₱269"],
];

const pasta = [
  ["Filipino Style Spaghetti", "₱159"],
  ["Creamy Carbonara", "₱199"],
  ["Chicken Alfredo", "₱229"],
  ["Seafood Marinara", "₱249"],
  ["Aglio e Olio", "₱189"],
  ["Pesto Pasta", "₱209"],
];

const pizza = [
  ["Hawaiian", "₱329"],
  ["Pepperoni", "₱349"],
  ["All Meat", "₱389"],
  ["Supreme", "₱399"],
  ["Four Cheese", "₱359"],
  ["BBQ Chicken", "₱389"],
];

const burgers = [
  ["Classic Cheeseburger", "₱169"],
  ["Double Cheeseburger", "₱249"],
  ["Crispy Chicken Burger", "₱179"],
  ["BBQ Bacon Burger", "₱239"],
];

const houseSpecials = [
  ["Pork Baby Back Ribs", "₱499"],
  ["Grilled Pork Belly", "₱249"],
  ["Crispy Pata (Sharing)", "₱799"],
  ["Beef Steak", "₱359"],
  ["Fish Fillet with Rice", "₱219"],
];

const salads = [
  ["Caesar Salad", "₱189"],
  ["Garden Salad", "₱169"],
  ["Chicken Caesar Salad", "₱239"],
  ["Tuna Salad", "₱229"],
];

const desserts = [
  ["Chocolate Cake Slice", "₱149"],
  ["Cheesecake", "₱159"],
  ["Brownie à la Mode", "₱189"],
  ["Ice Cream Sundae", "₱119"],
  ["Halo-Halo Special", "₱159"],
];

const hotCoffee = [
  ["Espresso", "₱99"],
  ["Americano", "₱109"],
  ["Café Latte", "₱129"],
  ["Cappuccino", "₱129"],
  ["Vanilla Latte", "₱139"],
  ["Caramel Macchiato", "₱149"],
  ["Mocha", "₱149"],
  ["Hazelnut Latte", "₱149"],
];

const icedCoffee = [
  ["Iced Americano", "₱119"],
  ["Iced Latte", "₱139"],
  ["Iced Mocha", "₱149"],
  ["Caramel Latte", "₱149"],
  ["Vanilla Latte", "₱149"],
  ["Spanish Latte", "₱159"],
  ["Hazelnut Latte", "₱159"],
];

const nonCoffee = [
  ["Chocolate", "₱139"],
  ["Matcha Latte", "₱149"],
  ["Cookies & Cream", "₱149"],
  ["Strawberry Milk", "₱149"],
  ["Taro Milk", "₱149"],
];

const refreshers = [
  ["Lemon Iced Tea", "₱99"],
  ["Strawberry Lemonade", "₱129"],
  ["Blueberry Lemonade", "₱129"],
  ["Mango Cooler", "₱139"],
  ["Green Apple Soda", "₱129"],
  ["Lychee Soda", "₱129"],
];

const milkTea = [
  ["Classic Milk Tea", "₱119"],
  ["Wintermelon", "₱129"],
  ["Okinawa", "₱129"],
  ["Hokkaido", "₱129"],
  ["Taro", "₱129"],
  ["Brown Sugar", "₱139"],
];

const fruitShakes = [
  ["Mango", "₱139"],
  ["Banana", "₱129"],
  ["Avocado", "₱149"],
  ["Strawberry", "₱149"],
  ["Mixed Berry", "₱159"],
];

const softDrinks = [
  ["Coke", "₱55"],
  ["Coke Zero", "₱55"],
  ["Sprite", "₱55"],
  ["Royal", "₱55"],
  ["Bottled Water", "₱35"],
];

const signatures = [
  ["Andreya Signature Burger", "₱299"],
  ["Signature Chicken Alfredo", "₱259"],
  ["Andreya Mixed Platter (Good for 2–3)", "₱699"],
  ["Andreya Seafood Rice", "₱329"],
  ["Signature Spanish Latte", "₱169"],
  ["Andreya Chocolate Frappe", "₱179"],
];

function renderTable(items: string[][]) {
  return (
    <table>
      <tbody>
        {items.map(([name, price]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function MenuModal({ onClose }: MenuModalProps) {
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

        <div
          className="modal-body"
          style={{
            backgroundImage: `url(${notebook})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <h3>☀️ BREAKFAST FAVORITES</h3>

          <p className="subtitle">Served until 10:30 AM</p>

          {renderTable(breakfast)}

          <hr />

          <h3>🍗 APPETIZERS</h3>

          {renderTable(appetizers)}

          <hr />

          <h3>🍛 RICE MEALS</h3>

          {renderTable(riceMeals)}

          <hr />

          <h3>🍝 PASTA</h3>

          {renderTable(pasta)}

          <hr />

          <h3>🍕 PIZZA (10")</h3>

          {renderTable(pizza)}

          <hr />

          <h3>🍔 BURGERS</h3>

          {renderTable(burgers)}

          <table>
            <tbody>
              <tr>
                <td>
                  <i>Served with fries.</i>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h3>🥩 HOUSE SPECIALS</h3>

{renderTable(houseSpecials)}

<hr />

<h3>🥗 SALADS</h3>

{renderTable(salads)}

<hr />

<h3>🍰 DESSERTS</h3>

{renderTable(desserts)}

<hr />

<h3>☕ HOT COFFEE</h3>

{renderTable(hotCoffee)}

<hr />

<h3>🧊 ICED COFFEE</h3>

{renderTable(icedCoffee)}

<hr />

<h3>🥤 NON-COFFEE</h3>

{renderTable(nonCoffee)}

<hr />

<h3>🍓 FRUIT REFRESHERS</h3>

{renderTable(refreshers)}

<hr />

<h3>🧋 MILK TEA</h3>

{renderTable(milkTea)}

<hr />

<h3>🍹 FRUIT SHAKES</h3>

{renderTable(fruitShakes)}

<hr />

<h3>🥤 SOFT DRINKS</h3>

{renderTable(softDrinks)}

<hr />

<h3>⭐ ANDREYA SIGNATURES</h3>

{renderTable(signatures)}

        </div>

      </div>

    </div>
  );
}
import { useState } from "react";
import { useCart } from "./Cartcontent";
//import "./cake.css";
import "./Fruitsweets.css"

import custard from "./assets/Fruit Custard.jpg";
import mango from "./assets/Mango Delight.jpg";
import strawberry from "./assets/Strawberry Deligh.jpg";
import pineapple from "./assets/Pineapple Halwa.jpg";
import jelly from "./assets/Fruit Jelly.jpg";
import laddu from "./assets/Dry Fruit Laddu.jpg";

function FruitSweets() {
  const { addToCart } = useCart();

  const fruitsweets = [
    { id: 1, name: "Fruit Custard", image: custard, price: 120, offer: "10% OFF" },
    { id: 2, name: "Mango Delight", image: mango, price: 140, offer: "15% OFF" },
    { id: 3, name: "Strawberry Deligh", image: strawberry, price: 130, offer: "12% OFF" },
    { id: 4, name: "Pineapple Halwa", image: pineapple, price: 150, offer: "18% OFF" },
    { id: 5, name: "Fruit Jelly", image: jelly, price: 100, offer: "10% OFF" },
    { id: 6, name: "Dry Fruit Laddu", image: laddu, price: 180, offer: "15% OFF" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartMsg, setCartMsg] = useState(false);

  return (
    <div className="cakes-page">
      <h1>Fruit-Based Sweets</h1>

      {cartMsg && <div className="toast">Item added to cart successfully ✅</div>}

      <div className="cake-grid">
        {fruitsweets.map((item) => (
          <div key={item.id} className="cake-card">
            <img src={item.image} alt={item.name} />
            <div className="cake-name">{item.name}</div>
            <button
              className="buy-now"
              onClick={() => {
                setSelectedItem(item);
                setQuantity(1);
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {selectedItem && (
  <div className="popup-overlay">
    <div className="popup">
      <h2>{selectedItem.name}</h2>

      {/* Weight Selection */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        <option value={0.25}>1/4 kg</option>
        <option value={0.5}>1/2 kg</option>
        <option value={0.75}>3/4 kg</option>
        <option value={1}>1 kg</option>
        <option value={1.5}>1.5 Kg</option>
  <option value={2}>2 Kg</option>
  <option value={2.5}>2.5 Kg</option>
  <option value={3}>3 Kg</option>
  <option value={5}>5 Kg</option>
      </select>

      <p>
        ₹{(selectedItem.price * quantity).toFixed(2)}
      </p>

      <button
        onClick={() => {
          addToCart({
            ...selectedItem,
            quantity,
            totalPrice: selectedItem.price * quantity,
          });
          setSelectedItem(null);
        }}
      >
        Add to Cart
      </button>

      <button onClick={() => setSelectedItem(null)}>Close</button>
    </div>
  </div>
)}
        
    </div>
  );
}

export default FruitSweets;

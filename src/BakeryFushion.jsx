import { useState } from "react";
import { useCart } from "./Cartcontent";
import "./cake.css";

import macarons from "./assets/Macarons.jpg";
import churros from "./assets/Churros.jpg";
import cinnamon from "./assets/Cinnamon Rolls.jpg";
import applePie from "./assets/Apple Pie.jpg";
import blueberry from "./assets/Blueberry Muffins.jpg";
import bananaBread from "./assets/Banana Bread.jpg";



function BakeryFusion() {
  const { addToCart } = useCart();

  const bakeryItems = [
    { id: 1, name: "Macarons", image: macarons, price: 180, offer: "10% OFF" },
    { id: 2, name: "Churros", image: churros, price: 150, offer: "12% OFF" },
    { id: 3, name: "Cinnamon Rolls", image: cinnamon, price: 160, offer: "15% OFF" },
    { id: 4, name: "Apple Pie", image: applePie, price: 200, offer: "18% OFF" },
    { id: 5, name: "Blueberry Muffins", image: blueberry, price: 140, offer: "10% OFF" },
    { id: 6, name: "Banana Bread", image: bananaBread, price: 130, offer: "12% OFF" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartMsg, setCartMsg] = useState(false);

  return (
    <div className="cakes-page">
      <h1>Bakery & Fusion Sweets</h1>

      {cartMsg && <div className="toast">Item added to cart successfully ✅</div>}

      <div className="cake-grid">
        {bakeryItems.map((item) => (
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
            <p>₹{selectedItem.price}</p>
            <p>{selectedItem.offer}</p>

            <div className="quantity-box">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button
              onClick={() => {
                addToCart({ ...selectedItem, quantity });
                setCartMsg(true);
                setSelectedItem(null);
                setTimeout(() => setCartMsg(false), 2000);
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

export default BakeryFusion;

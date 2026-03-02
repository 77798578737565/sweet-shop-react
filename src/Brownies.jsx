import { useState } from "react";
import { useCart } from "./Cartcontent";
import "./cake.css";

import fudgy from "./assets/Fudgy Brownie.jpg";
import walnut from "./assets/Walnut Brownie.jpg";
import caramel from "./assets/Caramel Brownie.jpg";
import chocolateChip from "./assets/Chocolate Brownie.jpg";
import peanutButter from "./assets/Peanut Brownie.jpg";

function Brownies() {
  const { addToCart } = useCart();

  const brownies = [
    { id: 1, name: "Fudgy Brownie", image: fudgy, price: 120, offer: "10% OFF" },
    { id: 2, name: "Walnut Brownie", image: walnut, price: 140, offer: "15% OFF" },
    { id: 3, name: "Caramel Brownie", image: caramel, price: 150, offer: "12% OFF" },
    { id: 4, name: "Chocolate Chip Brownie", image: chocolateChip, price: 130, offer: "20% OFF" },
    { id: 5, name: "Peanut Butter Brownie", image: peanutButter, price: 160, offer: "18% OFF" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartMsg, setCartMsg] = useState(false);

  return (
    <div className="cakes-page">
      <h1>Our Brownies</h1>

      {cartMsg && <div className="toast">Item added to cart successfully ✅</div>}

      <div className="cake-grid">
        {brownies.map((item) => (
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

export default Brownies;

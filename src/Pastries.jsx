import { useState } from "react";
import { useCart } from "./Cartcontent";
import "./cake.css";

import croissant from "./assets/croissant.jpg";
import danishpastry  from "./assets/danish pastry.jpg";
import puffpastry  from "./assets/puff pastry.jpg";
import eclair from "./assets/eclair.jpg";
import  fruittart from "./assets/fruit tart.jpg";

function Pastries() {
  const { addToCart } = useCart();

  const pastries = [
    { id: 1, name: "Croissant", image: croissant, price: 150, offer: "10% OFF" },
    { id: 2, name: "Danish Pastry", image: danishpastry , price: 120, offer: "15% OFF" },
    { id: 3, name: "Puff Pastry", image: puffpastry, price: 100, offer: "20% OFF" },
    { id: 4, name: "Eclair", image: eclair, price: 130, offer: "12% OFF" },
    { id: 5, name: "Fruit Tart", image:fruittart, price: 180, offer: "18% OFF" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartMsg, setCartMsg] = useState(false);

  return (
    <div className="cakes-page">
      <h1>Our Pastries</h1>

      {cartMsg && <div className="toast">Item added to cart successfully ✅</div>}

      <div className="cake-grid">
        {pastries.map((item) => (
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

export default Pastries;

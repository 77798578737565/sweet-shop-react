import { useState } from "react";
import { useCart } from "./Cartcontent";
import "./cake.css";

import truffles from "./assets/Chocolate Truffles.jpg";
import fudge from "./assets/Chocolate Fudge.jpg";
import nutella from "./assets/Nutella Cups.jpg";
import lava from "./assets/Choco Lava Bites.jpg";
import ferrero from "./assets/Ferrero Balls.jpg";
import barfi from "./assets/Chocolate Barfi.jpg";
import brownieBites from "./assets/Brownie Bites.jpg";
import almondClusters from "./assets/Choco Almond Clusters.jpg";

function Chocolate() {
  const { addToCart } = useCart();

  const chocolates = [
    { id: 1, name: "Chocolate Truffles", image: truffles, price: 180, offer: "10% OFF" },
    { id: 2, name: "Chocolate Fudge", image: fudge, price: 160, offer: "12% OFF" },
    { id: 3, name: "Nutella Cups", image: nutella, price: 200, offer: "15% OFF" },
    { id: 4, name: "Choco Lava Bites", image: lava, price: 170, offer: "18% OFF" },
    { id: 5, name: "Ferrero Balls", image: ferrero, price: 220, offer: "20% OFF" },
    { id: 6, name: "Chocolate Barfi", image: barfi, price: 150, offer: "10% OFF" },
    { id: 7, name: "Brownie Bites", image: brownieBites, price: 140, offer: "15% OFF" },
    { id: 8, name: "Choco Almond Clusters", image: almondClusters, price: 190, offer: "12% OFF" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartMsg, setCartMsg] = useState(false);

  return (
    <div className="cakes-page">
      <h1>Our Chocolates</h1>

      {cartMsg && <div className="toast">Item added to cart successfully ✅</div>}

      <div className="cake-grid">
        {chocolates.map((item) => (
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

export default Chocolate;

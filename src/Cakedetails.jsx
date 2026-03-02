import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./cake.css";

function CakeDetails() {
  const { state: cake } = useLocation();
  const [qty, setQty] = useState(1);
  const [popup, setPopup] = useState(false);

  if (!cake) return <h2>Product not found</h2>;

  return (
    <div className="cake-details">
      <img src={cake.image} alt={cake.name} className="details-img" />

      <h1>{cake.name}</h1>
      <p className="price">Price: ₹{cake.price}</p>
      <p className="offer">{cake.offer}</p>

      {/* Quantity */}
      <div className="quantity">
        <button onClick={() => setQty(qty - 1)} disabled={qty === 1}>-</button>
        <span>{qty}</span>
        <button onClick={() => setQty(qty + 1)}>+</button>
      </div>

      <button className="add-cart" onClick={() => setPopup(true)}>
        Add to Cart
      </button>

      {/* Ingredients */}
      <section className="procedure-box">
        <h2>Ingredients</h2>
        <ul>
          {cake.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>How This Cake Is Made</h2>
        <ol>
          {cake.procedure.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Popup */}
      {popup && (
        <div className="popup">
          <p>Item added to cart successfully ✅</p>
          <button onClick={() => setPopup(false)}>OK</button>
        </div>
      )}
    </div>
  );
}

export default CakeDetails;

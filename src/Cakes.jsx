{/*import { useState } from "react";
import "./cake.css";
import cake from './assets/cake.jpg'
import redvelvet from './assets/redvelvet.jpg'
import blackforest from './assets/blackforest.jpg'
import vennilla from './assets/vennilla.jpg'
import butterscotch from './assets/butterscotch.jpg'

function Cakes() {
  const cakes = [
    {
      id: 1,
      name: "Chocolate Cake",
      image:cake,
      price: 800,
      offer: "20% OFF",
    },
    {
      id: 2,
      name: "Red Velvet Cake",
      image: redvelvet,
      price: 950,
      offer: "15% OFF",
    },
    {
      id: 3,
      name: "Black Forest Cake",
      image: blackforest,
      price: 700,
      offer: "25% OFF",
    },
    {
      id: 4,
      name: "Vanilla Cake",
      image: vennilla,
      price: 650,
      offer: "10% OFF",
    },
    {
      id: 5,
      name: "Butterscotch Cake",
      image: butterscotch,
      price: 850,
      offer: "18% OFF",
    },
  ];

  const [selectedCake, setSelectedCake] = useState(null);

  return (
    <div className="cakes-page">
      <h1>Our Cakes</h1>

      <div className="cake-grid">
        {cakes.map((cake) => (
          <div
            key={cake.id}
            className="cake-card"
            onMouseEnter={() => setSelectedCake(cake)}
            onMouseLeave={() => setSelectedCake(null)}
          >
            <img src={cake.image} alt={cake.name} />
            <div className="cake-name">{cake.name}</div>

            <div className="buy-now">Buy Now</div>
          </div>
        ))}
      </div>

     
      {selectedCake && (
        <div className="price-box">
          <h2>{selectedCake.name}</h2>
          <p>Price: ₹{selectedCake.price}</p>
          <p className="offer">{selectedCake.offer}</p>
          <button>Add to Cart</button>
        </div>
      )}
    </div>
  );
}

export default Cakes;*/}
{/*import { useNavigate } from "react-router-dom";
import "./cake.css";

import cake from './assets/cake.jpg'
import redvelvet from './assets/redvelvet.jpg'
import blackforest from './assets/blackforest.jpg'
import vennilla from './assets/vennilla.jpg'
import butterscotch from './assets/butterscotch.jpg'

function Cakes() {
  const navigate = useNavigate();

  const cakes = [
    {
      id: 1,
      name: "Chocolate Cake",
      image: cake,
      price: 800,
      offer: "20% OFF",
      ingredients: ["Flour", "Cocoa Powder", "Eggs", "Sugar", "Butter"],
      procedure: [
        "Mix dry ingredients",
        "Add eggs and butter",
        "Bake at 180°C for 30 minutes",
        "Cool and frost"
      ]
    },
    {
      id: 2,
      name: "Red Velvet Cake",
      image: redvelvet,
      price: 950,
      offer: "15% OFF",
      ingredients: ["Flour", "Cocoa", "Buttermilk", "Eggs"],
      procedure: [
        "Prepare batter",
        "Bake evenly",
        "Apply cream cheese frosting"
      ]
    },
    {
      id: 3,
      name: "Black Forest Cake",
      image: blackforest,
      price: 700,
      offer: "25% OFF",
      ingredients: ["Chocolate sponge", "Cherries", "Whipped cream"],
      procedure: [
        "Bake sponge layers",
        "Add cream and cherries",
        "Decorate with chocolate shavings"
      ]
    },
    {
      id: 4,
      name: "Vanilla Cake",
      image: vennilla,
      price: 650,
      offer: "10% OFF",
      ingredients: ["Flour", "Milk", "Vanilla essence"],
      procedure: [
        "Prepare vanilla batter",
        "Bake until golden",
        "Decorate with cream"
      ]
    },
    {
      id: 5,
      name: "Butterscotch Cake",
      image: butterscotch,
      price: 850,
      offer: "18% OFF",
      ingredients: ["Butterscotch chips", "Cream", "Flour"],
      procedure: [
        "Prepare cake base",
        "Add butterscotch layer",
        "Bake and garnish"
      ]
    }
  ];

  return (
    <div className="cakes-page">
      <h1>Our Cakes</h1>

      <div className="cake-grid">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-card">
            <img src={cake.image} alt={cake.name} />
            <div className="cake-name">{cake.name}</div>

            <button
              className="buy-now"
              onClick={() => navigate("/cake-details", { state: cake })}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cakes;*/}

    
     import { useState } from "react";
import "./cake.css";
import { useCart } from "./Cartcontent";

import cake from "./assets/cake.jpg";
import redvelvet from "./assets/redvelvet.jpg";
import blackforest from "./assets/blackforest.jpg";
import vennilla from "./assets/vennilla.jpg";
import butterscotch from "./assets/butterscotch.jpg";

function Cakes() {
  const { addToCart } = useCart();

  const cakes = [
    { id: 1, name: "Chocolate Cake", image: cake, price: 800, offer: "20% OFF" },
    { id: 2, name: "Red Velvet Cake", image: redvelvet, price: 950, offer: "15% OFF" },
    { id: 3, name: "Black Forest Cake", image: blackforest, price: 700, offer: "25% OFF" },
    { id: 4, name: "Vanilla Cake", image: vennilla, price: 650, offer: "10% OFF" },
    { id: 5, name: "Butterscotch Cake", image: butterscotch, price: 850, offer: "18% OFF" },
  ];

  const [selectedCake, setSelectedCake] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartMsg, setCartMsg] = useState(false); // ✅ ADDED

  return (
    <div className="cakes-page">
      <h1>Our Cakes</h1>

      {/* ✅ TOAST MESSAGE */}
      {cartMsg && (
        <div className="toast">
          Item added to cart successfully ✅
        </div>
      )}

      <div className="cake-grid">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-card">
            <img src={cake.image} alt={cake.name} />
            <div className="cake-name">{cake.name}</div>

            <button
              className="buy-now"
              onClick={() => {
                setSelectedCake(cake);
                setQuantity(1);
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {selectedCake && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>{selectedCake.name}</h2>
            <p>₹{selectedCake.price}</p>
            <p>{selectedCake.offer}</p>

            <div className="quantity-box">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button
              onClick={() => {
                addToCart({ ...selectedCake, quantity });

                setCartMsg(true);        // ✅ SHOW MESSAGE
                setSelectedCake(null);   // close popup

                setTimeout(() => {
                  setCartMsg(false);     // ✅ AUTO HIDE
                }, 2000);
              }}
            >
              Add to Cart
            </button>

            <button onClick={() => setSelectedCake(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cakes;

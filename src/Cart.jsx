{/*import { useCart } from "./Cartcontent.jsx";

function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;*/}
import { useState } from "react";
import { useCart } from "./Cartcontent";
import Checkout from "./Checkout";
import "./cart.css";

function Cart() {
  const { cartItems, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (showCheckout) {
    return (
      <Checkout
        items={cartItems}
        total={total}
        clearCart={clearCart}
      />
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 && <p>Your cart is empty</p>}

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price} × {item.quantity}</p>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          <h2>Total: ₹{total}</h2>
          <button onClick={() => setShowCheckout(true)}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;

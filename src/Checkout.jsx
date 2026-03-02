import { useState } from "react";
import "./checkout.css";


function Checkout({ total, items, clearCart }) {
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [payment, setPayment] = useState("COD");

  const placeOrder = () => {
    const message = `
🧁 CrèmeCraft Order Confirmation

Items:
${items.map(i => `${i.name} × ${i.quantity}`).join("\n")}

Total: ₹${total}
Delivery Date: ${date}
Address: ${address}
Payment: ${payment}
`;

    const phone = "918838597621"; // your WhatsApp number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    clearCart();
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <textarea
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select value={payment} onChange={(e) => setPayment(e.target.value)}>
        <option value="COD">Cash on Delivery</option>
        <option value="UPI">UPI</option>
        <option value="Card">Card</option>
      </select>

      <h3>Total: ₹{total}</h3>

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;

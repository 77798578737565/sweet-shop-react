{/*import { useState } from "react";
import { Link } from "react-router-dom";
//import "./auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Account created for ${name}`);
    // You can redirect to login automatically after signup if you want
    // e.g., navigate("/login"); requires useNavigate from react-router-dom
  };

  return (
    <div className="auth-container" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Signup</h2>

      <form onSubmit={handleSignup} style={{ display: "inline-block", textAlign: "left" }}>
        <input
          type="text"
          placeholder="Full Name"
          required
          onChange={(e) => setName(e.target.value)}
          style={{ display: "block", margin: "10px 0", width: "250px", padding: "8px" }}
        />

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", margin: "10px 0", width: "250px", padding: "8px" }}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", margin: "10px 0", width: "250px", padding: "8px" }}
        />

        <button
          type="submit"
          style={{ display: "block", margin: "10px 0", padding: "10px 20px" }}
        >
          Signup
        </button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;*/}
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8080/api/form",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", password: "" });

    } catch (error) {
      console.error("Error submitting form", error);
      alert("Form submission failed");
    }
  };

  return (
    <div className="container">
      <h2>React Form Submission</h2>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;


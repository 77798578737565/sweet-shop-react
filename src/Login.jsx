import { useState } from "react";
import { Link } from "react-router-dom";
//import "./auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as ${email}`);
    // You can add redirect logic here if needed
    // e.g., navigate("/"); requires useNavigate from react-router-dom
  };

  return (
    <div className="auth-container" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin} style={{ display: "inline-block", textAlign: "left" }}>
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
          Login
        </button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;

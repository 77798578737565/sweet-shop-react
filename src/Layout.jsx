import { Outlet, Link } from "react-router-dom";
import { useCart } from "./Cartcontent";
import "./Layout.css";

const Layout = () => {
  const { cartItems } = useCart();

  return (
    <>
      <header className="navbar">
        <div className="logo">CrèmeCraft</div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
         {/*<Link to="/cakes">Cakes</Link>
          <Link to="/pastries">Pastries</Link>*/}
          {/*<Link to="/brownies">Brownies</Link>*/}
          {/* LOGIN & SIGNUP LINKS */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>

          {/* CART ICON */}
          <Link to="/cart" className="cart-icon">
            🛒 {cartItems.length}
          </Link>
        </nav>
      </header>

      <Outlet />

      <footer className="footer">
        <p>© 2026 CrèmeCraft. Crafted with elegance & indulgence.</p>
      </footer>
    </>
  );
};

export default Layout;

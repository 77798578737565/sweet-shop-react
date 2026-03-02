// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Basic from './basic.jsx'
// import Car  from './new.jsx'

// createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <Car />
  // </StrictMode>,
// )
{/*import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home.jsx'
import Layout from './Layout.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Cake from './cake.jsx'
import Cart from './Cart.jsx'
import { CartProvider } from "./CartContext.jsx";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cake" element={<Cake />} />
            <Route path="cart" element={<Cart />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/}
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Cakes from "./Cakes";
import Pastries from "./Pastries";
import Brownies from "./Brownies";
import Chocolate from"./Chocolate";
import Fruitsweets from "./Fruitsweets";
import BakeryFushion from "./BakeryFushion";

import Cart from "./Cart";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import { Cartcontext } from "./Cartcontent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Cartcontext>
      <BrowserRouter>
        <Routes>
          {/* Pages with Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="cakes" element={<Cakes />} />
            <Route path="pastries" element={<Pastries />} />
            <Route path="brownies" element={<Brownies/>}/>
             <Route path="chocolate" element={<Chocolate/>}/>
             <Route path="Fruitsweets" element={<Fruitsweets/>}/>
            <Route path="BakeryFushion"  element={<BakeryFushion/>}/>

            <Route path="/cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Auth pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Cartcontext>
  </React.StrictMode>
);

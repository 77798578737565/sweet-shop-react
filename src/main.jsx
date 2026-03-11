import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Cakes from "./Cakes";
import Pastries from "./Pastries";
import Brownies from "./Brownies";
import Chocolate from "./Chocolate";
import Fruitsweets from "./Fruitsweets";
import BakeryFushion from "./BakeryFushion";

import Cart from "./Cart";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";

import { Cartcontent } from "./Cartcontent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Cartcontent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="cakes" element={<Cakes />} />
            <Route path="pastries" element={<Pastries />} />
            <Route path="brownies" element={<Brownies />} />
            <Route path="chocolate" element={<Chocolate />} />
            <Route path="fruitsweets" element={<Fruitsweets />} />
            <Route path="bakeryfushion" element={<BakeryFushion />} />

            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Cartcontent>
  </React.StrictMode>
);
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/404Page";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllProducts from "./pages/Products/AllProducts";
import AutoBranding from "./pages/Products/AutoBranding";
import Bilboards from "./pages/Products/Bilboards";
import Events from "./pages/Products/Events";
import ExibitionStands from "./pages/Products/ExibitionStands";
import Indoor from "./pages/Products/Indoor";
import Outdoor from "./pages/Products/Outdoor";
import Polgraphy from "./pages/Products/Polypraph";
import Promo from "./pages/Products/Promo";
import ShopStands from "./pages/Products/ShopStands";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/all" element={<AllProducts />} />
        <Route path="/products/auto-branding" element={<AutoBranding />} />
        <Route path="/products/auto-branding/:id" element={<AutoBranding />} />
        <Route path="/products/bilboards" element={<Bilboards />} />
        <Route path="/products/events" element={<Events />} />
        <Route path="/products/exibition-stands" element={<ExibitionStands />} />
        <Route path="/products/indoor" element={<Indoor />} />
        <Route path="/products/outdoor" element={<Outdoor />} />
        <Route path="/products/polgraphy" element={<Polgraphy />} />
        <Route path="/products/promo" element={<Promo />} />
        <Route path="/products/shop-stands" element={<ShopStands />} />
        <Route path="/products/shop-stands/:id" element={<ShopStands />} />
        <Route path="/products/promo/:id" element={<Promo />} />
        <Route path="/products/polgraphy/:id" element={<Polgraphy />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;

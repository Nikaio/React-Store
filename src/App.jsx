import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import AppProduct from "./pages/Addproduct";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";

export default function App () {
  return (
    <>

      <Navbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/add" element={<AppProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
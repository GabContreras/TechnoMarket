import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
import "./App.css"; // ¡IMPORTANTE! Asegúrate de importar el CSS

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/:id?" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "bg-gray-800 text-white",
          duration: 3000,
          style: {
            fontSize: "16px",
          },
        }}  
      />
    </>
  );
}

export default App;
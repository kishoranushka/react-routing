import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Connect from "./components/Connect";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Connect route */}
        <Route path="connect" element={<Connect />} />

        {/* About route */}
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

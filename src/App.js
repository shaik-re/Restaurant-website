import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Pages/Menu";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from "./Components/Footer";
import Pagenotfound from "./Pages/Pagenotfound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      {/* Only render Footer if the route is not '/contact' */}
      <Routes>
        <Route path="/contact" element={null} />
        <Route path="*" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;

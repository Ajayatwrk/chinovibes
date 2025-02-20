import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./pages/LandingPage";
// import Footer from "./components/Footer"; // Ensure correct import path
import AboutUs from "./pages/Aboutus"; // Import AboutUs

AOS.init();

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

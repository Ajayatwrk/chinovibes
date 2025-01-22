import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import Footer from "./Components/Footer";

AOS.init();

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer/>
    </div>
  );
}

export default App;

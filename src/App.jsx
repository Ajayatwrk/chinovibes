import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./Pages/LandingPage";
import AboutUsPage from "./Pages/Aboutus";
import ServicesPage from "./Pages/ServicesPage";
import ContactUsPage from "./Pages/ContactUs";
import Footer from "./Components/landingpage-components/Footer";

AOS.init();

function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  const renderPage = () => {
    switch (currentPage) {
      case "about-us":
        return <AboutUsPage />;
      case "services":
        return <ServicesPage />;
      case "contact":
        return <ContactUsPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} /> {/* Pass state to Navbar */}
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;

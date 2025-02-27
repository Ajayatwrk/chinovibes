import React from "react";
import Welcome from "../Components/services-components/Welcome";
import ShortDescription from "../Components/services-components/ShortDescription";
import ServicesGrid from "../Components/services-components/ServicesGrid";

const ServicesPage = () => {
  return (
    <div>
      <nav> {/* Include your Navbar component here */} </nav>
      <Welcome />
      <ShortDescription />
      <ServicesGrid />
      <footer> {/* Include your Footer component here */} </footer>
    </div>
  );
};

export default ServicesPage;

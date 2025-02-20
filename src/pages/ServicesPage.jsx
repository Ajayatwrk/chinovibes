import React from "react";
import Welcome from "../Components/Welcome";
import ShortDescription from "../Components/ShortDescription";
import ServicesGrid from "../Components/ServicesGrid";

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

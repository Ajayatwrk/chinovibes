import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import companyLogo from "../assets/logo.png"; // Add your logo path here

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change navbar when scrolled 50px down
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-gradient-to-br from-blue-50 via-indigo-100 to-indigo-200 text-gray-900 shadow-lg"
          : "bg-gray-200 text-gray-900 shadow-none" // Gradient background for navbar when not scrolled
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={companyLogo} // Replace with actual logo
            alt="Logo"
            className="w-18 h-12 object-cover"
          />
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600">
            ChinoVibe
          </div>
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-8 font-medium">
          <li>
            <Link
              to="carousel-container"
              smooth={true}
              duration={500}
              className="hover:text-red-700 cursor-pointer transition duration-300 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about-us"
              smooth={true}
              duration={500}
              className="hover:text-red-700 cursor-pointer transition duration-300 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="offerings"
              smooth={true}
              duration={500}
              className="hover:text-red-700 cursor-pointer transition duration-300 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="founder-contact"
              smooth={true}
              duration={500}
              className="hover:text-red-700 cursor-pointer transition duration-300 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Use React Router for navigation
import companyLogo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-gradient-to-br from-blue-50 via-indigo-100 to-indigo-200 text-gray-900 shadow-lg"
          : "bg-gray-200 text-gray-900 shadow-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={companyLogo} alt="Logo" className="w-18 h-12 object-cover" />
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600">
            ChinoVibe
          </div>
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-8 font-medium">
          <li>
            <Link to="/" className="hover:text-red-700 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-red-700 transition duration-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-red-700 transition duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-700 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

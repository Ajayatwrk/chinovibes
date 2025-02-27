import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import companyLogo from "../assets/logo.png";

const Navbar = ({ setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out shadow-md ${
        scrolled ? "bg-blue-900 text-white" : "bg-white text-blue-900"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={companyLogo} alt="Logo" className="w-16 h-10 object-cover" />
          <div className={`text-2xl font-bold transition-all duration-300 ${scrolled ? "text-red-500" : "text-blue-900"}`}>
            ChinoVibe
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {[
            { name: "Home", path: "landing" },
            { name: "About Us", path: "about-us" },
            { name: "Services", path: "services" },
            { name: "Contact", path: "contact" },
          ].map((item, index) => (
            <li key={index}>
              <button
                onClick={() => setCurrentPage(item.path)}
                className="relative transition duration-300 hover:text-blue-500 after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 w-full transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } md:hidden ${
          scrolled ? "bg-blue-900 text-white shadow-lg" : "bg-white text-blue-900 shadow-md"
        }`}
      >
        <ul className="flex flex-col space-y-6 text-center py-6 font-medium">
          {[
            { name: "Home", path: "landing" },
            { name: "About Us", path: "about-us" },
            { name: "Services", path: "services" },
            { name: "Contact", path: "contact" },
          ].map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setCurrentPage(item.path);
                  setMenuOpen(false);
                }}
                className="block text-lg py-2 transition duration-300 hover:text-blue-300"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebook />, link: "#", color: "hover:text-blue-500" },
  { icon: <FaTwitter />, link: "#", color: "hover:text-blue-400" },
  { icon: <FaLinkedin />, link: "#", color: "hover:text-blue-600" },
  { icon: <FaInstagram />, link: "#", color: "hover:text-cyan-500" },
];

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-6 text-center shadow-lg">
      <div className="flex justify-center space-x-6 mb-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            className={`text-gray-700 transition duration-300 transform hover:scale-110 ${social.color}`}
          >
            {React.cloneElement(social.icon, { size: 28 })}
          </a>
        ))}
      </div>

      <p className="text-sm text-gray-700 tracking-wide">📍 Kanchipuram, Tamil Nadu</p>
      <p className="text-sm text-gray-700 mt-1">
        &copy; {new Date().getFullYear()} <span className="text-gray-900 font-semibold">Hugene Technologies</span>. All rights reserved.
      </p>

      <div className="mt-4 mx-auto w-40 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-gray-500 rounded-full opacity-90"></div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Replace with EmailJS Service ID
        "your_template_id", // Replace with EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "chinovibe.healthcare@outlook.com", // Your Outlook email
        },
        "your_user_id" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Your message has been sent successfully!");
          setErrorMessage("");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          setErrorMessage("Failed to send message. Please try again.");
          setSuccessMessage("");
        }
      );
  };

  return (
    <div className="w-full bg-gray-100 py-14 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold text-indigo-600 mt-10">Get in Touch</h2>
        <p className="text-lg text-gray-600">Have questions or need assistance? We’re happy to help!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Send Us a Message</h3>
            {successMessage && <p className="text-green-600">{successMessage}</p>}
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                required
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="relative w-full h-100 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232248.98144608676!2d80.05649153469203!3d12.902781289658639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f8ed3496a09d%3A0x8db22113da653720!2sKanchipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1674109301597!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center space-y-2 bg-white p-6 rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-3xl text-indigo-600" />
            <p className="text-lg font-semibold">Kanchipuram, Tamil Nadu</p>
            <a href="https://goo.gl/maps/" className="text-indigo-500 hover:underline">Get Directions</a>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-white p-6 rounded-lg shadow-md">
            <FaPhoneAlt className="text-3xl text-indigo-600" />
            <p className="text-lg font-semibold">+91 - 8667453928</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-white p-6 rounded-lg shadow-md">
            <FaEnvelope className="text-3xl text-indigo-600" />
            <p className="text-lg font-semibold">chinovibe.healthcare@outlook.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

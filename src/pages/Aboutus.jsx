import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import companyLogo from "../assets/logo.png";
import profile from "../assets/founder.jpeg";
import health from "../assets/health.png";
import amet from "../assets/amet.png";
import health1 from "../assets/health1.png";
import health2 from "../assets/health2.png"; 
import Details from '../Components/Details'
import Timeline from "../Components/Timeline";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    
    <section className="relative w-full min-h-screen bg-gradient-to-b from-blue-50 via-gray-100 to-gray-300 text-gray-900 flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 scale-150">
        <img src={companyLogo} alt="Company Logo" className="w-[40%] md:w-[25%]" />
      </div>

      <div className="relative max-w-6xl text-center px-6 sm:px-12 mt-24"> 
        <h2 className="text-6xl md:text-8xl font-extrabold text-indigo-600 tracking-wide mb-6" data-aos="fade-up">
          Who We Are?
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-700 font-medium" data-aos="fade-up">
          <span className="text-indigo-600 font-bold">CHINOVIBE HEALTHCARE</span> is a Chennai-based company specializing in
          U.S. medical billing and revenue cycle management (RCM). We streamline 
          healthcare financial transactions, ensure compliance, and optimize collections 
          for healthcare providers.
        </p>
        
        <h3 className="text-4xl font-semibold text-indigo-700 mt-6 mb-4 transition-transform duration-500 hover:scale-105" data-aos="fade-up">
          What We Do?
        </h3>
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700" data-aos="fade-up">
          We provide end-to-end medical billing services to U.S. healthcare providers, 
          ensuring accurate coding, seamless insurance claims, and revenue cycle management. 
          Our expertise in patient health records management and HIPAA-compliant data handling 
          ensures optimized collections.
        </p>
        <p className="text-xl md:text-2xl italic text-gray-600 mt-4 opacity-80 hover:opacity-100 transition-opacity duration-500" data-aos="fade-up">
          "Simplifying medical billing with cutting-edge solutions."
        </p>
      </div>

      {/* Timeline Section */}
      <Timeline/>
      
      {/* Founder Section */}
      <div className="relative flex flex-col md:flex-row items-center max-w-6xl space-y-12 md:space-y-0 md:space-x-10 px-10 mt-24"> 
        {/* Profile Picture Frame */}
        <div className="relative w-56 h-56 md:w-64 md:h-64 transform transition-transform duration-700 hover:rotate-6 hover:scale-110" data-aos="zoom-in">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-2xl blur-md rotate-6"></div>
          <div className="relative w-full h-full bg-white rounded-3xl flex items-center justify-center border-4 border-gray-300 shadow-lg overflow-hidden">
            <img 
              src={profile} 
              alt="Founder" 
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Founder Info */}
        <div className="text-center md:text-left max-w-xl" data-aos="fade-left">
          <h2 className="text-5xl font-bold text-indigo-700">Our Founder</h2>
          <h3 className="text-3xl font-semibold text-gray-800 mt-2">Karthikeyan Gopinath</h3>
          <p className="text-xl font-light text-gray-600">Founder/Director</p>
          <p className="mt-2 text-xl text-gray-700 leading-relaxed">
            A visionary leader driving seamless revenue cycle management for U.S. healthcare. 
            Expertise in medical billing, compliance, and process optimization. Passionate about 
            AI-driven automation in RCM.
          </p>
        </div>
      </div>

      {/* Our Clients Section */}
      <div className="w-full bg-gray-100 py-12 mt-24">
        <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-8">Our Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 justify-items-center">
          {[health, health1, health2, amet].map((logo, index) => (
            <div key={index} className="w-40 h-40 bg-white flex items-center justify-center rounded-2xl shadow-lg transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:ring-4 hover:ring-indigo-300">
              <img src={logo} alt={`client-${index}`} className="w-3/4 grayscale hover:grayscale-0 transition duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Animated Gradient Divider */}
      <div className="w-3/4 h-2 mt-8 bg-gradient-to-r from-red-600 to-indigo-600 rounded-full animate-pulse"></div> 
    </section>
  );
};

export default AboutUs;

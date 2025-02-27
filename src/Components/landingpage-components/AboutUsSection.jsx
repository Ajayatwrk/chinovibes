import React from "react";
import companyLogo from "../../assets/logo.png";

const AboutUsSection = () => {
  return (
    <div
      className="about-us relative h-screen bg-white text-gray-900 flex items-center justify-center overflow-hidden"
      aria-label="About Chinovibe Healthcare"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-15" aria-hidden="true">
        <img
          src={companyLogo}
          alt="Company Logo"
          className="w-[40%] md:w-[25%] object-contain animate-pulse"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="relative max-w-4xl text-center px-6 sm:px-10 container mx-auto">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-red-700 tracking-wide mb-6 opacity-0"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Who We Are?
        </h1>
        <p
          className="text-lg md:text-xl leading-snug text-purple-800 mb-6 opacity-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <strong>CHINOVIBE HEALTHCARE</strong> is a Chennai-based company specializing in 
          U.S. medical billing and revenue cycle management (RCM). We streamline 
          healthcare financial transactions, ensure compliance, and optimize collections 
          for healthcare providers, enhancing efficiency in claims processing and insurance reimbursements.
        </p>

        <h2
          className="text-2xl font-semibold text-red-600 mt-8 mb-4 opacity-0"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          What We Do?
        </h2>
        <p
          className="text-md md:text-lg leading-snug text-purple-700 mb-4 opacity-0"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          We provide end-to-end medical billing services to U.S. healthcare 
          providers, ensuring accurate coding, seamless insurance claims, and 
          efficient revenue cycle management. Our expertise in HIPAA-compliant 
          data handling ensures optimized collections and financial efficiency.
        </p>

        <p
          className="text-md md:text-lg italic text-gray-700 opacity-0"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          "Simplifying medical billing with cutting-edge solutions."
        </p>
      </div>

      <div
        className="absolute bottom-16 w-[60%] h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full animate-[pulse_1.5s_infinite] opacity-0"
        data-aos="zoom-in"
        data-aos-delay="1000"
      ></div>
    </div>
  );
};

export default AboutUsSection;
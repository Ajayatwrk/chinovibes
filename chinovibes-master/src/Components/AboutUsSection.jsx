import React from "react";
import companyLogo from "../assets/logo.png"; // Add your logo path here

const AboutUsSection = () => {
  return (
    <section className="about-us relative h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 text-gray-900 flex items-center justify-center overflow-hidden">
      {/* Background with dim logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <img
          src={companyLogo}
          alt="Company Logo"
          className="w-[50%] md:w-[30%] object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="relative max-w-4xl text-center px-4 sm:px-8">
        <h2
          className="text-3xl md:text-5xl font-bold text-navy-600 tracking-wide mb-6"
          data-aos="fade-up"
        >
          Who We Are?
        </h2>
        <p
          className="text-md md:text-lg leading-relaxed mb-4 text-gray-700"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          CHINOVIBE HEALTHCARE is a Chennai-based company specializing in
          U.S. medical billing and revenue cycle management (RCM). We
          streamline healthcare financial transactions, ensure compliance,
          and optimize collections for healthcare providers, enhancing
          efficiency in medical record management, claims processing, and
          insurance reimbursements.
        </p>
        <h3
          className="text-2xl font-semibold text-navy-600 mt-8 mb-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          What We Do?
        </h3>
        <p
          className="text-md md:text-lg leading-relaxed mb-4 text-gray-700"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          We provide end-to-end medical billing services to U.S. healthcare
          providers, ensuring accurate coding, seamless insurance claims, and
          revenue cycle management. Our expertise in patient health records
          management and HIPAA-compliant data handling ensures optimized
          collections, minimizing delays in reimbursement and enhancing financial
          efficiency.
        </p>
        <p
          className="text-sm md:text-base italic text-gray-600"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          "Simplifying medical billing with cutting-edge solutions."
        </p>
      </div>

      {/* Subtle Underline Animation */}
      <div
        className="absolute bottom-20 w-[70%] h-1 bg-gradient-to-r from-red-600 to-navy-600 rounded-full"
        data-aos="zoom-in"
        data-aos-delay="1000"
      ></div>
    </section>
  );
};

export default AboutUsSection;

import React from "react";
import { FaClipboardList, FaCreditCard, FaDatabase, FaFileInvoice, FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";

const offerings = [
  {
    title: "Medical Billing & Coding",
    description: "Accurate CPT, ICD-10 coding, and claim submissions.",
    icon: <FaClipboardList className="text-5xl text-blue-500 drop-shadow-lg" />,
  },
  {
    title: "Revenue Cycle Management (RCM)",
    description: "End-to-end financial process optimization for healthcare providers.",
    icon: <FaCreditCard className="text-5xl text-blue-500 drop-shadow-lg" />,
  },
  {
    title: "Patient Health Records Management",
    description: "Digital record keeping for better healthcare accessibility.",
    icon: <FaDatabase className="text-5xl text-blue-500 drop-shadow-lg" />,
  },
  {
    title: "Claims Processing & Denial Management",
    description: "Tracking, follow-ups, and appeals for faster reimbursements.",
    icon: <FaFileInvoice className="text-5xl text-blue-500 drop-shadow-lg" />,
  },
  {
    title: "Third-Party Collection-Based Payments",
    description: "Optimized insurance payouts with reduced delays.",
    icon: <FaShieldAlt className="text-5xl text-blue-500 drop-shadow-lg" />,
  },
  {
    title: "Denial Management",
    description: "Identifying root causes and reducing claim rejections for smoother revenue flow.",
    icon: <FaExclamationTriangle className="text-5xl text-blue-500 drop-shadow-lg" />,
  },
];

const OfferingsSection = () => {
  return (
    <section className="py-20 px-6 bg-white text-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold tracking-wide mb-6 text-gray-900" data-aos="fade-down">
          Our <span className="text-blue-600">Offerings</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Discover our premium services tailored for seamless healthcare financial management.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="bg-gray-100 p-8 rounded-xl shadow-md border-2 border-blue-500 hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <div className="flex items-center justify-center mb-6">{offering.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">{offering.title}</h3>
            <p className="text-gray-700 text-center">{offering.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferingsSection;

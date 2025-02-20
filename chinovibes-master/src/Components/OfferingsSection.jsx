import React from "react";
import { FaClipboardList, FaCreditCard, FaDatabase, FaFileInvoice, FaShieldAlt } from "react-icons/fa";

const offerings = [
  {
    title: "Medical Billing & Coding",
    description: "Accurate CPT, ICD-10 coding, and claim submissions.",
    icon: <FaClipboardList className="text-4xl text-red-600" />,
  },
  {
    title: "Revenue Cycle Management (RCM)",
    description: "End-to-end financial process optimization for healthcare providers.",
    icon: <FaCreditCard className="text-4xl text-navy-600" />,
  },
  {
    title: "Patient Health Records Management",
    description: "Digital record keeping for better healthcare accessibility.",
    icon: <FaDatabase className="text-4xl text-purple-600" />,
  },
  {
    title: "Claims Processing & Denial Management",
    description: "Tracking, follow-ups, and appeals for faster reimbursements.",
    icon: <FaFileInvoice className="text-4xl text-red-600" />,
  },
  {
    title: "Third-Party Collection-Based Payments",
    description: "Optimized insurance payouts with reduced delays.",
    icon: <FaShieldAlt className="text-4xl text-yellow-600" />,
  },
];

const OfferingsSection = () => {
  return (
    <section
      id="offerings"
      className="h-100% bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-10 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-navy-600 text-center mb-12">
        Our <span className="text-red-600">Offerings</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:scale-105"
            style={{
              animation: `fade-in 1s ease ${index * 0.2}s both`,
            }}
          >
            <div className="flex items-center justify-center mb-6">
              {offering.icon}
            </div>
            <h3 className="text-xl font-semibold text-navy-600 mb-4 text-center">
              {offering.title}
            </h3>
            <p className="text-gray-600 text-center">{offering.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferingsSection;

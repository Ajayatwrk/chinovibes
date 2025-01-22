import React from "react";
import { FaHospital, FaUserMd, FaRegFileAlt, FaShieldAlt } from "react-icons/fa";

const targetCustomers = [
  {
    title: "Hospitals & Healthcare Providers",
    description:
      "Struggle with claim denials, delayed reimbursements, and high administrative costs, affecting cash flow and patient care quality.",
    icon: <FaHospital className="text-4xl text-blue-600" />,
  },
  {
    title: "Independent Clinics & Physicians",
    description:
      "Face challenges in managing medical coding, compliance, and timely payments, reducing profitability.",
    icon: <FaUserMd className="text-4xl text-green-600" />,
  },
  {
    title: "Medical Billing Companies",
    description:
      "Encounter claim errors and regulatory complexities, leading to inefficiencies in processing and collections.",
    icon: <FaRegFileAlt className="text-4xl text-purple-600" />,
  },
  {
    title: "Insurance Companies & Payers",
    description:
      "Process millions of claims annually, dealing with incorrect submissions, fraudulent claims, and regulatory compliance issues.",
    icon: <FaShieldAlt className="text-4xl text-red-600" />,
  },
];

const TargetCustomersSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900">
      <div className="text-center ">
        <h2 className="text-4xl font-bold text-gray-800 mb-6" data-aos="fade-up">
          WHO WE HELP
        </h2>
        <p className="text-lg text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">
          Our company targets organizations facing significant challenges in the healthcare industry. We help these sectors streamline their processes and improve efficiency.
        </p>
      </div>

      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-8 max-w-6xl mx-auto">
        {targetCustomers.map((customer, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-4 hover:scale-105"
            style={{
              animation: `fade-in 1s ease ${index * 0.3}s both`,
            }}
            data-aos="fade-up"
            data-aos-delay={`${index * 300}`}
          >
            <div className="mb-6">{customer.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{customer.title}</h3>
            <p className="text-gray-600 text-md text-center">{customer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TargetCustomersSection;

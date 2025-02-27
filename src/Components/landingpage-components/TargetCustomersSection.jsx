import React from "react";
import { FaHospital, FaUserMd, FaRegFileAlt, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const targetCustomers = [
  {
    title: "Hospitals & Healthcare Providers",
    description:
      "Struggle with claim denials, delayed reimbursements, and high administrative costs, affecting cash flow and patient care quality.",
    icon: <FaHospital className="text-5xl text-blue-500 drop-shadow-lg transition-transform duration-300 hover:scale-110" />,
  },
  {
    title: "Independent Clinics & Physicians",
    description:
      "Face challenges in managing medical coding, compliance, and timely payments, reducing profitability.",
    icon: <FaUserMd className="text-5xl text-blue-500 drop-shadow-lg transition-transform duration-300 hover:scale-110" />,
  },
  {
    title: "Medical Billing Companies",
    description:
      "Encounter claim errors and regulatory complexities, leading to inefficiencies in processing and collections.",
    icon: <FaRegFileAlt className="text-5xl text-blue-500 drop-shadow-lg transition-transform duration-300 hover:scale-110" />,
  },
  {
    title: "Insurance Companies & Payers",
    description:
      "Process millions of claims annually, dealing with incorrect submissions, fraudulent claims, and regulatory compliance issues.",
    icon: <FaShieldAlt className="text-5xl text-blue-500 drop-shadow-lg transition-transform duration-300 hover:scale-110" />,
  },
];

const TargetCustomersSection = () => {
  return (
    <section className="py-20 px-6 bg-white text-gray-900">
      <div className="text-center">
        <motion.h2
          className="text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WHO WE HELP
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our company targets organizations facing significant challenges in the healthcare industry. We help these sectors streamline their processes and improve efficiency.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {targetCustomers.map((customer, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 border border-blue-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="mb-6">{customer.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              {customer.title}
            </h3>
            <p className="text-gray-700 text-md text-center">{customer.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TargetCustomersSection;

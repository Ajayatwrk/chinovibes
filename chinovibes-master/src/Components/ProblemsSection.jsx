import React from "react";
import { FaExclamationCircle, FaRegMoneyBillAlt, FaClipboardList, FaClock } from "react-icons/fa";

const problems = [
  {
    title: "Complex Compliance Requirements",
    description:
      "45% of healthcare providers struggle with HIPAA compliance, risking penalties and legal challenges.",
    icon: <FaExclamationCircle className="text-4xl text-yellow-500" />,
  },
  {
    title: "High Claim Rejection Rates",
    description:
      "80% of medical bills contain errors, causing up to $125 billion in annual revenue loss due to claim denials and resubmissions.",
    icon: <FaClipboardList className="text-4xl text-red-500" />,
  },
  {
    title: "High Administrative Costs",
    description:
      "U.S. hospitals spend $282 billion annually on administrative functions, with revenue cycle inefficiencies accounting for a major portion.",
    icon: <FaRegMoneyBillAlt className="text-4xl text-blue-500" />,
  },
  {
    title: "Delayed Insurance Reimbursements",
    description:
      "On average, 30-60 days are required for insurance companies to process claims, disrupting cash flow for healthcare providers.",
    icon: <FaClock className="text-4xl text-green-500" />,
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6" data-aos="fade-up">
          IDENTIFICATION OF PROBLEMS
        </h2>
        <p className="text-lg text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">
          These are the key challenges currently affecting healthcare providers and organizations.
        </p>
      </div>

      <div className="space-y-12 max-w-6xl mx-auto">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="flex items-center space-x-8 p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 transform"
            style={{
              animation: `fade-in 1s ease ${index * 0.3}s both`,
            }}
            data-aos="fade-up"
            data-aos-delay={`${index * 300}`}
          >
            <div className="flex-shrink-0">{problem.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{problem.title}</h3>
              <p className="text-gray-600 text-md">{problem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemsSection;

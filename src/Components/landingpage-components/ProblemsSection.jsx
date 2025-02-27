import React from "react";
import { FaExclamationCircle, FaRegMoneyBillAlt, FaClipboardList, FaClock } from "react-icons/fa";

const problems = [
  {
    title: "Complex Compliance Requirements",
    description:
      "45% of healthcare providers struggle with HIPAA compliance, risking penalties and legal challenges.",
    icon: <FaExclamationCircle className="text-5xl text-blue-500 drop-shadow-lg" />,
  },
  {
    title: "High Claim Rejection Rates",
    description:
      "80% of medical bills contain errors, causing up to $125 billion in annual revenue loss due to claim denials and resubmissions.",
    icon: <FaClipboardList className="text-5xl text-blue-500 drop-shadow-lg" />,
  },
  {
    title: "High Administrative Costs",
    description:
      "U.S. hospitals spend $282 billion annually on administrative functions, with revenue cycle inefficiencies accounting for a major portion.",
    icon: <FaRegMoneyBillAlt className="text-5xl text-blue-500 drop-shadow-lg" />,
  },
  {
    title: "Delayed Insurance Reimbursements",
    description:
      "On average, 30-60 days are required for insurance companies to process claims, disrupting cash flow for healthcare providers.",
    icon: <FaClock className="text-5xl text-blue-500 drop-shadow-lg" />,
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-20 px-6 bg-white text-gray-900">
      <div className="text-center mb-12">
        <h2
          className="text-5xl font-extrabold text-gray-900 tracking-wide mb-6"
          data-aos="fade-down"
        >
          IDENTIFICATION OF PROBLEMS
        </h2>
        <p
          className="text-lg text-gray-700 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Key challenges that impact healthcare providers and organizations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 p-8 bg-gray-100 rounded-xl shadow-md 
            border border-blue-500 transition-all duration-500 ease-in-out transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <div className="flex-shrink-0">{problem.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-700 text-md">{problem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemsSection;

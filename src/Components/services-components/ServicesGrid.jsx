import { useState } from "react";
import { FaFileMedical, FaMoneyCheckAlt, FaUserInjured, FaHandHoldingUsd, FaClipboardCheck, FaBan } from "react-icons/fa";

const services = [
  { id: 1, title: "Medical Billing & Coding", icon: <FaFileMedical className="text-6xl text-blue-600" />, description: "We streamline medical billing processes, ensuring accuracy and faster reimbursements for healthcare providers." },
  { id: 2, title: "Revenue Cycle Management (RCM)", icon: <FaMoneyCheckAlt className="text-6xl text-blue-600" />, description: "Optimize financial performance by managing claims, payments, and revenue generation cycles effectively." },
  { id: 3, title: "Patient Health Records Management", icon: <FaUserInjured className="text-6xl text-blue-600" />, description: "Securely store, organize, and access patient health records with modern digital management systems." },
  { id: 4, title: "Third-Party Collection-Based Payments", icon: <FaHandHoldingUsd className="text-6xl text-blue-600" />, description: "Handle third-party payment collections with precision, reducing revenue loss and improving cash flow." },
  { id: 5, title: "Claims Processing", icon: <FaClipboardCheck className="text-6xl text-blue-600" />, description: "Efficient claims processing services to minimize denials and ensure faster insurance payouts." },
  { id: 6, title: "Denial Management", icon: <FaBan className="text-6xl text-blue-600" />, description: "Identify, analyze, and resolve claim denials to recover lost revenue and prevent future rejections." },
];

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="py-16 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative w-full h-64 bg-white shadow-lg border-2 border-blue-600 flex flex-col items-center justify-center cursor-pointer group transition-all duration-300"
            onClick={() => setSelectedService(service)}
          >
            <div className="transition-all duration-300 group-hover:scale-110">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mt-3 transition-all duration-300 group-hover:text-white">
              {service.title}
            </h3>

            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-all duration-300 p-4">
              <p className="text-center text-sm">{service.description.substring(0, 50)}...</p>
              <button
                className="mt-4 px-4 py-2 bg-white text-blue-600 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service);
                }}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-12/12 h-96">
            <h2 className="text-xl font-bold mb-4">{selectedService.title}</h2>
            <p>{selectedService.description}</p>
            <button
              className="mt-44 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesGrid;

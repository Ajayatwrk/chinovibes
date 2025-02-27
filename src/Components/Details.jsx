import React from "react";
import { FaShieldAlt, FaFileMedical, FaChartLine, FaMoneyCheck, FaClock, FaSyncAlt } from "react-icons/fa";
import centerImage from "../assets/centerimage.png"; // Ensure correct path

const points = [
  { icon: <FaSyncAlt className="text-indigo-600 text-3xl" />, title: "End-to-End RCM Solution", position: { x: -50, y: -260 } },
  { icon: <FaShieldAlt className="text-indigo-600 text-3xl" />, title: "100% U.S. Healthcare Compliance", position: { x: 220, y: -180 } },
  { icon: <FaFileMedical className="text-indigo-600 text-3xl" />, title: "Error-Free Medical Coding", position: { x: 220, y: 50 } },
  { icon: <FaMoneyCheck className="text-indigo-600 text-3xl" />, title: "Third-Party Payment Collection Expertise", position: { x: -50, y: 180 } },
  { icon: <FaChartLine className="text-indigo-600 text-3xl" />, title: "Data-Driven Insights", position: { x: -350, y: 65 } },
  { icon: <FaClock className="text-indigo-600 text-3xl" />, title: "Faster Reimbursement Processing", position: { x: -350, y: -150 } },
];

const Details = () => {
  return (
    <div className="relative w-full h-[750px] flex flex-col items-center bg-gray-100 py-16">
        <h2 className="text-5xl font-bold mb-40 mt-5">
        <span className="text-red-600 ">What Makes Us</span> <span className="text-indigo-600">Unique?</span>
        </h2>

      <div className="relative w-auto h-auto flex justify-center mt-30 items-center  z-10">
        <img src={centerImage} alt="Central Visual" className="max-w-[300px] max-h-[300px]" />
      </div>

      <div className="absolute w-full mt-36 max-w-4xl h-[500px]">
        {points.map((point, index) => (
          <div
            key={index}
            className="absolute w-64 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              left: `calc(50% + ${point.position.x}px - 4rem)`,
              top: `calc(50% + ${point.position.y}px - 2rem)`,
            }}
          >
            {point.icon}
            <h3 className="text-lg font-semibold mt-2">{point.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
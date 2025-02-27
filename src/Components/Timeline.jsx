import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);
  const milestones = [
    "Founded in 2024",
    "Expanded to Global Clients",
    "Achieved 100% Compliance",
    "AI-Driven Innovations",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(parseInt(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full max-w-5xl mt-20">
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-12 relative">
        Achievements
        <span className="absolute left-1/2 bottom-0 w-40 h-1 bg-indigo-500 rounded-full transform -translate-x-1/2 animate-pulse "></span>
      </h2>

      {/* Timeline Container */}
      <div ref={timelineRef} className="relative flex flex-col items-center">
        {/* Growing Timeline Line */}
        <div
          className="absolute w-1 bg-indigo-500 transition-all duration-700 ease-in-out"
          style={{
            height: `${(activeIndex / (milestones.length - 1)) * 100}%`,
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        ></div>

        {/* Milestones */}
        {milestones.map((event, index) => (
          <div
            key={index}
            className={`timeline-item relative flex items-center w-full mb-16 opacity-0 transition-opacity duration-700 ${
              activeIndex >= index ? "opacity-100" : ""
            } ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            data-index={index}
          >
            <div
              className="bg-white p-6 rounded-xl shadow-lg border-2 border-indigo-400 max-w-md transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-semibold text-indigo-600">{event}</h3>
              <p className="text-lg text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            {/* Animated Circle */}
            <div
              className={`absolute w-6 h-6 bg-indigo-500 rounded-full left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg transition-all duration-700 ${
                activeIndex >= index ? "scale-100" : "scale-0"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import claim from "../../assets/claim.png";
import data from "../../assets/data.png";
import doctors from "../../assets/doctors.png";
import records from "../../assets/records.png";
import team from "../../assets/team.png";

const slides = [
  { src: claim, title: "Claim Processing", description: "Efficient and accurate claims management." },
  { src: data, title: "Data Security", description: "Protecting sensitive medical information." },
  { src: doctors, title: "Doctors Network", description: "Connecting healthcare professionals." },
  { src: records, title: "Medical Records", description: "Organized and secure patient records." },
  { src: team, title: "Healthcare Team", description: "Collaboration for better healthcare." },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-screen h-auto min-h-[50vh] md:min-h-[70vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Slide Container */}
      <div className="relative w-full flex transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-screen flex-shrink-0 relative">
            <img src={slide.src} alt={slide.title} className="w-full h-auto object-cover" loading="lazy" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-16 bg-black/50">
              <AnimatePresence>
                {currentIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                    exit={{ opacity: 0, y: 20 }}
                    className="text-white"
                  >
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">{slide.title}</h2>
                    <p className="text-sm sm:text-md md:text-lg mt-2">{slide.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 md:left-10 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-red-600 text-white rounded-full shadow-md hover:bg-purple-700 transition duration-300"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 md:right-10 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-red-600 text-white rounded-full shadow-md hover:bg-purple-700 transition duration-300"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-red-500 scale-125" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
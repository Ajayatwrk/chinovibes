import React from "react";
import claim from "../assets/claim.png";
import data from "../assets/data.png";
import doctors from "../assets/doctors.png";
import records from "../assets/records.png";
import team from "../assets/team.png";

const Carousel = () => {
  return (
    <section className="h-screen bg-white flex items-center justify-center overflow-hidden relative">
      <div className="carousel-container relative w-full max-w-screen-lg h-full">
        {/* Carousel Wrapper */}
        <div className="carousel-inner flex w-full h-full animate-carousel-slide space-x-2">
          {/* Individual Slides */}
          <div className="carousel-slide w-full flex-shrink-0 flex items-center justify-center transition-transform ease-in-out duration-1000 hover:scale-105">
            <img
              src={claim}
              alt="Claim"
              className="w-11/12 h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="carousel-slide w-full flex-shrink-0 flex items-center justify-center transition-transform ease-in-out duration-1000 hover:scale-105">
            <img
              src={data}
              alt="Data"
              className="w-11/12 h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="carousel-slide w-full flex-shrink-0 flex items-center justify-center transition-transform ease-in-out duration-1000 hover:scale-105">
            <img
              src={doctors}
              alt="Doctors"
              className="w-11/12 h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="carousel-slide w-full flex-shrink-0 flex items-center justify-center transition-transform ease-in-out duration-1000 hover:scale-105">
            <img
              src={records}
              alt="Records"
              className="w-11/12 h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="carousel-slide w-full flex-shrink-0 flex items-center justify-center transition-transform ease-in-out duration-1000 hover:scale-105">
            <img
              src={team}
              alt="Team"
              className="w-11/12 h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;

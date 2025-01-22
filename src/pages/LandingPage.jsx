import React from "react";
import Carousel from "../Components/Carousel";
import AboutUsSection from "../Components/AboutUsSection";
import TargetCustomersSection from "../Components/TargetCustomersSection";
import ProblemsSection from "../Components/ProblemsSection";
import OfferingsSection from "../Components/OfferingsSection";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Carousel />
      <div className=" lg:my-4 bg-white p-4 rounded-lg shadow-md">
        <AboutUsSection />
      </div>
      <div className=" lg:my-25 bg-white p-8 rounded-lg shadow-md">
        <OfferingsSection />
      </div>
      <div className=" lg:my-20 bg-white p-8 rounded-lg shadow-md">
        <TargetCustomersSection />
      </div>
      <div className=" lg:my-20 bg-white p-8 rounded-lg shadow-md">
        <ProblemsSection />
      </div>
    </div>
  );
};

export default LandingPage;

import React from "react";
import Carousel from "../Components/landingpage-components/Carousel";
import AboutUsSection from "../Components/landingpage-components/AboutUsSection";
import TargetCustomersSection from "../Components/landingpage-components/TargetCustomersSection";
import ProblemsSection from "../Components/landingpage-components/ProblemsSection";
import OfferingsSection from "../Components/landingpage-components/OfferingsSection";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Carousel />
      <AboutUsSection />
      <OfferingsSection />
      <TargetCustomersSection />
      <ProblemsSection />
    </div>
  );
};

export default LandingPage;

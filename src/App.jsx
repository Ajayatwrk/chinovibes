import React from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import ServicesPage from "./pages/ServicesPage";
// import Footer from "./"
AOS.init();

function App() {
  return (
    <div>
      <ServicesPage/>
    </div>
  );
}

export default App;

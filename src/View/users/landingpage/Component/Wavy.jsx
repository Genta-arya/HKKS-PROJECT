import React from "react";

import bg from "../../../../Asset/path.svg";
import AboutUs from "./AboutUs";

import Trust from "./Trust";
import Visi from "./Visi";

const Wavy = () => {
  return (
    <div className="relative w-full  lg:bottom-72 bottom-32 overflow-hidden">
      <div className="relative flex flex-col items-center">
        <img src={bg} alt="Background" className="w-screen h-full" />

        <div className="absolute xl:top-64 ">
          <Trust />
        </div>
        <AboutUs />
        <Visi />
      </div>
    </div>
  );
};

export default Wavy;

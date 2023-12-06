import React, { useState } from "react";
import logo from "../../../../Asset/hkks.png";

const Navbar = ({
  scrollToContent,
  scrollToWavy,
  scrollTofq,
  scrollToContactUs,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="flex items-center justify-between lg:justify-around px-8 py-4 bg-white  md:px-5 shadow-2xl ">
      <div className="flex justify-start lg:hidden md:hidden">
        <img
          src={logo}
          alt="logo"
          className="h-12 w-auto p-1 border-4 border-[#462AE0] rounded-full md:h-12 lg:h-16"
        />
      </div>
      <div className="px-8" onClick={scrollToContent}>
        <img
          src={logo}
          alt="logo"
          className="hidden lg:block md:block xl:block w-auto p-1 border-4 border-[#462AE0] rounded-full md:h-12 lg:h-16"
        />
      </div>

      <div className="hidden lg:block md:block">
        <div className="flex  gap-9 md:gap-7 font-montserrat font-extrabold lg:gap-9 ">
          <div
            className="nav-item text-[#462AE0] hover:cursor-pointer  hover:p-4 hover:drop-shadow-2xl hover:shadow-[#462AE0] hover:shadow-2xl hover:rounded-full hover:border-b-[#3E6EA4] hover:border-b-8 lg:hover:scale-90 md:hover:scale-75 hover:transition-all hover:delay-75"
            onClick={scrollToContent}
          >
            Home
          </div>
          <div
            className="nav-item text-[#462AE0] hover:cursor-pointer hover:p-4 hover:drop-shadow-2xl hover:shadow-[#462AE0] hover:shadow-2xl hover:rounded-full hover:border-b-[#3E6EA4] hover:border-b-8 hover:scale-90  md:hover:scale-75 hover:transition-all hover:delay-75"
            onClick={scrollToWavy}
          >
            About Us
          </div>
          <div
            className="nav-item text-[#462AE0] hover:cursor-pointer hover:p-4 hover:drop-shadow-2xl hover:shadow-[#462AE0]  md:hover:scale-75 hover:shadow-2xl hover:rounded-full hover:border-b-[#3E6EA4] hover:border-b-8 lg:hover:scale-90 hover:transition-all hover:delay-75"
            onClick={scrollTofq}
          >
            FAQ
          </div>
          <div
            className="nav-item text-[#462AE0] hover:cursor-pointer  hover:p-4 hover:drop-shadow-2xl hover:shadow-[#462AE0] md:hover:scale-75 hover:shadow-2xl hover:rounded-full hover:border-b-[#3E6EA4] hover:border-b-8 lg:hover:scale-90 hover:transition-all hover:delay-75"
            onClick={scrollToContactUs}
          >
            Contact Us
          </div>
        </div>
      </div>
      <div className="flex font-montserrat font-extrabold ">
        <div className=" lg:block md:block">
          <span className="text-xs lg:text-md md:text-base"> Sign up</span>{" "}
          <span className="ml-2 mr-2">|</span>{" "}
          <span className="text-xs lg:text-md md:text-base">Log in</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

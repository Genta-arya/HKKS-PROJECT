import React from "react";
import logo from "../../../../Asset/hkks.png";

const Navbar = ({
  scrollToContent,
  scrollToWavy,
  scrollTofq,
  scrollToContactUs,
}) => {
  return (
    <div className="flex items-center justify-around py-8 bg-white px-12 shadow-2xl ">
      <div className="px-8" onClick={scrollToContent}>
        <img
          src={logo}
          alt="logo"
          className="h-16 w-auto p-1 border-4 border-[#462AE0] rounded-full"
        />
      </div>
      <div className="flex gap-9 font-montserrat font-extrabold">
        <div
          className="nav-item text-[#462AE0] hover:cursor-pointer  hover:p-4 hover:drop-shadow-2xl hover:shadow-[#462AE0] hover:shadow-2xl hover:rounded-full hover:border-b-[#3E6EA4] hover:border-b-8 hover:scale-90 hover:transition-all hover:delay-75"
          onClick={scrollToContent}
        >
          Home
        </div>
        <div
          className="nav-item text-[#462AE0] hover:cursor-pointer hover:p-4 hover:drop-shadow-2xl hover:shadow-[#462AE0] hover:shadow-2xl hover:rounded-full hover:border-b-[#3E6EA4] hover:border-b-8 hover:scale-90 hover:transition-all hover:delay-75"
          onClick={scrollToWavy}
        >
          About Us
        </div>
        <div
          className="nav-item text-[#462AE0] hover:cursor-pointer hover:p-4 hover:drop-shadow-2xl hover:shadow-[#462AE0] hover:shadow-2xl hover:rounded-full hover:border-b-[#3E6EA4] hover:border-b-8 hover:scale-90 hover:transition-all hover:delay-75"
          onClick={scrollTofq}
        >
          FAQ
        </div>
        <div
          className="nav-item text-[#462AE0] hover:cursor-pointer  hover:p-4 hover:drop-shadow-2xl hover:shadow-[#462AE0] hover:shadow-2xl hover:rounded-full hover:border-b-[#3E6EA4] hover:border-b-8 hover:scale-90 hover:transition-all hover:delay-75"
          onClick={scrollToContactUs}
        >
          Contact Us
        </div>
      </div>
      <div className="flex font-montserrat font-extrabold">
        <div>
          Sign up <span className="ml-2 mr-2">|</span> Log in
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useRef, useState, useEffect } from "react";
import Content from "./Component/Content";
import Navbar from "./Component/Navbar";
import Wavy from "./Component/Wavy";
import FQ from "./Component/FQ";
import { motion, useAnimation } from "framer-motion";
import FooterHero from "./Component/FooterHero";
import CopyRight from "./Component/CopyRight";
import ReviewForm from "./Component/ReviewForm";
import CustomerReviews from "./Component/CustomersReview";

const Index = () => {
  const contentRef = useRef(null);
  const wavyRef = useRef(null);
  const fqRef = useRef(null);

  const handleScrollTo = (ref, options = {}) => {
    const targetPosition = ref.current.offsetTop;
    const finalPosition = Math.min(targetPosition);

    window.scrollTo({
      top: finalPosition,
      behavior: options.behavior || "smooth",
    });
  };

  const controls = useAnimation();

  return (
    <div>
      <div className=" lg:block md:block ">
        <motion.div
          className="fixed top-0 w-full z-10"
          initial={{ opacity: 1 }}
          animate={controls}
        >
          <Navbar
            scrollToContent={() => handleScrollTo(contentRef)}
            scrollToWavy={() => handleScrollTo(wavyRef)}
            scrollTofq={() => handleScrollTo(fqRef)}
            contentRef={contentRef}
            wavyRef={wavyRef}
            fqRef={fqRef}
          />
        </motion.div>

        <div className="" ref={contentRef}>
          <Content />
        </div>
        <div ref={wavyRef}>
          <Wavy />
        </div>

        <div className="-mt-36 lg:-mt-72 md:-mt-72   bg-[#3E6EA4]" ref={fqRef}>
          <FQ />
        </div>

        <CustomerReviews />
      

        <FooterHero />
        <CopyRight />
      </div>
    </div>
  );
};

export default Index;

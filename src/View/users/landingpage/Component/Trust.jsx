import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import icon1 from "../../../../Asset/icon1.png";
import icon2 from "../../../../Asset/icon2.png";
import icon3 from "../../../../Asset/icon3.png";
import icon4 from "../../../../Asset/icon4.png";
import icon5 from "../../../../Asset/icon5.png";

const Trust = () => {
  const trustRef = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check if trustRef.current is defined before accessing offsetTop
      if (trustRef.current) {
        const trustPosition = trustRef.current.offsetTop;

        // Adjust the offset value based on your preference
        const offset = window.innerHeight / 2;

        if (scrollPosition + offset >= trustPosition) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      ref={trustRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className=" flex flex-col  items-center  w-screen lg:p-12 md:p-12  mx-auto p-4  "
    >
      <div className="mt-5 hidden lg:block md:block max-[1270px]:mt-32   ">
        <h1 className="text-white mb-4 font-sans font-extrabold text-xl ">
          Disponsori oleh :
        </h1>
      </div>

      <div className="lg:hidden md:hidden mt-12 ">
        <h1 className="text-white mb-4 font-sans font-extrabold text-sm ">
          Disponsori oleh :
        </h1>
      </div>

      <motion.div className="flex gap-2 lg:gap-12 md:gap-12 mt-1 lg:mt-5 md:mt-5">
        <motion.img src={icon1} alt="Charter" className="w-auto md:h-20 lg:20 h-10" />
        <motion.img src={icon2} alt="Charter" className="w-auto md:h-20 lg:20 h-10" />
        <motion.img src={icon3} alt="Charter" className="w-auto md:h-20 lg:20 h-10" />
        <motion.img src={icon4} alt="Charter" className="w-auto md:h-20 lg:20 h-10" />
        <motion.img src={icon5} alt="Charter" className="w-auto md:h-20 lg:20 h-10" />
      </motion.div>
    </motion.div>
  );
};

export default Trust;

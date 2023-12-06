import React from "react";
import { motion } from "framer-motion";
import charterImage from "../../../../Asset/charter.png";
import AboutUs from "./Wavy";

const Content = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-1 items-center justify-center md:flex lg:flex"
    >
      <div className="p-4 items-center mt-12 md:p-12 md:flex lg:flex md:flex-col lg:flex-col mx-auto">
        <h1 className="text-3xl font-extrabold lg:w-56 md:w-56 w-80 text-[#462AE0] mt-12">
          Koleksi Baju Sekolah yang Memukau
        </h1>
        <p className="text-justify w-80 lg:w-56 md:w-56 mt-4 text-[#462AE0]">
          Kami bangga mempersembahkan koleksi baju sekolah yang tidak hanya
          memikat mata tetapi juga menawarkan kenyamanan dan gaya. Dibuat dengan
          teliti untuk menjaga kepercayaan diri, setiap desain kami merupakan
          kombinasi sempurna antara tren terkini dan kepraktisan.
        </p>
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3E6EA5] relative  text-white font-sans font-extrabold text-md p-2 rounded-full mt-8 w-44 md:mb-12 lg:mb-32  mb-8 xl:mb-32 hover:cursor-pointer lg:z-10 md:z-10 drop-shadow-2xl shadow-gray-700 shadow-2xl border-b-8 "
          >
            Explore
          </motion.button>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={charterImage}
          alt="Charter"
          className="relative w-auto h-96 lg:mt-24 lg:ml-24 md:mt-44 "
        />
      </div>
    </motion.div>
  );
};

export default Content;

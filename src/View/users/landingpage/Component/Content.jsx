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
      className="flex items-center justify-center"
    >
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-3xl font-extrabold w-56 text-[#462AE0] mt-12">
          Koleksi Baju Sekolah yang Memukau
        </h1>
        <p className="text-justify w-56 mt-4 text-[#462AE0]">
          Kami bangga mempersembahkan koleksi baju sekolah yang tidak hanya
          memikat mata tetapi juga menawarkan kenyamanan dan gaya. Dibuat dengan
          teliti untuk menjaga kepercayaan diri, setiap desain kami merupakan
          kombinasi sempurna antara tren terkini dan kepraktisan.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#3E6EA5] relative text-white font-sans font-extrabold text-md p-2 rounded-full mt-8 w-44 md:mb-12 lg:mb-24 mb-24 xl:mb-32 hover:cursor-pointer z-10 drop-shadow-2xl shadow-gray-700 shadow-2xl border-b-8 "
        >
          Explore
        </motion.button>
      </div>
      <div className="">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={charterImage}
          alt="Charter"
          className="w-auto h-96"
        />
      </div>
    </motion.div>
  );
};

export default Content;

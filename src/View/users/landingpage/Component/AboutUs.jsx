import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import sekolah from "../../../../Asset/sekolah.png";

const AboutUs = () => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementOffset = ref.current.offsetTop;

      if (scrollPosition > elementOffset) {
        controls.start({
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        });
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div
      ref={ref}
      className="flex justify-center w-screen bg-[#3E6EA4] -mt-40 p-4"
    >
      <motion.img
        src={sekolah}
        alt="sekolah"
        className="h-96"
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
      />

      <motion.div
        className="grid grid-cols-1 border border-white p-4 rounded-xl shadow-2xl drop-shadow-2xl shadow-gray-700"
        initial={{ opacity: 0, x: 50 }}
        animate={controls}
      >
        <div className="text-white text-2xl font-sans font-bold">
          Tentang Kami
        </div>
        <div className="mt-4 text-white text-xl font-sans">
          Kualitas dalam setiap <br></br>potongan pakaian sekolah
        </div>
        <div className="mt-4 text-white text-xl font-sans">
          Kami bangga mempersembahkan<br></br> koleksi baju sekolah yang tidak
          hanya <br></br>memikat mata tetapi<br></br> juga menawarkan kenyamanan
          dan gaya.<br></br> Dibuat dengan teliti <br></br>untuk menjaga
          kepercayaan diri,<br></br> setiap desain kami merupakan kombinasi{" "}
          <br></br>
          sempurna antara tren terkini dan kepraktisan
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;

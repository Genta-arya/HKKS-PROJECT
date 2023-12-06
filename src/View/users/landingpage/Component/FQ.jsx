import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FQ = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [controls, inView]);

  return (
    <motion.div className="flex justify-center p-8">
      <motion.div
        ref={ref}
        className="lg:w-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className="join join-vertical w-full bg-white p-8 rounded-lg shadow-md">
            <div>
                <h1 className="text-3xl  font-montserrat font-extrabold mb-8">F & Q</h1>
            </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Bagaimana cara memesan baju sekolah?
            </div>
            <div className="collapse-content">
              <p>
                Anda dapat memesan baju sekolah kami melalui website kami atau
                menghubungi layanan pelanggan kami. Pilih desain, tentukan
                ukuran, dan ikuti langkah-langkah pemesanan yang mudah.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Apakah ada opsi kustomisasi untuk baju sekolah?
            </div>
            <div className="collapse-content">
              <p>
                Ya, kami menyediakan opsi kustomisasi untuk baju sekolah. Anda
                dapat memilih warna, logo sekolah, dan rincian desain lainnya
                sesuai keinginan.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Bagaimana proses pembuatan baju sekolah dilakukan?
            </div>
            <div className="collapse-content">
              <p>
                Setelah pemesanan, tim produksi kami akan memulai proses
                pembuatan dengan hati-hati dan teliti. Kami menjamin kualitas
                tinggi pada setiap potongan pakaian sekolah yang kami buat.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Berapa lama waktu pengerjaan pesanan?
            </div>
            <div className="collapse-content">
              <p>
                Waktu pengerjaan pesanan baju sekolah dapat bervariasi
                tergantung pada jumlah pesanan dan tingkat kustomisasi. Tim
                kami akan memberikan perkiraan waktu yang akurat saat Anda
                melakukan pemesanan.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Apakah ada kebijakan pengembalian barang?
            </div>
            <div className="collapse-content">
              <p>
                Ya, kami memiliki kebijakan pengembalian barang. Jika ada masalah
                dengan pesanan Anda, silakan hubungi layanan pelanggan kami
                untuk bantuan lebih lanjut.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FQ;

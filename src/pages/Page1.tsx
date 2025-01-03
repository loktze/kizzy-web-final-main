import React from "react";
import { motion } from "framer-motion";
import P1Header from "../components/layout/P1Header";

interface Page1Props {
  currentPage: number;
}

const Page1: React.FC<Page1Props> = ({ currentPage }) => {
  return (
    <div
      className="relative h-screen flex bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <P1Header />
      {/* <div className="relative w-full">
        <img
          src="/images/hand-mobile.png"
          alt="Hand Mobile"
          width={425}
          height={772}
          className="block md:hidden absolute top-20 left-[16px]"
          loading="lazy"
        />
      </div>

      <div className="hidden md:block 2xl:hidden absolute inset-0">
        <img
          src="/images/hand-md.png"
          alt="Hand"
          className="absolute w-[900px] left-[13%] top-16 lg:top-0 lg:-right-10 xl:top-0"
          loading="lazy"
        />
      </div>

      <div className="hidden 2xl:block fixed top-0 right-[14%] z-30">
        <img
          src="/images/hand.png"
          alt="Hand"
          className="w-[1106px] h-auto"
          loading="lazy"
        />
      </div> */}

      <div className="absolute inset-0 flex justify-center items-center z-5 pt-[100px] md:pt-0 h-full">
        <div
          className="absolute w-[80%] h-[700px] blur-[80px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(204, 196, 245, 0.6) 0%, rgba(204, 196, 245, 0.3) 70%, rgba(204, 196, 245, 0) 100%)", // Darker purple
          }}
        />
        <div
          className="absolute w-[60%] h-[500px] blur-[80px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(204, 196, 245, 0.7) 0%, rgba(204, 196, 245, 0.35) 60%, rgba(204, 196, 245, 0) 100%)", // Darker purple
          }}
        />
        <div className="absolute w-full flex justify-center z-0 pt-[500px] md:pt-0">
          <div className="w-full whitespace-nowrap overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 120,
                ease: "linear",
              }}
              className="inline-block text-white font-poppins font-semibold whitespace-nowrap text-[100px] md:text-[300px] leading-[1.2] overflow-visible"
              style={{
                paddingBottom: "20px",
                WebkitTextStroke: "0.2px transparent",
              }}
              aria-hidden="true"
            >
              Social Media Betting Social Media Betting Social Media Betting
              Social Media Betting Social Media Betting Social Media Betting
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-0 w-full bg-transparent">
        <div className="hidden md:flex justify-end p-12">
          <p className="p1footer">Privacy Policy</p>
        </div>
        <div className="bg-white flex justify-center md:hidden">
          <div className="flex gap-4 pb-6">
            <p className="p1footer">Privacy Policy</p>
            <div>
              <p className="p1footer">Careers</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page1;

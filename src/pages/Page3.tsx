import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import wave from "../assets/lotties/wave.json";
import P3Header from "../components/layout/P3Header";

interface Page3Props {
  currentPage: number;
}

const Page3: React.FC<Page3Props> = ({ currentPage }) => {
  return (
    <div className="relative h-screen bg-[#110c2f] bg-cover bg-center">
      <P3Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          currentPage === 2 || currentPage === 4
            ? { opacity: 1, translateY: 0 }
            : {}
        }
        transition={{ duration: 1, delay: 0.5 }}
        className="flex w-full pt-20 lg:pt-28 h-full text-center"
      >
        <div className="relative w-full flex flex-col items-center h-screen">
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={
              currentPage === 2 || currentPage === 4
                ? { opacity: 1, translateY: 0 }
                : {}
            }
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            className="relative inline-block pointer-events-none"
          >
            <img
              src="/images/text-decoration.png"
              alt="Text Decoration"
              className="absolute z-0 left-0 w-[142px] -top-7 md:w-[216px] md:-top-12 lg:w-[256px] lg:-top-12 2xl:w-[333px] 2xl:-top-16"
              loading="lazy"
            />
            <p className="relative headline z-10 text-white text-3xl">
              Start Social Media
              <br />
              Betting Now
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={
              currentPage === 2 || currentPage === 4
                ? { opacity: 1, translateY: 0 }
                : {}
            }
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="mt-6 pointer-events-none"
          >
            <p className="subtext text-lightgrey">
              Social Media Betting is the future of how
              <br className="md:hidden" />
              ot make money online.
              <br />
              What are you waiting for?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={
              currentPage === 2 || currentPage === 4
                ? { opacity: 1, translateY: 0 }
                : {}
            }
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="mt-4"
          >
            <div className="inline-flex items-center gap-2 rounded-[10px] py-3 px-4 lg:rounded-2xl lg:py-4 lg:px-5 bg-gradient-to-r from-[#7040DB] via-[#906BE6] to-[#6E40DB]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="w-[17px] lg:[22px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <button>
                <div className="download">Download Now</div>
              </button>
            </div>
          </motion.div>

          <AnimatePresence>
            {(currentPage === 2 || currentPage === 4) && (
              <motion.div
                key="phone2-container"
                className="pt-24 md:pt-28 lg:p-0 xl:p-0 flex justify-center items-center w-full relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              >
                <motion.img
                  src="/images/phone2.png"
                  alt="Phone 2"
                  width={298}
                  height={190}
                  className="lg:w-[462px] lg:h-[361px] object-contain z-10"
                  loading="lazy"
                />
                <div className="absolute top-[36%] md:top-[39%] lg:top-[13%] xl:-top[38%] left-1/2 transform -translate-x-1/2">
                  <Lottie
                    animationData={wave}
                    loop={true}
                    autoplay={true}
                    aria-label="Wave Animation"
                    className="w-[360px] lg:w-[540px] mx-auto"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="hidden xl:flex w-full">
        <motion.div
          className="absolute left-[10%] top-[17%] 2xl:left-[12%] 2xl:top-[16%]"
          initial={{ opacity: 0, x: -20 }}
          animate={
            currentPage === 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
          }
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        >
          <motion.img
            src="/images/left-top-image.png"
            alt="Left Top"
            className="object-contain w-[208px] h-[208px] xl:w-[242px] xl:h-[242px] 2xl:w-[282px] 2xl:h-[282px]"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="absolute left-[6%] bottom-[17%] 2xl:left-[8%] 2xl:bottom-[11%]"
          initial={{ opacity: 0, x: -20 }}
          animate={
            currentPage === 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
          }
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        >
          <motion.img
            src="/images/left-bot-image.png"
            alt="Left Bottom"
            className="object-contain w-[208px] h-[208px] xl:w-[242px] xl:h-[242px] 2xl:w-[282px] 2xl:h-[282px]"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="absolute right-20 top-[38%] xl:right-[6%] xl:top-[34%] 2xl:right-[6%]"
          initial={{ opacity: 0, x: 20 }}
          animate={
            currentPage === 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
          }
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        >
          <motion.img
            src="/images/right-image.png"
            alt="Right"
            className="object-contain w-[269px] h-[269px] xl:w-[309px] xl:h-[309px] 2xl:w-[339px] 2xl:h-[339px]"
            loading="lazy"
          />
        </motion.div>
      </div>

      <footer className="absolute bottom-0 w-full bg-transparent">
        <div className="flex justify-center md:hidden">
          <div className="flex gap-4 pb-8">
            <p className="p3footer">&copy; Kizzy Labs</p>
            <p className="p3footer">Privacy Policy</p>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="font-lexend flex gap-8 pb-8">
            <button>
              <p className="p3footer">Career</p>
            </button>
            <button>
              <p className="p3footer">&copy; Kizzy Labs</p>
            </button>
            <button>
              <p className="p3footer">Privacy Policy</p>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page3;

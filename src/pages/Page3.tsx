import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";

interface Page3Props {
  currentPage: number;
}

const Page3: React.FC<Page3Props> = ({ currentPage }) => {
  useEffect(() => {
    console.log("currentPage", currentPage);
  }, [currentPage]);


  return (
    <div className="relative h-screen bg-[#110c2f] bg-cover bg-center">
      <Header currentPage={currentPage} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={
          currentPage === 2 || currentPage === 4
            ? { opacity: 1, translateY: 0 }
            : {}
        }
        transition={{ duration: 1, delay: 0.5 }}
        className="flex w-full pt-20 lg:pt-28 h-screen text-center"
      >
        <div className="relative mt-6 md:mt-2 2xl:mt-2 w-full flex flex-col items-center h-screen">
          {/* Headline with Decoration */}
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={
              currentPage === 2 || currentPage === 4
                ? { opacity: 1, translateY: 0 }
                : {}
            }
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            className="relative inline-block"
          >
            <img
              src="/images/text-decoration.png"
              alt="Text Decoration"
              className="absolute z-0 left-0 w-[142px] -top-7 md:w-[256px] md:-top-12 2xl:w-[333px] 2xl:-top-16"
              loading="lazy"
            />
            <p className="relative headline z-10 text-white text-3xl">
              Start Social Media
              <br />
              Betting Now
            </p>
          </motion.div>

          {/* Subtext */}
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
            <p className="subtext text-lightgrey">
              Social media creators have taken over the world.
              <br className="md:hidden" />
              Why not bet on them?
              <br />
              Kizzy is the world’s first social media betting app.
            </p>
          </motion.div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={
              currentPage === 2 || currentPage === 4
                ? { opacity: 1, translateY: 0 }
                : {}
            }
            transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
            className="mt-4 md:hidden"
          >
            <div className="inline-flex items-center gap-2 rounded-lg py-3 px-4 bg-gradient-to-r from-[#7040DB] via-[#906BE6] to-[#6E40DB]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="w-[17px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <div className="download">Download Now</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div
        className={`hidden xl:flex w-full opacity-0 duration-[1000ms] delay-[1500ms] ${currentPage === 2 && "lg:opacity-100"
          } `}
      >
        <div className="absolute left-[14%] top-[28%] xl:left-[14%] xl:top-[17%] 2xl:left-[12%] 2xl:top-[16%]">
          <img
            src="/images/left-top-image.png"
            alt="Left Top"
            className="object-contain w-[208px] h-[208px] xl:w-[242px] xl:h-[242px] 2xl:w-[322px] 2xl:h-[322px]"
            loading="lazy"
          />
        </div>
        <div className="absolute left-[10%] bottom-[28%] xl:left-[10%] xl:bottom-[17%] 2xl:left-[8%] 2xl:bottom-[11%]">
          <img
            src="/images/left-bot-image.png"
            alt="Left Bottom"
            className="object-contain w-[208px] h-[208px] xl:w-[242px] xl:h-[242px] 2xl:w-[322px] 2xl:h-[322px]"
            loading="lazy"
          />
        </div>
        <div className="absolute right-20 top-[38%] xl:right-[6%] xl:top-[34%] 2xl:right-[6%]">
          <img
            src="/images/right-image.png"
            alt="Right"
            className="object-contain w-[269px] h-[269px] xl:w-[309px] xl:h-[309px] 2xl:w-[389px] 2xl:h-[389px]"
            loading="lazy"
          />
        </div>
      </div>

      <footer className="absolute bottom-0 w-full bg-transparent">
        <div className="flex justify-center md:hidden">
          <div className="flex gap-4 pb-8">
            <p className="p3footer">&copy; Kizzy Labs</p>
            <Link to="/privacy-policy" className="p3footer">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="font-lexend flex gap-4 pb-8">
            <p className="p3footer">Career</p>
            <p className="p3footer">&copy; Kizzy Labs</p>
            <Link to="/privacy-policy" className="p3footer">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page3;

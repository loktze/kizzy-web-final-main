import React from "react";
import { motion } from "framer-motion";
import FirstTopCard from "../components/common/FirstTopCard";
import FirstBottomCard from "../components/common/FirstBottomCard";
import SecondTopCard from "../components/common/SecondTopCard";
import SecondBottomCard from "../components/common/SecondBottomCard";
import P1Header from "../components/layout/P1Header";

interface Page2Props {
  currentPage: number;
}

const bounceTransition = {
  type: "spring",
  stiffness: 80,
  damping: 14,
  duration: 1.5,
};

const Page2: React.FC<Page2Props> = ({ currentPage }) => {
  return (
    <div
      className="relative h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
      onTouchStart={(e) => e.stopPropagation()}
    >
      <P1Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={currentPage === 1 ? { opacity: 1, translateY: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex pt-20 lg:pt-28 2xl:pt-28 w-full"
      >
        <div className="relative w-full flex flex-col items-center h-screen">
          <motion.p
            initial={{ opacity: 0, translateY: 50 }}
            animate={currentPage === 1 ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            className="headline text-2xl text-center"
          >
            Betting Like Never Before
          </motion.p>

          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={currentPage === 1 ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="mt-4 md:mt-8 2xl:mt-8"
          >
            <p className="subtext text-grey text-center">
              Social media creators have taken over the world.
              <br className="md:hidden" />
              Why not bet on them?
              <br />
              Kizzy is the world’s first social media betting app.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={currentPage === 1 ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
            className="mt-4 md:mt-6 md:hidden"
          >
            <div className="inline-flex items-center gap-2 rounded-lg py-3 px-3 2xl:py-4 2xl:px-4 bg-gradient-to-r from-[#7040DB] via-[#906BE6] to-[#6E40DB]">
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
              <div className="download 2xl:text-base">Download Now</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="hidden lg:flex">
        <div className="absolute bottom-2 left-4 xl:left-20 2xl:left-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={currentPage === 1 ? { opacity: 1, y: 0 } : {}}
            transition={{ ...bounceTransition, delay: 1.4 }}
            className="mb-2"
          >
            <FirstTopCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={currentPage === 1 ? { opacity: 1, y: 0 } : {}}
            transition={{ ...bounceTransition, delay: 0.5 }}
          >
            <FirstBottomCard />
          </motion.div>
        </div>

        <div className="absolute bottom-2 right-4 xl:right-20 2xl:right-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={currentPage === 1 ? { opacity: 1, y: 0 } : {}}
            transition={{ ...bounceTransition, delay: 1.5 }}
            className="mb-2"
          >
            <SecondTopCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={currentPage === 1 ? { opacity: 1, y: 0 } : {}}
            transition={{ ...bounceTransition, delay: 0.6 }}
          >
            <SecondBottomCard />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page2;

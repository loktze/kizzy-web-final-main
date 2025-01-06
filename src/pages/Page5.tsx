import React from "react";
import { motion } from "framer-motion";
import SecondTopCard from "../components/common/SecondTopCard";
import SecondBottomCard from "../components/common/SecondBottomCard";

interface Page5Props {
  currentPage: number;
}

const Page5: React.FC<Page5Props> = ({ currentPage }) => {
  return (
    <div
      className="relative h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            currentPage === 3 ? { opacity: 1, y: -14 } : { opacity: 0, y: 50 }
          }
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 1.3,
          }}
          className="mb-6"
        >
          <SecondTopCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            currentPage === 3 ? { opacity: 1, y: -14 } : { opacity: 0, y: 50 }
          }
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 0.8,
          }}
        >
          <SecondBottomCard />
        </motion.div>
      </div>
      {/* <footer className="absolute bottom-0 w-full bg-transparent">
        <div className="bg-white flex justify-center md:hidden">
          <div className="flex gap-4 pb-6">
            <button>
              <p className="p1footer">Privacy Policy</p>
            </button>
            <button>
              <p className="p1footer">Careers</p>
            </button>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Page5;

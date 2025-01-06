import React from "react";
import { motion } from "framer-motion";
import FirstTopCard from "../components/common/FirstTopCard";
import FirstBottomCard from "../components/common/FirstBottomCard";
import P1Header from "../components/layout/P1Header";

interface Page4Props {
  currentPage: number;
}

const Page4: React.FC<Page4Props> = ({ currentPage }) => {
  return (
    <div
      className="relative h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <P1Header />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            currentPage === 2 ? { opacity: 1, y: -14 } : { opacity: 0, y: 50 }
          }
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 1.3,
          }}
          className="mb-6"
        >
          <FirstTopCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            currentPage === 2 ? { opacity: 1, y: -14 } : { opacity: 0, y: 50 }
          }
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 0.8,
          }}
        >
          <FirstBottomCard />
        </motion.div>
      </div>
      <footer className="absolute bottom-0 w-full bg-transparent">
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
      </footer>
    </div>
  );
};

export default Page4;

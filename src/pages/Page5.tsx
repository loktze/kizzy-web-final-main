import React from "react";
import { motion } from "framer-motion";
import SecondTopCard from "../components/common/SecondTopCard";
import SecondBottomCard from "../components/common/SecondBottomCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

interface Page5Props {
  currentPage: number;
}

const Page5: React.FC<Page5Props> = ({ currentPage }) => {
  return (
    <div
      className="relative h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <Header currentPage={currentPage} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Second Top Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            currentPage === 3 ? { opacity: 1, y: -14 } : { opacity: 0, y: 50 }
          }
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 1.5, // Matches your `delay-[1500ms]`
          }}
          className="mb-6"
        >
          <SecondTopCard />
        </motion.div>

        {/* Second Bottom Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            currentPage === 3 ? { opacity: 1, y: -14 } : { opacity: 0, y: 50 }
          }
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 1.0, // Matches your `delay-[1000ms]`
          }}
        >
          <SecondBottomCard />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Page5;

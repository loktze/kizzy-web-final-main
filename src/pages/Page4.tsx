import React from "react";
import { motion } from "framer-motion";
import FirstTopCard from "../components/common/FirstTopCard";
import FirstBottomCard from "../components/common/FirstBottomCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

interface Page4Props {
  currentPage: number;
}

const Page4: React.FC<Page4Props> = ({ currentPage }) => {
  return (
    <div
      className="relative h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <Header currentPage={currentPage} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* First Top Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            currentPage === 2 ? { opacity: 1, y: -14 } : { opacity: 0, y: 50 }
          }
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 1.5, // Matches your `delay-[1500ms]`
          }}
          className="mb-6"
        >
          <FirstTopCard />
        </motion.div>

        {/* First Bottom Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            currentPage === 2 ? { opacity: 1, y: -14 } : { opacity: 0, y: 50 }
          }
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 1.0, // Matches your `delay-[1000ms]`
          }}
        >
          <FirstBottomCard />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Page4;

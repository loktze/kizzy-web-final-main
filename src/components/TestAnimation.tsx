// src/components/TestAnimation.tsx
import React from "react";
import { motion } from "framer-motion";

const TestAnimation: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="p-6 bg-blue-500 text-white rounded-lg"
        style={{ willChange: "opacity, transform" }} // Hint for smoother animations
      >
        <p className="text-xl">Test Fade-In Animation</p>
      </motion.div>
    </div>
  );
};

export default TestAnimation;

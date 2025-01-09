import React from "react";
import { motion } from "framer-motion";
import TruncatedText from "../TruncatedText";

interface FirstTopCardProps {
  className?: string;
}

const FirstTopCard: React.FC<FirstTopCardProps> = ({ className }) => {
  return (
    <div className="w-[340px] bg-[#F5F5F5] rounded-2xl p-4 shadow-2xl pointer-events-none">
      <div className="flex justify-between items-center gap-2">
        <img
          src="/images/youtube_picture.png"
          alt="YouTube Post"
          width={120}
          height={70}
          className="rounded-lg object-cover"
        />
        <div className="flex flex-col justify-center flex-1 gap-2">
          <TruncatedText
            text="I Bought My First Car blah blah blah"
            maxLength={21}
            className="font-lexend text-md text-[#0E1727] font-semibold leading-6 tracking-tight"
          />
          <p className="font-lexend text-sm text-[#A3A3A3]">
            @IShowSpeed | Views
          </p>
        </div>
      </div>
      <div className="relative mt-16">
        <motion.img
          src="/images/purple-percentage-bar.png"
          alt="Purple Percentage"
          width={184}
          height={47}
          className="absolute bottom-0 left-0 object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 0.8, 1] }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
        <img
          src="/images/blue-percentage-bar.png"
          alt="Blue Percentage"
          width={148}
          height={42}
          className="absolute bottom-0 right-0 object-cover"
        />
      </div>
    </div>
  );
};

export default FirstTopCard;

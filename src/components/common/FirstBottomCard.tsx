import React from "react";
import TruncatedText from "../TruncatedText";

interface FirstBottomCardProps {
  className?: string;
}

const FirstBottomCard: React.FC<FirstBottomCardProps> = ({ className }) => {
  return (
    <div className="w-[340px] bg-[#fff] rounded-2xl p-4 shadow-2xl pointer-events-none">
      <div className="flex justify-between items-center">
        <img
          src="/images/youtube-logo.png"
          alt="YouTube Logo"
          width={43}
          height={30}
        />
        <div className="flex items-center justify-between gap-8 bg-[#F3F3F7] rounded-full px-5 py-2">
          <TruncatedText
            text="I Bought My First Car..."
            maxLength={21}
            className="text-[#B4B4B4] text-xs"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#B4B4B4"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center items-center mt-3.5">
        <video
          src="/videos/Test.webm" // Path to your WebM video
          autoPlay
          muted
          loop
          playsInline
          width={322} // Set the width
          height={181} // Set the height
          className="rounded-md shadow-md" // Optional styling
        />
      </div>
      <div className="mt-3 flex gap-2.5 items-start">
        <div className="w-9 h-9">
          <img
            src="/images/youtube-creator-pfp.png"
            alt="YouTube Creator Profile"
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 gap-0.5">
          <TruncatedText
            text="IShowSpeed"
            maxLength={21}
            className="font-lexend text-md text-[#0E1727] font-semibold"
          />
          <p className="font-lexend text-sm text-[#A3A3A3]">
            @IShowSpeed . 38.9M+ subscribers
          </p>
          <p className="font-lexend rounded-3xl bg-black text-xs text-white px-2 py-1 mt-2 w-fit">
            Subscribe
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstBottomCard;

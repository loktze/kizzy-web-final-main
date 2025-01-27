import React from "react";
import FirstTopCard from "../components/common/FirstTopCard";
import FirstBottomCard from "../components/common/FirstBottomCard";

interface Page4Props {
  currentPage: number;
}

const Page4: React.FC<Page4Props> = ({ currentPage }) => {
  return (
    <div className="relative z-20">
      <div
        className="relative h-dvh md:h-screen max-w-[1200px] mx-auto flex flex-col bg-cover bg-center z-[9999]"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="absolute top-1/2 left-1/2  transform-gpu -translate-x-1/2 -translate-y-1/2">
          <div
            className={`mb-6 ${currentPage === 2 ? "opacity-100 translate-y-[0]" : "opacity-0 translate-y-[50px]"}
          transition-all  transform-gpu duration-700 ease-in-out delay-700`}
          >
            <FirstTopCard />
          </div>
          <div
            className={`${currentPage === 2 ? "opacity-100 translate-y-[0]" : "opacity-0 translate-y-[50px]"}
          transition-all  transform-gpu duration-700 ease-in-out delay-300`}
          >
            <FirstBottomCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;

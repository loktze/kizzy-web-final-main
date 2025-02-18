import React from "react";
import SecondTopCard from "../components/common/SecondTopCard";
import SecondBottomCard from "../components/common/SecondBottomCard";

interface Page5Props {
  currentPage: number;
}

const Page5: React.FC<Page5Props> = ({ currentPage }) => {
  return (
    <div
      className="relative h-dvh md:h-screen max-w-[1200px] mx-auto flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2">
        <div
          className={`mb-6 ${currentPage === 3 ? "opacity-100 translate-y-[0]" : "opacity-0 translate-y-[50px]"}
          transition-all transform-gpu duration-700 ease-in-out delay-700`}
        >
          <SecondTopCard />
        </div>

        <div
          className={`${currentPage === 3 ? "opacity-100 translate-y-[0]" : "opacity-0 translate-y-[50px]"}
          transition-all transform duration-700 ease-in-out delay-300`}
        >
          <SecondBottomCard />
        </div>
      </div>
    </div>
  );
};

export default Page5;

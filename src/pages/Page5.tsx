import React from "react";
import SecondTopCard from "../components/common/SecondTopCard";
import SecondBottomCard from "../components/common/SecondBottomCard";

interface Page5Props {
  currentPage: number;
}

const Page5: React.FC<Page5Props> = ({ currentPage }) => {
  return (
    <div
      className="relative h-screen max-w-[1200px] mx-auto flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className={`mb-6 ${currentPage === 3 ? "opacity-100 translate-y-[0]" : "opacity-0 translate-y-[50px]"}
          transition-all transform duration-700 ease-in-out delay-700`}
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

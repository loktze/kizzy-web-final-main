import React from "react";
import FirstTopCard from "../components/common/FirstTopCard";
import FirstBottomCard from "../components/common/FirstBottomCard";
import SecondTopCard from "../components/common/SecondTopCard";
import SecondBottomCard from "../components/common/SecondBottomCard";

interface Page2Props {
  currentPage: number;
}

const Page2: React.FC<Page2Props> = ({ currentPage }) => {
  return (
    <div
      className="relative h-full items-center flex flex-col bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/background.png')" }}
      onTouchStart={(e) => e.stopPropagation()}
    >

      <div className="hidden lg:flex">
        <div className="absolute bottom-2 left-4 xl:left-20 2xl:left-48">
          <div
            className={`${currentPage === 1 ? "translate-y-[0]" : "translate-y-[50px]"
              } mb-4 ease-in-out transition-transform duration-700 delay-500`}
          >
            <div
              className={`${currentPage === 1 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 delay-700`}
            >
              <FirstTopCard />
            </div>
          </div>
          <div
            className={`${currentPage === 1 ? "translate-y-[0]" : "translate-y-[50px]"
              } ease-in-out transition-transform duration-700 delay-300`}
          >
            <div
              className={`${currentPage === 1 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 delay-300`}
            >
              <FirstBottomCard />
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 right-4 xl:right-20 2xl:right-48">
          <div
            className={`${currentPage === 1 ? "translate-y-[0]" : "translate-y-[50px]"
              } mb-4 ease-in-out transition-transform duration-700 delay-500`}
          >
            <div
              className={`${currentPage === 1 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 delay-700`}
            >
              <SecondTopCard />
            </div>
          </div>
          <div
            className={`${currentPage === 1 ? "translate-y-[0]" : "translate-y-[50px]"
              } ease-in-out transition-transform duration-700 delay-300`}
          >
            <div
              className={`${currentPage === 1 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 delay-300`}
            >
              <SecondBottomCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;

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
      id="page-2-root"
      className="relative h-screen max-w-[2000px] mx-auto flex flex-col bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/background.png')" }}
      onTouchStart={(e) => e.stopPropagation()}
    >
      {/* <div className="h-screen flex flex-col pt-24 lg:pt-24 2xl:pt-28 w-full pointer-events-none">
        <div className="flex">
          <div className="relative w-full flex flex-col items-center h-screen">
            <p
              className={`${currentPage === 1 ? "opacity-100 translate-y-[0]" : "opacity-0 translate-y-[10px]"} delay-300 ease-in-out transition-all transform duration-700 headline text-3xl text-center`}
            >
              Betting Like Never Before
            </p>

            <p
              className={`pt-4 md:pt-6 2xl:pt-8 ${currentPage === 1 ? "opacity-100 translate-y-[0]" : "opacity-0 translate-y-[10px]"} delay-300 ease-in-out transition-all transform duration-700 subtext text-grey text-center`}
            >
              Social media creators have taken over the world.{" "}
              <br className="md:hidden" />
              Why not bet on them?
              <br />
              Kizzy is the world’s first social media betting app.
            </p>

            <div
              className={`mt-4 md:mt-6 md:hidden ${currentPage === 1 ? "opacity-100 translate-y-[0]" : "opacity-0 translate-y-[10px]"} delay-300 ease-in-out transition-all transform duration-700 subtext text-grey text-center`}
            >
              <div className="inline-flex items-center gap-2 rounded-lg py-3 px-4 lg:rounded-2xl lg:py-3 lg:px-4 bg-gradient-to-r from-[#7040DB] via-[#906BE6] to-[#6E40DB]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="white"
                  className="w-[17px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <button>
                  <div className="download 2xl:text-base">Download now</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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

import React from "react";
import Lottie from "lottie-react";
import wave from "../assets/lotties/wave.json";
import line from "../assets/lotties/line.json";

interface Page3Props {
  currentPage: number;
}

const Page3: React.FC<Page3Props> = ({ currentPage }) => {
  return (
    <div className="relative h-screen bg-[#110c2f] bg-cover bg-center z-40">
      <div className="max-w-[2000px] mx-auto px-4 relative h-full z-40">
        <div className="flex w-full pt-24 lg:pt-24 2xl:pt-28 h-full text-center">
          <div className="relative w-full flex flex-col items-center">
            <div
              className={`relative inline-block pointer-events-none ${currentPage === 2 || currentPage === 4 ? "opacity-100 translate-y-[0]" : "opacity-0 translate-y-[10px]"} delay-300 ease-in-out transition-all transform duration-700`}
            >
              <img
                src="/images/text-decoration.png"
                alt="Text Decoration"
                className="absolute z-0 left-1 w-[154px] -top-[25px] md:w-[194px] md:-top-9 lg:w-[232px] lg:-top-[42px] 2xl:w-[305px] 2xl:-top-[60px]"
              />
              <p className="relative headline tracking-[-0.66px] z-10 text-white text-3xl">
                Start Social Media
                <br />
                Betting Now
              </p>
            </div>

            <div className="mt-4 md:mt-2 2xl:mt-8 pointer-events-none">
              <p
                className={`subtext text-lightgrey ${currentPage === 2 || currentPage === 4 ? "opacity-100 translate-y-[0]" : "opacity-0 translate-y-[10px]"} delay-300 ease-in-out transition-all transform duration-700`}
              >
                Social Media Betting is the future of how{" "}
                <br className="md:hidden" />
                to make money online.
                <br />
                What are you waiting for?
              </p>
            </div>

            <div
              className={`mt-4 lg:mt-4 2xl:mt-6 ${currentPage === 2 || currentPage === 4 ? "opacity-100 translate-y-[0]" : "opacity-0 translate-y-[10px]"} delay-300 ease-in-out transition-all transform duration-700`}
            >
              <div className="inline-flex items-center gap-2 lg:gap-4 rounded-xl py-3 px-4 lg:px-3.5 lg:py-3.5 bg-gradient-to-r from-[#7040DB] via-[#906BE6] to-[#6E40DB]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="white"
                  className="w-[17px] lg:[22px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <button>
                  <div className="download">Download now</div>
                </button>
              </div>
            </div>

            <div
              className={`pt-24 lg:pt-8 2xl:pt-16 ${
                currentPage === 2 || currentPage === 4
                  ? "opacity-100 translate-y-[0]"
                  : "opacity-0 -translate-y-[20px]"
              } transition-all transform duration-700 ease-in-out delay-300 relative`}
            >
              {/* Fog Effect */}
              <div
                className="absolute top-[70%] inset-0 bg-[#7040DB4F] blur-[80px] rounded-full z-[-10]"
                aria-hidden="true"
              ></div>

              {/* Phone Image */}
              <img
                src="/images/phone2.png"
                alt="Phone 2"
                className="w-full max-w-xs md:max-w-md 2xl:max-w-lg h-auto object-contain z-20 relative"
              />

              {/* Lottie Animations */}
              <div className="absolute top-[36%] md:top-[44%] lg:top-[8%] xl:top-[6%] 2xl:top-[24%] left-1/2 transform -translate-x-1/2 z-10">
                <Lottie
                  animationData={wave}
                  loop={true}
                  autoplay={true}
                  aria-label="Wave Animation"
                  className="w-[360px] md:w-[420px] lg:w-[580px] mx-auto"
                />
                <div className="absolute bottom-14 md:bottom-20 lg:bottom-24 left-1/2 transform -translate-x-1/2">
                  <Lottie
                    animationData={line}
                    loop={true}
                    autoplay={true}
                    aria-label="Line Animation"
                    className="w-[159px] md:w-[239px] lg:w-[259px] mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <div
            className={`absolute left-[10%] top-[17%] lg:top-[15%] 2xl:left-[12%] 2xl:top-[14%] ${
              currentPage === 2
                ? "opacity-100 translate-x-[0]"
                : "opacity-0 translate-x-[10px]"
            } delay-300 ease-in-out transition-all transform duration-700`}
          >
            <div className="relative">
              <div
                className="absolute top-[10%] inset-0 bg-[#7040DB4F] blur-[60px] rounded-full z-[-1]"
                aria-hidden="true"
              ></div>
              <img
                src="/images/left-top-image.png"
                alt="Left Top"
                className="relative object-contain w-[208px] h-[208px] xl:w-[232px] xl:h-[232px] 2xl:w-[300px] 2xl:h-[300px]"
              />
            </div>
          </div>
          <div
            className={`absolute left-[6%] bottom-[17%] lg:bottom-[22%] 2xl:left-[8%] 2xl:bottom-[18%] ${
              currentPage === 2
                ? "opacity-100 translate-x-[0]"
                : "opacity-0 translate-x-[10px]"
            } delay-300 ease-in-out transition-all transform duration-700`}
          >
            <div className="relative">
              <div
                className="absolute top-[10%] inset-0 bg-[#7040DB4F] blur-[60px] rounded-full z-[-1]"
                aria-hidden="true"
              ></div>
              <img
                src="/images/left-bot-image.png"
                alt="Left Bottom"
                className="relative object-contain w-[208px] h-[208px] xl:w-[232px] xl:h-[232px] 2xl:w-[300px] 2xl:h-[300px]"
              />
            </div>
          </div>

          <div
            className={`right-[6%] top-[38%] xl:right-[6%] xl:top-[37%] 2xl:right-[6%] ${
              currentPage === 2
                ? "opacity-100 translate-x-[0]"
                : "opacity-0 -translate-x-[10px]"
            } absolute delay-300 ease-in-out transition-all transform duration-700`}
          >
            <div className="relative">
              <div
                className="absolute top-[10%] inset-0 bg-[#7040DB4F] blur-[60px] rounded-full z-[-1]"
                aria-hidden="true"
              ></div>
              <img
                src="/images/right-image.png"
                alt="Right"
                className="relative object-contain w-[269px] h-[269px] xl:w-[259px] xl:h-[259px] 2xl:w-[349px] 2xl:h-[349px]"
              />
            </div>
          </div>
        </div>

        <footer className="absolute bottom-0 w-full bg-transparent">
          <div className="flex justify-center lg:hidden">
            <div className="flex gap-4 pb-8 2xl:gap-6">
              <p className="p3footer">&copy; Kizzy Labs</p>
              <p className="p3footer">Privacy Policy</p>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="flex gap-4 pb-8 2xl:pb-6">
              <button>
                <p className="p3footer">&copy; Kizzy Labs</p>
              </button>
              <button>
                <p className="p3footer">Privacy Policy</p>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page3;

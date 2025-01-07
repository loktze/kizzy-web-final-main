import React from "react";
import Lottie from "lottie-react";
import wave from "../assets/lotties/wave.json";
import line from "../assets/lotties/line.json";
import P3Header from "../components/layout/P3Header";

interface Page3Props {
  currentPage: number;
}

const Page3: React.FC<Page3Props> = ({ currentPage }) => {
  return (
    <div className="relative h-screen bg-[#110c2f] bg-cover bg-center">
      <P3Header />
      <div className="flex w-full pt-20 lg:pt-24 2xl:pt-28 h-full text-center">
        <div className="relative w-full flex flex-col items-center h-screen">
          <div className="relative inline-block pointer-events-none">
            <img
              src="/images/text-decoration.png"
              alt="Text Decoration"
              className="absolute z-0 left-0 w-[142px] -top-7 md:w-[216px] md:-top-12 lg:w-[256px] lg:-top-12 2xl:w-[333px] 2xl:-top-16"
              loading="lazy"
            />
            <p className="relative headline z-10 text-white text-3xl">
              Start Social Media
              <br />
              Betting Now
            </p>
          </div>

          <div className="mt-2 md:mt-2 2xl:mt-8 pointer-events-none">
            <p className="subtext text-lightgrey">
              Social Media Betting is the future of how
              <br className="md:hidden" />
              ot make money online.
              <br />
              What are you waiting for?
            </p>
          </div>

          <div className="mt-2 lg:mt-4 2xl:mt-6">
            <div className="inline-flex items-center gap-2 rounded-[10px] py-3 px-4 lg:py-3.5 lg:px-4 bg-gradient-to-r from-[#7040DB] via-[#906BE6] to-[#6E40DB]">
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
                <div className="download">Download Now</div>
              </button>
            </div>
          </div>

          {(currentPage === 2 || currentPage === 4) && (
            <div>
              <img
                src="/images/phone2.png"
                alt="Phone 2"
                width={298}
                height={190}
                className="lg:w-[348px] lg:h-[240px] xl:w-[368px] xl:h-[260px] 2xl:w-[551px] 2xl:h-[341px] object-contain z-10"
                loading="lazy"
              />
              <div className="absolute top-[36%] md:top-[39%] lg:-top-[10%] xl:-top[38%] 2xl:top-[26%] left-1/2 transform -translate-x-1/2">
                <Lottie
                  animationData={wave}
                  loop={true}
                  autoplay={true}
                  aria-label="Wave Animation"
                  className="w-[360px] lg:w-[540px] mx-auto"
                />
                <div className="absolute bottom-14 md:bottom-14 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-10">
                  <Lottie
                    animationData={line}
                    loop={true}
                    autoplay={true}
                    aria-label="line Animation"
                    className="w-[159px] lg:w-[259px] mx-auto"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden xl:flex w-full">
        <div className="absolute left-[10%] top-[17%] 2xl:left-[12%] 2xl:top-[13%]">
          <img
            src="/images/left-top-image.png"
            alt="Left Top"
            className="object-contain w-[208px] h-[208px] xl:w-[232px] xl:h-[232px] 2xl:w-[340px] 2xl:h-[340px]"
            loading="lazy"
          />
        </div>
        <div className="absolute left-[6%] bottom-[17%] 2xl:left-[8%] 2xl:bottom-[10%]">
          <img
            src="/images/left-bot-image.png"
            alt="Left Bottom"
            className="object-contain w-[208px] h-[208px] xl:w-[232px] xl:h-[232px] 2xl:w-[340px] 2xl:h-[340px]"
            loading="lazy"
          />
        </div>

        <div className="absolute right-[10%] top-[38%] xl:right-[6%] xl:top-[34%] 2xl:right-[6%]">
          <img
            src="/images/right-image.png"
            alt="Right"
            className="object-contain w-[269px] h-[269px] xl:w-[279px] xl:h-[279px] 2xl:w-[389px] 2xl:h-[389px]"
            loading="lazy"
          />
        </div>
      </div>

      <footer className="absolute bottom-0 w-full bg-transparent">
        <div className="flex justify-center md:hidden">
          <div className="flex gap-4 pb-8 2xl:gap-6">
            <p className="p3footer">&copy; Kizzy Labs</p>
            <p className="p3footer">Privacy Policy</p>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="font-lexend flex gap-4 pb-8 2xl:pb-6">
            <button>
              <p className="p3footer">Career</p>
            </button>
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
  );
};

export default Page3;

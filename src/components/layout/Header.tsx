import React from "react";

interface HeaderProps {
  currentPage: number;
  isMedium: boolean; // Prop to indicate if the device is medium or smaller
}

const Header: React.FC<HeaderProps> = ({ currentPage, isMedium }) => {
  // Determine styles based on currentPage and screen size
  const isPage3 = currentPage === 4 && isMedium; // Page 3 on medium or smaller devices
  const isPage3Large = currentPage === 2 && !isMedium; // Page 3 on large devices

  return (
    <div className="absolute top-0 w-full bg-transparent p-4 lg:p-6">
      <div className="max-w-[2000px] mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <button>
            <img
              src={
                isPage3 || isPage3Large
                  ? "/images/kizzy-light-logo-mobile.png" // Light logo for Page 3
                  : "/images/kizzy-dark-logo-mobile.png" // Dark logo for other pages
              }
              alt={
                isPage3 || isPage3Large
                  ? "Kizzy Light Logo Mobile"
                  : "Kizzy Dark Logo Mobile"
              }
              width={69}
              height={28}
              className="block lg:hidden"
            />
          </button>
          <button>
            <img
              src={
                isPage3 || isPage3Large
                  ? "/images/kizzy-light-logo.png" // Light logo for Page 3
                  : "/images/kizzy-dark-logo.png" // Dark logo for other pages
              }
              alt={
                isPage3 || isPage3Large
                  ? "Kizzy Light Logo"
                  : "Kizzy Dark Logo"
              }
              width={142}
              height={58}
              className="hidden lg:block"
            />
          </button>
        </div>

        {/* Careers and Download Section */}
        <div>
          <div className="flex items-center gap-14">
            {/* Careers Text */}
            <div className="hidden md:block">
              <button>
                <p
                  className={`careers ${isPage3 || isPage3Large ? "text-white" : "text-black"
                    }`}
                >
                  Careers
                </p>
              </button>
            </div>

            {/* Download Button */}
            <button className="inline-flex items-center gap-2 lg:gap-4 rounded-xl py-3 px-4 lg:px-6 lg:py-4 xl:rounded-2xl bg-gradient-to-r from-[#7040DB] via-[#906BE6] to-[#6E40DB]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="w-[17px] lg:w-[22px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <div className="download">Download now</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

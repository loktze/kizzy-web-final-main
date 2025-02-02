import React from "react";
import TestnetButton from "../TestnetButton";

interface HeaderProps {
  currentPage: number;
  isMedium: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentPage, isMedium }) => {
  const isPage3 = currentPage === 4 && isMedium;
  const isPage3Large = currentPage === 2 && !isMedium;

  const handleRefresh = () => {
    window.location.href = "/"; // This will force a full page reload
  };

  return (
    <div className="mt-[15px] absolute top-0 w-full bg-transparent p-4 lg:p-6">
      <div className="max-w-[2000px] mx-auto flex justify-between items-center">
        <div onClick={handleRefresh} className="cursor-pointer">
          <img
            src={
              isPage3 || isPage3Large
                ? "/images/kizzy-light-logo-mobile.png"
                : "/images/kizzy-dark-logo-mobile.png"
            }
            alt={
              isPage3 || isPage3Large
                ? "Kizzy Light Logo Mobile"
                : "Kizzy Dark Logo Mobile"
            }
            width={80}
            height={28}
            className="block lg:hidden object-contain"
          />
          <img
            src={
              isPage3 || isPage3Large
                ? "/images/kizzy-light-logo.png"
                : "/images/kizzy-dark-logo.png"
            }
            alt={isPage3 || isPage3Large ? "Kizzy Light Logo" : "Kizzy Dark Logo"}
            width={142}
            height={58}
            className="hidden lg:block"
          />
        </div>

        <div>
          <div className="flex items-center gap-14">
            <div className="hidden md:flex items-center gap-8">
              <a
                href="https://x.com/kizzymobile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <img
                  src={
                    isPage3 || isPage3Large
                      ? "/images/x-logo-light.png"
                      : "/images/x-logo-dark.png"
                  }
                  alt={
                    isPage3 || isPage3Large
                      ? "X Logo Light"
                      : "X Logo Dark"
                  }
                  className="w-4 h-4 object-contain"
                />
              </a>
              <a
                href="https://jobs.polymer.co/kizzy-labs-corp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <p
                    className={`careers ${isPage3 || isPage3Large ? "text-white" : "text-black"
                      }`}
                  >
                    Careers
                  </p>
                </button>
              </a>
            </div>
            <TestnetButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

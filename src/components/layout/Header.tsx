import React from "react";
import TestnetButton from "../TestnetButton";

interface HeaderProps {
  currentPage: number;
  isMedium: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentPage, isMedium }) => {
  const isPage3 = currentPage === 4 && isMedium;
  const isPage3Large = currentPage === 2 && !isMedium;

  return (
    <div className="mt-[15px] absolute top-0 w-full bg-transparent p-4 lg:p-6">
      <div className="max-w-[2000px] mx-auto flex justify-between items-center">
        <div>
          <button>
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
          </button>
          <button>
            <img
              src={
                isPage3 || isPage3Large
                  ? "/images/kizzy-light-logo.png"
                  : "/images/kizzy-dark-logo.png"
              }
              alt={
                isPage3 || isPage3Large ? "Kizzy Light Logo" : "Kizzy Dark Logo"
              }
              width={142}
              height={58}
              className="hidden lg:block"
            />
          </button>
        </div>

        <div>
          <div className="flex items-center gap-14">
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

            <TestnetButton />


          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

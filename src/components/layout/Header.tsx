// components/Header.tsx
import React from "react";
import DownloadButton from "../common/DownloadButton";
import Logo from "../common/Logo";

interface HeaderProps {
  currentPage?: number; // Make it optional
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const handleClick = () => {
    // Handle click logic
  };

  return (
    <div className="absolute top-0 w-full bg-transparent p-3.5 md:p-8">
      <div className="flex justify-between items-center">
        <Logo currentPage={currentPage || -1} /> {/* Pass a fallback value */}

        <div className="flex items-center gap-14">
          <div className="hidden md:block">
            <p
              className={`careers ${currentPage === 2 ? "text-white" : "text-black"
                }`}
            >
              Careers
            </p>
          </div>

          <DownloadButton
            onClick={handleClick}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="w-4 md:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            }
          >
            Download now
          </DownloadButton>
        </div>
      </div>
    </div>
  );
};

export default Header;

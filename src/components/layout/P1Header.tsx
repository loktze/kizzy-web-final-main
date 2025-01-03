import React from "react";

const P1Header: React.FC = () => {
  return (
    <div className="absolute top-0 w-full bg-transparent p-3.5 md:p-8">
      <div className="flex justify-between items-center">
        <div>
          <img
            src="/images/kizzy-dark-logo-mobile.png"
            alt="Kizzy Dark Logo Mobile"
            width={69}
            height={28}
            className="block xl:hidden"
            loading="lazy"
          />
          <img
            src="/images/kizzy-dark-logo.png"
            alt="Kizzy dark Logo"
            width={142}
            height={58}
            className="hidden xl:block"
            loading="lazy"
          />
        </div>
        <div className="">
          <div className="flex items-center gap-14">
            <div className="hidden md:block">
              <p className="careers text-black">Careers</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-[10px] py-2.5 px-4 lg:rounded-2xl lg:py-[15px] lg:px-6 bg-gradient-to-r from-[#7040DB] via-[#906BE6] to-[#6E40DB]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="w-[22px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <div className="download">Download Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P1Header;

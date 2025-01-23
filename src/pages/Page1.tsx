import React from "react";

interface Page1Props {
  currentPage: number;
}

const Page1: React.FC<Page1Props> = ({ currentPage }) => {
  return (
    <div
      className="relative h-full mx-auto flex bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="absolute inset-0 flex justify-center items-center z-5 pt-[100px] md:pt-0 h-full">
        <div
          className="absolute w-[80%] h-[700px] blur-[80px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(204, 196, 245, 0.6) 0%, rgba(204, 196, 245, 0.3) 70%, rgba(204, 196, 245, 0) 100%)"
          }}
        />
        <div
          className="absolute w-[60%] h-[500px] blur-[80px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(204, 196, 245, 0.7) 0%, rgba(204, 196, 245, 0.35) 60%, rgba(204, 196, 245, 0) 100%)"
          }}
        />
        <div className="absolute w-full flex justify-center z-0 pt-[500px] md:pt-0 pointer-events-none">
          <div className="w-full whitespace-nowrap overflow-hidden">
            <div
              className={`inline-block text-white font-poppins font-semibold marquee leading-[1.2] overflow-visible ${currentPage === 0 ? "opacity-100" : "opacity-0"} transform-opacity transform-gpu duration-300 ease-in-out`}
              style={{
                paddingBottom: "20px",
                WebkitTextStroke: "0.2px transparent",
              }}
              aria-hidden="true"
            >
              Social Media Betting Social Media Betting Social Media Betting
              Social Media Betting Social Media Betting Social Media Betting
            </div>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-0 w-full bg-transparent">
        <div className="hidden md:flex justify-end p-12">
          <p className="p1footer">Privacy Policy</p>
        </div>
        <div className={`${currentPage !== 0 ? "hidden" : "flex"} justify-center md:hidden`}>
          <div className="flex gap-4 pb-6">
            <button>
              <p className="p1footer">Privacy Policy</p>
            </button>
            <button>
              <p className="p1footer">Careers</p>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page1;

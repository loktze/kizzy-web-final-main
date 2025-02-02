import React from "react";
import { Link } from "react-router-dom";


interface Page1Props {
  currentPage: number;
}

const Page1: React.FC<Page1Props> = ({ currentPage }) => {
  return (
    <div
      className={`relative h-full mx-auto flex bg-cover bg-center  max-w-xxlScreen`}
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {currentPage === 0 &&
        <>
          <div
            className={`${currentPage !== 0 ? "opacity-0" : "opacity-100"}  ease-in-out duration-100 transition-opacity absolute inset-0 flex justify-center items-center z-5 pt-[100px] md:pt-0 h-full pointer-events-none`}
          >
            <div
              className={` absolute w-[80%] h-[700px] blur-[80px] rounded-full`}
              style={{
                background:
                  "radial-gradient(circle, rgba(204, 196, 245, 0.6) 0%, rgba(204, 196, 245, 0.3) 70%, rgba(204, 196, 245, 0) 100%)",
              }}
            />
            <div
              className="absolute w-[60%] h-[500px] blur-[80px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(204, 196, 245, 0.7) 0%, rgba(204, 196, 245, 0.35) 60%, rgba(204, 196, 245, 0) 100%)",
              }}
            />

          </div>
          <div className="absolute w-full flex justify-center z-0 bottom-[45px] md:bottom-[50%] md:translate-y-1/2 md:transform pointer-events-none">
            <div className="w-full whitespace-nowrap overflow-hidden">
              <div
                className={`z-0 inline-block text-white font-poppins font-semibold marquee leading-[1.2] `}
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
        </>
      }

      <footer className="absolute bottom-0 w-full bg-transparent z-[1500]">
        <div className="hidden md:flex justify-end p-12">
          <Link to="/privacypolicy" className="p1footer ">Privacy Policy</Link>
        </div>
        <div
          className={`${currentPage !== 0 ? "hidden" : "flex"} justify-center md:hidden`}
        >
          <div className="flex gap-4 pb-6">
            <Link to="/privacypolicy">
              <button className="p1footer">Privacy Policy</button>
            </Link>
            <a
              href="https://jobs.polymer.co/kizzy-labs-corp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p1footer">Careers</button>
            </a>
          </div>
        </div>
      </footer>
      <div className="z-[1000] absolute top-0 left-0 bg-transparent bg-cover h-full w-full"></div>
    </div>

  );
};

export default Page1;

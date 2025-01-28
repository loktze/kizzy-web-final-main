import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import CountdownPage from "./pages/CountdownPage";
import PortalPhone from "./components/PortalPhone";
import useMediaQuery from "./hooks/useMediaQuery";
import Header from "./components/layout/Header";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const isThrottled = useRef(false);

  const isLarge = useMediaQuery("(min-width: 1024px)");
  const isMedium = useMediaQuery("(max-width: 1023px)");

  const pages = useMemo(() => {
    if (isLarge) {
      return [
        <Page1 currentPage={currentPage} key="page1" />,
        <Page2 currentPage={currentPage} key="page2" />,
        <Page3 currentPage={currentPage} key="page3" />,
      ];
    } else if (isMedium) {
      return [
        <Page1 currentPage={currentPage} key="page1" />,
        <Page2 currentPage={currentPage} key="page2" />,
        <Page4 currentPage={currentPage} key="page4" />,
        <Page5 currentPage={currentPage} key="page5" />,
        <Page3 currentPage={currentPage} key="page3" />,
      ];
    } else {
      return [
        <Page1 currentPage={currentPage} key="page1" />,
        <Page2 currentPage={currentPage} key="page2" />,
        <Page3 currentPage={currentPage} key="page3" />,
      ];
    }
  }, [isLarge, isMedium, currentPage]);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    if (!isThrottled.current) {
      isThrottled.current = true;

      requestAnimationFrame(() => {
        const scrollPosition = containerRef.current!.scrollTop;
        const pageHeight = containerRef.current!.offsetHeight;

        const newPage = Math.round(scrollPosition / pageHeight);
        if (newPage !== currentPage) {
          setCurrentPage(newPage);
        }

        isThrottled.current = false;
      });
    }
  }, [currentPage]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      container.addEventListener("touchstart", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
        container.removeEventListener("touchstart", handleScroll);
      };
    }
  }, [handleScroll]);

  const showHeader =
    (isMedium && [0, 1, 2, 3, 4].includes(currentPage)) ||
    (isLarge && [0, 1, 2].includes(currentPage));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {showHeader && (
                <div className="fixed top-0 left-0 w-full z-[9999] ">
                  <Header currentPage={currentPage} isMedium={isMedium} />
                </div>
              )}

              <div
                ref={containerRef}
                className="max-h-dvh h-dvh w-full z-[20]  overflow-x-hidden overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
              >
                {pages.map((PageComponent, index) => (
                  <div
                    key={index}
                    className={`${index === 1 ? "relative" : ""} w-full h-full snap-always snap-center`}
                  >
                    {PageComponent}
                  </div>
                ))}
              </div>
              <div
                className={`z-[80] pointer-events-none flex flex-col items-center justify-between overflow-hidden fixed top-0 w-full h-full`}
              >
                <div
                  className={`w-full px-4 flex flex-col items-center gap-4 mb-4 z-0  ${currentPage === 1
                    ? "opacity-100 translate-y-[10px]"
                    : "opacity-0 translate-y-0"
                    }  transform-gpu transition-all duration-500 ease-in-out pt-24`}
                >
                  {currentPage === 1 && (
                    <>
                      <p className={`headline text-3xl text-center font-poppins`}>
                        Betting Like Never Before
                      </p>

                      <p className={` subtext text-grey text-center`}>
                        Social media creators have taken over the world.{" "}
                        <br className="md:hidden" />
                        Why not bet on them?
                        <br />
                        Kizzy is the world’s first social media betting app.
                      </p>

                      <div className="z-[9999]">
                        <div className="relative z-0">
                          <button
                            className="bg-buttonpurple z-[10]
                         flex justify-between items-center gap-2 lg:gap-4 rounded-xl py-3 px-4 lg:px-6 lg:py-4 xl:rounded-2xl "
                          >
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
                            <div className="download">Testnet Download</div>

                          </button>
                          <div className="absolute z-[1] bg-darkpurple top-8 lg:top-10 left-1/2 transform -translate-x-1/2 rounded-full text-white inline-flex items-center justify-center px-3 py-1">
                            <p className="text-[10px] font-500 font-poppins whitespace-nowrap">Coming Soon</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <PortalPhone currentPage={currentPage} />
                {currentPage === 1 && (
                  <div className="absolute bottom-0 left-0 inset-0 pointer-events-none bg-gradient-to-t from-white via-white/10 via-30% to-transparent z-[9999]"></div>
                )}
              </div>
            </>
          }
        />

        <Route
          path="/countdownpage"
          element={<CountdownPage />}
        />

        <Route path="/privacypolicy"
          element={<PrivacyPolicy />}
        />

      </Routes>
    </Router>
  );
}

export default App;

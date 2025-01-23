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
import PortalPhone from "./components/PortalPhone";
import useMediaQuery from "./hooks/useMediaQuery";
import Header from "./components/layout/Header";
// import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const isThrottled = useRef(false);

  const isLarge = useMediaQuery("(min-width: 1024px)");
  const isMedium = useMediaQuery("(max-width: 1023px)");

  //Mobile has extra pages
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


  //Calculate the current page number
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
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  //Headers check
  const showHeader =
    (isMedium && [0, 1, 2, 3, 4].includes(currentPage)) ||
    (isLarge && [0, 1, 2].includes(currentPage));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {showHeader && (
                <div className="fixed top-0 left-0 w-full z-[9999]">
                  <Header currentPage={currentPage} isMedium={isMedium} />
                </div>
              )}


              <div
                ref={containerRef}
                className="max-h-dvh w-full h-dvh overflow-x-hidden overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
              >

                {pages.map((PageComponent, index) => (
                  <div key={index} className="w-full h-full snap-always snap-center max-w-[2000px] pb-1">
                    {PageComponent}
                  </div>
                ))}


                <div className={` flex flex-col items-center justify-between overflow-hidden fixed top-0  w-full h-full`}>

                  <div className={`w-full px-4 flex flex-col  items-center gap-4 z-0  ${currentPage === 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[10px] mt-0"
                    }  !transform-gpu transition-all duration-500 md:duration-300 ease-in-out pt-24`}>
                    <p
                      className={`headline text-3xl text-center pointer-events-none !touch-none`}
                    >
                      Betting Like Never Before
                    </p>

                    <p
                      className={` subtext text-grey text-center pointer-events-none !touch-none`}
                    >
                      Social media creators have taken over the world.{" "}
                      <br className="md:hidden" />
                      Why not bet on them?
                      <br />
                      Kizzy is the world’s first social media betting app.
                    </p>

                    <div

                    >
                      <div className=" inline-flex items-center gap-2 rounded-lg py-3 px-4 lg:rounded-2xl lg:py-3 lg:px-4 bg-gradient-to-r from-[#7040DB] via-[#906BE6] to-[#6E40DB]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="white"
                          className="w-[17px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>
                        <button>
                          <div className="download 2xl:text-base">Download now</div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <PortalPhone
                    currentPage={currentPage}
                  />


                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router >
  );
}

export default App;

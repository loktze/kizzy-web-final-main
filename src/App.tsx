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
import P1Header from "./components/layout/P1Header";
// import PrivacyPolicy from "./pages/PrivacyPolicy";

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
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  const showHeader =
    (isMedium && [0, 1, 2, 3].includes(currentPage)) ||
    (isLarge && [0, 1].includes(currentPage));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {showHeader && (
                <div className="fixed top-0 left-0 w-full z-10">
                  <P1Header />
                </div>
              )}
              <div
                ref={containerRef}
                className={`h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory hide-scrollbar`}
              >
                {pages.map((PageComponent, index) => (
                  <div key={index} className="w-screen h-screen snap-start">
                    {PageComponent}
                  </div>
                ))}

                <PortalPhone currentPage={currentPage} />
              </div>
            </>
          }
        />
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

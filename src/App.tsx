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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

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

    const scrollPosition = containerRef.current.scrollTop;
    const pageHeight = containerRef.current.offsetHeight;

    // Calculate the total height of all pages
    const totalHeight = pageHeight * pages.length;

    // Clamp the scroll position
    const clampedScrollPosition = Math.max(
      0,
      Math.min(scrollPosition, totalHeight - pageHeight)
    );

    // Correct the scroll position if out of bounds
    if (scrollPosition !== clampedScrollPosition) {
      containerRef.current.scrollTop = clampedScrollPosition;
      return;
    }

    // Calculate the current page index
    const newPage = Math.round(clampedScrollPosition / pageHeight);
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  }, [currentPage, pages.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <Router>
      <Routes>
        {/* Scrolling Pages */}
        <Route
          path="/"
          element={
            <div
              ref={containerRef}
              className="h-screen overflow-y-scroll snap-y snap-mandatory"
            >
              {pages.map((PageComponent, index) => (
                <div key={index} className="h-screen snap-start">
                  {PageComponent}
                </div>
              ))}

              <PortalPhone currentPage={currentPage} />
            </div>
          }
        />

        {/* Privacy Policy Page */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;

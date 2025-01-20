// PortalPhone.jsx
import React, { useRef, useState, memo } from "react";
import VimeoEmbed from "./VimeoEmbed";
import useMediaQuery from "../hooks/useMediaQuery";

interface PortalPhoneProps {
  currentPage: number;
}

const PortalPhone: React.FC<PortalPhoneProps> = memo(({ currentPage }) => {
  const phoneRef = useRef<HTMLImageElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const isLarge = useMediaQuery("(min-width: 1024px)");
  const isMedium = useMediaQuery("(max-width: 1023px)");

  // Show PortalPhone only on Page1 and Page2
  const shouldShowPhone =
    (isLarge || isMedium) && (currentPage === 0 || currentPage === 1);

  const phoneClassName = `${
    shouldShowPhone
      ? "w-[227px] h-[466px] lg:w-[302px] lg:h-[621px] object-contain transition-transform transition-opacity duration-700"
      : "hidden"
  }`;

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // Define animation classes based on currentPage and screen size
  const getAnimationClasses = () => {
    if (!shouldShowPhone) return "";

    if (currentPage === 0) {
      // Centered position for Page1
      return isLarge
        ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100"
        : "relative mx-auto opacity-100";
    } else if (currentPage === 1) {
      // Dropdown position for Page2
      return isLarge
        ? "fixed top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100"
        : "relative mx-auto opacity-100 translate-y-10";
    } else {
      // Hidden on other pages
      return "opacity-0";
    }
  };

  return (
    <>
      {shouldShowPhone && (
        <div className={`${getAnimationClasses()} pointer-events-none`}>
          <img
            ref={phoneRef}
            src="/images/phone.png"
            alt="Portal Phone Display"
            className={phoneClassName}
            onLoad={handleImageLoad}
          />
          {isImageLoaded && (
            <VimeoEmbed
              videoId="1033441094"
              width="94%"
              height="98%"
              className={`
                absolute
                top-1/2
                left-1/2
                transform
                -translate-x-1/2
                -translate-y-1/2
                rounded-[1rem]
                md:rounded-[2rem]
                2xl:rounded-[3.5rem]
                pointer-events-none
                transition-opacity
                ease-in-out
                ${currentPage === 0 ? "opacity-100" : "opacity-0"}
              `}
              autoplay={true}
              loop={true}
              muted={true}
              isVisible={currentPage === 0 || currentPage === 1}
            />
          )}
        </div>
      )}
    </>
  );
});

export default PortalPhone;

import React, { useRef, useState } from "react";
import VimeoEmbed from "./VimeoEmbed";
import useMediaQuery from "../hooks/useMediaQuery";

interface PortalPhoneProps {
  currentPage: number;
}

const PortalPhone: React.FC<PortalPhoneProps> = ({ currentPage }) => {
  const phoneRef = useRef<HTMLImageElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const isLarge = useMediaQuery("(min-width: 1024px)");
  const isMedium = useMediaQuery("(max-width: 1023px)");

  const shouldShowPhone =
    (isLarge || isMedium) && (currentPage === 0 || currentPage === 1);

  const phoneClassName = `${
    shouldShowPhone
      ? "w-[227px] h-[466px] lg:w-[302px] lg:h-[621px] object-contain"
      : ""
  }`;

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const animationValues =
    currentPage === 0
      ? "phone-center"
      : currentPage === 1 && isLarge
        ? "phone-drop-large"
        : currentPage === 1 && isMedium
          ? "phone-drop-medium"
          : "phone-hidden";

  const videoId = "1033441094";

  return (
    <div
      className={`${
        currentPage === 1 ? "absolute" : "fixed"
      } inset-0 flex items-center justify-center pointer-events-none`}
    >
      <div
        className={`${animationValues} relative pointer-events-none duration-500 transition-transform ease-in-out`}
      >
        <div className="relative w-full h-full">
          {shouldShowPhone && (
            <img
              key="phone"
              ref={phoneRef}
              src="/images/phone.png"
              alt="Portal Phone Display"
              className={phoneClassName}
              onLoad={handleImageLoad}
            />
          )}

          <VimeoEmbed
            key={`vimeo-${videoId}`}
            isVisible={currentPage === 0}
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
                ${currentPage === 0 && isImageLoaded ? "opacity-100" : "opacity-0"}
              `}
            autoplay={true}
            loop={true}
            muted={true}
          />
        </div>
      </div>
    </div>
  );
};

export default PortalPhone;

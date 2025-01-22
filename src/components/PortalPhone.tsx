import React, { useRef, useState, useMemo } from "react";
import VimeoEmbed from "./VimeoEmbed";
import useMediaQuery from "../hooks/useMediaQuery";
import Portal from "./Portal";

interface PortalPhoneProps {
  currentPage: number;
  setAnimationEnd: React.Dispatch<React.SetStateAction<boolean>>;
  animationEnd: boolean;
}

const PortalPhone: React.FC<PortalPhoneProps> = ({
  currentPage,
  animationEnd,
  setAnimationEnd,
}) => {
  const phoneRef = useRef<HTMLImageElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const isLarge = useMediaQuery("(min-width: 1024px)");
  const isMedium = useMediaQuery("(max-width: 1023px)");

  const shouldShowPhone = useMemo(
    () => (isLarge || isMedium) && (currentPage === 0 || currentPage === 1),
    [isLarge, isMedium, currentPage]
  );

  const phoneClassName = shouldShowPhone
    ? "w-[227px] h-[466px] lg:w-[302px] lg:h-[621px] object-contain"
    : "";

  const handleImageLoad = () => setIsImageLoaded(true);

  const animationValues = useMemo(() => {
    if (currentPage === 0) return "phone-center";
    if (currentPage === 1 && isLarge) return "phone-drop-large";
    if (currentPage === 1 && isMedium) return "phone-drop-medium";
    return "phone-hidden";
  }, [currentPage, isLarge, isMedium]);

  const videoId = "1033441094";

  return (
    <Portal currentPage={currentPage} animationEnd={animationEnd}>
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-30">
        <div
          className={`${animationValues} relative pointer-events-none duration-500 transition-transform ease-in-out`}
        >
          <div className="relative w-full h-full flex justify-center">
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
              videoId={videoId}
              width="94%"
              height="98%"
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[1rem] md:rounded-[2rem] 2xl:rounded-[3.5rem] pointer-events-none transition-opacity ease-in-out ${currentPage === 0 && isImageLoaded ? "opacity-100" : "opacity-0"
                }`}
              autoplay
              loop
              muted
            />
          </div>
        </div>
        {currentPage === 1 && (
          <div className="absolute bottom-0 left-0 inset-0 pointer-events-none bg-gradient-to-t from-white via-white/10 via-30% to-transparent z-[9999]"></div>
        )}
      </div>
    </Portal>
  );
};

export default PortalPhone;

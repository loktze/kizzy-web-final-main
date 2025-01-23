import React, { useRef, useMemo } from "react";
import VimeoEmbed from "./VimeoEmbed";
import useMediaQuery from "../hooks/useMediaQuery";

interface PortalPhoneProps {
  currentPage: number;
}

const PortalPhone: React.FC<PortalPhoneProps> = ({
  currentPage,
}) => {
  const phoneRef = useRef<HTMLImageElement>(null);
  const isLarge = useMediaQuery("(min-width: 1024px)");
  const isMedium = useMediaQuery("(max-width: 1023px)");

  const shouldShowPhone = useMemo(
    () => (isLarge || isMedium) && (currentPage === 0 || currentPage === 1),
    [isLarge, isMedium, currentPage]
  );

  const phoneClassName = shouldShowPhone
    ? "w-[227px] lg:w-[302px] object-contain"
    : "";


  const videoId = "1033441094";

  return (
    <div className={`h-full  flex justify-center items-center overflow-visible w-full `}>

      <div className={`${currentPage === 1 ? "scale-[1.3] translate-y-[22px]" : "scale-1 -translate-y-[150px]"} duration-700  md:duration-300 ease-in-out relative ${phoneClassName} will-change-transform origin-top md:duration-500 transition-all transform-gpu`}>
        {shouldShowPhone && (
          <img
            key="phone"
            ref={phoneRef}
            src="/images/phone.png"
            alt="Portal Phone Display"
            className="object-cover"
          />
        )}
        <div className={`absolute bottom-0 left-0 object-fill h-full w-full p-[8px] `}>

          <VimeoEmbed
            key={`vimeo-${videoId}`}
            isVisible={currentPage === 0}
            videoId={videoId}
            width="100%"
            height="100%"
            className={`rounded-[29px] md:rounded-[43px] transition-opacity ease-in-out
              ${currentPage === 0 ? "opacity-100" : "opacity-0"}`}
            autoplay
            loop
            muted
          />
        </div>
      </div>

    </div>


  );
};

export default PortalPhone;

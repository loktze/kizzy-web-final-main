import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const phoneClassName = `${shouldShowPhone ? "w-[227px] h-[466px] lg:w-[302px] lg:h-[621px] object-contain" : ""}`;

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const animationValues =
    currentPage === 1
      ? {
        y: isLarge ? 260 : isMedium ? 280 : 230,
        scale: isLarge ? 1.3 : isMedium ? 1.55 : 1.6,
      }
      : { y: 0, scale: 1 };

  const videoId = "1033441094";

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          className="relative pointer-events-none"
          animate={{
            y: animationValues.y,
            scale: animationValues.scale,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-full h-full">
            {shouldShowPhone && (
              <motion.img
                key="phone"
                ref={phoneRef}
                src="/images/phone.png"
                alt="Portal Phone Display"
                className={phoneClassName}
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                loading="lazy"
                onLoad={handleImageLoad}
                style={{
                  willChange: "transform, opacity",
                }}
              />
            )}

            {currentPage === 0 && isImageLoaded && (
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
                `}
                autoplay={true}
                loop={true}
                muted={true}
              />
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PortalPhone;

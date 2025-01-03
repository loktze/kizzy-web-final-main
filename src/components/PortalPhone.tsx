// src/components/PortalPhone.tsx
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VimeoEmbed from "./VimeoEmbed";
import classNames from "classnames";
import useMediaQuery from "../hooks/useMediaQuery";
import Lottie from "lottie-react";
import animation2 from "../assets/lotties/animation2.json";


interface PortalPhoneProps {
  currentPage: number;
}

const PortalPhone: React.FC<PortalPhoneProps> = ({ currentPage }) => {
  const phoneRef = useRef<HTMLImageElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Synchronize media queries with App.tsx
  const isLarge = useMediaQuery("(min-width: 1024px)");
  const isMedium = useMediaQuery("(max-width: 1023px)");

  // Determine when to show phone2.png
  const shouldShowPhone =
    (isLarge || isMedium) && (currentPage === 0 || currentPage === 1);

  const shouldShowPhone2 = isLarge
    ? currentPage === 2 // Only on large devices, page 2
    : isMedium && currentPage === 4; // Only on medium devices, page 4

  const phoneClassName = classNames({
    "w-[227px] h-[466px] lg:w-[302px] lg:h-[621px] object-contain":
      shouldShowPhone, // Classes for phone.png
    "w-[298px] h-[190px] lg:w-[470px] lg:h-[361px] mt-44 lg:mt-48 xl:mt-56 2xl:mt-40 object-contain":
      shouldShowPhone2, // Classes for phone2.png
  });

  // Handle image load to ensure accurate sizing
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // Define animation values based on currentPage and screen size
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
      <motion.div
        className="relative pointer-events-auto"
        animate={{
          y: animationValues.y,
          scale: animationValues.scale,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <div className="relative w-[100%] h-full">
          <AnimatePresence mode="wait">
            {shouldShowPhone2 ? (
              <motion.div
                key="phone2-container"
                className="relative"
                initial={{ opacity: 0, y: -10 }} // Start hidden slightly above
                animate={{ opacity: 1, y: 0 }} // Fade in and move into view
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 1, // Delay only for phone2.png
                }}
              >
                <motion.img
                  key="phone2"
                  ref={phoneRef}
                  src="/images/phone2.png"
                  alt="Phone 2"
                  className={phoneClassName}
                  loading="lazy"
                  onLoad={handleImageLoad}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/default-phone.png"; // Fallback image
                  }}
                />
                <div className="absolute -bottom-[25%] md:-bottom-[15%] 2xl:-bottom-36 left-1/2 transform -translate-x-1/2 w-full h-full z-[-10]">
                  <Lottie
                    animationData={animation2}
                    loop={true}
                    autoplay={true}
                    className="absolute top-10 left-0 w-full h-full"
                    aria-label="Animation 2 Description"
                  />
                </div>
              </motion.div>
            ) : shouldShowPhone ? (
              <motion.img
                key="phone"
                ref={phoneRef}
                src="/images/phone.png"
                alt="Phone 1"
                className={phoneClassName}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                loading="lazy"
                onLoad={handleImageLoad}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/default-phone.png";
                }}
              />
            ) : null}
          </AnimatePresence>

          <AnimatePresence>
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
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default PortalPhone;

import React from "react";
import { motion } from "framer-motion";

interface VimeoEmbedProps {
  isVisible: boolean;
  videoId: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({
  isVisible,
  videoId,
  width = "90%",
  height = "90%",
  className,
  style,
  autoplay = true,
  loop = true,
  muted = true,
}) => {
  const iframeSrc = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&muted=${muted ? 1 : 0}&quality=1080p&dnt=1`;

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={className}
      style={{
        width,
        height,
        overflow: "hidden",
        backgroundColor: "black",
        borderRadius: "2.5rem",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: "2.5rem",
        }}
      >
        <iframe
          src={iframeSrc}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "2.5rem",
          }}
          title="Embedded Vimeo Video Player"
          loading="lazy"
          aria-label="Embedded Vimeo video player"
          onError={(e) => {
            console.error("Vimeo video failed to load:", e);
          }}
        />
      </div>
    </motion.div>
  );
};

export default VimeoEmbed;

import React from "react";

interface ButtonProps {
  children: React.ReactNode; // Text or content inside the button
  onClick?: () => void; // Click handler
  className?: string; // Additional styles
  icon?: React.ReactNode; // Optional icon
}

const DownloadButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  icon,
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative flex items-center gap-2 rounded-lg lg:rounded-2xl py-3 px-3 lg:py-4 lg:px-6 overflow-hidden cursor-pointer ${className}`}
      style={{
        background:
          "linear-gradient(90deg, #7040DB 0%, #906BE6 45.03%, #6E40DB 100%)",
      }}
    >
      <div className="absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 bg-gradient-to-r from-[#906BE6] via-[#7040DB] to-[#906BE6]"></div>
      {icon && <span className="z-10">{icon}</span>}
      <div className="z-10 download">{children}</div>
    </div>
  );
};

export default DownloadButton;

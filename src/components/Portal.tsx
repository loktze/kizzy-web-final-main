import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  currentPage?: number;
  animationEnd: boolean

}

const Portal: React.FC<PortalProps> = ({ children, currentPage, animationEnd }) => {
  const [shouldRenderPortal, setShouldRenderPortal] = useState(false);

  useEffect(() => {
    if (currentPage === 1 && animationEnd) {
      setShouldRenderPortal(true);
    } else {
      setShouldRenderPortal(false);
    }
  }, [currentPage, animationEnd]);

  const portalElement = document.getElementById("page-2-root");

  if (!portalElement) {
    return null;
  }

  return shouldRenderPortal
    ? ReactDOM.createPortal(children, portalElement)
    : children;
};

export default Portal;

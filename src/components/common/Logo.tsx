import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

interface LogoProps {
  currentPage: number;
}

const Logo: React.FC<LogoProps> = ({ currentPage }) => {
  const isMedium = useMediaQuery("(max-width: 1023px)");
  const isLarge = useMediaQuery("(min-width: 1024px)");

  const renderLogo = () => {
    if (isLarge && currentPage === 2) {
      // Large or larger devices, current page 2
      return (
        <img
          src="/images/kizzy-light-logo.png"
          alt="Kizzy Light Logo"
          width={142}
          height={58}
          className="hidden md:block"
          loading="lazy"
        />
      );
    }

    if (isMedium && currentPage === 4) {
      // Small to medium devices, current page 4
      return (
        <img
          src="/images/kizzy-light-logo-mobile.png"
          alt="Kizzy Light Logo Mobile"
          width={69}
          height={28}
          className="block md:hidden"
          loading="lazy"
        />
      );
    }

    // Default logo for all other cases
    return (
      <>
        <img
          src="/images/kizzy-dark-logo-mobile.png"
          alt="Kizzy Dark Logo Mobile"
          width={69}
          height={28}
          className="block md:hidden"
          loading="lazy"
        />
        <img
          src="/images/kizzy-dark-logo.png"
          alt="Kizzy Dark Logo"
          width={142}
          height={58}
          className="hidden md:block"
          loading="lazy"
        />
      </>
    );
  };

  return <div>{renderLogo()}</div>;
};

export default Logo;

import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };
  return (
    <div
      className="relative h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
      onTouchStart={(e) => e.stopPropagation()} // Prevent interference with App.tsx
    >
      <Header />
      <div className="flex flex-col gap-4 xl:gap-6 justify-center pt-20 xl:pt-32">
        <p className="headline text-2xl text-center">Our commitment to<br className="md:hidden" /> protecting your privacy</p>
        <p className="subtext text-grey text-center">Learn more about how Kizzy collects and uses data
          <br className="md:hidden" />
          and your rights as a Kizzy user.</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={handleBack}
          className="text-black"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

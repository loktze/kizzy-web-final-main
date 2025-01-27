// src/pages/CountdownPage.tsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import CountdownUnit from "../components/CountdownUnit/CountdownUnit";
import Confetti from "react-confetti";
import Header from "../components/layout/Header";
import useMediaQuery from "../hooks/useMediaQuery";
import "./CountdownPage.css";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownPage: React.FC = () => {
  const [currentPage] = useState<number>(6);
  const isMedium = useMediaQuery("(max-width: 768px)");

  const targetDate = useMemo(() => {
    const now = new Date();
    now.setDate(now.getDate() + 2);
    now.setHours(0, 0, 0, 0);
    return now;
  }, []);

  // Memoize calculateTimeLeft to prevent ESLint warnings
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft: TimeLeft = { hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const hasCountdownFinished =
    timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url('/images/background.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={backgroundStyle}
    >
      <div className="fixed top-0 left-0 w-full z-[9999]">
        <Header currentPage={currentPage} isMedium={isMedium} />
      </div>
      <h1
        className="
        countdown-headline
        "
      >
        Pre-season
        <br />
        Launching in
      </h1>

      <div className="countdown-units-container flex items-center justify-center space-x-4 mt-5 z-10">
        <CountdownUnit value={timeLeft.hours} />
        <span className="colon">:</span>
        <CountdownUnit value={timeLeft.minutes} />
        <span className="colon">:</span>
        <CountdownUnit value={timeLeft.seconds} />
      </div>
      {hasCountdownFinished && (
        <>
          <div className="mt-8 text-2xl">Countdown Finished!</div>
          <Confetti />
        </>
      )}
      <footer className="absolute bottom-0 w-full bg-transparent">
        <div className="hidden md:flex justify-end p-12">
          <p className="p1footer">Privacy Policy</p>
        </div>
        <div
          className={`${currentPage !== 6 ? "hidden" : "flex"} justify-center md:hidden`}
        >
          <div className="flex gap-4 pb-6">
            <button>
              <p className="p1footer">Privacy Policy</p>
            </button>
            <button>
              <p className="p1footer">Careers</p>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CountdownPage;

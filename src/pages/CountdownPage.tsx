// src/pages/CountdownPage.tsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import CountdownUnit from '../components/CountdownUnit/CountdownUnit';
import Confetti from 'react-confetti';
import './CountdownPage.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownPage: React.FC = () => {
  const targetDate = useMemo(() => {
    const now = new Date();
    now.setDate(now.getDate() + 2);
    now.setHours(0, 0, 0, 0); // Set to midnight for clarity
    return now;
  }, []);

  // Memoize calculateTimeLeft to prevent ESLint warnings
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
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
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  // Inline styles for background image
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url('/images/background.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white" style={backgroundStyle}>
      {/* Overlay for better readability */}
      <div className="overlay"></div>

      <h1 className="text-4xl font-bold mb-8">Pre-season Launching in</h1>
      <div className="countdown-units-container flex space-x-8">
        <CountdownUnit value={timeLeft.days} />
        <CountdownUnit value={timeLeft.hours} />
        <CountdownUnit value={timeLeft.minutes} />
        <CountdownUnit value={timeLeft.seconds} />
      </div>
      {hasCountdownFinished && (
        <>
          <div className="mt-8 text-2xl">Countdown Finished!</div>
          <Confetti />
        </>
      )}
    </div>
  );
};

export default CountdownPage;

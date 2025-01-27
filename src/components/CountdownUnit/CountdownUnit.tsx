// src/components/CountdownUnit/CountdownUnit.tsx
import React from "react";
import "./CountdownUnit.css";

interface CountdownUnitProps {
  value: number;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value }) => {
  const formatValue = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <div className="countdown-unit-container">
      <div className="countdown-unit">
        <span className="countdown-value">{formatValue(value)}</span>
      </div>
    </div>
  );
};

export default CountdownUnit;

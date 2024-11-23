import { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null; // Event passed
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  if (!timeLeft) {
    return <p className="text-xl text-red-500">The event has started!</p>;
  }

  return (
    <div className="flex justify-center flex-col xs:flex-row gap-6 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col gap-3 hover:outline p-2 outline-white rounded-2xl items-center"
        >
          <h1 className="font-extrabold">{value}</h1>
          <h4 className="text-sm uppercase">{unit}</h4>
        </div>
      ))}
    </div>
  );
};

export default Countdown;

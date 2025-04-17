import { useEffect, useState } from "react";

const FlashDealBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 59,
    seconds: 23,
  });

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;

        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (n) => String(n).padStart(2, "0");

  return (
    <div className="w-full px-4 py-2 bg-white">
      {/* Top text row */}
      <div className="flex justify-between items-center text-blue-800 font-semibold text-sm px-4">
        <p>
          No RSVP Needed — <span className="italic font-bold">Shop Flash Deals Now!</span>
        </p>
        <p className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-blue-900 font-bold">
            Expires in {formatTime(timeLeft.hours)}h {formatTime(timeLeft.minutes)}m{" "}
            {formatTime(timeLeft.seconds)}s
          </span>
        </p>
      </div>

      {/* Deal box */}
      <div className="mt-3 bg-gradient-to-r from-blue-100 to-white rounded-2xl p-4 flex items-center justify-between shadow-md overflow-hidden">
        {/* Left - logo and title */}
        <div className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Nykaa_Logo.svg/2560px-Nykaa_Logo.svg.png"
            alt="Nykaa logo"
            className="w-20 h-8 object-contain"
          />
          <p className="font-semibold text-sm">BEST IN BEAUTY 2025</p>
        </div>

        {/* Center - discount info */}
        <div className="text-center">
          <p className="text-xs text-gray-600">Up To</p>
          <p className="text-3xl font-bold text-blue-700">50% <span className="text-base font-normal">off</span></p>
        </div>

        {/* Right - label and decoration */}
        <div className="text-right">
          <p className="font-bold text-blue-800">Nykaa's Best In<br />Beauty Nominees</p>
          <div className="flex justify-end mt-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
              alt="cupcakes"
              className="w-8 h-8 mr-2"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/706/706175.png"
              alt="cupcakes"
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashDealBanner;

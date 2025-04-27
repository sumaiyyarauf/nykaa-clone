import { useEffect, useState } from "react";

const FlashDealBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 59,
    seconds: 23,
  });
  

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

     <div className="mt-3">
      <img src="https://images-static.nykaa.com/uploads/446b9dcb-92bd-4ee5-8c4a-339cf0680860.gif" alt="" />
     </div>
    </div>
  );
};

export default FlashDealBanner;

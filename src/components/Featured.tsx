"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Featured = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 24); // Countdown for 24 hours from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval); // Stop the timer when it reaches zero
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <section className="w-full flex justify-center items-center my-8 px-4">
      {/* Container with fixed dimensions */}
      <div className="w-[1250px] h-[500px] max-w-full bg-black rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 py-8 md:w-1/2">
          <h3 className="text-green-500 font-bold text-lg">Categories</h3>
          <h1 className="text-white font-bold text-3xl md:text-4xl mt-3 mb-6 leading-snug">
            Enhance Your Music Experience
          </h1>

          {/* Countdown Timer */}
          <div className="flex justify-center md:justify-start gap-4">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="flex flex-col items-center">
                <div className="bg-white text-black rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-lg">
                  <span className="text-xl sm:text-2xl font-bold">
                    {String(value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-gray-300 text-xs sm:text-sm capitalize mt-2">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-6 text-center md:text-left">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              Buy Now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative md:w-1/2 h-[300px] md:h-full">
          <Image
            src="/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png" // Replace with your image path
            alt="Featured Product"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;










  
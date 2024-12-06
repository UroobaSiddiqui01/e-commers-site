"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaHeart, FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
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
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="mx-auto max-w-screen-2xl flex gap-4 text-center">
      <div>
        <p className="text-2xl font-bold">{timeLeft.days.toString().padStart(2, "0")}</p>
        <p className="text-sm text-gray-500">Days</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</p>
        <p className="text-sm text-gray-500">Hours</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</p>
        <p className="text-sm text-gray-500">Minutes</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</p>
        <p className="text-sm text-gray-500">Seconds</p>
      </div>
    </div>
  );
};

const FlashSales = () => {
  const products = [
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      discountPrice: 160,
      image: "/havit.png",
      rating: 4.5,
      reviews: 88,
      discount: "-40%",
      hasAddToCart: true,
    },
    {
      name: "AK-900 Wired Keyboard",
      price: 60,
      discountPrice: 80,
      image: "/keyboard.png",
      rating: 4.0,
      reviews: 77,
      discount: "-35%",
      hasAddToCart: false,
    },
    {
      name: "IPS LCD Gaming Monitor",
      price: 300,
      discountPrice: 400,
      image: "/lcd.png",
      rating: 4.8,
      reviews: 102,
      discount: "-30%",
      hasAddToCart: false,
    },
    {
      name: "S-Series Comfort Chair",
      price: 375,
      discountPrice: 400,
      image: "/cheair.png",
      rating: 4.3,
      reviews: 99,
      discount: "-25%",
      hasAddToCart: false,
    },
    {
      name: "S-Series Comfort Chair",
      price: 375,
      discountPrice: 400,
      image: "/cheair.png",
      rating: 4.3,
      reviews: 99,
      discount: "-25%",
      hasAddToCart: false,
    },
  ];

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1);

  return (
    <div className="container mx-auto my-12 p-4 relative">
      {/* Red Rectangle and Heading */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-6 bg-red-500"></div>
        <h2 className="text-red-500 font-semibold text-xl">Today&apos;s</h2>
      </div>
      <h1 className="text-4xl font-bold mb-6">Flash Sales</h1>

      {/* Countdown Timer */}
      <Countdown targetDate={targetDate} />

      {/* Navigation Arrows */}
      <div className="absolute top-2 right-2 flex gap-2">
        <button className="bg-white border border-gray-300 p-2 rounded-full shadow hover:bg-gray-100">
          <FaArrowLeft className="text-gray-600" />
        </button>
        <button className="bg-white border border-gray-300 p-2 rounded-full shadow hover:bg-gray-100">
          <FaArrowRight className="text-gray-600" />
        </button>
      </div>

      {/* Product List */}
      <div className="flex gap-6 overflow-x-auto py-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 min-w-[250px] bg-white relative"
          >
            {/* Discount Badge */}
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-tr-lg rounded-bl-lg">
              {product.discount}
            </div>

            {/* Product Image with Icons */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                className="w-[172px] h-[152px] object-cover rounded-md"
                width={172}
                height={152}
              />
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <FaEye className="text-gray-600 text-lg cursor-pointer" title="View" />
                <FaHeart className="text-gray-600 text-lg cursor-pointer" title="Wishlist" />
              </div>
            </div>

            {/* Product Info */}
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-red-500 font-bold">${product.price}</p>
            <p className="line-through text-gray-400">${product.discountPrice}</p>

            {/* Rating and Reviews */}
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-gray-300">★</span>
              <span className="text-sm text-gray-500 ml-2">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Add to Cart Button */}
            {product.hasAddToCart && (
              <button className="mt-4 bg-black text-white px-6 py-2 w-full font-medium hover:bg-gray-800 transition">
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="text-center mt-6">
        <button className="bg-red-500 text-white px-6 py-2 font-medium rounded hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;







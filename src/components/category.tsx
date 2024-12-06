"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  AiOutlineMobile,
  AiOutlineLaptop,
  AiOutlineCamera,
  AiOutlineAudio,
  AiOutlineAppstore,
  AiOutlineTablet,
} from "react-icons/ai";

const categories = [
  { name: "Phones", icon: <AiOutlineMobile size={24} /> },
  { name: "Computers", icon: <AiOutlineLaptop size={24} /> },
  { name: "SmartWatch", icon: <AiOutlineTablet size={24} /> },
  { name: "Camera", icon: <AiOutlineCamera size={24} />, highlighted: true },
  { name: "HeadPhones", icon: <AiOutlineAudio size={24} /> },
  { name: "Gaming", icon: <AiOutlineAppstore size={24} /> },
];

const BrowseByCategory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto my-8 px-4">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-6 bg-red-500"></div>
        <h2 className="text-red-500 font-semibold text-xl">Categories</h2>
      </div>
      <h1 className="text-2xl font-bold mb-6">Browse By Category</h1>

      {/* Arrow Controls */}
      <div className="flex justify-end gap-2 mb-4">
        <button
          className="bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
        <button
          className="bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-4 overflow-hidden">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center border rounded-lg w-[150px] h-[120px] text-center ${
              category.highlighted
                ? "bg-red-500 text-white"
                : "border-gray-300 bg-white text-gray-800"
            }`}
          >
            <div className="mb-2">{category.icon}</div>
            <p className="font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;


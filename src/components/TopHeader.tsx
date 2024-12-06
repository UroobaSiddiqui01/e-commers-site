'use client';

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Importing FontAwesome ChevronDown icon

const TopHeader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isRTL, setIsRTL] = useState(false); // For Right-to-Left languages
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);

    // Set RTL for Arabic and Urdu, otherwise LTR
    if (language === "Urdu" || language === "Arabic") {
      setIsRTL(true);
      document.documentElement.setAttribute("dir", "rtl"); // Change document direction to RTL
    } else {
      setIsRTL(false);
      document.documentElement.setAttribute("dir", "ltr"); // Change document direction to LTR
    }

    // Close the dropdown when a language is selected
    setDropdownOpen(false);
  };

  return (
    <div className="mx-auto max-w-screen-2xl bg-gray-900 text-white text-sm py-2 px-4">
      <div
        className={`container mx-auto flex flex-col sm:flex-row justify-center items-center ${
          isRTL ? "text-right" : "text-center"
        }`}
      >
        {/* Sale Announcement */}
        <p className="mb-2 sm:mb-0">
          {selectedLanguage === "Urdu"
            ? "تمام سوئمنگ سوٹس کے لیے سمر سیل اور مفت ایکسپریس ڈلیوری - 50٪ رعایت!"
            : selectedLanguage === "Arabic"
            ? "تخفيضات الصيف لجميع ملابس السباحة وتسليم سريع مجاني - خصم 50٪!"
            : "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Shop Now Button */}
          <a
            href="#"
            className={`underline hover:text-gray-300 ${
              isRTL ? "ml-4" : "mr-4"
            }`}
          >
            {selectedLanguage === "Urdu"
              ? "ابھی خریداری کریں"
              : selectedLanguage === "Arabic"
              ? "تسوق الآن"
              : "Shop Now"}
          </a>

          {/* Language Dropdown */}
          <div className=" flex items-end gap-6">
            <button
              className=" bg-gray-700 px-4 py-2 rounded text-white focus:outline-none hover:bg-gray-600 flex items-end gap-6"
              onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility on click
            >
              {selectedLanguage}
              <FaChevronDown /> {/* FontAwesome Chevron Down icon */}
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute bg-white text-gray-900 shadow-lg rounded mt-2 w-40">
                <ul className="p-2 space-y-1">
                  <li
                    className="cursor-pointer hover:bg-gray-100 px-3 py-1"
                    onClick={() => handleLanguageChange("English")}
                  >
                    English
                  </li>
                  <li
                    className="cursor-pointer hover:bg-gray-100 px-3 py-1"
                    onClick={() => handleLanguageChange("French")}
                  >
                    French
                  </li>
                  <li
                    className="cursor-pointer hover:bg-gray-100 px-3 py-1"
                    onClick={() => handleLanguageChange("Urdu")}
                  >
                    اردو
                  </li>
                  <li
                    className="cursor-pointer hover:bg-gray-100 px-3 py-1"
                    onClick={() => handleLanguageChange("Arabic")}
                  >
                    العربية
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;



'use client'

import Link from 'next/link';
import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa'; // Import the search, cart, and user icons

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // For capturing the search query

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Capture input change
  };

  const handleSearchSubmit = () => {
    console.log("Searching for:", searchQuery);
    // Here you can add the logic for the search action, such as making an API call or filtering products.
  };

  return (
    <div className="mx-auto max-w-screen-2xl bg-white shadow-md">
      <div className="container bg-white mx-auto flex justify-between items-center py-4 w-[1170px] h-[38px] ">
        {/* Left Menu */}
        <div className="text-4xl font-semibold text-black">Exclusive</div>

<nav>
  <ul className="flex space-x-8">
    <li className="text-gray-800 hover:underline">
      <Link href="/">Home</Link>
    </li>
    <li className="text-gray-800 hover:underline">
      <Link href="/contact">Contact</Link>
    </li>
    <li className="text-gray-800 hover:underline">
      <Link href="/about">About</Link>
    </li>
    <li className="text-gray-800 hover:underline">
      <Link href="/signup">Sign Up</Link>
    </li>
  </ul>
</nav>
        

        {/* Right Menu */}
        <div className="flex items-center gap-6">
          {/* Input Field with Search Icon inside */}
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={handleSearchChange}
              className="border rounded-md px-4 py-2 text-sm pr-10"
            />
            {/* Search Icon Inside Input Field */}
            <FaSearch
              onClick={handleSearchSubmit}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer hover:text-gray-800"
            />
          </div>
           {/* User Icon */}
           <FaHeart className="text-gray-600 hover:text-gray-800 cursor-pointer" size={20} />

          {/* Cart Icon */}
          <div className="relative">
            <FaShoppingCart className="text-gray-600 hover:text-gray-800 cursor-pointer" size={20} />
            {/* Cart item count */}
            <FaShoppingCart className="absolute top-0 right-0   text-xs rounded-full w-5 h-5 flex items-center justify-center"/>
            
            
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Navbar;



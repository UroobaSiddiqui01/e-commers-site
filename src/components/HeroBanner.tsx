import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="mx-auto max-w-screen-2xl w-full flex justify-center items-center">
      <div className="sm:w-full md:w-full lg:w-[80%] flex">
        {/* Left Sidebar Menu */}
        <div className="border-r-2 border-neutral-100 p-6 sm:hidden md:block">
          <ul className="space-y-4 text-gray-800">
            {/* Menu Item with Dropdown */}
            <li className="group relative font-medium cursor-pointer hover:text-black">
              Woman&apos;s Fashion <span>›</span>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg border mt-2 py-2 w-full rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100">Dresses</li>
                <li className="px-4 py-2 hover:bg-gray-100">Tops</li>
                <li className="px-4 py-2 hover:bg-gray-100">Accessories</li>
              </ul>
            </li>
            <li className="group relative font-medium cursor-pointer hover:text-black">
              Men&apos;s Fashion <span>›</span>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg border mt-2 py-2 w-full rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100">Shirts</li>
                <li className="px-4 py-2 hover:bg-gray-100">Pants</li>
                <li className="px-4 py-2 hover:bg-gray-100">Shoes</li>
              </ul>
            </li>
            <li className="font-medium cursor-pointer hover:text-black">Electronics</li>
            <li className="font-medium cursor-pointer hover:text-black">Home & Lifestyle</li>
            <li className="font-medium cursor-pointer hover:text-black">Medicine</li>
            <li className="font-medium cursor-pointer hover:text-black">Sports & Outdoor</li>
            <li className="font-medium cursor-pointer hover:text-black">Baby&apos;s & Toys</li>
            <li className="font-medium cursor-pointer hover:text-black">Groceries & Pets</li>
            <li className="font-medium cursor-pointer hover:text-black">Health & Beauty</li>
          </ul>
        </div>

        {/* Hero Banner Content */}
        <div className="sm:w-full md:w-[650px] lg:w-[770px] sm:mx-auto lg:mx-auto sm:mt-0 md:mt-10 bg-black flex flex-col lg:flex-row items-center justify-between p-6 rounded-lg shadow-lg">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-md flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-4">
              <Image
                src="/Apple_gray_logo 1.png"
                alt="Apple Logo"
                width={50}
                height={50}
              />
              <h1 className="text-xl text-white ml-4">iPhone 14 Series</h1>
            </div>
            <p className="text-3xl text-white font-bold mb-4 leading-snug">
              <span className="block">Up to 10%</span>
              <span className="block">off Voucher</span>
            </p>
            <a
              href="#"
              className="inline-block text-white px-6 py-3 font-medium border-b-2 border-white"
            >
              Shop Now &rarr;
            </a>
          </div>

          {/* Right Content (iPhone Image) */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <Image
              src="/hero_endframe__cvklg0xk3w6e_large 2.png"
              alt="iPhone 14"
              className="rounded-lg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner


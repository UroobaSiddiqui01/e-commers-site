import Image from "next/image";

const NewArrivals = () => {
    
  return (
    <div className="max-w-[1170px] h-[768px]  mx-auto flex justify-center items-center py-10  ">
      <div className="w-[90%] lg:w-[80%]">
        {/* Section Header */}
        <div className=" container mx-auto my-8 px-4">
          <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">
            Featured
          </h3>
          <h1 className="text-gray-800 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-4">
            New Arrival
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6 pt-8">
          {/* Left Column (PlayStation 5) */}
          <div className="bg-gray-950 rounded-lg overflow-hidden relative md:w-[60%]">
            <div className="absolute left-4 bottom-4 text-white z-10">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                PlayStation 5
              </h1>
              <p className="text-sm sm:text-base py-1">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="text-sm sm:text-md underline underline-offset-8 hover:font-bold">
                Shop Now
              </button>
            </div>
            <Image
              src="/ps5.png"
              width={500}
              height={500}
              alt="PlayStation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:w-[40%]">
            {/* Women's Collection */}
            <div className="bg-gray-950 rounded-lg overflow-hidden relative flex items-end h-full">
              <div className="absolute left-4 bottom-4 text-white z-10">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Women&apos;s Collections
                </h1>
                <p className="text-sm sm:text-base py-1">
                  Featured women collections that give you another vibe.
                </p>
                <button className="text-sm sm:text-md underline underline-offset-8 hover:font-bold">
                  Shop Now
                </button>
              </div>
              <Image
                src="/women.png"
                width={500}
                height={300}
                alt="Women Collection"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Cards Row */}
            <div className="flex gap-6">
              {/* Speaker Card */}
              <div className="bg-gray-950 rounded-lg overflow-hidden relative flex flex-col justify-center items-center w-1/2">
                <div className="absolute left-4 bottom-4 text-white z-10">
                  <h1 className="text-sm sm:text-base md:text-xl font-bold">
                    Speakers
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base py-1">
                    Amazon wireless speakers.
                  </p>
                  <button className="text-xs sm:text-sm md:text-md underline underline-offset-8 hover:font-bold">
                    Shop Now
                  </button>
                </div>
                <Image
                  src="/specar.png"
                  width={200}
                  height={200}
                  alt="Speakers"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Perfume Card */}
              <div className="bg-gray-950 rounded-lg overflow-hidden relative flex flex-col justify-center items-center w-1/2">
                <div className="absolute left-4 bottom-4 text-white z-10">
                  <h1 className="text-sm sm:text-base md:text-xl font-bold">
                    Perfume
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base py-1">
                    GUCCI INTENSE OUD EDP.
                  </p>
                  <button className="text-xs sm:text-sm md:text-md underline underline-offset-8 hover:font-bold">
                    Shop Now
                  </button>
                </div>
                <Image
                  src="/gucci.png"
                  width={200}
                  height={200}
                  alt="Perfume"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;

  
import { Store, DollarSign, ShoppingBag, Banknote } from "lucide-react";

function Views() {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1 max-w-screen-2xl mx-auto">
      {/* container */}
      <div className="sm:w-full md:w-[80%] border-b-2 border-neutral-100 pb-10">
        {/* container boxes */}
        <div className="flex sm:flex-row gap-x-5 gap-y-10 md:flex-row lg:flex-row sm:justify-center md:justify-between mt-5 mb-4 sm:flex-wrap lg:flex-nowrap">
          {/* box1 */}
          <div className="shadow-lg border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
            <span className="bg-black rounded-full text-white p-3">
              <Store size={32} />
            </span>
            <span className="text-xl font-bold">10.5k</span>
            <p className="sm:text-[8px] md:text-sm">
              Sallers active on our site
            </p>
          </div>

          {/* box2 */}
          <div className="border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
            <span className="bg-black rounded-full text-white p-3">
              <DollarSign size={32} />
            </span>
            <span className="text-xl font-bold">33k</span>
            <p className="sm:text-[8px] md:text-sm">Monthly Product Sale</p>
          </div>

          {/* box3 */}
          <div className="border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
            <span className="bg-black rounded-full text-white p-3">
              <ShoppingBag size={32} />
            </span>
            <span className="text-xl font-bold">45.5k</span>
            <p className="sm:text-[8px] md:text-sm">
              Customers active on our site
            </p>
          </div>

          {/* box4 */}
          <div className="border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
            <span className="bg-black rounded-full text-white p-3">
              <Banknote size={32} />
            </span>
            <span className="text-xl font-bold">25k</span>
            <p className="sm:text-[8px] md:text-sm">
              Annual gross sale on our site
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Views;
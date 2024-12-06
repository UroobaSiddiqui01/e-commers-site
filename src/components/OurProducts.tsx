import { Heart, Eye, Star as LucideStar } from "lucide-react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

function FreshSales() {
  return (
    <main>
      <section className="container mx-auto my-8 px-4">
      {/* Heading Section */}
      
      <div className="mx-auto max-w-screen-2xl w-full flex justify-center items-center my-4 px-4">
        <div className="w-full max-w-[1500px]">
          <div className="flex flex-col space-y-2">
            <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3">
              Our Product
            </h3>
            <h1 className="text-gray-800 font-bold text-2xl md:text-3xl lg:text-4xl">
              Explore Our Products
            </h1>
          </div>

          {/* Product Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {[
              {
                image: "/breedDog.png",
                title: "Breed Dry Dog Food",
                price: "$100",
                rating: 4,
                reviews: "(88)",
              },
              {
                image: "/camera.png",
                title: "CANON EOS DSLR Camera",
                price: "$360",
                rating: 4,
                reviews: "(95)",
              },
              {
                image: "/laptop.png",
                title: "ASUS FHD Gaming Laptop",
                price: "$700",
                rating: 5,
                reviews: "(325)",
              },
              {
                image: "/creame.png",
                title: "Curology Product Set",
                price: "$1500",
                rating: 4,
                reviews: "(3145)",
              },
              {
                image: "/Toy-Car.png",
                title: "Kids Electric Car",
                price: "$960",
                rating: 5,
                reviews: "(65)",
              },
              {
                image: "/show.png",
                title: "Jr. Zoom Soccer Cleats",
                price: "$1160",
                rating: 4,
                reviews: "(25)",
              },
              {
                image: "/GP11_PRD3 1.png",
                title: "GP11 Shooter USB Gamepad",
                price: "$600",
                rating: 5,
                reviews: "(55)",
              },
              {
                image: "/jacket.png",
                title: "Quilted Satin Jacket",
                price: "$600",
                rating: 5,
                reviews: "(55)",
              },
            ].map((product, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <div className="group relative shadow-md bg-neutral-100 cursor-pointer w-full h-[260px] flex justify-center items-center rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    width={180}
                    height={120}
                    alt={product.title}
                    className="object-contain"
                  />
                  <span className="bg-red-500 px-2 rounded-md text-white absolute top-2 left-2 text-xs">
                    Hot
                  </span>
                  <span className="absolute top-2 right-2 text-red rounded-full">
                    <Heart className="text-xl" />
                  </span>
                  <span className="absolute top-12 right-2 text-black rounded-full">
                    <Eye className="text-xl" />
                  </span>
                  <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                </div>
                <h1 className="font-bold text-gray-800 text-md truncate">{product.title}</h1>
                <div className="flex items-center justify-between">
                  <span className="text-red-500 font-bold">{product.price}</span>
                  <div className="flex space-x-1 text-yellow-400 text-md">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} className="text-xl" />
                    ))}
                    <LucideStar className="text-yellow-300" size={18} />
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{product.reviews}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View All Products Button */}
      <div className="w-full flex justify-center items-center mt-10 mb-6 px-4">
        <div className="w-full max-w-7xl flex justify-center">
          <button className="bg-red-500 hover:bg-red-600 py-3 px-6 text-white font-semibold rounded-lg transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
      </section>
    </main>
  );
}

export default FreshSales;

  
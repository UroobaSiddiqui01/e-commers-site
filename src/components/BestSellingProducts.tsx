import Image from "next/image";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";

const BestSellingProducts = () => {
  const products = [
    {
      name: "The North Coat",
      price: 260,
      oldPrice: 360,
      rating: 4.5,
      reviews: 65,
      image: "/north-coat.png",
    },
    {
      name: "Gucci Duffle Bag",
      price: 960,
      oldPrice: 1160,
      rating: 4.8,
      reviews: 65,
      image: "/bag.png",
    },
    {
      name: "RGB Liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 4.6,
      reviews: 65,
      image: "/cpu-cooler.png",
    },
    {
      name: "Small BookShelf",
      price: 360,
      oldPrice: 0,
      rating: 4.7,
      reviews: 65,
      image: "/book-self.png",
    },
  ];

  return (
    <section className="container mx-auto my-8 px-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-6 bg-red-500"></div>
          <h2 className="text-red-500 font-semibold text-xl">This Month</h2>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          View All
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-6">Best Selling Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 relative group"
            style={{ width: "270px", height: "350px" }}
          >
            {/* Product Image with Icons */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                className="w-[140px] h-[146px] object-cover mx-auto rounded-md"
                width={140}
                height={146}
              />
              <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
                <button className="bg-gray-100 text-gray-600 p-2 rounded-full hover:bg-gray-200">
                  <FaHeart />
                </button>
                <button className="bg-gray-100 text-gray-600 p-2 rounded-full hover:bg-gray-200">
                  <FaEye />
                </button>
              </div>
            </div>

            {/* Product Name */}
            <h3 className="text-lg font-semibold mt-4 text-center">
              {product.name}
            </h3>

            {/* Price */}
            <div className="flex items-center justify-center space-x-2 mt-2">
              <p className="text-red-500 font-bold">${product.price}</p>
              {product.oldPrice > 0 && (
                <p className="text-gray-500 line-through">${product.oldPrice}</p>
              )}
            </div>

            {/* Ratings */}
            <div className="flex items-center justify-center mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.round(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <p className="ml-2 text-sm text-gray-500">({product.reviews})</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;


  
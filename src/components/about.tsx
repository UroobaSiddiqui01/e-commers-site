import Image from "next/image";

function About() {
  return (
    <div id="about" className="w-full flex justify-center items-start max-w-screen-2xl mx-auto">
      <div className="sm:w-full md:w-[80%] my-11 flex sm:flex-col md:flex-row justify-center items-start gap-x-5 gap-y-6">
        {/* Left Text Section */}
        <div className="sm:w-full md:w-[60%] sm:p-8 md:p-0">
          <h1 className="sm:text-xl md:text-3xl font-bold">Our Story</h1>
          <p className="pt-6">
            Launched in 2015, Exclusive is South Asia&apos;s premier online shopping marketplace with an active presence in Bangladesh.
            Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves
            3 million customers across the region.
          </p>
          <p className="mt-5">
            Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer goods to electronics.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="sm:w-full md:w-[600px] cursor-pointer">
          <Image
            src={"/two-girls.png"}
            width={400}
            height={500}
            alt="Our Story"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

import About from "@/components/about";
import Views from "@/components/view";
import Freedelivery from "@/components/free";
import Image from "next/image";

function AboutPage() {
  return (
    <div>
      <About />
      <Views />

      {/* New Section for Images */}
      <div className="flex justify-center items-center flex-wrap gap-8 my-12 px-5">
        {/* Icon 1 */}
        <div className="flex flex-col items-center w-[180px] text-center">
          <Image
            src="/tom-crurse.png" // Replace with the correct path for the first image
            width={140}
            height={140}
            alt="Tom Cruise"
            className="rounded-full"
          />
          <p className="mt-3 font-semibold text-lg">Tom Cruise</p>
          <p className="text-sm text-gray-500">Founder & Chairman</p>
        </div>

        {/* Icon 2 */}
        <div className="flex flex-col items-center w-[180px] text-center">
          <Image
            src="/emma.png" // Replace with the correct path for the second image
            width={140}
            height={140}
            alt="Emma Watson"
            className="rounded-full"
          />
          <p className="mt-3 font-semibold text-lg">Emma Watson</p>
          <p className="text-sm text-gray-500">Managing Director</p>
        </div>

        {/* Icon 3 */}
        <div className="flex flex-col items-center w-[180px] text-center">
          <Image
            src="/will-smith.png" // Replace with the correct path for the third image
            width={140}
            height={140}
            alt="Will Smith"
            className="rounded-full"
          />
          <p className="mt-3 font-semibold text-lg">Will Smith</p>
          <p className="text-sm text-gray-500">Product Designer</p>
        </div>
      </div>

      <Freedelivery />
    </div>
  );
}

export default AboutPage;

import { Search, MapPin, X } from "lucide-react";
import PromoBannerSlider from "./PromoBannerSlider";

export default function Hero() {
  return (
    <main className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="w-full h-full flex flex-col justify-center items-center absolute">
        <PromoBannerSlider />
      </div>

      {/* Center Text */}
      <div className="relative flex flex-col items-center text-white text-center space-y-4">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">
          Find the Right Veterinarian
        </h1>

        <p className=" text-1xl  md:text-xl lg:text-xl max-w-2xl">
          Over 5,000 veterinarians and pet service providers in Austria. Book
          appointments online.
        </p>

        {/* Search Box */}
        <div className="mt-6 bg-white w-90 md:w-200 lg:w-250 h-50 md:h-35 lg:h-35 rounded-2xl shadow-xl border border-gray-300 flex flex-col md:flex-row lg:flex-row items-center px-4 space-x-4 justify-around  z-100">
          {/* Left Input */}
          <div className="flex justify-center items-center border border-gray-300 rounded-lg w-full md:w-1/2 lg:w-1/2 h-12 bg-white">
            <button className="px-3 text-gray-600">
              <Search />
            </button>
            <input
              type="text"
              placeholder="Doctor name, clinic, pet insurance"
              className="w-full h-full outline-none px-2 rounded-r-lg text-black"
            />
          </div>

          {/* Location Input */}
          <div className="flex justify-center items-center border border-gray-300 rounded-lg w-full md:w-1/2 lg:w-1/3 h-12 bg-white">
            <input
              type="text"
              placeholder="Location or ZIP code"
              className="w-full h-full outline-none px-2 rounded-l-lg text-black"
            />
            <button className="px-2 text-gray-600">
              <X />
            </button>
            <button className="px-3 text-gray-600">
              <MapPin />
            </button>
          </div>

          {/* Button */}
          <button className="bg-lime-600 text-white font-semibold h-12 w-35 rounded-lg shadow hover:bg-lime-600/90 active:bg-lime-600">
            Get started
          </button>
        </div>
      </div>
    </main>
  );
}

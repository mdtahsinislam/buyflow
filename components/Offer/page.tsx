import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Gemini.png" // 🖼️ Replace with your image path
          alt="Big Sale Banner"
          fill
          className="object-cover brightness-75 h-24"
          priority
        />
      </div>

      {/* Overlay Text */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Big Sale Up To <span className="text-yellow-400">70% Off</span>
        </h1>
        <p className="text-lg md:text-xl font-medium">
          Exclusive Offers For <span className="text-red-400">Limited Time</span>
        </p>

        {/* Optional Button */}
        <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Offer;

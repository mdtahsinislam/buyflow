// import React from 'react'

// const Our Tranding product = () => {
//   return (
//     <div>Our Tranding product


//         //in below section Explore more product button
//     </div>
//   )
// }

// export default Our Tranding product

"use client";

import React from "react";
import { Star } from "lucide-react"; // Star icon
import Link from "next/link";

// --- Product Interface & Data ---
export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  rating: number;
  status: "SALE" | "NEW" | "SOLD OUT" | null;
  discount: string | null;
  imageUrl: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Killore iPhone 12",
    category: "Mobiles",
    price: "$99 - $129",
    rating: 4.5,
    status: "SALE",
    discount: null,
    imageUrl: "/images/trand4.png",
  },
  {
    id: 2,
    name: "Killore Headphone",
    category: "Headphones",
    price: "$129",
    rating: 0,
    status: "NEW",
    discount: "-40%",
    imageUrl: "/images/trand2.png",
  },
  {
    id: 3,
    name: "Ziome iPhone 11",
    category: "Mobiles",
    price: "$99 - $129",
    rating: 4.5,
    status: "SOLD OUT",
    discount: null,
    imageUrl: "/images/trand2.png",
  },
  {
    id: 4,
    name: "Pillos Android Phone",
    category: "Mobiles",
    price: "$50 - $149",
    rating: 3.5,
    status: "NEW",
    discount: "-55%",
    imageUrl: "/images/trand2.png",
  },
  {
    id: 5,
    name: "Canon DSLR X2",
    category: "Watch",
    price: "$499",
    rating: 5,
    status: "SALE",
    discount: "-30%",
    imageUrl: "/images/p31-2.jpg",
  },
  {
    id: 6,
    name: "Earmuff Pro",
    category: "Shoes",
    price: "$59",
    rating: 4.5,
    status: "NEW",
    discount: null,
    imageUrl: "/images/p41-2.jpg",
  },
  {
    id: 7,
    name: "4K QLED Monitor",
    category: "T-shirt",
    price: "$299",
    rating: 4,
    status: "SALE",
    discount: null,
    imageUrl: "/images/p15-1.jpg",
  },
  {
    id: 8,
    name: "Beats Studio Pink",
    category: "Headphones",
    price: "$199",
    rating: 4,
    status: "SOLD OUT",
    discount: "-60%",
    imageUrl: "/images/pink_headphone.png",
  },
  {
    id: 9,
    name: "Brand New",
    category: "Shirt",
    price: "$250",
    rating: 4.2,
    status: "SALE",
    discount: "-10%",
    imageUrl: "/images/shirt.jpg",
  },
  {
    id: 10,
    name: "Airpot",
    category: "Headphone",
    price: "$79",
    rating: 4.8,
    status: "NEW",
    discount: null,
    imageUrl: "/images/headphone.jpg",
  },
  {
    id: 11,
    name: "Xiaomi Smartwatch",
    category: "jins",
    price: "$45 - $65",
    rating: 3.9,
    status: null,
    discount: null,
    imageUrl: "/images/p24-1.jpg",
  },
  {
    id: 12,
    name: "Gaming Keyboard RGB",
    category: "Accessories",
    price: "$110",
    rating: 4.7,
    status: "NEW",
    discount: "-20%",
    imageUrl: "/images/trand1.png",
  },
];

// --- Helper for Rating Stars ---
const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-0.5">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      {hasHalfStar && <Star key="half" className="w-4 h-4 text-yellow-400" />}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
        ))}
    </div>
  );
};

// --- Product Card Component ---
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const isSoldOut = product.status === "SOLD OUT";

  const getStatusClass = (status: Product["status"]) => {
    switch (status) {
      case "SALE":
      case "NEW":
        return "bg-green-500";
      case "SOLD OUT":
        return "bg-gray-500";
      default:
        return "hidden";
    }
  };

  return (
    <div
      className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 ${
        isSoldOut ? "opacity-70" : ""
      }`}
    >
      {/* Image Area */}
      <div className="relative p-6 bg-gray-50 flex items-center justify-center h-64">
        {product.status && (
          <div
            className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white rounded-full ${getStatusClass(
              product.status
            )} z-10`}
          >
            {product.status}
          </div>
        )}

        {product.discount && (
          <div className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full z-10">
            {product.discount}
          </div>
        )}

        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-contain max-h-full w-auto transition-transform duration-500 group-hover:scale-105"
        />

        {isSoldOut && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <span className="text-white text-xl font-bold tracking-wider uppercase bg-red-600 px-4 py-2 rounded-lg">
              Sold Out
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="text-base font-semibold text-gray-800 truncate mb-1">{product.name}</h3>

        <div className="flex items-center justify-between mt-2">
          <p className="text-lg font-bold text-gray-900">{product.price}</p>
          {product.rating > 0 && <RatingStars rating={product.rating} />}
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const OurTrendingProduct: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Our Trending Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Explore Button */}
        <div className="text-center mt-12">
          <Link href="/product"><button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition">
            Explore More Products
          </button></Link>
        </div>
      </div>
    </section>
  );
};//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\components\Trand\page.tsx

export default OurTrendingProduct;

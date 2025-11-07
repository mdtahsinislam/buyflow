
// //C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\components\Catagory\page.tsx
// "use client";
// import React from "react";
// import {
//   Headphones,
//   Watch,
//   WashingMachine,
//   Smartphone,
//   Glasses,
//   Camera,
//   Shirt, // Use this for both men's wear and kids wear
//   Briefcase,
//   Footprints,
//   Monitor,
//   Trousers,
//   LucideIcon,
// } from "lucide-react";

// // ------------------------------
// // Category Interface
// // ------------------------------
// interface Category {
//   id: number;
//   name: string;
//   icon: LucideIcon; 
// }

// // ------------------------------
// // Category Data
// // ------------------------------
// const iconCategories: Category[] = [
//   { id: 1, name: "Headphones", icon: Headphones },
//   { id: 2, name: "Watches", icon: Watch },
//   { id: 3, name: "Washing Machine", icon: WashingMachine },
//   { id: 4, name: "iPhones", icon: Smartphone },
//   { id: 5, name: "Goggles", icon: Glasses },
//   { id: 6, name: "Video Camera", icon: Camera },
//   { id: 7, name: "Men's Wear", icon: Shirt }, 
//   { id: 8, name: "Kid's Wear", icon: Shirt }, // replaced TShirt with Shirt
//   { id: 9, name: "Accessories", icon: Briefcase }, 
//   { id: 10, name: "Men's Shoes", icon: Footprints }, 
//   { id: 11, name: "Television", icon: Monitor }, 
//   { id: 12, name: "Men's Pants", icon: Trousers },
// ];

// // ------------------------------
// // Main Component
// // ------------------------------
// const CategoryPage: React.FC = () => {
//   return (
//     <div className="bg-white py-16 sm:py-20 lg:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10 relative">
//           <p className="text-6xl sm:text-7xl font-light text-gray-200 uppercase tracking-widest leading-none select-none"
//              style={{ fontFamily: 'serif' }}>
//             Popular Categories
//           </p>
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-[-30px] sm:mt-[-40px] relative z-10">
//             Trending Categories
//           </h2>
//         </div>

//         <div className="grid grid-cols-3 gap-y-10 gap-x-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-x-8">
//           {iconCategories.map((category) => {
//             const IconComponent = category.icon; 
//             return (
//               <div
//                 key={category.id}
//                 className="flex flex-col items-center justify-start text-center group"
//               >
//                 <div
//                   className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center 
//                              rounded-full border border-gray-200 
//                              group-hover:border-red-500 group-hover:shadow-md 
//                              transition-all duration-300 bg-white"
//                 >
//                   <IconComponent
//                     className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-gray-700 group-hover:text-red-600 transition-colors"
//                     strokeWidth={1} 
//                   />
//                 </div>
//                 <p className="mt-4 text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">
//                   {category.name}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;


// "use client";
// import React from "react";
// import {
//   Headphones,
//   Watch,
//   WashingMachine,
//   Smartphone,
//   Glasses,
//   Camera,
//   Shirt,
//   Briefcase,
//   Footprints,
//   Monitor,
//   LucideIcon,
// } from "lucide-react";
// import { GiFurBoot } from "react-icons/gi";


// // import { Shirt, Briefcase, Monitor } from "lucide-react";
// // import { GiFurBoot } from "react-icons/gi";
// import { IconType } from "react-icons";
// // ------------------------------
// // Category Interface
// // ------------------------------
// interface Category {
//   id: number;
//   name: string;
//   icon: LucideIcon; 
// }

// // ------------------------------
// // Category Data
// // ------------------------------

// type CategoryIcon = React.ComponentType<any>; // allow both react-icons & lucide-react
// const iconCategories: Category[] = [
  
//   { id: 1, name: "Headphones", icon: Headphones },
//   { id: 2, name: "Watches", icon: Watch },
//   { id: 3, name: "Washing Machine", icon: WashingMachine },
//   { id: 4, name: "iPhones", icon: Smartphone },
//   { id: 5, name: "Goggles", icon: Glasses },
//   { id: 6, name: "Video Camera", icon: Camera },
//   { id: 7, name: "Men's Wear", icon: Shirt }, 
//   { id: 8, name: "Kid's Wear", icon: Shirt },
//   { id: 9, name: "Accessories", icon: Briefcase }, 
//   { id: 10, name: "Men's Shoes", icon:  GiFurBoot }, 
//   { id: 11, name: "Television", icon: Monitor }, 
//   { id: 12, name: "Men's Pants", icon: Shirt }, // Replaced Trousers with Shirt Footprints
// ];

// // ------------------------------
// // Main Component
// // ------------------------------
// const CategoryPage: React.FC = () => {
//   return (
//     <div className="bg-white py-16 sm:py-20 lg:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10 relative">
//           <p className="text-6xl sm:text-7xl font-light text-gray-200 uppercase tracking-widest leading-none select-none"
//              style={{ fontFamily: 'serif' }}>
//             Popular Categories
//           </p>
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-[-30px] sm:mt-[-40px] relative z-10">
//             Trending Categories
//           </h2>
//         </div>

//         <div className="grid grid-cols-3 gap-y-10 gap-x-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-x-8">
//           {iconCategories.map((category) => {
//             const IconComponent = category.icon; 
//             return (
//               <div
//                 key={category.id}
//                 className="flex flex-col items-center justify-start text-center group"
//               >
//                 <div
//                   className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center 
//                              rounded-full border border-gray-200 
//                              group-hover:border-red-500 group-hover:shadow-md 
//                              transition-all duration-300 bg-white"
//                 >
//                   <IconComponent
//                     className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-gray-700 group-hover:text-red-600 transition-colors"
//                     strokeWidth={1} 
//                   />
//                 </div>
//                 <p className="mt-4 text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">
//                   {category.name}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;


"use client";

import React from "react";
import {
  Headphones,
  Watch,
  WashingMachine,
  Smartphone,
  Glasses,
  Camera,
  Shirt,
  Briefcase,
  Monitor,
} from "lucide-react";
import { GiFurBoot } from "react-icons/gi";

// ✅ একটাই টাইপ ইউজ করো যাতে দুই লাইব্রেরি (lucide-react + react-icons) কম্প্যাটিবল হয়
type CategoryIcon = React.ComponentType<any>;

// ✅ Category Interface
interface Category {
  id: number;
  name: string;
  icon: CategoryIcon;
}

// ✅ Category Data
const iconCategories: Category[] = [
  { id: 1, name: "Headphones", icon: Headphones },
  { id: 2, name: "Watches", icon: Watch },
  { id: 3, name: "Washing Machine", icon: WashingMachine },
  { id: 4, name: "iPhones", icon: Smartphone },
  { id: 5, name: "Goggles", icon: Glasses },
  { id: 6, name: "Video Camera", icon: Camera },
  { id: 7, name: "Men's Wear", icon: Shirt },
  { id: 8, name: "Kid's Wear", icon: Shirt },
  { id: 9, name: "Accessories", icon: Briefcase },
  { id: 10, name: "Men's Shoes", icon: GiFurBoot },
  { id: 11, name: "Television", icon: Monitor },
  { id: 12, name: "Men's Pants", icon: Shirt },
];

// ✅ Main Component
const CategoryPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 relative">
          <p
            className="text-6xl sm:text-7xl font-light text-gray-200 uppercase tracking-widest leading-none select-none"
            style={{ fontFamily: "serif" }}
          >
            Popular Categories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-[-30px] sm:mt-[-40px] relative z-10">
            Trending Categories
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-y-10 gap-x-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-x-8">
          {iconCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="flex flex-col items-center justify-start text-center group"
              >
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center 
                             rounded-full border border-gray-200 
                             group-hover:border-red-500 group-hover:shadow-md 
                             transition-all duration-300 bg-white"
                >
                  <IconComponent
                    className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-gray-700 group-hover:text-red-600 transition-colors"
                    strokeWidth={1}
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                  {category.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

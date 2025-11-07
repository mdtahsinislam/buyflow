


// // //hero section
// // import React from 'react'

// // const page = () => {
// //   return (
// //     <div>page</div>
// //   )
// // }

// // export default page

// import React, { useState, useEffect } from 'react';

// // You would typically import your image like this:
// // import heroImage from '../assets/hero-image.png'; 
// // For this example, I'll use a placeholder URL or assume the image is directly styled.

// // The text that will be typed out
// const typingText = "Kumo";

// // Custom hook for the typing effect
// const useTypingEffect = (text, speed = 150) => {
//     const [displayedText, setDisplayedText] = useState('');
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         if (index < text.length) {
//             const timeoutId = setTimeout(() => {
//                 setDisplayedText(prev => prev + text[index]);
//                 setIndex(prev => prev + 1);
//             }, speed);
//             return () => clearTimeout(timeoutId);
//         }
//     }, [index, text, speed]);

//     return displayedText;
// };


// const HeroSection = () => {
//     const typedText = useTypingEffect(typingText);

//     return (
//         // Main container with light background
//         <div className="relative bg-gray-50 overflow-hidden min-h-screen flex items-center">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24">
                    
//                     {/* Left side: Text and Button */}
//                     <div className="lg:w-1/2 relative z-10 text-center lg:text-left mb-10 lg:mb-0">
//                         {/* The 'Kumo' that is always visible */}
//                         <p className="text-6xl sm:text-7xl font-extrabold text-red-600 tracking-tight mb-2">
//                             Kumo
//                         </p>

//                         {/* The headline with the typing effect */}
//                         <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
//                             Built For <span className="text-red-600">|</span> <span className="font-extrabold text-gray-900">{typedText}</span>
//                         </h1>

//                         {/* Subtext */}
//                         <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 lg:mx-0">
//                             Start working with **Kumo** that can provide everything you need to create **high quality of E-Commerce Website**.
//                         </p>

//                         {/* Call to Action Button */}
//                         <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
//                             <div className="rounded-md shadow">
//                                 <a
//                                     href="#"
//                                     className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
//                                 >
//                                     View Demos
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right side: Image Section */}
//                     <div className="lg:w-1/2 relative lg:mt-0">
//                         {/* Background white swoosh/circle (stylistic element) */}
//                         <div className="absolute top-0 left-0 w-full h-full transform -translate-x-1/4 -translate-y-1/4 lg:w-[150%] lg:h-[150%] lg:left-[-50%] lg:top-[-25%] rounded-full bg-white opacity-80 z-0 hidden lg:block" style={{clipPath: 'circle(40% at 20% 50%)'}}></div>

//                         {/* The actual image container. In a real project, replace the img src. */}
//                         <div className="relative z-10 w-full max-w-md mx-auto lg:max-w-none">
//                             <img 
//                                 className="w-full object-cover" 
//                                 src="C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\public\images\home.png" // Placeholder for your image. Add the actual URL or imported image variable here.
//                                 alt="Excited woman on a chair"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;

// // The code you provided was a simple 'page' component. You can replace its content 
// // with the HeroSection component:

// /*
// const page = () => {
//   return (
//     <HeroSection />
//   )
// }
// export default page
// */

// "use client";

// import React, { useState, useEffect } from "react";

// const typingText = "BuyFlow";

// const useTypingEffect = (text: string, speed = 150) => {
//   const [displayedText, setDisplayedText] = React.useState("");
//   const [index, setIndex] = React.useState(0);

//   React.useEffect(() => {
//     if (index < text.length) {
//       const timeoutId = setTimeout(() => {
//         setDisplayedText((prev) => prev + text[index]);
//         setIndex((prev) => prev + 1);
//       }, speed);
//       return () => clearTimeout(timeoutId);
//     }
//   }, [index, text, speed]);

//   return displayedText;
// };

// const HeroSection = () => {
//   const typedText = useTypingEffect(typingText);

//   return (
//     <div className="relative bg-gray-50 overflow-hidden min-h-screen flex items-center">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24">
//           <div className="lg:w-1/2 relative z-10 text-center lg:text-left mb-10 lg:mb-0">
//             <p className="text-6xl sm:text-7xl font-extrabold text-red-600 tracking-tight mb-2">
//               BuyFlow
//             </p>
//             <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
//               Built For <span className="text-red-600">|</span>{" "}
//               <span className="font-extrabold text-gray-900">{typedText}</span>
//             </h1>
//             <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 lg:mx-0">
//               Start working with <strong>BuyFlow</strong> that can provide everything you need to create{" "}
//               <strong>high quality E-Commerce Website</strong>.
//             </p>
//             <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
//               <div className="rounded-md shadow">
//                 <a
//                   href="#"
//                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
//                 >
//                   View Demos
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="lg:w-1/2 relative lg:mt-0">
//             <div
//               className="absolute top-0 left-0 w-full h-full transform -translate-x-1/4 -translate-y-1/4 lg:w-[150%] lg:h-[150%] lg:left-[-50%] lg:top-[-25%] rounded-full bg-white opacity-80 z-0 hidden lg:block"
//               style={{ clipPath: "circle(40% at 20% 50%)" }}
//             ></div>

//             <div className="relative z-10 w-full max-w-md mx-auto lg:max-w-none">
//               <img
//                 className="w-full object-cover"
//                 src="/images/home.png"
//                 alt="Excited woman on a chair"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\components\Home\Hero\page.tsx


"use client";

import React, { useState, useEffect } from "react";

// Words to cycle through
const typingTexts = ["BuyFlow", "E-Commerce website", "Next.js", "TypeScript", "Tailwind-css"];

const useTypingEffect = (texts: string[], typingSpeed = 150, deletingSpeed = 100, delay = 1000) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && charIndex === 0) {
      // Move to next word
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [texts, textIndex, charIndex, isDeleting, typingSpeed, deletingSpeed, delay]);

  return displayedText;
};

const HeroSection = () => {
  const typedText = useTypingEffect(typingTexts);

  return (
    <div className="relative bg-gray-50 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24">
          {/* Left Section */}
          <div className="lg:w-1/2 relative z-10 text-center lg:text-left mb-10 lg:mb-0">
            <p className="text-6xl sm:text-7xl font-extrabold text-red-600 tracking-tight mb-2">
              BuyFlow
            </p>

            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              Built For <span className="text-red-600">|</span>{" "}
              <span className="font-extrabold text-gray-900">{typedText}</span>
              <span className="animate-pulse text-red-600">|</span>
            </h1>

            <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-xl md:mt-5 lg:mx-0">
              Start working with <strong>BuyFlow</strong> that can provide everything you need to create{" "}
              <strong>high quality E-Commerce Website</strong>.
            </p>

            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
                >
                  View Demos
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 relative lg:mt-0">
            <div
              className="absolute top-0 left-0 w-full h-full transform -translate-x-1/4 -translate-y-1/4 lg:w-[150%] lg:h-[150%] lg:left-[-50%] lg:top-[-25%] rounded-full bg-white opacity-80 z-0 hidden lg:block"
              style={{ clipPath: "circle(40% at 20% 50%)" }}
            ></div>

            <div className="relative z-10 w-full max-w-md mx-auto lg:max-w-none">
              <img
                className="w-full object-cover"
                src="/images/home.png"
                alt="Excited woman on a chair"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

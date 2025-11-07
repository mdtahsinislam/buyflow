// C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\components\Carosel\page.tsx


// C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\components\Carosel\page.tsx
"use client"; // This component needs client-side interactivity

import React, { useState } from 'react';
import Image from 'next/image'; // For optimized image handling
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'; // Icons for navigation and quote marks

// ------------------------------
// Testimonial Interface
// ------------------------------
interface Testimonial {
    id: number;
    text: string;
    clientName: string;
    clientTitle: string;
    clientImage: string; // Path to client's profile image
}

// ------------------------------
// Testimonial Data
// ------------------------------
const testimonials: Testimonial[] = [
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        clientName: "John Cenna",
        clientTitle: "CEO of Plike",
        clientImage: "/images/reviewi.jpg", // Placeholder image path
    },
    {
        id: 2,
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        clientName: "Maria Rodriguez",
        clientTitle: "Marketing Director",
        clientImage: "/images/reviewii.jpg",
    },
    {
        id: 3,
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        clientName: "David Lee",
        clientTitle: "Founder of TechSolutions",
        clientImage: "/images/reviewiii.jpg",
    },
    {
        id: 4,
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        clientName: "Sarah Chen",
        clientTitle: "Lead Designer",
        clientImage: "/images/reviewiv.jpg",
    },
    {
        id: 5,
        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        clientName: "Michael Brown",
        clientTitle: "Product Manager",
        clientImage: "/images/home.png",
    },
];

const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Heading Section: Matches the "Popular Categories" faded text style */}
                <div className="text-center mb-12 relative">
                    {/* Faded Background Text */}
                    <p className="text-6xl sm:text-7xl font-light text-gray-200 uppercase tracking-widest leading-none select-none"
                       style={{ fontFamily: 'serif' }}> {/* Adjust font-family as per your design */}
                        Testimonials
                    </p>
                    {/* Foreground Bold Text */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-[-30px] sm:mt-[-40px] relative z-10">
                        Client Reviews
                    </h2>
                </div>

                {/* Testimonial Card */}
                <div className="bg-white p-8 sm:p-10 rounded-lg shadow-sm">
                    {/* Client Image */}
                    <div className="mb-8 -mt-20"> {/* Negative margin to pull image up */}
                        <Image
                            src={currentTestimonial.clientImage}
                            alt={currentTestimonial.clientName}
                            width={100}
                            height={100}
                            className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-white shadow-md"
                        />
                    </div>

                    {/* Testimonial Text with Navigation */}
                    <div className="relative flex items-center justify-center min-h-[150px] sm:min-h-[120px]"> {/* Fixed height for smoother transitions */}
                        {/* Previous Button */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 -translate-x-full lg:translate-x-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 z-20"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft className="w-6 h-6 text-gray-700" />
                        </button>

                        {/* Quote Icon */}
                        <Quote className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-10 h-10 text-gray-500" />

                        {/* Testimonial Text */}
                        <p className="text-lg text-gray-600 italic leading-relaxed max-w-2xl mx-auto px-12 transition-opacity duration-500 ease-in-out">
                            {currentTestimonial.text}
                        </p>

                        {/* Next Button */}
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 translate-x-full lg:translate-x-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 z-20"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>

                    {/* Client Name and Title */}
                    <div className="mt-8">
                        <p className="text-xl font-semibold text-gray-900">{currentTestimonial.clientName}</p>
                        <p className="text-sm text-gray-500 mt-1">{currentTestimonial.clientTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
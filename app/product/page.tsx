

//  C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\product\page.tsx  i want to show glouriesly do it for me every product have Purchase button 
//  export default function ProductsPage(){
//     return <div>ppppppppplease  see my code take all image path convert json data for me i want to show alll product image  good style all product have purchase button </div>
//  }




  
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function ProductsPage() {
//   // Step 1: Create JSON data for all products
//   const { data: session } = useSession();
//   const router = useRouter();
//   const products = [
//     { id: 1, image: "/images/trand4.png", name: "iphone17", price: "$45" },
//     { id: 2, image: "/images/trand3.png", name: "iphone16", price: "$40" },
//     { id: 3, image: "/images/trand2.png", name: "Headphone", price: "$35" },
//     { id: 4, image: "/images/trand1.png", name: "iphone15", price: "$30" },
//     { id: 5, image: "/images/p45-2.jpg", name: "Product 45-2", price: "$50" },
//     { id: 6, image: "/images/p46-1.jpg", name: "Product 46-1", price: "$55" },
//     { id: 7, image: "/images/wrist-watches.jpg", name: "Wrist Watch", price: "$60" },
//     { id: 8, image: "/images/t-shirts.jpg", name: "T-Shirt", price: "$25" },
//     { id: 9, image: "/images/shirt.jpg", name: "Shirt", price: "$28" },
//     { id: 10, image: "/images/p46-2.jpg", name: "Product 46-2", price: "$50" },
//     { id: 11, image: "/images/p41-1.jpg", name: "Product 41-1", price: "$45" },
//     { id: 12, image: "/images/p36-1.jpg", name: "Product 36-1", price: "$38" },
//     { id: 13, image: "/images/p42-1.jpg", name: "Product 42-1", price: "$48" },
//     { id: 14, image: "/images/p42-2.jpg", name: "Product 42-2", price: "$50" },
//     { id: 15, image: "/images/p43-2.jpg", name: "Product 43-2", price: "$52" },
//     { id: 16, image: "/images/p44-2.jpg", name: "Product 44-2", price: "$53" },
//     { id: 17, image: "/images/p35-1.jpg", name: "Product 35-1", price: "$35" },
//     { id: 18, image: "/images/p34-1.jpg", name: "Product 34-1", price: "$32" },
//     { id: 19, image: "/images/p33-1.jpg", name: "Product 33-1", price: "$30" },
//     { id: 20, image: "/images/p32-1.jpg", name: "Product 32-1", price: "$28" },
//     { id: 21, image: "/images/p31-2.jpg", name: "Product 31-2", price: "$27" },
//     { id: 22, image: "/images/p31-1.jpg", name: "Product 31-1", price: "$26" },
//     { id: 23, image: "/images/p26-2.jpg", name: "Product 26-2", price: "$22" },
//     { id: 24, image: "/images/p16-1.jpg", name: "Product 16-1", price: "$18" },
//     { id: 25, image: "/images/p15-1.jpg", name: "Product 15-1", price: "$15" },
//     { id: 26, image: "/images/p14-2.jpg", name: "Product 14-2", price: "$14" },
//     { id: 27, image: "/images/p13-2.jpg", name: "Product 13-2", price: "$13" },
//     { id: 28, image: "/images/p13-1.jpg", name: "Product 13-1", price: "$12" },
//     { id: 29, image: "/images/p12-2.jpg", name: "Product 12-2", price: "$11" },
//     { id: 30, image: "/images/headphone.jpg", name: "Headphone", price: "$60" },
//   ];

//   // Handle purchase click
//   const handlePurchase = (productId: number) => {
//     if (session?.user) {
//       router.push(`/checkout?product=${productId}`);
//     } else {
//       router.push("/login");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-5 mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
//         Our Products
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
//           >
//             <div className="relative w-full h-64">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4 flex flex-col items-center">
//               <h2 className="font-semibold text-lg text-gray-800 mb-2">
//                 {product.name}
//               </h2>
//               <p className="text-blue-600 font-bold mb-4">{product.price}</p>
//               <Link href="/checkout"className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
//                 Purchase
//               </Link>
               
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// app/products/page.tsx
// "use client";

// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function ProductsPage() {
//   const { data: session } = useSession();
//   const router = useRouter();
  
//   const products = [
//     { id: 1, image: "/images/trand4.png", name: "iphone17", price: "$45" },
//     { id: 2, image: "/images/trand3.png", name: "iphone16", price: "$40" },
//     { id: 3, image: "/images/trand2.png", name: "Headphone", price: "$35" },
//     { id: 4, image: "/images/trand1.png", name: "iphone15", price: "$30" },
//     { id: 5, image: "/images/p45-2.jpg", name: "Product 45-2", price: "$50" },
//     { id: 6, image: "/images/p46-1.jpg", name: "Product 46-1", price: "$55" },
//     { id: 7, image: "/images/wrist-watches.jpg", name: "Wrist Watch", price: "$60" },
//     { id: 8, image: "/images/t-shirts.jpg", name: "T-Shirt", price: "$25" },
//     { id: 9, image: "/images/shirt.jpg", name: "Shirt", price: "$28" },
//     { id: 10, image: "/images/p46-2.jpg", name: "Product 46-2", price: "$50" },
//   ];

//   const handlePurchase = (productId: number) => {
//     if (session?.user) {
//       router.push(`/checkout?product=${productId}`);
//     } else {
//       router.push("/login");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-5 mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
//         Our Products
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
//           >
//             <div className="relative w-full h-64">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4 flex flex-col items-center">
//               <h2 className="font-semibold text-lg text-gray-800 mb-2">
//                 {product.name}
//               </h2>
//               <p className="text-blue-600 font-bold mb-4">{product.price}</p>
//               <button 
//                 onClick={() => handlePurchase(product.id)}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//               >
//                 Purchase
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function ProductsPage() {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   const products = [
//     { id: 1, image: "/images/trand4.png", name: "iphone17", price: "$45" },
//     { id: 2, image: "/images/trand3.png", name: "iphone16", price: "$40" },
//     { id: 3, image: "/images/trand2.png", name: "Headphone", price: "$35" },
//     { id: 4, image: "/images/trand1.png", name: "iphone15", price: "$30" },
//     { id: 5, image: "/images/p45-2.jpg", name: "Product 45-2", price: "$50" },
//     { id: 6, image: "/images/p46-1.jpg", name: "Product 46-1", price: "$55" },
//     { id: 7, image: "/images/wrist-watches.jpg", name: "Wrist Watch", price: "$60" },
//     { id: 8, image: "/images/t-shirts.jpg", name: "T-Shirt", price: "$25" },
//     { id: 9, image: "/images/shirt.jpg", name: "Shirt", price: "$28" },
//     { id: 10, image: "/images/p46-2.jpg", name: "Product 46-2", price: "$50" },
//   ];

//   const handlePurchase = (productId: number) => {
//     if (status === "loading") return; // session loading হলে wait করো
//     if (session?.user) {
//       router.push(`/checkout?product=${productId}`);
//     } else {
//       router.push("/login");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-5 mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
//         Our Products
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
//           >
//             <div className="relative w-full h-64">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4 flex flex-col items-center">
//               <h2 className="font-semibold text-lg text-gray-800 mb-2">
//                 {product.name}
//               </h2>
//               <p className="text-blue-600 font-bold mb-4">{product.price}</p>
//               <button
//                 onClick={() => handlePurchase(product.id)}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//               >
//                 Purchase
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\product\page.tsx
// "use client";

// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function ProductsPage() {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   const products = [
//     { id: 1, image: "/images/trand4.png", name: "iPhone17", price: 45 },
//     { id: 2, image: "/images/trand3.png", name: "iPhone16", price: 40 },
//     { id: 3, image: "/images/trand2.png", name: "Headphone", price: 35 },
//   ];

//   const handlePurchase = (productId: number) => {
//     if (status === "loading") return;
//     if (!session?.user) {
//       router.push("/login");
//       return;
//     }
//     router.push(`/checkout?product=${productId}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-5 mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
//         Our Products
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
//           >
//             <div className="relative w-full h-64">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4 flex flex-col items-center">
//               <h2 className="font-semibold text-lg text-gray-800 mb-2">
//                 {product.name}
//               </h2>
//               <p className="text-blue-600 font-bold mb-4">${product.price}</p>
//               <button
//                 onClick={() => handlePurchase(product.id)}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//               >
//                 Purchase
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";

// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function ProductsPage() {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   // ✅ Add localStorage user support (for manual login/register)
//   const [localUser, setLocalUser] = useState<any>(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setLocalUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const products = [
//     { id: 1, image: "/images/trand4.png", name: "iPhone17", price: 45 },
//     { id: 2, image: "/images/trand3.png", name: "iPhone16", price: 40 },
//     { id: 3, image: "/images/trand2.png", name: "Headphone", price: 35 },
//   ];

//   const handlePurchase = (productId: number) => {
//     if (status === "loading") return;

//     // ✅ Check login both via NextAuth OR manual login
//     if (!session?.user && !localUser) {
//       router.push("/login");
//       return;
//     }

//     router.push(`/checkout?product=${productId}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-5 mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
//         Our Products
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
//           >
//             <div className="relative w-full h-64">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4 flex flex-col items-center">
//               <h2 className="font-semibold text-lg text-gray-800 mb-2">
//                 {product.name}
//               </h2>
//               <p className="text-blue-600 font-bold mb-4">${product.price}</p>
//               <button
//                 onClick={() => handlePurchase(product.id)}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//               >
//                 Purchase
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// ✅ C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\product\page.tsx
// "use client";

// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function ProductsPage() {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   // ✅ LocalStorage user check for Email/Password login
//   const [localUser, setLocalUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setLocalUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const products = [
//     { id: 1, image: "/images/trand4.png", name: "iPhone17", price: 45 },
//     { id: 2, image: "/images/trand3.png", name: "iPhone16", price: 40 },
//     { id: 3, image: "/images/trand2.png", name: "Headphone", price: 35 },
//   ];

//   const handlePurchase = (productId: number) => {
//     if (status === "loading") return;

//     // ✅ Check both NextAuth session & localStorage user
//     const isLoggedIn = session?.user || localUser;

//     if (!isLoggedIn) {
//       router.push("/login");
//       return;
//     }

//     router.push(`/checkout?product=${productId}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-5 mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
//         Our Products
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
//           >
//             <div className="relative w-full h-64">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4 flex flex-col items-center">
//               <h2 className="font-semibold text-lg text-gray-800 mb-2">
//                 {product.name}
//               </h2>
//               <p className="text-blue-600 font-bold mb-4">${product.price}</p>
//               <button
//                 onClick={() => handlePurchase(product.id)}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//               >
//                 Purchase
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\product\page.tsx
"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // const products = [
  //   { id: 1, image: "/images/trand4.png", name: "iPhone17", price: 45 },
  //   { id: 2, image: "/images/trand3.png", name: "iPhone16", price: 40 },
  //   { id: 3, image: "/images/trand2.png", name: "Headphone", price: 35 },
  // ];

     const products = [
    { id: 1, image: "/images/trand4.png", name: "iphone17", price: "45" },
    { id: 2, image: "/images/trand3.png", name: "iphone16", price: "40" },
    { id: 3, image: "/images/trand2.png", name: "Headphone", price: "35" },
    { id: 4, image: "/images/trand1.png", name: "iphone15", price: "30" },
    { id: 5, image: "/images/p45-2.jpg", name: "Product 45-2", price: "50" },
    { id: 6, image: "/images/p46-1.jpg", name: "Product 46-1", price: "55" },
    { id: 7, image: "/images/wrist-watches.jpg", name: "Wrist Watch", price: "60" },
    { id: 8, image: "/images/t-shirts.jpg", name: "T-Shirt", price: "25" },
    { id: 9, image: "/images/shirt.jpg", name: "Shirt", price: "28" },
    { id: 10, image: "/images/p46-2.jpg", name: "Product 46-2", price: "50" },
    { id: 11, image: "/images/p41-1.jpg", name: "Product 41-1", price: "45" },
    { id: 12, image: "/images/p36-1.jpg", name: "Product 36-1", price: "38" },
    { id: 13, image: "/images/p42-1.jpg", name: "Product 42-1", price: "48" },
    { id: 14, image: "/images/p42-2.jpg", name: "Product 42-2", price: "50" },
    { id: 15, image: "/images/p43-2.jpg", name: "Product 43-2", price: "52" },
    { id: 16, image: "/images/p44-2.jpg", name: "Product 44-2", price: "53" },
    { id: 17, image: "/images/p35-1.jpg", name: "Product 35-1", price: "35" },
    { id: 18, image: "/images/p34-1.jpg", name: "Product 34-1", price: "32" },
    { id: 19, image: "/images/p33-1.jpg", name: "Product 33-1", price: "30" },
    { id: 20, image: "/images/p32-1.jpg", name: "Product 32-1", price: "28" },
    { id: 21, image: "/images/p31-2.jpg", name: "Product 31-2", price: "27" },
    { id: 22, image: "/images/p31-1.jpg", name: "Product 31-1", price: "26" },
    { id: 23, image: "/images/p26-2.jpg", name: "Product 26-2", price: "22" },
    { id: 24, image: "/images/p16-1.jpg", name: "Product 16-1", price: "18" },
    { id: 25, image: "/images/p15-1.jpg", name: "Product 15-1", price: "15" },
    { id: 26, image: "/images/p14-2.jpg", name: "Product 14-2", price: "14" },
    { id: 27, image: "/images/p13-2.jpg", name: "Product 13-2", price: "13" },
    { id: 28, image: "/images/p13-1.jpg", name: "Product 13-1", price: "12" },
    { id: 29, image: "/images/p12-2.jpg", name: "Product 12-2", price: "11" },
    { id: 30, image: "/images/headphone.jpg", name: "Headphone", price: "60" },
  ];


  const handlePurchase = (productId: number) => {
    if (status === "loading") return;
    
    // ✅ Check both session and localStorage for authentication
    const localUser = localStorage.getItem("user");
    
    if (!session?.user && !localUser) {
      router.push("/login");
      return;
    }
    
    // ✅ User is authenticated, proceed to checkout
    router.push(`/checkout?product=${productId}`);
  };

  return (
    <div className=" bg-gray-100 py-10 px-5 mx-auto min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            <div className="relative w-full h-72">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover "
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <h2 className="font-semibold text-lg text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-blue-600 font-bold mb-4">${product.price}</p>
              <button
                onClick={() => handlePurchase(product.id)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>




//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
//   <div className="max-w-7xl mx-auto">
//     <h1 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//       Premium Collection
//     </h1>

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transform transition-all duration-500 hover:shadow-2xl border border-white/20"
//         >
//           <div className="relative w-full h-72">
//             <Image
//               src={product.image}
//               alt={product.name}
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//           </div>
          
//           <div className="p-6 flex flex-col items-center bg-gradient-to-b from-white to-gray-50">
//             <h2 className="font-bold text-xl text-gray-800 mb-3 text-center">
//               {product.name}
//             </h2>
//             <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
//               ${product.price}
//             </p>
//             <button
//               onClick={() => handlePurchase(product.id)}
//               className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
  );
}
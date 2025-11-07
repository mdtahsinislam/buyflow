

// import Image from "next/image";
// import Link from "next/link";
// import { PiShoppingCartBold } from "react-icons/pi";

// export const Navbar = () => {
//   // Hardcoded cart item count for demonstration
//   const cartItemCount = 8; 

//   return (
//     <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image
//             src="/images/so.png"
//             alt="BuyFlow Logo"
//             width={96}
//             height={40}
//           />
//           <Link href="/" className="text-2xl font-bold text-blue-600 ">
//             BuyFlow
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-6 text-gray-700 items-center justify-center">
//           <Link href="/" className="hover:text-blue-600">Home</Link>
//           <Link href="/product" className="hover:text-blue-600">Products</Link>
//           <Link href="/checkout" className="hover:text-blue-600">Checkout</Link>
//           <Link href="/order" className="hover:text-blue-600">My Orders</Link>
//         </div>

//         {/* Right section (cart icon with badge) */}
//         <div className="flex items-center space-x-4">
//           <div className="relative"> {/* Added 'relative' positioning here */}
//             <PiShoppingCartBold size={28} color="#1D4ED8" className="hover:text-blue-600 transition-colors" />
            
//             {/* Cart Badge (using absolute positioning) */}
//             {cartItemCount > 0 && (
//               <span className="
//                 absolute 
//                 -top-3  /* Adjust vertical position */
//                 -right-1 /* Adjust horizontal position */
//                 bg-transparent 
//                 text-sm 
//                 font-medium 
//                 text-gray-800 
//                 rounded-full 
//                 h-5 
//                 w-5 
//                 flex 
//                 items-center 
//                 justify-center 
//                 border 
//                 border-gray-800 
//                 p-1
//               ">
//                 {cartItemCount}
//               </span>
//             )}
//           </div>
         
//          {/* <Link href="/login"> <button
//   className="px-4 py-2 border-2 border-cyan-500 text-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
// >
//   Login
// </button></Link> */}

// i want login user image show here and login button redirect logout (login;logout bout worked)
// <Link
//   href="/login"
//   className="px-4 py-2 border-2 border-cyan-500 text-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
// >
//   Login
// </Link>
 
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button className="text-gray-700">☰</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

/////

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { PiShoppingCartBold } from "react-icons/pi";
// import { useEffect, useState } from "react";

// export const Navbar = () => {
//   const cartItemCount = 8;

//   // State for user info
//   const [user, setUser] = useState<{ name?: string; email?: string; photoURL?: string } | null>(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user"); // Clear user from localStorage
//     setUser(null);
//     // Redirect to login page
//     window.location.href = "/login";
//   };

//   return (
//     <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image src="/images/so.png" alt="BuyFlow Logo" width={96} height={40} />
//           <Link href="/" className="text-2xl font-bold text-blue-600 ml-2">
//             BuyFlow
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-6 text-gray-700 items-center justify-center">
//           <Link href="/" className="hover:text-blue-600">Home</Link>
//           <Link href="/product" className="hover:text-blue-600">Products</Link>
//           <Link href="/checkout" className="hover:text-blue-600">Checkout</Link>
//           <Link href="/order" className="hover:text-blue-600">My Orders</Link>
//         </div>

//         {/* Right section */}
//         <div className="flex items-center space-x-4">
//           {/* Cart Icon */}
//           <div className="relative">
//             <PiShoppingCartBold size={28} color="#1D4ED8" className="hover:text-blue-600 transition-colors" />
//             {cartItemCount > 0 && (
//               <span className="
//                 absolute -top-3 -right-1 
//                 bg-transparent text-sm font-medium text-gray-800 rounded-full 
//                 h-5 w-5 flex items-center justify-center border border-gray-800 p-1
//               ">
//                 {cartItemCount}
//               </span>
//             )}
//           </div>

//           {/* User / Login */}
//           {user ? (
//             <div className="flex items-center gap-2">
//               {user.photoURL ? (
//                 <Image
//                   src={user.photoURL}
//                   alt={user.name || "User"}
//                   width={32}
//                   height={32}
//                   className="rounded-full border border-gray-300"
//                 />
//               ) : (
//                 <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
//                   {user.name?.charAt(0).toUpperCase() || "U"}
//                 </div>
//               )}

//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <Link
//               href="/login"
//               className="px-4 py-2 border-2 border-cyan-500 text-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
//             >
//               Login
//             </Link>
//           )}
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <button className="text-gray-700">☰</button>
//         </div>
//       </div>
//     </nav>
//   );
// };





// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { PiShoppingCartBold } from "react-icons/pi";
// import { useEffect, useState } from "react";

// export const Navbar = () => {
//   const cartItemCount = 8;

//   const [user, setUser] = useState<{ name?: string; email?: string; image?: string } | null>(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     window.location.href = "/login";
//   };

//   return (
//     <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image src="/images/so.png" alt="BuyFlow Logo" width={96} height={40} />
//           <Link href="/" className="text-2xl font-bold text-blue-600 ml-2">
//             BuyFlow
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-6 text-gray-700 items-center justify-center">
//           <Link href="/" className="hover:text-blue-600">Home</Link>
//           <Link href="/product" className="hover:text-blue-600">Products</Link>
//           <Link href="/checkout" className="hover:text-blue-600">Checkout</Link>
//           <Link href="/order" className="hover:text-blue-600">My Orders</Link>
//         </div>

//         {/* Right section */}
//         <div className="flex items-center space-x-4">
//           {/* Cart Icon */}
//           <div className="relative">
//             <PiShoppingCartBold size={28} color="#1D4ED8" className="hover:text-blue-600 transition-colors" />
//             {cartItemCount > 0 && (
//               <span className="absolute -top-3 -right-1 bg-transparent text-sm font-medium text-gray-800 rounded-full h-5 w-5 flex items-center justify-center border border-gray-800 p-1">
//                 {cartItemCount}
//               </span>
//             )}
//           </div>

//           {/* User / Login */}
//           {user ? (
//             <div className="flex items-center gap-2">
//               {user.image ? (
//                 <Image
//                   src={user.image} // ✅ use "image" instead of "photoURL"
//                   alt={user.name || "User"}
//                   width={40}
//                   height={40}
//                   className=" border border-gray-300 rounded-full"
//                 />
//               ) : (
//                 <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
//                   {user.name?.charAt(0).toUpperCase() || "U"}
//                 </div>
//               )}

//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <Link
//               href="/login"
//               className="px-4 py-2 border-2 border-cyan-500 text-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
//             >
//               Login
//             </Link>
//           )}
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <button className="text-gray-700">☰</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\components\navbar.tsx

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { PiShoppingCartBold } from "react-icons/pi";
// import { useEffect, useState } from "react";
// import { useSession, signOut } from "next-auth/react"; // ✅ import
// import { GiShoppingCart } from "react-icons/gi";
// import { usePathname } from "next/navigation";

// export const Navbar = () => {

//   const pathname = usePathname(); // current route

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/product", label: "Products" },
//     { href: "/checkout", label: "Checkout" },
//     { href: "/order", label: "My Orders" },
//   ];
//   const cartItemCount = 8;
//   const { data: session } = useSession(); // ✅ get session data
//   const [user, setUser] = useState<{ name?: string; email?: string; image?: string } | null>(null);

//   useEffect(() => {
//     // ✅ 1. check localStorage
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     } 
//     // ✅ 2. if logged in with Google (NextAuth)
//     else if (session?.user) {
//       setUser({
//         name: session.user.name ?? "",
//         email: session.user.email ?? "",
//         image: session.user.image ?? "",
//       });
//     }
//   }, [session]);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     signOut({ callbackUrl: "/login" }); // ✅ NextAuth logout
//   };

//   return (
//     <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <Image src="/images/so.png" alt="BuyFlow Logo" width={96} height={40} />
//           <Link href="/" className="text-2xl font-bold text-blue-600 ml-2">
//             BuyFlow
//           </Link>
//         </div>

//         {/* <div className="hidden md:flex space-x-6 text-gray-700 items-center justify-center">
//           <Link href="/" className="hover:text-blue-600">Home</Link>
//           <Link href="/product" className="hover:text-blue-600">Products</Link>
//           <Link href="/checkout" className="hover:text-blue-600">Checkout</Link>
//           <Link href="/order" className="hover:text-blue-600">My Orders</Link>
//         </div> */}
//         <div className="hidden md:flex space-x-6 text-gray-700 items-center justify-center">
//       {links.map((link) => (
//         <Link
//           key={link.href}
//           href={link.href}
//           className={`hover:text-blue-600 ${
//             pathname === link.href ? "text-blue-600 font-semibold" : ""
//           }`}
//         >
//           {link.label}
//         </Link>
//       ))}
//     </div>

//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <PiShoppingCartBold size={28} color="#1D4ED8" />
           
//           </div>
//           {/* <GiShoppingCart  className=""/> */}
//            {/* {cartItemCount > 0 && (
//               <span className="absolute -top-3 -right-1 bg-transparent text-sm font-medium text-gray-800 rounded-full h-5 w-5 flex items-center justify-center border border-gray-800 p-1">
//                 {cartItemCount}
//               </span>
//             )} */}

//           {user ? (
//             <div className="flex items-center gap-2">
//               {user.image ? (
//                 <Image
//                   src={user.image}
//                   alt={user.name || "User"}
//                   width={40}
//                   height={40}
//                   className="rounded-full border border-gray-300"
//                 />
//               ) : (
//                 <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
//                   {user.name?.charAt(0).toUpperCase() || "U"}
//                 </div>
//               )}
//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <Link
//               href="/login"
//               className=" px-4 py-2 border-2 border-cyan-500 text-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
//             >
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };


"use client";

import Image from "next/image";
import Link from "next/link";
import { PiShoppingCartBold } from "react-icons/pi";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { GiShoppingCart } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // ✅ for mobile toggle

export const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/product", label: "Products" },
    { href: "/checkout", label: "Checkout" },
    { href: "/order", label: "My Orders" },
  ];
  const { data: session } = useSession();
  const [user, setUser] = useState<{ name?: string; email?: string; image?: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ toggle menu state

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (session?.user) {
      setUser({
        name: session.user.name ?? "",
        email: session.user.email ?? "",
        image: session.user.image ?? "",
      });
    }
  }, [session]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    signOut({ callbackUrl: "/login" });
  };

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* ✅ Logo */}
        <div className="flex items-center">
          <Image src="/images/so.png" alt="BuyFlow Logo" width={96} height={40} />
          <Link href="/" className="text-2xl font-bold text-blue-600 ml-2">
            BuyFlow
          </Link>
        </div>

        {/* ✅ Hamburger (Mobile Only) */}
        <button
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* ✅ Links for Desktop */}
        <div className="hidden md:flex space-x-6 text-gray-700 items-center justify-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-600 ${
                pathname === link.href ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ✅ Right Section (Cart + User) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <PiShoppingCartBold size={28} color="#1D4ED8" />
          </div>

          {user ? (
            <div className="flex items-center gap-2">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-300"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
                  {user.name?.charAt(0).toUpperCase() || "U"}
                </div>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 border-2 border-cyan-500 text-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col space-y-4 text-gray-700 bg-gray-50 rounded-lg shadow-lg p-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`hover:text-blue-600 ${
                pathname === link.href ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center justify-between border-t pt-3">
            <div className="flex items-center gap-3">
              {user ? (
                <>
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "User"}
                      width={40}
                      height={40}
                      className="rounded-full border border-gray-300"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
                      {user.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                  <span className="text-gray-800 font-medium">{user.name}</span>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="text-cyan-500 font-semibold"
                >
                  Login
                </Link>
              )}
            </div>

            {user && (
              <button
                onClick={handleLogout}
                className="text-red-500 font-semibold hover:underline"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

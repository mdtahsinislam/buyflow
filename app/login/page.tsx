
// //C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\login\page.tsx
// import { Link } from 'lucide-react'
// import React from 'react'

// const page = () => {
//   return (
//     <div>page login  
        
//        <Link href="/Register"> Register</Link> 
//         </div>
//   )
// }

// export default page


// C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\login\page.tsx  ///********** */
// import Link from "next/link";
// import React from "react";

// const Page = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      
//       {/* Link to Register page */}
//       <p className="mt-4 text-blue-600">
//         Don't have an account?{" "}
//         <Link href="/Register" className="underline">
//           Register
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default Page;

//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\login\page.tsx


//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\login\page.tsx

// "use client";

// import Link from "next/link";
// import React from "react";
// import { FcGoogle } from "react-icons/fc";

// const Page = () => {
//   const handleGoogleLogin = () => {
//     alert("Google login coming soon ✨");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center border border-gray-100">
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back </h1>
//         <p className="text-gray-500 mb-8">Login to your BuyFlow account</p>

//         {/* Email Input */}
//         <div className="mb-4 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Password Input */}
//         <div className="mb-6 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Login Button */}
//         <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300">
//           Login
//         </button>

//         {/* OR Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-3 text-gray-500 text-sm">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Login */}
//         <button
//           onClick={handleGoogleLogin}
//           className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
//         >
//           <FcGoogle size={24} />
//           <span className="font-medium text-gray-700">Login with Google</span>
//         </button>

//         {/* Register Link */}
//         <p className="mt-6 text-gray-600">
//           Don’t have an account?{" "}
//           <Link href="/Register" className="text-blue-600 font-semibold hover:underline">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Page;

//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\login\page.tsx

// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/navigation";

// const LoginPage = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.message || "Login failed!");
//         setLoading(false);
//         return;
//       }

//       toast.success(data.message || "Login successful!");
//       // You can save user info in localStorage/session or context
//       localStorage.setItem("user", JSON.stringify(data.user));

//       setTimeout(() => {
//         router.push("/"); // redirect to home or dashboard
//       }, 1000);
//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = () => {
//     toast.info("Google login coming soon ✨");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4">
//       <ToastContainer />
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100 text-center"
//       >
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back ✨</h1>
//         <p className="text-gray-500 mb-8">Login to your BuyFlow account</p>

//         {/* Email */}
//         <div className="mb-4 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//             disabled={loading}
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-6 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Enter your password"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//             minLength={6}
//             disabled={loading}
//           />
//         </div>

//         {/* Login Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-4 ${
//             loading
//               ? "bg-gray-400 text-gray-200 cursor-not-allowed"
//               : "bg-blue-600 text-white hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         {/* OR Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-3 text-gray-500 text-sm">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Login */}
//         <button
//           type="button"
//           onClick={handleGoogleLogin}
//           disabled={loading}
//           className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <FcGoogle size={24} />
//           <span className="font-medium text-gray-700">Login with Google</span>
//         </button>

//         {/* Register Link */}
//         <p className="mt-6 text-gray-600">
//           Don’t have an account?{" "}
//           <Link href="/Register" className="text-blue-600 font-semibold hover:underline">
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

// //C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\login\page.tsx
// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react"; // ✅ Import NextAuth signIn

// const LoginPage = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.message || "Login failed!");
//         setLoading(false);
//         return;
//       }

//       toast.success(data.message || "Login successful!");
//       localStorage.setItem("user", JSON.stringify(data.user));

//       setTimeout(() => router.push("/"), 1000);
//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     // ✅ Trigger NextAuth Google signIn
//     await signIn("google", { callbackUrl: "/" });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4">
//       <ToastContainer />
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100 text-center"
//       >
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back ✨</h1>
//         <p className="text-gray-500 mb-8">Login to your BuyFlow account</p>

//         {/* Email */}
//         <div className="mb-4 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//             disabled={loading}
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-6 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Enter your password"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//             minLength={6}
//             disabled={loading}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-4 ${
//             loading ? "bg-gray-400 text-gray-200 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-3 text-gray-500 text-sm">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Login */}
//         <button
//           type="button"
//           onClick={handleGoogleLogin}
//           disabled={loading}
//           className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <FcGoogle size={24} />
//           <span className="font-medium text-gray-700">Login with Google</span>
//         </button>

//         <p className="mt-6 text-gray-600">
//           Don’t have an account?{" "}
//           <Link href="/Register" className="text-blue-600 font-semibold hover:underline">
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Use NextAuth signIn for credentials instead of direct API call
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Invalid credentials!");
        setLoading(false);
        return;
      }

      toast.success("Login successful!");
      
      // ✅ Save user to localStorage for immediate UI update
      const userResponse = await fetch("/api/auth/current-user", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      
      if (userResponse.ok) {
        const userData = await userResponse.json();
        localStorage.setItem("user", JSON.stringify(userData.user));
      }

      setTimeout(() => router.push("/"), 1000);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100 text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back ✨</h1>
        <p className="text-gray-500 mb-8">Login to your BuyFlow account</p>

        {/* Email */}
        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            disabled={loading}
          />
        </div>

        {/* Password */}
        <div className="mb-6 text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            minLength={6}
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-4 ${
            loading ? "bg-gray-400 text-gray-200 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FcGoogle size={24} />
          <span className="font-medium text-gray-700">Login with Google</span>
        </button>

        <p className="mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link href="/Register" className="text-blue-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
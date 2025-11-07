// import React from 'react'

// const page = () => {
//   return (
//     <div>page Regggg</div>
//   )
// }

// export default page


// //give me glorious register page name,email,password,phone,photo file, Register button , or google login , Already have account go to login C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\login\page.tsx

//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\Register\page.tsx
/*** */
// "use client";

// import React from "react";
// import Link from "next/link";
// import { FcGoogle } from "react-icons/fc";

// const RegisterPage = () => {
//   const handleGoogleRegister = () => {
//     alert("Google Sign-Up coming soon ✨");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center border border-gray-100">
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account ✨</h1>
//         <p className="text-gray-500 mb-8">Join BuyFlow and start shopping smarter!</p>

//         {/* Name */}
//         <div className="mb-4 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
//           <input
//             type="text"
//             placeholder="Enter your full name"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-4 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
//           <input
//             type="password"
//             placeholder="Create a password"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Phone */}
//         <div className="mb-4 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
//           <input
//             type="tel"
//             placeholder="Enter your phone number"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Photo Upload */}
//         <div className="mb-6 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Profile Photo</label>
//           <input
//             type="file"
//             accept="image/*"
//             className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Register Button */}
//         <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300">
//           Register
//         </button>

//         {/* OR Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-3 text-gray-500 text-sm">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Register */}
//         <button
//           onClick={handleGoogleRegister}
//           className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
//         >
//           <FcGoogle size={24} />
//           <span className="font-medium text-gray-700">Continue with Google</span>
//         </button>

//         {/* Go to Login */}
//         <p className="mt-6 text-gray-600">
//           Already have an account?{" "}
//           <Link href="/login" className="text-blue-600 font-semibold hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
/**** */



// "use client";
// import React, { useState } from "react";

// export default function RegisterPage() {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);
//     const res = await fetch("/api/auth/register", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await res.json();
//     alert(data.message);
//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="min-h-screen flex items-center justify-center bg-blue-50">
//       <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>
//         <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full mb-3" required />
//         <input type="email" name="email" placeholder="Email" className="input input-bordered w-full mb-3" required />
//         <input type="password" name="password" placeholder="Password" className="input input-bordered w-full mb-3" required />
//         <input type="tel" name="phone" placeholder="Phone" className="input input-bordered w-full mb-3" />
//         <input type="file" name="photo" accept="image/*" className="file-input file-input-bordered w-full mb-3" required />
//         <button type="submit" className="btn btn-primary w-full">{loading ? "Registering..." : "Register"}</button>
//       </div>
//     </form>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Link from "next/link";
// export default function RegisterPage() {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.currentTarget);

//     try {
//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await res.json();

//       if (res.ok) {
//         toast.success(data.message || "User registered successfully!");
//         e.currentTarget.reset(); // form clear
//       } else {
//         toast.error(data.message || "Registration failed!");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong!");
//     }

//     setLoading(false);
//   };

//   const handleGoogleRegister = () => {
//     toast.info("Google Sign-Up coming soon ✨");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4">
//       <ToastContainer />
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center border border-gray-100"
//       >
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account ✨</h1>
//         <p className="text-gray-500 mb-8">Join BuyFlow and start shopping smarter!</p>

//         {/* Name */}
//         <div className="mb-4 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your full name"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-4 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Create a password"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         {/* Phone */}
//         <div className="mb-4 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Enter your phone number"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Photo Upload */}
//         <div className="mb-6 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Profile Photo</label>
//           <input
//             type="file"
//             name="photo"
//             accept="image/*"
//             className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         {/* Register Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300 mb-4"
//         >
//           {loading ? "Registering..." : "Register"}
//         </button>

//         {/* OR Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-3 text-gray-500 text-sm">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Register */}
//         <button
//           type="button"
//           onClick={handleGoogleRegister}
//           className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
//         >
//           <FcGoogle size={24} />
//           <span className="font-medium text-gray-700">Continue with Google</span>
//         </button>
//         {/* Go to Login */}
//         <p className="mt-6 text-gray-600">
//           Already have an account?{" "}
//           <Link href="/login" className="text-blue-600 font-semibold hover:underline">
//              Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }


//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\Register\page.tsx
// "use client";

// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react"; // Add this

// export default function RegisterPage() {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     photo: null as File | null
//   });
//   const router = useRouter();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, files } = e.target;
    
//     if (name === "photo" && files) {
//       setFormData(prev => ({
//         ...prev,
//         photo: files[0]
//       }));
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const submitFormData = new FormData();
//       submitFormData.append("name", formData.name);
//       submitFormData.append("email", formData.email);
//       submitFormData.append("password", formData.password);
//       submitFormData.append("phone", formData.phone);
      
//       if (formData.photo) {
//         submitFormData.append("photo", formData.photo);
//       }

//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         body: submitFormData,
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success(data.message || "User registered successfully!");
        
//         // Clear form
//         setFormData({
//           name: "",
//           email: "",
//           password: "",
//           phone: "",
//           photo: null
//         });
        
//         // Reset file input
//         const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
//         if (fileInput) fileInput.value = "";

//         // Redirect to login after successful registration
//         setTimeout(() => {
//           router.push("/");
//         }, 2000);
//       } else {
//         toast.error(data.message || "Registration failed!");
//       }
//     } catch (error) {
//       console.error("Registration error:", error);
//       toast.error("Something went wrong! Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleRegister = () => {
//     toast.info("Google Sign-Up coming soon ✨");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
      
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100"
//       >
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">
//             Create Account ✨
//           </h1>
//           <p className="text-gray-500">
//             Join BuyFlow and start shopping smarter!
//           </p>
//         </div>

//         {/* Name */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Full Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Enter your full name"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
//             required
//             disabled={loading}
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
//             required
//             disabled={loading}
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Create a password"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
//             required
//             disabled={loading}
//             minLength={6}
//           />
//         </div>

//         {/* Phone */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             placeholder="Enter your phone number"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
//             disabled={loading}
//           />
//         </div>

//         {/* Photo Upload */}
//         <div className="mb-6">
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Profile Photo
//           </label>
//           <input
//             type="file"
//             name="photo"
//             accept="image/*"
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//             disabled={loading}
//           />
//         </div>

//         {/* Register Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-4 ${
//             loading
//               ? "bg-gray-400 text-gray-200 cursor-not-allowed"
//               : "bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105"
//           }`}
//         >
//           {loading ? (
//             <div className="flex items-center justify-center">
//               <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//               Registering...
//             </div>
//           ) : (
//             "Create Account"
//           )}
//         </button>

//         {/* OR Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-4 text-gray-500 text-sm font-medium">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Register */}
//         <button
//           type="button"
//           onClick={handleGoogleRegister}
//           disabled={loading}
//           className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <FcGoogle size={20} />
//           <span className="font-medium text-gray-700">
//             Continue with Google
//           </span>
//         </button>

//         {/* Login Link */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Already have an account?{" "}
//             <Link 
//               href="/login" 
//               className="text-blue-600 font-semibold hover:underline transition duration-200"
//             >
//               Sign In
//             </Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }

// //C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\Register\page.tsx
// "use client";

// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react"; // ✅ Import NextAuth

// export default function RegisterPage() {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     photo: null as File | null
//   });
//   const router = useRouter();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, files } = e.target;

//     if (name === "photo" && files) {
//       setFormData(prev => ({
//         ...prev,
//         photo: files[0]
//       }));
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const submitFormData = new FormData();
//       submitFormData.append("name", formData.name);
//       submitFormData.append("email", formData.email);
//       submitFormData.append("password", formData.password);
//       submitFormData.append("phone", formData.phone);
//       if (formData.photo) submitFormData.append("photo", formData.photo);

//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         body: submitFormData
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success(data.message || "User registered successfully!");
//         setFormData({ name: "", email: "", password: "", phone: "", photo: null });

//         const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
//         if (fileInput) fileInput.value = "";

//         setTimeout(() => router.push("/"), 1500);
//       } else {
//         toast.error(data.message || "Registration failed!");
//       }
//     } catch (error) {
//       console.error("Registration error:", error);
//       toast.error("Something went wrong! Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleRegister = async () => {
//     setLoading(true);
//     try {
//       await signIn("google", { callbackUrl: "/" });
//     } catch (error) {
//       console.error("Google Sign-Up error:", error);
//       toast.error("Google Sign-Up failed!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
//       <ToastContainer position="top-right" autoClose={5000} />
      
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100"
//       >
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">
//             Create Account ✨
//           </h1>
//           <p className="text-gray-500">Join BuyFlow and start shopping smarter!</p>
//         </div>

//         {/* Name */}
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           placeholder="Full Name"
//           className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           required
//           disabled={loading}
//         />

//         {/* Email */}
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           placeholder="Email"
//           className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           required
//           disabled={loading}
//         />

//         {/* Password */}
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//           placeholder="Password"
//           className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           required
//           disabled={loading}
//           minLength={6}
//         />

//         {/* Phone */}
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleInputChange}
//           placeholder="Phone"
//           className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           disabled={loading}
//         />

//         {/* Photo */}
//         <input
//           type="file"
//           name="photo"
//           accept="image/*"
//           onChange={handleInputChange}
//           className="w-full mb-6 px-3 py-2 border rounded-lg file:rounded-full file:bg-blue-50 file:text-blue-700"
//           disabled={loading}
//         />

//         {/* Register Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 mb-4 rounded-lg font-semibold ${
//             loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
//           }`}
//         >
//           {loading ? "Registering..." : "Create Account"}
//         </button>

//         {/* OR Divider */}
//         <div className="flex items-center my-4">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-4 text-gray-500 text-sm font-medium">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Register */}
//         <button
//           type="button"
//           onClick={handleGoogleRegister}
//           disabled={loading}
//           className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <FcGoogle size={20} />
//           <span>Continue with Google</span>
//         </button>

//         {/* Login Link */}
//         <p className="mt-6 text-center text-gray-600">
//           Already have an account?{" "}
//           <Link href="/login" className="text-blue-600 font-semibold hover:underline">
//             Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }


// C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\Register\page.tsx
// "use client";

// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react"; // ✅ Import NextAuth

// export default function RegisterPage() {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     photo: null as File | null,
//   });
//   const router = useRouter();

//   // ✅ Handle input and file change
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, files } = e.target;

//     if (name === "photo" && files) {
//       setFormData((prev) => ({
//         ...prev,
//         photo: files[0],
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   // ✅ Submit form to backend
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const submitFormData = new FormData();
//       submitFormData.append("name", formData.name);
//       submitFormData.append("email", formData.email);
//       submitFormData.append("password", formData.password);
//       submitFormData.append("phone", formData.phone);
//       if (formData.photo) submitFormData.append("photo", formData.photo);

//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         body: submitFormData,
//       });

//       const data = await res.json();

//       if (res.ok) {
//         // ✅ Save user to localStorage so Navbar can show user image instantly
//         localStorage.setItem("user", JSON.stringify(data.user));

//         toast.success(data.message || "User registered successfully!");

//         // ✅ Reset form
//         setFormData({ name: "", email: "", password: "", phone: "", photo: null });
//         const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
//         if (fileInput) fileInput.value = "";

//         // ✅ Redirect after success
//         setTimeout(() => router.push("/"), 1500);
//       } else {
//         toast.error(data.message || "Registration failed!");
//       }
//     } catch (error) {
//       console.error("Registration error:", error);
//       toast.error("Something went wrong! Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Google Register (NextAuth)
//   const handleGoogleRegister = async () => {
//     setLoading(true);
//     try {
//       await signIn("google", { callbackUrl: "/" });
//     } catch (error) {
//       console.error("Google Sign-Up error:", error);
//       toast.error("Google Sign-Up failed!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ JSX UI
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
//       <ToastContainer position="top-right" autoClose={5000} />

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100"
//       >
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">
//             Create Account ✨
//           </h1>
//           <p className="text-gray-500">Join BuyFlow and start shopping smarter!</p>
//         </div>

//         {/* Name */}
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           placeholder="Full Name"
//           className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           required
//           disabled={loading}
//         />

//         {/* Email */}
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           placeholder="Email"
//           className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           required
//           disabled={loading}
//         />

//         {/* Password */}
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//           placeholder="Password"
//           className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           required
//           disabled={loading}
//           minLength={6}
//         />

//         {/* Phone */}
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleInputChange}
//           placeholder="Phone"
//           className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           disabled={loading}
//         />

//         {/* Photo Upload */}
//         <input
//           type="file"
//           name="photo"
//           accept="image/*"
//           onChange={handleInputChange}
//           className="w-full mb-6 px-3 py-2 border rounded-lg file:rounded-full file:bg-blue-50 file:text-blue-700"
//           disabled={loading}
//         />

//         {/* Register Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 mb-4 rounded-lg font-semibold ${
//             loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-blue-700 text-white"
//           }`}
//         >
//           {loading ? "Registering..." : "Create Account"}
//         </button>

//         {/* OR Divider */}
//         <div className="flex items-center my-4">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-4 text-gray-500 text-sm font-medium">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Register */}
//         <button
//           type="button"
//           onClick={handleGoogleRegister}
//           disabled={loading}
//           className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <FcGoogle size={20} />
//           <span>Continue with Google</span>
//         </button>

//         {/* Login Link */}
//         <p className="mt-6 text-center text-gray-600">
//           Already have an account?{" "}
//           <Link
//             href="/login"
//             className="text-blue-600 font-semibold hover:underline"
//           >
//             Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    photo: null as File | null,
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "photo" && files) {
      setFormData((prev) => ({
        ...prev,
        photo: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submitFormData = new FormData();
      submitFormData.append("name", formData.name);
      submitFormData.append("email", formData.email);
      submitFormData.append("password", formData.password);
      submitFormData.append("phone", formData.phone);
      if (formData.photo) submitFormData.append("photo", formData.photo);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: submitFormData,
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ After registration, automatically sign in with NextAuth
        const signInResult = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (signInResult?.error) {
          toast.error("Registration successful but login failed. Please login manually.");
        } else {
          toast.success("Registration successful! Logging you in...");
          
          // ✅ Save user to localStorage
          localStorage.setItem("user", JSON.stringify(data.user));
          
          // ✅ Reset form
          setFormData({ name: "", email: "", password: "", phone: "", photo: null });
          const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
          if (fileInput) fileInput.value = "";

          // ✅ Redirect after success
          setTimeout(() => router.push("/"), 1500);
        }
      } else {
        toast.error(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Google Sign-Up error:", error);
      toast.error("Google Sign-Up failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
      <ToastContainer position="top-right" autoClose={5000} />

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create Account ✨
          </h1>
          <p className="text-gray-500">Join BuyFlow and start shopping smarter!</p>
        </div>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
          disabled={loading}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
          disabled={loading}
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
          disabled={loading}
          minLength={6}
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          disabled={loading}
        />

        {/* Photo Upload */}
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleInputChange}
          className="w-full mb-6 px-3 py-2 border rounded-lg file:rounded-full file:bg-blue-50 file:text-blue-700"
          disabled={loading}
        />

        {/* Register Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 mb-4 rounded-lg font-semibold ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {loading ? "Registering..." : "Create Account"}
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm font-medium">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Register */}
        <button
          type="button"
          onClick={handleGoogleRegister}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FcGoogle size={20} />
          <span>Continue with Google</span>
        </button>

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
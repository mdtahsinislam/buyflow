// // export default function CancelPage() {
// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-red-50">
// //       <h1 className="text-3xl font-bold text-red-700">
// //         ❌ Payment Cancelled! Try again later.
// //       </h1>
// //     </div>
// //   );
// // }


// export default function CancelPage() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-bold mb-4">Payment Cancelled</h1>
//       <p className="text-lg">Your payment was not completed. Try again.</p>
//     </div>
//   );
// }


// app/cancel/page.tsx

//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\cancel\page.tsx
"use client";

import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        <div className="text-red-500 text-6xl mb-4">✕</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">
          Your payment was cancelled. No charges were made to your account.
        </p>
        <div className="space-y-3">
          <Link
            href="/products"
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Back to Products
          </Link>
          <Link
            href="/"
            className="block w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
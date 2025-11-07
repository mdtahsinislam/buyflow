// // export default function SuccessPage() {
// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-green-50">
// //       <h1 className="text-3xl font-bold text-green-700">
// //         ✅ Payment Successful! Thank you for your purchase.
// //       </h1>
// //     </div>
// //   );
// // }

// export default function SuccessPage() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
//       <p className="text-lg">Thank you for your purchase.</p>
//     </div>
//   );
// }


// app/success/page.tsx
//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\success\page.tsx
"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push('/');
    }
  }, [session, router]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your payment has been processed successfully.
        </p>
        <div className="space-y-3">
          <Link
            href="/product"
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Continue Shopping
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
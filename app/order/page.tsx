// import React from 'react'

// const page = () => {
//   return (
//     <div>page order</div>
//   )
// }

// export default page


// "use client";

// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// interface Order {
//   _id: string;
//   productId: number;
//   productName: string;
//   amount: number;
//   currency: string;
//   status: string;
//   createdAt: string;
// }

// export default function OrderPage() {
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (status === "loading") return;
//     if (!session?.user) {
//       router.push("/login");
//       return;
//     }

//     const fetchOrders = async () => {
//       try {
//         const res = await fetch("/api/orders");
//         const data = await res.json();
//         setOrders(data.orders || []);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [session, status, router]);

//   if (loading) return <div className="min-h-screen flex justify-center items-center">Loading...</div>;

//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>
//       {orders.length === 0 ? (
//         <p className="text-center text-gray-600">You have no orders yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {orders.map((order) => (
//             <div key={order._id} className="bg-white p-4 rounded shadow">
//               <h2 className="font-semibold text-lg">{order.productName}</h2>
//               <p>Amount: ${order.amount / 100}</p>
//               <p>Currency: {order.currency.toUpperCase()}</p>
//               <p>Status: {order.status}</p>
//               <p className="text-gray-500 text-sm">
//                 Ordered at: {new Date(order.createdAt).toLocaleString()}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Order {
  _id: string;
  productName: string;
  amount: number;
  currency: string;
  status: string;
  createdAt: string;
}

export default function OrderPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;
    if (!session?.user) {
      router.push("/login");
      return;
    }

    fetchOrders();
  }, [session, status, router]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders");
      const data = await response.json();
      if (response.ok) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!session?.user) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Orders</h1>
        
        {orders.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-gray-600">No orders found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order._id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{order.productName}</h3>
                    <p className="text-gray-600 mt-2">
                      Amount: ${(order.amount / 100).toFixed(2)} {order.currency.toUpperCase()}
                    </p>
                    <p className="text-gray-600">
                      Order Date: {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
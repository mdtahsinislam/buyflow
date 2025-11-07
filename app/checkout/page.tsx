


// //C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\checkout\page.tsx
// export default function CheckoutPage(){
//     return <div>Chhhhhhhhh
//         <div className="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//     </div>
// }


// app/checkout/page.tsx

// //C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\checkout\page.tsx
// "use client";

// import { useEffect, useState } from 'react';
// import { useSession } from 'next-auth/react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { loadStripe } from '@stripe/stripe-js';
// import {
//   Elements,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// const products = [
//   { id: 1, name: "iphone17", price: 4500 },
//   { id: 2, name: "iphone16", price: 4000 },
//   { id: 3, name: "Headphone", price: 3500 },
//   { id: 4, name: "iphone15", price: 3000 },
//   { id: 5, name: "Product 45-2", price: 5000 },
// ];

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [name, setName] = useState('');
//   const searchParams = useSearchParams();
//   const productId = searchParams.get('product');
  
//   const selectedProduct = products.find(p => p.id === Number(productId)) || products[0];

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
    
//     if (!stripe || !elements) return;

//     setLoading(true);

//     try {
//       // Create payment intent
//       const response = await fetch('/api/checkout_sessions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           productId: selectedProduct.id,
//           productName: selectedProduct.name,
//           amount: selectedProduct.price,
//           currency: 'usd',
//         }),
//       });

//       const { clientSecret } = await response.json();

//       // Confirm payment
//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardNumberElement)!,
//           billing_details: {
//             name: name,
//           },
//         },
//       });

//       if (result.error) {
//         console.error(result.error.message);
//         alert('Payment failed!');
//       } else {
//         // Payment succeeded
//         window.location.href = '/success';
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Payment failed!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const cardElementOptions = {
//     style: {
//       base: {
//         fontSize: '16px',
//         color: '#424770',
//         '::placeholder': {
//           color: '#aab7c4',
//         },
//       },
//     },
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Checkout - {selectedProduct.name}</h2>
//       <p className="text-lg font-semibold mb-6">Total: ${(selectedProduct.price / 100).toFixed(2)}</p>
      
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-2">Name on Card</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-3 border border-gray-300 rounded-md"
//           placeholder="John Doe"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-2">Card Number</label>
//         <div className="p-3 border border-gray-300 rounded-md">
//           <CardNumberElement options={cardElementOptions} />
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block text-sm font-medium mb-2">Expiry Date</label>
//           <div className="p-3 border border-gray-300 rounded-md">
//             <CardExpiryElement options={cardElementOptions} />
//           </div>
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-2">CVC</label>
//           <div className="p-3 border border-gray-300 rounded-md">
//             <CardCvcElement options={cardElementOptions} />
//           </div>
//         </div>
//       </div>

//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
//       >
//         {loading ? 'Processing...' : `Pay $${(selectedProduct.price / 100).toFixed(2)}`}
//       </button>
//     </form>
//   );
// };

// export default function CheckoutPage() {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (status === 'loading') return;
    
//     if (!session?.user) {
//       router.push('/login');
//     }
//   }, [session, status, router]);

//   if (status === 'loading') {
//     return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
//   }

//   if (!session?.user) {
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-5">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-8">Complete Your Purchase</h1>
//         <Elements stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       </div>
//     </div>
//   );
// }

//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\checkout\page.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// const products = [
//   { id: 1, name: "iPhone17", price: 4500 },
//   { id: 2, name: "iPhone16", price: 4000 },
//   { id: 3, name: "Headphone", price: 3500 },
// ];

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [name, setName] = useState("");
//   const searchParams = useSearchParams();
//   const productId = searchParams.get("product");
//   const selectedProduct =
//     products.find((p) => p.id === Number(productId)) || products[0];

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     if (!stripe || !elements) return;

//     setLoading(true);
//     try {
//       const res = await fetch("/api/checkout_sessions", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           productId: selectedProduct.id,
//           amount: selectedProduct.price,
//           currency: "usd",
//           name,
//         }),
//       });

//       const { clientSecret } = await res.json();

//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardNumberElement)!,
//           billing_details: { name },
//         },
//       });

//       if (result.error) {
//         alert(result.error.message);
//       } else {
//         window.location.href = "/success";
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const cardElementOptions = { style: { base: { fontSize: "16px" } } };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Checkout - {selectedProduct.name}</h2>
//       <p className="text-lg font-semibold mb-6">Total: ${(selectedProduct.price / 100).toFixed(2)}</p>

//       <input
//         type="text"
//         placeholder="Name on Card"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//         className="w-full p-3 border mb-4 rounded"
//       />

//       <div className="mb-4 p-3 border rounded"><CardNumberElement options={cardElementOptions} /></div>
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div className="p-3 border rounded"><CardExpiryElement options={cardElementOptions} /></div>
//         <div className="p-3 border rounded"><CardCvcElement options={cardElementOptions} /></div>
//       </div>

//       <button type="submit" disabled={!stripe || loading} className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400">
//         {loading ? "Processing..." : `Pay $${(selectedProduct.price / 100).toFixed(2)}`}
//       </button>
//     </form>
//   );
// };

// export default function CheckoutPage() {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (status === "loading") return;
//     if (!session?.user) router.push("/login");
//   }, [session, status, router]);

//   if (status === "loading") return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
//   if (!session?.user) return null;

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-5">
//       <Elements stripe={stripePromise}>
//         <CheckoutForm />
//       </Elements>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// const products = [
//   { id: 1, name: "iPhone17", price: 4500 },
//   { id: 2, name: "iPhone16", price: 4000 },
//   { id: 3, name: "Headphone", price: 3500 },
// ];

 const products = [
    { id: 1, image: "/images/trand4.png", name: "iphone17", price: "4500" },
    { id: 2, image: "/images/trand3.png", name: "iphone16", price: "4000" },
    { id: 3, image: "/images/trand2.png", name: "Headphone", price: "3500" },
    { id: 4, image: "/images/trand1.png", name: "iphone15", price: "3000" },
    { id: 5, image: "/images/p45-2.jpg", name: "Product 45-2", price: "5000" },
    { id: 6, image: "/images/p46-1.jpg", name: "Product 46-1", price: "5500" },
    { id: 7, image: "/images/wrist-watches.jpg", name: "Wrist Watch", price: "6000" },
    { id: 8, image: "/images/t-shirts.jpg", name: "T-Shirt", price: "2500" },
    { id: 9, image: "/images/shirt.jpg", name: "Shirt", price: "2800" },
    { id: 10, image: "/images/p46-2.jpg", name: "Product 46-2", price: "5000" },
    { id: 11, image: "/images/p41-1.jpg", name: "Product 41-1", price: "4500" },
    { id: 12, image: "/images/p36-1.jpg", name: "Product 36-1", price: "3800" },
    { id: 13, image: "/images/p42-1.jpg", name: "Product 42-1", price: "4800" },
    { id: 14, image: "/images/p42-2.jpg", name: "Product 42-2", price: "5000" },
    { id: 15, image: "/images/p43-2.jpg", name: "Product 43-2", price: "5200" },
    { id: 16, image: "/images/p44-2.jpg", name: "Product 44-2", price: "5300" },
    { id: 17, image: "/images/p35-1.jpg", name: "Product 35-1", price: "3500" },
    { id: 18, image: "/images/p34-1.jpg", name: "Product 34-1", price: "3200" },
    { id: 19, image: "/images/p33-1.jpg", name: "Product 33-1", price: "3000" },
    { id: 20, image: "/images/p32-1.jpg", name: "Product 32-1", price: "2800" },
    { id: 21, image: "/images/p31-2.jpg", name: "Product 31-2", price: "2700" },
    { id: 22, image: "/images/p31-1.jpg", name: "Product 31-1", price: "2600" },
    { id: 23, image: "/images/p26-2.jpg", name: "Product 26-2", price: "2200" },
    { id: 24, image: "/images/p16-1.jpg", name: "Product 16-1", price: "1800" },
    { id: 25, image: "/images/p15-1.jpg", name: "Product 15-1", price: "1500" },
    { id: 26, image: "/images/p14-2.jpg", name: "Product 14-2", price: "1400" },
    { id: 27, image: "/images/p13-2.jpg", name: "Product 13-2", price: "1300" },
    { id: 28, image: "/images/p13-1.jpg", name: "Product 13-1", price: "1200" },
    { id: 29, image: "/images/p12-2.jpg", name: "Product 12-2", price: "1100" },
    { id: 30, image: "/images/headphone.jpg", name: "Headphone", price: "6000" },
  ];

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = searchParams.get("product");
  const selectedProduct = products.find((p) => p.id === Number(productId)) || products[0];

  // Function to create order in MongoDB
  const createOrder = async (paymentIntent: any) => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: session?.user?.email,
          productId: selectedProduct.id,
          productName: selectedProduct.name,
          amount: selectedProduct.price,
          currency: "usd",
          status: "completed",
          paymentIntentId: paymentIntent.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements || !session?.user?.email) return;

    setLoading(true);
    try {
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: selectedProduct.id,
          productName: selectedProduct.name,
          amount: selectedProduct.price,
          currency: "usd",
        }),
      });

      const { clientSecret } = await res.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement)!,
          billing_details: { name },
        },
      });

      if (result.error) {
        alert(result.error.message);
      } else {
        // Payment successful - create order in MongoDB
        await createOrder(result.paymentIntent);
        // Redirect to success page
        router.push("/success");
      }
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  const cardElementOptions = { style: { base: { fontSize: "16px" } } };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Checkout - {selectedProduct.name}</h2>
    
<p className="text-lg font-semibold mb-6">
  Total: ${((Number(selectedProduct?.price) || 0) / 100).toFixed(2)}
</p>

      <input
        type="text"
        placeholder="Name on Card"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-3 border mb-4 rounded"
      />

      <div className="mb-4 p-3 border rounded"><CardNumberElement options={cardElementOptions} /></div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 border rounded"><CardExpiryElement options={cardElementOptions} /></div>
        <div className="p-3 border rounded"><CardCvcElement options={cardElementOptions} /></div>
      </div>

      <button type="submit" disabled={!stripe || loading} className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400">
        {/* {loading ? "Processing..." : `Pay $${(selectedProduct.price / 100).toFixed(2)}`} */}

        {loading
  ? "Processing..."
  : `Pay $${((Number(selectedProduct?.price) || 0) / 100).toFixed(2)}`}

      </button>
    </form>
  );
};

export default function CheckoutPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session?.user) router.push("/login");
  }, [session, status, router]);

  if (status === "loading") return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!session?.user) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
// // import Stripe from "stripe";
// // import { NextRequest, NextResponse } from "next/server";

// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
// //   apiVersion: "2022-11-15",
// // });

// // export async function POST(req: NextRequest) {
// //   try {
// //     const { product } = await req.json(); // get product from request

// //     const session = await stripe.checkout.sessions.create({
// //       payment_method_types: ["card"],
// //       line_items: [
// //         {
// //           price_data: {
// //             currency: "usd",
// //             product_data: {
// //               name: product.name,
// //             },
// //             unit_amount: parseInt(product.price.replace("$", "")) * 100, // convert to cents
// //           },
// //           quantity: 1,
// //         },
// //       ],
// //       mode: "payment",
// //       success_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
// //       cancel_url: `${req.headers.get("origin")}/checkout`,
// //       customer_email: product.userEmail,
// //     });

// //     return NextResponse.json({ url: session.url });
// //   } catch (err) {
// //     console.log(err);
// //     return NextResponse.json({ error: "Stripe checkout failed" }, { status: 500 });
// //   }
// // }
// // pages/api/checkout_sessions.ts

// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2023-08-16",
// });

// const products = [
//   { id: 1, name: "iPhone17", price: 45 },
//   { id: 2, name: "iPhone16", price: 40 },
//   { id: 3, name: "Headphone", price: 35 },
// ];

// export async function POST(req: Request) {
//   const { productId } = await req.json();
//   const product = products.find((p) => p.id === productId);

//   if (!product) {
//     return NextResponse.json({ error: "Product not found" }, { status: 404 });
//   }

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: [
//       {
//         price_data: {
//           currency: "usd",
//           product_data: { name: product.name },
//           unit_amount: product.price * 100,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
//     cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
//   });

//   return NextResponse.json({ url: session.url });
// }


// app/api/checkout_sessions/route.ts
//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\api\checkout_sessions\route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2023-10-16',
// });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
});

export async function POST(request: NextRequest) {
  try {
    const { productId, productName, amount, currency } = await request.json();

    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        productId: productId.toString(),
        productName: productName,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}



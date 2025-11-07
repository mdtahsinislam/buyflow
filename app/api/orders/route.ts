
//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\api\orders\route.ts
// import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]/route";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";

// export async function GET() {
//   try {
//     const session = await getServerSession(authOptions);

//     if (!session?.user?.email) {
//       return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
//     }

//     await connectDB();
//     const orders = await Order.find({ userEmail: session.user.email }).sort({ createdAt: -1 });

//     return NextResponse.json({ orders });
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return NextResponse.json({ message: "Server error" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    const { userEmail, productId, productName, amount, currency, status, paymentIntentId } = await request.json();

    await connectDB();
    
    const order = new Order({
      userEmail,
      productId,
      productName,
      amount,
      currency,
      status,
      paymentIntentId,
    });

    await order.save();

    return NextResponse.json({ 
      message: "Order created successfully", 
      order 
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

// Keep your existing GET method
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    await connectDB();
    const orders = await Order.find({ userEmail: session.user.email }).sort({ createdAt: -1 });

    return NextResponse.json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
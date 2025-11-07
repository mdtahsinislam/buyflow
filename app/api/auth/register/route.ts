
//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\api\auth\register\route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const phone = formData.get("phone") as string;
    const photo = formData.get("photo") as File;

    // Upload image to imgbb
    const imageData = new FormData();
    imageData.append("image", photo);
    const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMAGEBB_API}`, {
      method: "POST",
      body: imageData,
    });
    const imgResult = await res.json();
    const imageUrl = imgResult.data.url;

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      image: imageUrl,
    });

    return NextResponse.json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Registration failed" }, { status: 500 });
  }
}

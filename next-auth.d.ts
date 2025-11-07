// next-auth.d.ts

import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * সেশন অবজেক্টের জন্য ইউজার টাইপ এক্সটেন্ড করা হয়েছে।
   * NextAuth Session এর user এ 'id' প্রপার্টি যোগ করা হলো।
   */
  interface Session {
    user: {
      id?: string | null; // JWT token.sub এখানে স্টোর হবে
    } & DefaultSession["user"];
  }
}

// এই এক্সটেনশনটি নিশ্চিত করে যে JWT এও আপনার কাস্টম প্রপার্টি আছে
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /**
   * JWT (JSON Web Token) টাইপ এক্সটেন্ড করা হয়েছে।
   */
  interface JWT {
    picture?: string | null; // আপনি token.picture ব্যবহার করছেন
  }
}
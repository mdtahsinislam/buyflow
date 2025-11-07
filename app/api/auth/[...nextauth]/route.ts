
// //C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\api\auth\[...nextauth]\route.ts
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/User";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user }) {
//       await connectDB();
//       const existingUser = await User.findOne({ email: user.email });
//       if (!existingUser) {
//         await User.create({
//           name: user.name,
//           email: user.email,
//           image: user.image,
//           provider: "google",
//         });
//       }
//       return true;
//     },
//     async session({ session }) {
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };


//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\api\auth\[...nextauth]\route.ts

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcryptjs";
// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/User";

// const handler = NextAuth({
//   providers: [
//     // Email/Password Login
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         await connectDB();
//         const user = await User.findOne({ email: credentials?.email });
//         if (!user) throw new Error("User not found");
//         const isValid = await bcrypt.compare(credentials!.password, user.password);
//         if (!isValid) throw new Error("Invalid credentials");
//         return { id: user._id.toString(), name: user.name, email: user.email };
//       },
//     }),
//     // Google Login
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account }) {
//       if (account?.provider === "google") {
//         await connectDB();
//         const existingUser = await User.findOne({ email: user.email });
//         if (!existingUser) {
//           await User.create({
//             name: user.name,
//             email: user.email,
//             image: user.image,
//             provider: "google",
//           });
//         }
//       }
//       return true;
//     },
//     async session({ session, token }) {
//       session.user.id = token.sub;
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   session: { strategy: "jwt" },
// });

// export { handler as GET, handler as POST };


//C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\app\api\auth\[...nextauth]\route.ts

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcryptjs";
// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/User";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         await connectDB();
//         const user = await User.findOne({ email: credentials?.email });
//         if (!user) throw new Error("User not found");
//         const isValid = await bcrypt.compare(credentials!.password, user.password);
//         if (!isValid) throw new Error("Invalid credentials");
//         return { 
//           id: user._id.toString(), 
//           name: user.name, 
//           email: user.email,
//           image: user.image 
//         };
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account }) {
//       if (account?.provider === "google") {
//         await connectDB();
//         const existingUser = await User.findOne({ email: user.email });
//         if (!existingUser) {
//           await User.create({
//             name: user.name,
//             email: user.email,
//             image: user.image,
//             provider: "google",
//           });
//         }
//       }
//       return true;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.sub;
//         session.user.image = token.picture;
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.picture = user.image;
//       }
//       return token;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   session: { strategy: "jwt" },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


// import NextAuth, { 
//     type Account, 
//     type User as NextAuthUser, // NextAuth এর User Type
//     type Session, 
//     type JWT 
// } from "next-auth"; // <-- এই লাইনটি পরিবর্তন করা হয়েছে
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcryptjs";
// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/User"; // আপনার Mongoose মডেল

// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "text" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 await connectDB();
//                 const user = await User.findOne({ email: credentials?.email });
//                 if (!user) throw new Error("User not found");
//                 const isValid = await bcrypt.compare(credentials!.password, user.password);
//                 if (!isValid) throw new Error("Invalid credentials");
//                 return { 
//                     id: user._id.toString(), 
//                     name: user.name, 
//                     email: user.email,
//                     image: user.image 
//                 };
//             },
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID!,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//         }),
//     ],
//     callbacks: {
//         // --- FIX 1: signIn Callback (Line 137 Fix) ---
//         async signIn({ user, account }: { user: NextAuthUser | null, account: Account | null }) {
//             if (account?.provider === "google") {
//                 await connectDB();
//                 // null check ব্যবহার করা হয়েছে
//                 const existingUser = await User.findOne({ email: user?.email }); 
//                 if (!existingUser && user?.name && user?.email) {
//                     await User.create({
//                         name: user.name,
//                         email: user.email,
//                         image: user.image,
//                         provider: "google",
//                     });
//                 }
//             }
//             return true;
//         },
//         // --- FIX 2: session Callback ---
//         async session({ session, token }: { session: Session, token: JWT }) {
//             if (token) {
//                 // Ensure session.user exists and has the necessary properties
//                 if (!session.user) {
//                     session.user = {} as any; 
//                 }
//                 session.user.id = token.sub;
//                 session.user.image = token.picture;
//             }
//             return session;
//         },
//         // --- FIX 3: jwt Callback ---
//         async jwt({ token, user }: { token: JWT, user: NextAuthUser | null }) {
//             if (user) {
//                 token.picture = user.image;
//             }
//             return token;
//         },
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     session: { strategy: "jwt" },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


// import NextAuth, { type Account, type Session, type User as NextAuthUser } from "next-auth";
// // JWT টাইপটি আলাদাভাবে import করা হলো
// import { JWT } from "next-auth/jwt"; 
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcryptjs";
// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/User"; // আপনার Mongoose মডেল

// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "text" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 await connectDB();
//                 const user = await User.findOne({ email: credentials?.email });
//                 if (!user) throw new Error("User not found");
//                 const isValid = await bcrypt.compare(credentials!.password, user.password);
//                 if (!isValid) throw new Error("Invalid credentials");
//                 return { 
//                     id: user._id.toString(), 
//                     name: user.name, 
//                     email: user.email,
//                     image: user.image 
//                 };
//             },
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID!,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//         }),
//     ],
//     callbacks: {
//         // user এবং account টাইপ যোগ করা হয়েছে (NextAuthUser, Account)
//         async signIn({ user, account }: { user: NextAuthUser | null, account: Account | null }) {
//             if (account?.provider === "google") {
//                 await connectDB();
//                 const existingUser = await User.findOne({ email: user?.email }); 
//                 if (!existingUser && user?.name && user?.email) {
//                     await User.create({
//                         name: user.name,
//                         email: user.email,
//                         image: user.image,
//                         provider: "google",
//                     });
//                 }
//             }
//             return true;
//         },
//         // session এবং token টাইপ যোগ করা হয়েছে (Session, JWT)
//         async session({ session, token }: { session: Session, token: JWT }) {
//             if (token) {
//                 // Type safety for session.user
//                 if (!session.user) {
//                     session.user = {} as any; 
//                 }
//                 session.user.id = token.sub;
//                 session.user.image = token.picture;
//             }
//             return session;
//         },
//         // token এবং user টাইপ যোগ করা হয়েছে (JWT, NextAuthUser)
//         async jwt({ token, user }: { token: JWT, user: NextAuthUser | null }) {
//             if (user) {
//                 token.picture = user.image;
//             }
//             return token;
//         },
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     session: { strategy: "jwt" },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

// import NextAuth, { type Account, type Session, type User as NextAuthUser } from "next-auth";
// // JWT টাইপটি আলাদাভাবে import করা হলো
// import { JWT } from "next-auth/jwt"; 
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcryptjs";
// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/User"; // আপনার Mongoose মডেল

// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "text" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 await connectDB();
//                 const user = await User.findOne({ email: credentials?.email });
//                 if (!user) throw new Error("User not found");
//                 const isValid = await bcrypt.compare(credentials!.password, user.password);
//                 if (!isValid) throw new Error("Invalid credentials");
//                 return { 
//                     id: user._id.toString(), 
//                     name: user.name, 
//                     email: user.email,
//                     image: user.image 
//                 };
//             },
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID!,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//         }),
//     ],
//     callbacks: {
//         async signIn({ user, account }: { user: NextAuthUser | null, account: Account | null }) {
//             if (account?.provider === "google") {
//                 await connectDB();
//                 const existingUser = await User.findOne({ email: user?.email }); 
//                 if (!existingUser && user?.name && user?.email) {
//                     await User.create({
//                         name: user.name,
//                         email: user.email,
//                         image: user.image,
//                         provider: "google",
//                     });
//                 }
//             }
//             return true;
//         },
//         // FIX: session.user undefined চেক করার পদ্ধতি পরিবর্তন
//         async session({ session, token }: { session: Session, token: JWT }) {
//             if (token) {
//                 // টোকেনে user আইডি এবং ইমেজ আছে, তাই session.user কে নিশ্চিত করা হচ্ছে
//                 if (session.user) { // user প্রপার্টি আছে কিনা চেক করা হলো
//                    // user প্রপার্টি আছে, তাই এটিকে নিশ্চিতভাবে ব্যবহার করা হলো (No 'as any' needed)
//                    session.user.id = token.sub;
//                    session.user.image = token.picture;
//                 } else {
//                     // যদি সেশন-এ user প্রপার্টি না থাকে (খুব বিরল),
//                     // তবে এটি JWT থেকে তৈরি করা হচ্ছে।
//                     session.user = { 
//                         id: token.sub,
//                         image: token.picture,
//                         name: token.name,
//                         email: token.email
//                     } as any; // Type mismatch এড়ানোর জন্য 'as any' ব্যবহার করা হলো
//                 }
//             }
//             return session;
//         },
//         async jwt({ token, user }: { token: JWT, user: NextAuthUser | null }) {
//             if (user) {
//                 token.picture = user.image;
//             }
//             return token;
//         },
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     session: { strategy: "jwt" },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


import NextAuth, { type Account, type Session, type User as NextAuthUser } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ email: credentials?.email });
        if (!user) throw new Error("User not found");
        const isValid = await bcrypt.compare(credentials!.password, user.password);
        if (!isValid) throw new Error("Invalid credentials");
        return { 
          id: user._id.toString(), 
          name: user.name, 
          email: user.email,
          image: user.image 
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: NextAuthUser | null; account: Account | null }) {
      if (account?.provider === "google") {
        await connectDB();
        const existingUser = await User.findOne({ email: user?.email }); 
        if (!existingUser && user?.name && user?.email) {
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            provider: "google",
          });
        }
      }
      return true;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.sub;
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user: NextAuthUser | null }) {
      if (user) {
        token.picture = user.image;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  // 🔧 Fix: TypeScript literal type for session strategy
  session: { strategy: "jwt" as const },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

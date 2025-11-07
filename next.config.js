// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['i.ibb.co'], // ✅ allow external host for images
//   },
// }

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // ✅ Google profile pictures
      },
      {
        protocol: "https",
        hostname: "i.ibb.co", // ✅ for your imgbb uploads
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // optional, if you use Cloudinary later
      },
    ],
  },
};

module.exports = nextConfig;

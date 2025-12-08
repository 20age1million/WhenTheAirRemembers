/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit static assets to /out for nginx to serve
  output: "export",
  // Needed for static export with Next Image
  images: { unoptimized: true },
  // If you need redirects/rewrites for static export, add them here.
};

module.exports = nextConfig;

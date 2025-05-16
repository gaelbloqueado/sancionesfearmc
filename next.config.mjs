/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sanciones.fearmc.xyz'
      }
    ]
  }
};

export default nextConfig;

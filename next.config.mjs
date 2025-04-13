/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/create-preview',
        destination: '/api/create-preview',
      },
    ];
  },
};

export default nextConfig;

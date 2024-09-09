/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['d3kouwd62bvdx0.cloudfront.net', 'best5997.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3kouwd62bvdx0.cloudfront.net',
        port: '',
        pathname: '/**', // 모든 하위 경로 허용
      },
      {
        protocol: 'https',
        hostname: 'best5997.com',
        port: '',
        pathname: '/**', // 모든 하위 경로 허용
      },
    ],
  },
};

export default nextConfig;

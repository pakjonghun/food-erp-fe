/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3kouwd62bvdx0.cloudfront.net',
        port: '',
        pathname: '/**', // 모든 하위 경로 허용
      },
      {
        protocol: 'http',
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
      {
        protocol: 'http',
        hostname: 'best5997.com',
        port: '',
        pathname: '/**', // 모든 하위 경로 허용
      },
    ],
  },
};

export default nextConfig;

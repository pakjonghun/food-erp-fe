/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'best5997.com', // CloudFront 도메인 또는 외부 도메인
        port: '',
        pathname: '/**', // 모든 하위 경로 허용
      },
    ],
  },
};

export default nextConfig;

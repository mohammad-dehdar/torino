/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'torino-serve.vercel.app',
                port: '',
                pathname: '/static/images/**',
            },
        ],
    }
};

export default nextConfig;

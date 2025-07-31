/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            's3.ap-south-2.amazonaws.com',
            'svgrepo.com',
            // add more domains here if you use other sources
        ],
    },
};

export default nextConfig;

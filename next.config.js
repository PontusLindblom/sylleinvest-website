/** @type {import('next').NextConfig} */
const nextConfig = {
    // Build as a static website
    output: 'export',

    // Highlight potential problems in the application
    reactStrictMode: true,
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig

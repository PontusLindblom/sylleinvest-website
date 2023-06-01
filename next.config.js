/** @type {import('next').NextConfig} */
const nextConfig = {
    // Specify that we use the app-dir structure, not the page-dir structure
    experimental: {appDir: true},

    // Next.js image optimization doesn't work with "output: 'export'"
    images: {unoptimized: true},

    // Build as a static website
    output: 'export',

    // Highlight potential problems in the application
    reactStrictMode: true
}

module.exports = nextConfig
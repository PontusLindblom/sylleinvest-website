/** @type {import('next').NextConfig} */
const nextConfig = {
    // Specify that we use the app-dir structure, not the page-dir structure
    experimental: {appDir: true},

    // Build as a static website
    output: 'export',

    // Highlight potential problems in the application
    reactStrictMode: true
}

module.exports = nextConfig
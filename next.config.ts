const nextConfig = {
   devIndicators: false,
   
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Shared hosting (cPanel/CloudLinux) process limits — prevents spawn EAGAIN
  experimental: {
    workerThreads: false,
    cpus: 1,
    optimizePackageImports: ["lucide-react"],
  },
  // Avoid extra tsc child processes during build on low-NPROC hosts
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // This app serves pre-compressed WebP for large local images (hero,
    // founder photo). On shared cPanel hosting with `cpus: 1`, the live
    // /_next/image optimizer (sharp resize per request) becomes a
    // CPU-bound bottleneck that stalls page load. Skipping it and serving
    // the already-optimized static files directly is faster on this host.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/solutions/india-entry-clinic",
        destination: "/services/india-entry-support-foreign-industry",
        permanent: true,
      },
      {
        source: "/solutions/indian-msme-clinic",
        destination: "/services/indian-msme-troubleshooting",
        permanent: true,
      },
      {
        source: "/solutions/defence-aerospace-clinic",
        destination: "/services/defence-aerospace-clinic",
        permanent: true,
      },
      {
        source: "/solutions/support-clinic",
        destination: "/services/legal-company-secretary-ca-services",
        permanent: true,
      },
      {
        source: "/scorecard",
        destination: "/services/india-entry-support-foreign-industry/scorecard",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

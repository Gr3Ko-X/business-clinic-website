import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Shared hosting (cPanel/CloudLinux) process limits — prevents spawn EAGAIN
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  // Avoid extra tsc child processes during build on low-NPROC hosts
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
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

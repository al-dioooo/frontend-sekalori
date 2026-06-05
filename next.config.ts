import type { NextConfig } from "next";

function getArsanawaImageRemotePatterns(): NonNullable<
  NextConfig["images"]
>["remotePatterns"] {
  const baseUrl = process.env.ARSANAWA_ERP_API_BASE_URL?.trim();

  if (!baseUrl) {
    return [];
  }

  try {
    const url = new URL(baseUrl);
    const protocol = url.protocol.replace(":", "");

    if (protocol !== "http" && protocol !== "https") {
      return [];
    }

    return [
      {
        protocol,
        hostname: url.hostname,
        port: url.port,
        pathname: "/**",
      },
    ];
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: getArsanawaImageRemotePatterns(),
  },
};

export default nextConfig;

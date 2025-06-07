import type { NextConfig } from "next";

interface WatchOptions {
	poll: number;
	aggregateTimeout: number;
}

interface RemotePattern {
	protocol: "https" | "http" | undefined;
	hostname: string;
}

interface ImagesConfig {
	remotePatterns: RemotePattern[];
}

const nextConfig: NextConfig = {
	webpack: (config, { dev, isServer }) => {
		if (dev && !isServer) {
			config.watchOptions = {
				poll: 1000,
				aggregateTimeout: 300,
			};
		}
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.ctfassets.net",
			},
		],
	} as ImagesConfig,
};

export default nextConfig;

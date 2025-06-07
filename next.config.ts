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

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

interface WebpackDevMiddlewareConfig {
	watchOptions: WatchOptions;
}

const nextConfig: NextConfig = {
	webpackDevMiddleware: (config: WebpackDevMiddlewareConfig) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		} as WatchOptions;
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

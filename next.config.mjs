/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: ["@uniswap/widgets", "@dex-swap/widgets"],
	},
	webpack: (config) => {
		config.externals.push("pino-pretty", "lokijs", "encoding");
		config.resolve.fallback = {
			...config.resolve.fallback,
			fs: false,
			os: false,
			path: false,
		};
		return config;
	},
};

export default nextConfig;

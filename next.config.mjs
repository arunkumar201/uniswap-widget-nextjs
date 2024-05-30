/** @type {import('next').NextConfig} */
const nextConfig={
	experimental: {
		optimizePackageImports: [
			"@uniswap/widgets",
			"@dex-swap/widgets"
		],
	},
	swcMinify: true,
	webpack: (config) => {
		config.externals.push("pino-pretty", "lokijs", "encoding");
		config.resolve.fallback = {
			fs: false,
		};
		return config;
	},
};

export default nextConfig;

"use client";

import dynamic from "next/dynamic";
const UniswapWidget = dynamic(
	() => import("@/components/UniswapWidget").then((mod) => mod.UniswapWidget),
	{
		ssr: false,
		loading: () => <div>Loading Uniswap Widget...</div>,
	}
);

const SwapCard = dynamic(
	() => import("@/components/swap-card.tsx").then((mod) => mod.default),
	{
		ssr: false,
		loading: () => <div>Loading Swap Card...</div>,
	}
);

import Link from "next/link";
import React from "react";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 gap-6">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-6xl font-bold text-gray-900">
					Uniswap Widget {"@uniswap/widgets: 2.59.0 fork "}
				</h1>
				<p className="text-2xl text-gray-700 hover:underline">
					<Link
						href={"https://github.com/arunkumar201/uniswap-widget-nextjs"}
						target="_blank"
					>
						Github Repo - {"Nextjs 15"}
					</Link>
				</p>
			</div>
			<UniswapWidget />
			<h1>Old Uniswap Widget UI</h1>
			<SwapCard />
		</main>
	);
}

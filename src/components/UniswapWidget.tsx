'use client'

import { AiOutlineLoading3Quarters } from "react-icons/ai";


import "./widget.css"
// import { SwapWidgetSkeleton } from "@dex-swap/widgets"
import dynamic from "next/dynamic"
import { Suspense } from "react";
import { getRPC } from "@/lib/getRPC";
const SwapWidget = dynamic(async () => (await import("@dex-swap/widgets")).SwapWidget,{
	ssr: true,
	loading: () => <AiOutlineLoading3Quarters className="animate-spin"/>,
})
// The url of the default uniswap token list. This list will be passed to the Uniswap component
// and will appear by default in the token selector UI.
const TOKEN_LIST = 'https://ipfs.io/ipns/tokens.uniswap.org'

const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'

export function UniswapWidget() {
	if (typeof window !== "undefined") {
		// @ts-ignore
		window.Browser = {
			T: () => {
			}
		};
	}

	return (
		<main>
			<h1>Uniswap Swap Widget</h1>
				<SwapWidget
					jsonRpcUrlMap={{
						1: [getRPC(1)!]
					}}
					// Specifies the set of tokens that appear by default in the token selector list.
					tokenList={TOKEN_LIST}
					// Address of the token to be selected by default in the
					// input field (e.g. USDC) for each network chain ID.
					defaultInputTokenAddress="NATIVE"
					// Default amount for the input field in this case 1 ETH
					defaultInputAmount="1"
					// Address of the token to be selected by default in the input field (e.g. USDC)
					// for each network chain ID.
					defaultOutputTokenAddress={UNI}
				/>
		</main>
	)
}

"use client";
// import { SwapWidgetSkeleton } from '@uniswap/widgets'

import '@uniswap/widgets/fonts.css'
import "./widget.css"
import { getRPC } from '@/lib/getRPC';
import dynamic from 'next/dynamic';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SwapWidget = dynamic(async () => (await import("@uniswap/widgets")).SwapWidget,{
	ssr: true,
	loading: () => <AiOutlineLoading3Quarters className="animate-spin" />,
})
const TOKEN_LIST = 'https://ipfs.io/ipns/tokens.uniswap.org'

export default function SwapCard() {

	if (typeof window !== "undefined") {
		// @ts-ignore
		window.Browser = {
			T: () => {
			}
		};
	}

	return (
		<SwapWidget
			tokenList={TOKEN_LIST}
			jsonRpcUrlMap={{
				1: [getRPC(1)!]
			}
			} />
	);
}
